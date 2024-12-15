"use server";
import { spacexClient } from "@/lib/SpaceXapolloClient"; // Apollo Client setup
import { GetRockets } from "@/queries/spacexQueries"; // GraphQL query

export interface RocketData {
  name: string;
  company: string;
  country: string;
  success_rate_pct: number;
  type: string;
  mass: {
    kg: number;
  };
  height: {
    meters: number;
  };
}

export async function getRockets(): Promise<RocketData[]> {
 
    // Use Apollo Client to fetch data
    const { data } = await spacexClient.query({
      query: GetRockets, // Your GraphQL query
    });

    
    {/*const rockets: RocketData[] = data.rockets.map((rocket: RocketData) => ({
      ...rocket,
      mass: rocket.mass.kg, // Flattening the mass object
      height: rocket.height.meters, // Flattening the height object
    })); */}
    return data.rockets;
  
 
}
