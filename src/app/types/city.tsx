import Document from "mongoose";

export interface ICity extends Document{
    name: string;
    country: string;
    population: number;
    area: number;
}