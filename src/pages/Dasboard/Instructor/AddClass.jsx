import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";

const AddClass = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const {
      classImage,
      className,
      instructorEmail,
      instructorName,
      price,
      seats,
    } = data;
    const imageInfoData = new FormData();
    const image = classImage[0];
    imageInfoData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_UPLOAD_TOKEN
    }`;
    fetch(url, {
      method: "POST",
      body: imageInfoData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const img = imageData?.data?.display_url;
        const classInfo = {
          className,
          classImage: img,
          instructorEmail,
          instructorName,
          price: parseFloat(price),
          seats: parseInt(seats),
          status: "pending",
          totalEnrolledStudents: 0,
        };
        fetch("https://rhythm-labs-server.vercel.app/class", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(classInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            reset();
            if (data.insertedId) {
              toast.success("Successfully added a class and save in database");
            }
          });
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold text-lg">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter class name"
              {...register("className", { required: true })}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold text-lg">Class Image</span>
            </label>
            <input
              type="file"
              {...register("classImage", { required: true })}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="md:flex gap-4 mt-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold text-lg">Instructor Name</span>
            </label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              {...register("instructorName")}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold text-lg">Instructor Email</span>
            </label>
            <input
              type="text"
              value={user.email}
              readOnly
              {...register("instructorEmail")}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="md:flex gap-4 mt-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold text-lg">Available seats</span>
            </label>
            <input
              type="number"
              placeholder="Enter seats number"
              {...register("seats", { required: true })}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold text-lg">Price</span>
            </label>
            <input
              type="number"
              placeholder="Enter Price"
              {...register("price", { required: true })}
              className="input input-bordered"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Class"
          className="w-full bg-[#ef672a] mt-6 py-2 font-bold text-white text-lg cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddClass;
