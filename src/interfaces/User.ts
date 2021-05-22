export interface User {
    name: string,
    createdAt: Date,
    updatedAt: Date,
    image: string,
    email: string,
    isAdmin?: boolean
}