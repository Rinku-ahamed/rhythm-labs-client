// import AuthProvider, { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
// import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const { createUser, googleLogin, setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password, name, photoURL } = data;
    const formData = new FormData();
    const image = photoURL[0];
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_UPLOAD_TOKEN
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        const imageUrl = imgData.data.display_url;
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            toast.success("successfully register!!");
            handleUpdateUserInfo(user, name, imageUrl)
              .then(() => {
                navigate(from, { replace: true });
              })
              .catch((error) => {
                toast.error(error.message);
              });
          })
          .catch((error) => {
            setLoading(false);
            console.log(error.message);
            toast.error(error.message);
          });
      });
  };
  const handleUpdateUserInfo = (user, name, photoURL) => {
    return updateProfile(user, { displayName: name, photoURL: photoURL });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className=" w-1/2">
          <img src="https://i.ibb.co/TLYbLkN/login.jpg" alt="" />
        </div>
        <div className="card w-full md:w-1/2 shadow-2xl bg-base-100 pb-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <h2 className="text-3xl text-center font-bold capitalize">
                Register
              </h2>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>
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
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
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
                {errors.password && (
                  <span className="text-red-600">
                    password field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  {...register("confirmPassword", { required: true })}
                  className="input input-bordered"
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">
                    Confirm field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Photo</span>
                </label>
                <input
                  type="file"
                  {...register("photoURL")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <Button text="Register"></Button>
              </div>
            </div>
          </form>
          <p className="text-center text-xl text-[#f0aa42]">
            Already registered? <Link to="/login">Go to log in</Link>
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
  );
};

export default Register;
