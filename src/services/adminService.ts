import axios from "axios";
import { UserInfo } from "../model/UserInfo";
import LocalStorageService from "./localStorageService";

const localStorageService = new LocalStorageService();

class AdminService {
  private axiosInstance: any;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:5253/api/Admin",
    });

    this.setAuthHeaders();
  }

  getUsersAsync = async (endpoint: string): Promise<UserInfo[]> => {
    try {
      const response = await this.axiosInstance.get(endpoint);
      const teachers = response.data;
      return teachers;
    } catch (error) {
      throw error;
    }
  };

  getUserAsync = async (endpoint: string): Promise<UserInfo> => {
    try {
      const response = await this.axiosInstance.get(endpoint);
      const users = response.data;
      return users;
    } catch (error) {
      throw error;
    }
  };

  updateUserAsync = async (user: UserInfo): Promise<UserInfo> => {
    try {
      const response = await this.axiosInstance.put("", user);
      const updatedUser = response.data;
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };

  setAuthHeaders = () => {
    const authResponse = localStorageService.getItem("authenticationResponse");
    const jwt = authResponse ? authResponse.accessToken : null;

    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwt}`;
  };
}

export default AdminService;
