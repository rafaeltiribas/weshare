interface PageResult<T> {
    NonGovTotal: number;
    totalOfPages: number;
    currentPage: number;
    items: T[];
}