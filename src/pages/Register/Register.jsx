import AuthProvider, { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const { createUser } = AuthProvider(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUserInfo(user, name, photoURL)
          .then(() => {
            const saveUser = { name: name, email: email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then(() => {
                navigate("/");
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdateUserInfo = (user, name, photoURL) => {
    return updateProfile(user, { displayName: name, photoURL: photoURL });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className="card w-full md:w-1/2 shadow-2xl bg-base-100 pb-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <h2 className="text-3xl text-center font-bold capitalize">
                Sign Up
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL")}
                  className="input input-bordered"
                />
              </div>
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
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn  bg-[#d49432] bg-opacity-70 font-bold border-0 hover:bg-[#e7ab51]"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </div>
          </form>
          <p className="text-center text-xl text-[#f0aa42]">
            Already registered? <Link to="/login">Go to log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
