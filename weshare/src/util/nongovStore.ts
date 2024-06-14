import { create } from "zustand";
import NonGov from "../interfaces/nongov";

interface NonGovStore {
    page: number;
    size: number;
    name: string;
    selectedNonGov: NonGov;

    setPage: (page: number) => void;
    setSize: (size: number) => void;
    setName: (name: string) => void;
    setSelectedNonGov: (selectedNonGov: NonGov) => void;
}

const useNonGovStore = create<NonGovStore>((set) => ({
    page: 0,
    size: 5,
    name: "",
    selectedNonGov: {} as NonGov,

    setPage: (page: number) => set(() => ({page: page})),
    setSize: (size: number) => set(() => ({size: size})),
    setName: (name: string) => set(() => ({name: name})),
    setSelectedNonGov: (selectedNonGov: NonGov) => set(() => ({selectedNonGov: selectedNonGov}))
})) 
export default useNonGovStore;