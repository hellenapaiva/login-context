import { Api } from "../../services/api";

export async function LoginResquest(email: string, password: string) {
  try {
    const request = await Api.post("/login", { email, password });
    return request.data;
  } catch (error) {
    return null;
  }
}