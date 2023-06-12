import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
const UpdatedClass = () => {
  const singleClass = useLoaderData();
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://rhythm-labs-server.vercel.app/classes/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("class info updated successfully");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="font-semibold text-lg">Class Name</span>
          </label>
          <input
            type="text"
            defaultValue={singleClass?.className}
            {...register("className")}
            className="input input-bordered"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="font-semibold text-lg">Available seats</span>
          </label>
          <input
            type="number"
            defaultValue={singleClass?.seats}
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
            defaultValue={singleClass?.price}
            {...register("price", { required: true })}
            className="input input-bordered"
          />
        </div>

        <input
          type="submit"
          value="Update"
          className="w-full bg-[#ef672a] mt-6 py-2 font-bold text-white text-lg cursor-pointer"
        />
      </form>
    </div>
  );
};

export default UpdatedClass;
