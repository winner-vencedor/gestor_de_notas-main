import { Loader } from "@/components/loader";
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-orange-800/20">
      <Loader />
      <h1 className="flex -mt-20 font-bold text-orange-600 text-xl">
        Carregando...
      </h1>
    </div>
  );
}
