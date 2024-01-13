import { useForm } from "react-hook-form";

import { FaShoppingCart } from "react-icons/fa";

import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/Axiospublic";
import useAxiosSecure from "../../../../Hooks/AxiosSequre";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const productItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        itemproduct: data.itemproduct,
        image: res.data.data.display_url,
      };
      //
      const productRes = await axiosSecure.post("/product", productItem);
      console.log(productRes.data);
      if (productRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(" image url", res.data);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Product Name*</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/*--------- category --------------*/}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="iPhone">Iphone</option>
                <option value="smartphones">smartphones</option>
                <option value="Tablet">Tablet</option>
                <option value="laptops">Laptop</option>
                <option value="home-decoration">Home-decoration</option>
              </select>
            </div>

            {/* ---------------price ------------*/}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/*------------- product details ---------------*/}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Details</span>
            </label>
            <textarea
              {...register("itemproduct")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          {/* 
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-white"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
           
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600
                    hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2
                     focus-within:ring-indigo-500"
              >
                <span className="">Upload a file</span>
                <input
                  {...register("image", { required: true })}
                  id="fileUpload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>

              <p className="pl-1 text-white">or drag and drop</p>
            </div>
            <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
          </div> */}

          <button className="btn">
            Add product <FaShoppingCart className="ml-4"></FaShoppingCart>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
