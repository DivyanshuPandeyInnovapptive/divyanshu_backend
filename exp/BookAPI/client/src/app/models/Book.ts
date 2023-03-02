export interface Book {
    _id?: string;
    bookName?: string;
    authorName?: string;
    createdAt?: string;
    updatedAt?: string;
    price: {
        sub_user?: number;
        non_sub_user?: number;
    }
}