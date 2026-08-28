export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

export enum ApiEndpoint {
  Users = '/users',
  Posts = '/posts',
  Comments = '/comments'
}
