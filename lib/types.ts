export interface User {
  _id: string;
  name: string;
  email: string;
  accessToken?: string;
  avatar?: string;
  // add other properties as needed
}

export interface AuthStore {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  signup: (data: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
  syncGithubUser: (user: {
    name: string;
    email: string;
    image?: string;
  }) => Promise<void>;
  fetchCurrentUser: () => Promise<void>;
  logout: () => void;
}
