import { IAddress } from "./address.interface";

export interface IUser{
    id?: number;
    name: string;
    email: string;
    address: IAddress;
    phone: string;
}