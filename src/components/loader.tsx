export function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex w-32 h-32 justify-between items-center">
        <div className="relative flex items-start justify-center w-1/5 h-full origin-top animate-[swing_1.2s_linear_infinite]">
          <div className="w-5 h-5 bg-orange-500 rounded-full" />
        </div>
        <div className="relative flex items-start justify-center w-1/5 h-full">
          <div className="w-5 h-5 bg-orange-500 rounded-full" />
        </div>
        <div className="relative flex items-start justify-center w-1/5 h-full">
          <div className="w-5 h-5 bg-orange-500 rounded-full" />
        </div>
        <div className="relative flex items-start justify-center w-1/5 h-full origin-top animate-[swing2_1.2s_linear_infinite]">
          <div className="w-5 h-5 bg-orange-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}
