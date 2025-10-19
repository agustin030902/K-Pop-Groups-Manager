// Ubicación: src/types/index.ts
export interface User {
  id: string;
  email: string;
  name: string;
  isVerified: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}