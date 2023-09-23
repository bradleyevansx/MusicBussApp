import { useUser } from "../hooks/AuthenticationContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        logout();
        navigate("/login");
      }}
    >
      Sign Out
    </Button>
  );
};

export default Logout;
