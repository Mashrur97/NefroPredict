import { cookies } from "next/headers";

export const loginUser = async (data) => {
  const result = await fetch(`http://localhost:5000/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const userData = await result.json();

  console.log("User data:", userData);
  (await cookies()).set("accessToken", userData.data.accessToken);
  (await cookies()).set("refreshToken", userData.data.refreshToken);
  return userData;
};
