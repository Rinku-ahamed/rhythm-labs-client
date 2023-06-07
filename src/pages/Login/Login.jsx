import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex gap-8">
        <div className=" w-1/2">
          <img src="https://i.ibb.co/TLYbLkN/login.jpg" alt="" />
        </div>
        <div className="card shadow-2xl bg-base-100 w-1/2">
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
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                  className="input input-bordered"
                />
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
            <div className="divider">OR</div>
            <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-2 rounded">
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
