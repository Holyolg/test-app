export interface Login {
  login: {
    access_token: string;
    refresh_token: string;
  };
}

export interface RefreshToken {
  refreshToken: {
    access_token: string;
    refresh_token: string;
  };
}

export interface myProfile {
  myProfile: {
    id: string;
    name: string;
    avatar: string;
  };
}
