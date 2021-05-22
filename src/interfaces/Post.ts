import { ObjectId } from "mongoose";

export interface Post{
    title: string,
    description: string,
    keywords: string[],
    thumb: string,
    author: ObjectId,
    published: boolean,
    content: object[],
    createdAt: Date,
    updatedAt: Date,
    /* ratingings:{
        ratingOne: number,
        ratingTwo: number,
        ratingThree: number,
        ratingFour: number,
        ratingFive: number,
        ratingValue: number
    } */
}