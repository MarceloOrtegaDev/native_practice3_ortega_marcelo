import {Document} from "mongoose"

export interface User{
    readonly id?: string,
    email: string
    username: string
    password: string
}

export interface UserDocument extends User, Omit<Document, 'id'> {}

export interface userId {
    userId: string;
}


