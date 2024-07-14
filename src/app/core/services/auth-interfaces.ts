// auth-interfaces.ts
export interface User {
  nombreCompleto: string;
  role: string;
  permissions: string[];
}

export interface AuthResponse {
  token: string;
  user: User;
}
