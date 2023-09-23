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

const AdminTeacherDetailView = () => {
  const textStyles =
    "text-zinc-300 text-xl hover:text-zinc-50 hover:cursor-pointer";
  const spanStyles = "flex gap-1";

  const [teacher, setTeacher] = useState<UserInfo | null>(null);
  const [isEditing, setIsEditing] = useState<string | null>(null);
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

  function findPropertyByValueAndChange(
    teacher: UserInfo,
    newValue: string,
    oldValue: string
  ) {
    if (oldValue === newValue) {
      setIsEditing(null);
    }

    let propertyName: keyof UserInfo | null = null;

    if (isEditing) {
      for (const key in teacher) {
        if (typeof key === "string") {
          if (teacher[key as keyof UserInfo] === oldValue) {
            propertyName = key as keyof UserInfo;
            break;
          }
        }
      }
    }

    if (propertyName !== null) {
      const updatedTeacher = {
        ...teacher,
        [propertyName]: newValue,
      };

      adminService
        .updateUserAsync(updatedTeacher)
        .then((res) => setTeacher(res));

      setIsEditing(null);
    }
  }

  return (
    <PageContainer>
      {isEditing && (
        <StringPropertyEditor
          onSubmit={(newValue, oldValue) =>
            findPropertyByValueAndChange(teacher, newValue, oldValue)
          }
          oldValue={isEditing}
          title={isEditing}
        />
      )}
      <div className="container-colors w-fit p-5">
        <div className="flex mb-3">
          <h2 className="text-indigo-200 text-4xl tracking-wider flex">
            {teacher.person.fullName}
          </h2>
          <span className="ml-3 mt-auto bg-zinc-700 py-.5 px-1  rounded">
            <h2 className="text-green-300 text-2xl tracking-wider flex">
              {teacher.studentIds.length}
            </h2>
          </span>
        </div>
        <span className={spanStyles}>
          <p
            className={textStyles}
            onClick={() => setIsEditing(teacher.username)}
          >
            Username:
          </p>
          <p className="text-xl text-zinc-300">{teacher.username}</p>
        </span>
        <span className={`${spanStyles} items-center`}>
          <p className={textStyles}>Password:</p>
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
          <p
            className={`text-xl text-${
              userStatusColorValues[teacher.userStatus]
            }-300`}
          >
            {userStatusDisplayNames[teacher.userStatus]}
          </p>
        </span>
        <span className={spanStyles}>
          <p className={textStyles}>Email:</p>
          <p
            className={`text-${teacher.email ? "zinc-300" : "red-400"} text-xl`}
          >
            {teacher.email ? teacher.email : "User has no email"}
          </p>
        </span>
      </div>
    </PageContainer>
  );
};

export default AdminTeacherDetailView;
