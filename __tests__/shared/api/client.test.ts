import { apiClient, ApiEndpoint } from '@/shared/api';

describe('API Client', () => {
  const mockFetch = jest.fn();
  global.fetch = mockFetch;

  beforeEach(() => {
    mockFetch.mockClear();
  });

  describe('GET request', () => {
    it('should make a GET request successfully', async () => {
      const mockData = { id: 1, name: 'Test' };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockData
      });

      const result = await apiClient.get(ApiEndpoint.Users);

      expect(result.data).toEqual(mockData);
      expect(result.status).toBe(200);
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining(ApiEndpoint.Users),
        expect.objectContaining({
          method: 'GET'
        })
      );
    });

    it('should handle request error', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found'
      });

      await expect(apiClient.get(ApiEndpoint.Users)).rejects.toEqual(
        expect.objectContaining({
          status: 404,
          message: expect.stringContaining('404')
        })
      );
    });
  });

  describe('POST request', () => {
    it('should make a POST request with body', async () => {
      const mockData = { id: 1, name: 'New User' };
      const payload = { name: 'New User' };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 201,
        json: async () => mockData
      });

      const result = await apiClient.post(ApiEndpoint.Users, payload);

      expect(result.data).toEqual(mockData);
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining(ApiEndpoint.Users),
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(payload)
        })
      );
    });
  });

  describe('Request timeout', () => {
    it('should handle request timeout', async () => {
      const error = new Error();
      error.name = 'AbortError';
      mockFetch.mockRejectedValueOnce(error);

      await expect(apiClient.get(ApiEndpoint.Users)).rejects.toEqual(
        expect.objectContaining({
          status: 408,
          code: 'TIMEOUT',
          message: 'Request timeout'
        })
      );
    });
  });
});
