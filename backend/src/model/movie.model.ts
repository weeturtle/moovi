import { Schema, model } from "mongoose";

export interface IMovie {
    id: string;
    title: string;
    lastWatched: Date;
    person: string[];
}

export interface NewMovie {
    id: string;
    title: string;
    person: string[];
}

export const movieSchema = new Schema<IMovie>({
    id: { type: String, required: true },
    title: { type: String, required: true },
    lastWatched: { type: Date, required: true },
    person: { type: [String], required: true },
});

export const Movie = model<IMovie>("Movie", movieSchema);
