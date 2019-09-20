import { gql } from "apollo-boost";

export const DATA = gql`
  query {
    getMatches(count: 5) {
      id
      url
      game
      home
      away
      start
      odds {
        W1
        W2
        Draw
      }
    }
  }
`;
