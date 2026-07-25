interface CreateUserPayload {
  firebaseUid: string;
  fullName: string;
  email: string;
  role: string;
}

export const userService = {
  async createUser(payload: CreateUserPayload) {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  },

  async createStudentProfile(firebaseUid: string) {
    const response = await fetch("/api/student-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firebaseUid,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data.data;
  },

  async getUsers() {
    const response = await fetch("/api/users");

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  },

  async getCurrentUser(firebaseUid: string) {
    const response = await fetch("/api/users/me", {
      headers: {
        "x-firebase-uid": firebaseUid,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data.data;
  },
};