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
  username: string | null;
  password: string | null;
  partitionKey: string;
  teacherIds: string[];
  parentIds: string[];
  studentIds: string[];
  id: string;
  createdDateTime: string;
  email: string | null;
}
