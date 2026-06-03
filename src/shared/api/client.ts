import type { ApiResponse, ApiError } from './types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const DEFAULT_TIMEOUT = 30000;

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw this.handleError(response);
      }

      const data = await response.json();

      return {
        data,
        status: response.status
      };
    } catch (error) {
      clearTimeout(timeoutId);
      throw this.parseError(error);
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'GET',
      headers: this.getHeaders()
    });
  }

  async post<T>(endpoint: string, body: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(body)
    });
  }

  async put<T>(endpoint: string, body: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(body)
    });
  }

  async patch<T>(endpoint: string, body: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify(body)
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
      headers: this.getHeaders()
    });
  }

  private getHeaders(): HeadersInit {
    return {
      'Content-Type': 'application/json'
    };
  }

  private handleError(response: Response): ApiError {
    return {
      message: `HTTP ${response.status}: ${response.statusText}`,
      status: response.status
    };
  }

  private parseError(error: unknown): ApiError {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return {
          message: 'Request timeout',
          status: 408,
          code: 'TIMEOUT'
        };
      }

      return {
        message: error.message,
        status: 0,
        code: 'NETWORK_ERROR'
      };
    }

    return {
      message: 'Unknown error occurred',
      status: 0,
      code: 'UNKNOWN_ERROR'
    };
  }
}

export const apiClient = new ApiClient();
