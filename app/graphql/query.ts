import { gql } from "@apollo/client";

export const MY_PROFILE = gql`
	query {
		myProfile {
			name
			avatar
		}
	}
`;
