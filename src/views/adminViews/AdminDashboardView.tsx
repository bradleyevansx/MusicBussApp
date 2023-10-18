import Logout from "../../components/Logout";
import AdminUserList from "../../components/AdminUserList";
import PageContainer from "../../components/PageContainer";
import AdminDeleteUser from "../../components/AdminDeleteUser";
import { useNavigate } from "react-router-dom";

const AdminDashboardView = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div>
        <div
          className="mb-5 bg-zinc-800 w-fit py-2 px-3 rounded-lg mx-auto
      "
        >
          <h1 className="text-white text-4xl tracking-wider">Admin View</h1>
        </div>
        <div className="flex w-fit gap-5">
          <div className="flex flex-col gap-5">
            <AdminUserList
              userEndpoint="teacher"
              onSelected={(user) => navigate(`/admin/teacher/${user.id}`)}
            ></AdminUserList>
            <AdminDeleteUser></AdminDeleteUser>
          </div>
          <div className="flex flex-col gap-5">
            <AdminUserList
              userEndpoint="student"
              onSelected={(user) => navigate(`/admin/student/${user.id}`)}
            ></AdminUserList>
            <AdminDeleteUser></AdminDeleteUser>
          </div>
          <div className="flex flex-col gap-5">
            <AdminUserList
              userEndpoint="parent"
              onSelected={(user) => navigate(`/admin/parent/${user.id}`)}
            ></AdminUserList>
            <AdminDeleteUser></AdminDeleteUser>
          </div>
        </div>
        <Logout></Logout>
      </div>
    </PageContainer>
  );
};

export default AdminDashboardView;
