import { Table } from 'antd';
import { GraphQLClient } from 'graphql-request';
import Link from "next/link";
import Appheader from '../Components/AppHeader';

interface FilmData {
  title: string;
  director: string;
  releaseDate: string;
  species: string;
}

 const Starwar = async () => {
    const query = `
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

    let films:FilmData[] = []
    try {
        const response = await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
        }),
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse.data.allFilms.films);
        films = jsonResponse.data.allFilms.films.map((film: any) => ({
            title: film.title,
            director: film.director,
            releaseDate: film.releaseDate,
            species: film.speciesConnection.species.map((specie:any) => 
                `${specie.name} (${specie.classification}, ${specie.homeworld?.name || "Unknown"})`

            ).join(' | ')
        }),
        )

    } catch (error:any) {
        console.log('error')
    
    }
    
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {title: 'Director',dataIndex:'director',key:'director',},
        {title:'ReleaseDate',dataIndex:'releaseDate', key:'releaseDate'},
        {
            title:'Species',
            dataIndex:'species',
            key:'species',
        }
    ]

   
    return (
        <div>
            <Appheader></Appheader>
            <div className='text-blue-500 font-extrabold text-2xl py-5'>Starwar Films Data</div>
            <Table dataSource={films} columns={columns} rowKey="title"></Table>
        </div>
    )
}



 export default Starwar