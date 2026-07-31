import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Pagination() {
  return (
    <div className="flex justify-center gap-2">
      <button className="flex items-center justify-between gap-2 py-2 px-3 cursor-pointer text-base text-slate30 hover:text-slate100 transition-all">
        {" "}
        <FaArrowLeft className="w-4 h-4" />
        Previous
      </button>
      <div className="flex items-center gap-2">
        {" "}
        {["1", "2", "3", "...", "67", "68"].map((i) => (
          <button
            key={i}
            className={`${i === "1" ? "bg-green25 text-white hover:bg-green" : "text-slate hover:bg-zinc600"} rounded-md w-8 h-8 flex items-center justify-center text-base cursor-pointer transition-all`}
          >
            {i}
          </button>
        ))}
      </div>
      <button className="flex items-center justify-between gap-2 py-2 px-3 cursor-pointer text-base text-slate hover:text-slate100 transition-all">
        {" "}
        Next <FaArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default Pagination;
