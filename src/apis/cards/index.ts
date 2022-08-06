import { gql } from '@apollo/client';

export const QUERY_CARD = gql`
    query GetCard ($slug: String!) {
        card(slug: $slug) {
            age
            pictureUrl(derivative: "tinified")
            player {
                pictureUrl(derivative: "tinified")
            }
            season {
                name
                startYear
            }
        }
    }
`;
