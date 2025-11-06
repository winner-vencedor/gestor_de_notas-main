import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

export function PricingCard({
  title,
  price,
  desc,
  features,
  highlighted,
}: {
  title: string;
  price: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`p-8 rounded-2xl border shadow-sm text-left ${
        highlighted
          ? "bg-white border-orange-400 shadow-md scale-105"
          : "bg-white border-orange-200"
      } transition hover:shadow-lg`}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <p className="text-3xl font-bold text-orange-600 mb-6">{price}</p>
      <ul className="space-y-2 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-700">
            <CheckCircle className="text-orange-600 size-4" />
            <span className="text-sm" >{f}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${highlighted ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-orange-100 hover:bg-orange-200 text-orange-700"}`}
      >
        Escolher plano
      </Button>
    </div>
  );
}
