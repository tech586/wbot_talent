
"use client";
import { useEffect, useRef } from "react";

export default function DotDistortionBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const gap = 12;
    const dots: any[] = [];

    for (let x = 0; x < canvas.width; x += gap) {
      for (let y = 0; y < canvas.height; y += gap) {
        dots.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
          size: 0.8,
          baseSize: 0.8,
          baseOpacity: 0.3 + Math.random() * 0.7,
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

        const radius = 120;
        let opacity = d.baseOpacity;

        if (dist < radius) {
          // smooth falloff (shape)
          const force = (1 - dist / radius) ** 2;

          // physics push
          d.vx += (dx / dist) * force *2;
          d.vy += (dy / dist) * force *2;

          //  zoom effect
          d.size = d.baseSize + force * 3;
          
          // Dots near cursor get reduced opacity
          opacity = d.baseOpacity * (0.5 + force * 0.5);
        } else {
          //  shrink smoothly
          d.size += (d.baseSize - d.size) * 0.1;
        }

        //  spring back
        d.vx += (d.ox - d.x) * 0.05;
        d.vy += (d.oy - d.y) * 0.05;

        //  friction
        d.vx *= 0.8;
        d.vy *= 0.8;

        d.x += d.vx;
        d.y += d.vy;

        //  draw dot with opacity
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 10);
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}