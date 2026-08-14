import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPages = () => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    return [1, 2, 3, "...", totalPages - 1, totalPages];
  };

  return (
    <div className="flex items-center justify-center gap-2 text-sm sm:text-base flex-wrap">
      {/* Previous */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex items-center gap-1.5 sm:gap-2 text-slate disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
      >
        <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>Previous</span>
      </button>

      {/* Pages */}
      <div className="flex items-center gap-1 sm:gap-2">
        {getPages().map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="text-slate px-1"
            >
              ...
            </span>
          ) : (
            <button
              type="button"
              key={page}
              onClick={() => onPageChange(page as number)}
              className={`rounded-md w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-xs sm:text-base cursor-pointer transition-all ${
                currentPage === page
                  ? "bg-green25 text-white hover:bg-green"
                  : "text-slate hover:bg-zinc600"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex items-center gap-1.5 sm:gap-2 text-slate disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
      >
        <span>Next</span>
        <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
      </button>
    </div>
  );
}

export default Pagination;