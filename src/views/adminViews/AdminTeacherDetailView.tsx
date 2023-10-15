import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import StringPropertyEditor from "../../components/StringPropertyEditor";
import { UserInfo } from "../../model/UserInfo";
import {
  userStatusColorValues,
  userStatusDisplayNames,
} from "../../model/UserStatus";
import AdminService from "../../services/adminService";
import { findPropertyByValueAndChange } from "../../utilities/propertySetter";

const AdminTeacherDetailView = () => {
  const textStyles =
    "text-zinc-300 text-xl hover:text-zinc-50 hover:cursor-pointer";
  const spanStyles = "flex gap-1";

  const [teacher, setTeacher] = useState<UserInfo | null>(null);
  const [isEditing, setIsEditing] = useState<string[] | null>(null);
  const { userId } = useParams();
  const adminService = new AdminService();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    adminService.getUserAsync(`${userId}`).then((res) => setTeacher(res));
  }, []);

  if (!teacher) return null;

  const updateTeacher = (newValue: string, intent: boolean) => {
    if (isEditing !== null && intent) {
      const updatedTeacher = findPropertyByValueAndChange(
        teacher,
        newValue,
        isEditing[1]
      );
      if (updatedTeacher === null) {
        setIsEditing(null);
        return;
      } else {
        adminService
          .updateUserAsync(updatedTeacher)
          .then((res) => setTeacher(res));
        setIsEditing(null);
      }
    }
  };

  return (
    <PageContainer>
      {isEditing !== null && (
        <StringPropertyEditor
          onSubmit={(newValue, intent) => updateTeacher(newValue, intent)}
          propertyBeingChanged={isEditing[0]}
        />
      )}
      <div className="container-colors w-fit p-5">
        <div className="flex mb-3">
          <h2 className="text-indigo-200 text-4xl tracking-wider flex">
            {teacher.person.fullName}
          </h2>
          <span className="ml-3 bg-zinc-700 py-.5 px-1 h-fit  rounded">
            <h2 className="text-green-300 text-2xl tracking-wider flex">
              {teacher.studentIds.length}
            </h2>
          </span>
        </div>
        <span className={spanStyles}>
          <p
            className={textStyles}
            onClick={() => setIsEditing(["username", teacher.username])}
          >
            Username:
          </p>
          <p className="text-xl text-zinc-300">{teacher.username}</p>
        </span>
        <span className={`${spanStyles} items-center`}>
          <p
            className={textStyles}
            onClick={() => setIsEditing(["password:", teacher.password])}
          >
            Password:
          </p>
          <p className="text-xl text-zinc-300">
            {showPassword
              ? teacher.password
              : "•".repeat(teacher.password!.length)}
          </p>
          <button
            className=" underline text-sky-300 text-sm  rounded-sm"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </span>
        <span className={spanStyles}>
          <p className={textStyles}>User Status:</p>
          <p className={`text-xl ${userStatusColorValues[teacher.userStatus]}`}>
            {userStatusDisplayNames[teacher.userStatus]}
          </p>
        </span>
        <span className={spanStyles}>
          <p
            className={textStyles}
            onClick={() => setIsEditing(["email", teacher.email])}
          >
            Email:
          </p>
          <p
            className={`${
              teacher.email ? "text-zinc-300" : "text-red-400"
            } text-xl`}
          >
            {teacher.email !== "" ? teacher.email : "User has no email"}
          </p>
        </span>
      </div>
    </PageContainer>
  );
};

export default AdminTeacherDetailView;
