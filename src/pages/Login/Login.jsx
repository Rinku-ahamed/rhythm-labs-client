import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import { toast } from "react-hot-toast";
import { useState } from "react";
const Login = () => {
  const [showHidePassword, setShowHidePassword] = useState(false);
  const { loginUser, googleLogin } = useAuth();
  const { users } = useUsers();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // toast.success(` is login now!!`);
        navigate(from);
      })
      .catch((error) => {
        // toast.error(error.message);
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const exitingUser = users.find((usr) => usr.email === user.email);
        const saveUser = {
          email: user.email,
          name: user.displayName,
          role: "student",
        };
        if (!exitingUser) {
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Successfully added user info");
              }
              navigate(from, { replace: true });
            });
        }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img src="https://i.ibb.co/TLYbLkN/login.jpg" alt="" />
        </div>
        <div className="card shadow-2xl bg-base-100 w-full md:w-1/2">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <p role="alert">email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showHidePassword ? "text" : "password"}
                    placeholder="password"
                    {...register("password", { required: true })}
                    className="input input-bordered w-full"
                  />
                  <span
                    className="absolute right-0 bg-[#f0aa42] text-white cursor-pointer p-3 rounded-e text-lg h-full"
                    onClick={() => setShowHidePassword(!showHidePassword)}
                  >
                    {showHidePassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                {errors.password?.type === "required" && (
                  <p role="alert">password is required</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <Button text="Login"></Button>
              </div>
            </form>
            <p className="text-center text-xl text-[#f0aa42]">
              Don not have a account? <Link to="/signup">Register now</Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-2 rounded"
            >
              <FaGoogle />
              <span className="text-xl"> Sign in With Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
