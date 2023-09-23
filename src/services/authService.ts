import axios from "axios";
import LocalStorageService from "./localStorageService";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5253/api/Auth",
});

export enum UserType {
  Parent,
  Student,
  Teacher,
  Unauthorized,
  Admin,
}

export interface AuthenticationResponse {
  userType: UserType;
  accessToken: string;
  userId: string;
  refreshTokenId: string;
  accessTokenExpiration: string;
}

const localStorageService = new LocalStorageService<AuthenticationResponse>();

class AuthService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  loginAsync = async (userData: string[]): Promise<AuthenticationResponse> => {
    try {
      const response = await axiosInstance.post<AuthenticationResponse>(
        this.endpoint,
        [userData[0], userData[1]]
      );

      const authenticationResponse = response.data;

      localStorageService.setItem(
        "authenticationResponse",
        authenticationResponse
      );

      return authenticationResponse;
    } catch (error) {
      throw error;
    }
  };
  logout = () => {
    localStorageService.removeItem("authenticationResponse");
  };
}

export default AuthService;
