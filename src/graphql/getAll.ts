import { gql } from "@apollo/client";

export const getAll = gql` 
{
  testes {
    id
    title
    texto{
      html
    }
  }
}`