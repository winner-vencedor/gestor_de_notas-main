import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function StatCard({
  title,
  description,
  value,
  icon,
}: {
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-200 transition relative bg-white">
      <CardHeader>
        <CardTitle className="text-gray-700">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="min-w-52 -mt-5">
          <div className="flex items-baseline gap-1.5">
            <h1 className="text-3xl font-bold text-orange-600">{value}</h1>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
