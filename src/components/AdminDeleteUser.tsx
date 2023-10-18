import { useState } from "react";
import Modal from "./Modal";
import AdminUserList from "./AdminUserList";
import { UserInfo } from "../model/UserInfo";
import ConfirmIntent from "./ConfirmIntent";

const AdminDeleteUser = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserInfo | null>(null);

  const handleOnIntent = (intent: boolean) => {
    if (intent) {
      //deleteuser
    }
    setSelectedUser(null);
    setIsVisible(false);
  };
  return (
    <>
      <ConfirmIntent
        isVisible={selectedUser != null}
        onIntent={handleOnIntent}
      ></ConfirmIntent>
      <Modal
        showCloseButton={true}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      >
        <AdminUserList
          userEndpoint="teacher"
          onSelected={(user) => {
            setSelectedUser(user);
            setIsVisible(false);
          }}
        ></AdminUserList>
      </Modal>
      <button className="w-36 danger-btn" onClick={() => setIsVisible(true)}>
        Delete
      </button>
    </>
  );
};

export default AdminDeleteUser;
