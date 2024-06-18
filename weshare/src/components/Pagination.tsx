import useNonGovWithPage from "../hooks/useNonGovWithPage";
import useNongovStore from "../util/nongovStore";

const Pagination = () => {
  const page = useNongovStore(s => s.page);
  const size = useNongovStore(s => s.size);
  const name = useNongovStore(s => s.name);
  const setPage = useNongovStore(s => s.setPage);

  const dealPage = (page: number) => {
    setPage(page);
  };

  const {
    data: pageResult,
    isPending: loadingNongovs,
    error: errorNongov,
  } = useNonGovWithPage({page, size, name});

  if (loadingNongovs) return <h6>Loading...</h6>;
  if (errorNongov) throw errorNongov;

  const totalOfPages = pageResult.totalOfPages;

  const pageArray = [];

  for (let i = 0; i < totalOfPages; i++) {
    pageArray.push(
      <li key={i} className="page-item">
        <a
          onClick={() => dealPage(i)}
          className={page === i ? "page-link active" : "page-link"}
          href="#"
        >
          {i + 1}
        </a>
      </li>
    );
  }

  if (totalOfPages < 2) return null;
  
  return (
    <nav aria-label="Pagination">
      <ul className="pagination">
        <li className={page === 0 ? "page-item disabled" : "page-item"}>
          <a onClick={() => dealPage(page - 1)} className="page-link">
            Return
          </a>
        </li>
        {pageArray}
        <li className={page === totalOfPages - 1 ? "page-item disabled" : "page-item"}>
          <a onClick={() => dealPage(page + 1)} className="page-link">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
