import { UserType } from "../services/authService";
import { UserStatus } from "./UserStatus";

export interface UserInfo {
  userType: UserType;
  userStatus: UserStatus;
  person: {
    firstName: string;
    lastName: string;
    fullName: string;
  };
  username: string;
  password: string;
  partitionKey: string;
  teacherIds: string[];
  parentIds: string[];
  studentIds: string[];
  id: string;
  createdDateTime: string;
  email: string;
}
