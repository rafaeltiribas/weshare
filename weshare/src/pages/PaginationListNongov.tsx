import InsertNongov from "../components/InsertNongov";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import NongovTable from "../components/NongovTable";

const PaginationListNongov = () => {
  return (
    <>
      <h4>Cadastro de Produtos</h4>
      <hr className="mt-1" />
      <InsertNongov />

      <h4>Lista de Produtos</h4>
      <hr className="mt-1" />
      <Search />
      <NongovTable />
      <Pagination />
    </>
  );
};
export default PaginationListNongov;
