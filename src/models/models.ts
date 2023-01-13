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

export interface IOwner {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
}

export interface IRepo {
  id: number;
  name: string;
  private: boolean;
  owner: IOwner;
  html_url: string;
  description: string;
  fork: string;
  url: string;
}
