"use client";
import { Table } from "antd";
import { getMovies, FileDataRes, SpeciesConnection } from "@/serveractions/getMovies";
import { useEffect, useState } from "react";

export default function MovieList() {
    const [movie, setMovie] = useState<FileDataRes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const setData = async () => {
        try {
              const films = await getMovies();
        
              if (films) {
                console.log("Data received:", films);
                setMovie(films);
              } else {
                console.error("No data received.");
              }
            } catch (error) {
              console.error("Error fetching movies data:", error);
            } finally {
              setLoading(false); // Step 3: Set loading to false after fetching or error
            }
    }

    useEffect(() => {
      setData();
    }, []);

    const columns = [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      { title: "Director", dataIndex: "director", key: "director" },
      { title: "ReleaseDate", dataIndex: "releaseDate", key: "releaseDate" },
      {
        title: "Species",
        dataIndex: "speciesConnection",
        key: "species",
        render: (speciesConnection: SpeciesConnection) => (
          <span>
            {speciesConnection?.species
              .map(
                (species) =>
                  `${species.name} (${species.classification}, ${
                    species.homeworld?.name || "Unknown Homeworld"
                  })`
              )
              .join(", ") || "No Species"}
          </span>
        ),
      },
    ];

    return (
      <div>
        <div className="text-blue-500 font-extrabold text-2xl py-5">
          Starwar Films Data
        </div>
        {loading ? (
          <div className="flex justify-center items-center py-10">
            Loading...
          </div>
        ) : (
          <Table dataSource={movie} columns={columns} rowKey="title" />
        )}
      </div>
    );
}