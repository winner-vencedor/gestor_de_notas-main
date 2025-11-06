export function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md border-orange-200 transition text-center">
      <div className="flex justify-center">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

