export interface IProduct {
    image: string;
    id: number;
    title: string;
    priceFormatted: string;
    price: number;
    amount: number;
    description: string;
    author:string;
    pageCount:number;
    ISBN:string;
    bookDescription:string;
}
export interface IOrder {
    orderDate: Date;
    status: string;
    bookImage: string;
    bookId: number;
    bookTitle: string;
    bookPriceFormatted: string;
    bookPrice: number;
    bookAuthor: string;
}
