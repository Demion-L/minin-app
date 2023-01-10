export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  repos_url: string;
}

export interface ServerResponse<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}
