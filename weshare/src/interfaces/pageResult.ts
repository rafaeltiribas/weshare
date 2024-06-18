interface PageResult<T> {
    nongovTotal: number;
    totalOfPages: number;
    currentPage: number;
    items: T[];
}