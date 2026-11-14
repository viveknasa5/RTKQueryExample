import Pagination from "react-js-pagination";

type PaginationProps = {
  activePage: number;
  setActivePage: (page: number) => void;
  allItems: { perPage: number; totalRecords: number };
  limit: number;
  setLimit?: (limit: number) => void;
};

const PaginationComponent: React.FC<PaginationProps> = ({
  activePage,
  setActivePage,
  allItems,
  limit,
}) => {
  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  console.log(allItems, "allItems");

  return (
    <>
      <div className="d-flex align-center justify-between table-footer pagination-margin justify-content-center">
        <div className="pagination-wrpr">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={allItems?.perPage ? allItems?.perPage : limit}
            totalItemsCount={
              allItems?.totalRecords ? allItems?.totalRecords : 0
            }
            pageRangeDisplayed={limit}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default PaginationComponent;
