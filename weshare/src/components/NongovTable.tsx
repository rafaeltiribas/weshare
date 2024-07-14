import React, { useState } from "react";
import dayjs from "dayjs";
import deleteIcon from "../assets/skin/database_delete.png";
import useNonGovWithPage from "../hooks/useNonGovWithPage";
import useNongovStore from "../util/nongovStore";
import useRemoveNongov from "../hooks/useRemoveNongov";
import sortIcon from "../assets/sort_icon.png";  // Adicione um ícone de ordenação

const NongovTable = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");  // Estado para controlar a ordenação
  const page = useNongovStore((s) => s.page);
  const size = useNongovStore((s) => s.size);
  const name = useNongovStore((s) => s.name);
  const setPage = useNongovStore((s) => s.setPage);
  const setSelectedNonGov = useNongovStore((s) => s.setSelectedNonGov);

  const { mutate: removeNongov } = useRemoveNongov();

  const dealRemove = (id: number) => {
    removeNongov(id);
    setPage(0);
  };

  const {
    data: pageResult,
    isPending: loadingNongov,
    error: errorNongov,
  } = useNonGovWithPage({ page, size, name, sortOrder });  // Passe a ordenação para o hook

  if (loadingNongov) return <h6>Loading...</h6>;
  if (errorNongov) throw errorNongov;

  const produtos = pageResult.items;

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    setPage(0);  // Reiniciar para a primeira página
  };

  return (
    <table className="table table-responsive table-sm table-hover table-bordered">
      <thead>
        <tr>
          <th className="align-middle text-center" onClick={handleSort}>
            Id <img src={sortIcon} alt="Sort Icon" style={{ cursor: "pointer", width: "12px", marginLeft: "5px" }} />
          </th>
          <th className="align-middle text-center">Image</th>
          <th className="align-middle text-center">Category</th>
          <th className="align-middle text-center">Name</th>
          <th className="align-middle text-center">Singup Date</th>
          <th className="align-middle text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((nongov) => (
          <tr key={nongov.id}>
            <td width="8%" className="align-middle text-center">
              {nongov.id}
            </td>
            <td width="12%" className="align-middle text-center">
              <img src={nongov.image} width={45} />
            </td>
            <td width="12%" className="align-middle text-center">
              {nongov.category.name}
            </td>
            <td width="20%" className="align-middle">
              <a className="link-underline" onClick={() => {
                setSelectedNonGov(nongov);
              }}>
                {nongov.name}
              </a>
            </td>
            <td width="12%" className="align-middle text-center">
              {dayjs(nongov.signupDate).format("DD/MM/YYYY")}
            </td>
            <td width="12%" className="align-middle text-center">
              <button onClick={() => dealRemove(nongov.id!)} className="btn btn-danger btn-sm">
                <img src={deleteIcon} /> Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}></td>
          <td className="align-middle text-center fw-bold">Total...</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default NongovTable;
