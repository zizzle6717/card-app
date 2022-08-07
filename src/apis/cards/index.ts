import { gql } from '@apollo/client';

export const QUERY_CARD = gql`
    query GetCard ($slug: String!) {
        card(slug: $slug) {
            age
            cardEdition {
                name
            }
            grade
            name
            pictureUrl(derivative: "tinified")
            player {
                country {
                    slug
                }
                displayName
                pictureUrl(derivative: "tinified")
            }
            position
            rarity
            season {
                name
                startYear
            }
            team {
                ...on Club {
                name
                    pictureUrl(derivative: "tinified")
                }
            }
        }
    }
`;
