import { gql } from "@apollo/client";

export const GetRockets = gql`
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