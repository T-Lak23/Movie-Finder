import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (currentPage < 1) return;
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getPageNumber = () => {
    const pages = [];
    const maximumVisible = 7;
    if (totalPages <= maximumVisible) {
      for (let i = 0; i < totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...,",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
      return pages;
    }
  };
  return (
    <div className="pagination-container">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        Prev
      </button>

      {getPageNumber()?.map((page, i) =>
        page === "..." ? (
          <span key={Date.now()}>...</span>
        ) : (
          <button
            key={crypto.randomUUID()}
            onClick={() => handleClick(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
