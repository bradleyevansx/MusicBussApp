import { useEffect, useState } from "react";
import { UserInfo } from "../model/UserInfo";
import AdminService from "../services/adminService";
import { useNavigate } from "react-router-dom";

interface Props {
  userEndpoint: string;
}

const AdminUserList = ({ userEndpoint }: Props) => {
  const [users, setUsers] = useState<UserInfo[] | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const adminService = new AdminService();

    adminService.getUsersAsync(userEndpoint).then((res) => {
      setUsers([...res]);
    });
  }, []);
  return (
    <>
      <div className=" overflow-hidden bg-zinc-800 w-80 rounded-md text-zinc-50 border border-zinc-600">
        <h5 className="pt-2 text-2xl font-semibold mx-auto w-fit text-purple-300">
          {userEndpoint.charAt(0).toUpperCase() + userEndpoint.slice(1) + "s"}
        </h5>
        <ul
          className="list-none standard-text p-2 h-80 hover:overflow-y-auto"
          style={{
            scrollbarWidth: "none",
            scrollbarColor: "rgba(155, 155, 155, 0.7) transparent",
          }}
        >
          {users?.map((user) => (
            <li key={user.id}>
              <button
                onClick={() => {
                  navigate(`/admin/${userEndpoint}/${user.id}`);
                }}
                className="w-full flex align-middle justify-between px-2 py-3 hover:bg-zinc-700 rounded hover:cursor-pointer focus:bg-zinc-900 focus:text-zinc-200"
              >
                <span>{user.person.fullName}</span>
                <span className="text-sm font-light bg-zinc-600 rounded h-fit px-1 py-0.5 my-auto">
                  {user.userStatus.toString()}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminUserList;
