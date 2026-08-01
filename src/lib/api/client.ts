import { ApiResponse } from "./types";

class ApiClient {
  async get<T>(
    url: string,
    firebaseUid?: string
  ): Promise<T> {
    const response = await fetch(url, {
      headers: firebaseUid
        ? {
            "x-firebase-uid": firebaseUid,
          }
        : {},
    });

    const result: ApiResponse<T> =
      await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result.data;
  }

  async post<T>(
    url: string,
    body?: unknown
  ): Promise<T> {
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(body),
    });

    const result: ApiResponse<T> =
      await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result.data;
  }

  async put<T>(
    url: string,
    body?: unknown,
    firebaseUid?: string
  ): Promise<T> {
    const response = await fetch(url, {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",

        ...(firebaseUid && {
          "x-firebase-uid":
            firebaseUid,
        }),
      },

      body: JSON.stringify(body),
    });

    const result: ApiResponse<T> =
      await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result.data;
  }
}

export const apiClient =
  new ApiClient();