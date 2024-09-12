import { gql } from "@apollo/client";

export const MY_PROFILE = gql`
# Headers
{
  "Authorization": "Bearer {your access token}"
}
query {
  myProfile {
    id
    name
    avatar
  }
}
`;
