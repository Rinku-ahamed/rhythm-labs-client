// import AuthProvider, { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
// import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import useUsers from "../../hooks/useUsers";
import PageCover from "../../shared/PageCover/PageCover";
const Register = () => {
  const { createUser, googleLogin, setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { users } = useUsers();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password, confirmPassword, name, photoURL } = data;
    if (password !== confirmPassword) {
      toast.error("Password don't match with confirm password");
      return;
    }
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
            handleUpdateUserInfo(user, name, imageUrl)
              .then(() => {
                const saveUser = {
                  email: user.email,
                  name: user.displayName,
                  image: user.photoURL,
                  role: "student",
                };
                fetch("http://localhost:5000/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                      toast.success("Successfully added user info");
                    }
                    navigate(from, { replace: true });
                  });
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
      .then((result) => {
        const user = result.user;
        const exitingUser = users.find((usr) => usr?.email === user?.email);
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
    <>
      <PageCover title="Register Page" />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <div className=" w-1/2">
            <img src="https://i.ibb.co/TLYbLkN/login.jpg" alt="" />
          </div>
          <div className="card w-full md:w-1/2 shadow-2xl bg-base-100 pb-10">
            <div className="card-body">
              <h2 className="text-3xl text-center font-bold capitalize">
                Register
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:flex gap-3">
                  <div className="form-control w-full">
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
                      <span className="text-red-600">
                        Name field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control w-full">
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
                      <span className="text-red-600">
                        Email field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="lg:flex gap-3 mt-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
                      })}
                      className="input input-bordered"
                    />
                    {errors.password && (
                      <span className="text-red-600">
                        password field is required
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        Password must be 6 characters
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must have one Uppercase one special character,
                        one capital letter.
                      </p>
                    )}
                  </div>
                  <div className="form-control w-full">
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
                </div>
                <div className="form-control mt-4">
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
      </div>
    </>
  );
};

export default Register;
