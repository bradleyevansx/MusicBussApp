import Logout from "../../components/Logout";
import AdminUserList from "../../components/AdminUserList";
import PageContainer from "../../components/PageContainer";

const AdminDashboardView = () => {
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
          <AdminUserList userEndpoint="teacher"></AdminUserList>
          <AdminUserList userEndpoint="student"></AdminUserList>
          <AdminUserList userEndpoint="parent"></AdminUserList>
        </div>
        <Logout></Logout>
      </div>
    </PageContainer>
  );
};

export default AdminDashboardView;
