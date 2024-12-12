"use server"

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

export async function getRockets():Promise<RocketData[]> {
  const query = `
        query Rockets {
            rockets {
                name
                company
                country
                success_rate_pct
                type
                mass {
                    kg
                }
                height {
                    meters
                }
            }
        }
    `;
  const response = await fetch("https://spacex-production.up.railway.app/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const jsonResponse = await response.json();
  const Rockets: RocketData[] = jsonResponse.data.rockets.map(
    (rocket: RocketData) => ({
      ...rocket,
      mass: rocket.mass.kg,
      height: rocket.height.meters,
    })
  );

  return Rockets
}
