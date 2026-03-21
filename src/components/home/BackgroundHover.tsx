
"use client";
import { useEffect, useRef } from "react";

export default function DotDistortionBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    function resize() {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    }

    resize();
    window.addEventListener("resize", resize);

    const gap = 12;
    const dots: any[] = [];
    const diagonalStripeWidth = 40; // Width of each diagonal stripe

    for (let x = 0; x < canvas.width; x += gap) {
      for (let y = 0; y < canvas.height; y += gap) {
        // Create multiple diagonal stripes with varying opacity
        const diagonalPos = (x + y) % diagonalStripeWidth;
        const stripeIndex = Math.floor((x + y) / diagonalStripeWidth) % 4;
        
        // Different opacity levels for each diagonal stripe
        const opacityLevels = [0.95, 0.65, 0.35, 0.15];
        const baseOpacity = opacityLevels[stripeIndex];
        
        dots.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
          size: 0.8,
          baseSize: 0.8,
          baseOpacity: baseOpacity,
        });
      }
    }

    let mouse = { x: -9999, y: 9999 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function animate() {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dots.forEach((d) => {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        const radius = 100;
        let opacity = d.baseOpacity;

        if (dist < radius) {
          // smooth falloff for chewing gum effect
          const force = Math.pow(1 - dist / radius, 2);

          // PULL towards cursor (attraction) - like chewing gum
          d.vx += (dx / dist ) * 0.5;
          d.vy += (dy / dist) * 0.5;
          
          // increase opacity when pulled
          opacity = d.baseOpacity + force * 0.3;
        } else {
          // return to original opacity when cursor leaves
          opacity = d.baseOpacity;
        }

        // gentle spring back to original position
        d.vx += (d.ox - d.x) * 0.06;
        d.vy += (d.oy - d.y) * 0.06;

        // smooth friction for elastic motion
        d.vx *= 0.88;
        d.vy *= 0.88;

        d.x += d.vx;
        d.y += d.vy;

        // draw dot
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.baseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />;
}