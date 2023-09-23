import { useEffect, useRef, useState } from "react";
import { useUser } from "../../hooks/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../services/authService";
import LoginInput from "../../components/LoginInput";

const LoginView = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { login, user } = useUser();

  const handleSignIn = (event: React.MouseEvent) => {
    event.preventDefault();
    if (username && password) {
      login([username, password]);
    }
  };
  useEffect(() => {
    if (user?.userType === UserType.Admin) {
      navigate("/admin");
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 py-12 px-4 ">
      <div className="border border-zinc-600 w-96 bg-zinc-800 px-5 py-5 rounded-lg">
        <div>
          <h2 className=" text-center text-3xl text-zinc-50">Login</h2>
        </div>
        <form className="flex flex-col gap-2 mt-1">
          <div className="rounded-md shadow-sm">
            <LoginInput onChange={setUsername} type="Username"></LoginInput>
            <LoginInput onChange={setPassword} type="Password"></LoginInput>
          </div>
          <button
            onClick={handleSignIn}
            className="w-full text-xl py-1 px-3 border border-zinc-600 rounded-md text-white bg-zinc-700 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 focus:bg-zinc-900"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
