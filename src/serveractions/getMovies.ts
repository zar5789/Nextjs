"use server";
import { starwarClient } from "@/lib/StarwarApolloClient";
import { GetMovieDatas } from "@/queries/starwarQueries";

// Represents the homeworld of a species
export interface Homeworld {
  name: string;
}

// Represents an individual species
export interface Species {
  name: string;
  classification: string;
  homeworld: Homeworld | null;
}

// Represents the species connection containing an array of species
export interface SpeciesConnection {
  species: Species[];
}

// Represents the full file data response
export interface FileDataRes {
  title: string;
  director: string;
  releaseDate: string;
  speciesConnection: SpeciesConnection;
}

export async function getMovies():Promise<FileDataRes[]> {
    const { data } = await starwarClient.query({
        query: GetMovieDatas,
    });
    
    return data.allFilms.films;
}


