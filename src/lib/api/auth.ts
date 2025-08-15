import api from '@/lib/axios';
import { LoginSchema } from '@/lib/schemas/login';

interface LoginResponse {
  content: {
    user: {
      id: string;
      fullName: string;
      email: string;
      role: string;
    };
    token: string;
  };
  message: string;
  errors: any[];
}


export const loginUser = async (data: LoginSchema): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>('/login', data);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'An unknown error occurred');
    }
    throw new Error('An unknown error occurred');
  }
};
