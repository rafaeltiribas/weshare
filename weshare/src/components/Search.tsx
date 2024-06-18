import { FormEvent, useRef } from "react";
import useNongovStore from "../util/nongovStore";

const Search = () => {
  const name = useNongovStore(s => s.name);
  const setName = useNongovStore(s => s.setName);
  const setPage = useNongovStore(s => s.setPage);

  const dealName = (name: string) => {
    setName(name);
    setPage(0);
  }

  const submit = (event: FormEvent) => {
    event.preventDefault(); 
    dealName(nameRef.current!.value);
  }  

  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={submit} className="d-flex mb-3">
      <input defaultValue={name} ref={nameRef} type="text" className="form-control form-control-sm me-3" placeholder="Search..." />
      <button className="btn btn-primary btn-sm" type="submit">Search</button>
    </form>
  );
};
export default Search;
