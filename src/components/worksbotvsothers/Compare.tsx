export default function Comparison() {
  const features = [
    {
      feature: "India-focused technology talent",
      worksbot: "Yes",
      others: "Limited",
    },
    {
      feature: "Recruitment + EOR + Payroll combined",
      worksbot: "Yes",
      others: "Often separate services",
    },
    {
      feature: "Cost-effective hiring model",
      worksbot: "Yes",
      others: "Higher pricing",
    },
    {
      feature: "Dedicated recruitment support",
      worksbot: "Yes",
      others: "Mostly automated platforms",
    },
    {
      feature: "Startup-friendly approach",
      worksbot: "Yes",
      others: "Enterprise focused",
    },
    {
      feature: "Local India compliance expertise",
      worksbot: "Yes",
      others: "Generic global coverage",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Worksbot Talent vs Others
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-center">Worksbot Talent</th>
                <th className="p-4 text-center">Typical Platforms</th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">{item.feature}</td>
                  <td className="p-4 text-center text-green-600 font-medium">
                    {item.worksbot}
                  </td>
                  <td className="p-4 text-center text-gray-600">
                    {item.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">{item.feature}</h3>
              <div className="flex justify-between text-sm">
                <span className="text-green-600 font-medium">
                  Worksbot: {item.worksbot}
                </span>
                <span className="text-gray-600">
                  Others: {item.others}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
          Worksbot Talent helps companies hire and manage technology teams faster
          while simplifying recruitment, payroll, and compliance.
        </p>

      </div>
    </section>
  );
}