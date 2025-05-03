import React from 'react';
import Login from './Login'; // <-- import added
import { useForm } from "react-hook-form";

function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
  
    const onSubmit = (data) => {
      console.log("Login data:", data);
      // Close modal after successful submission
      document.getElementById("my_modal_3").close();
    };
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div id="signup_modal" className="border-[2px] shadow-md p-5 rounded-md">
          <div className="model-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            
            <h3 className="font-bold text-lg">Signup</h3>

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input type="text" 
              placeholder="Enter your Full name" 
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
              />
               <br/>
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input type="email" 
              placeholder="Enter your email"
               className="w-80 px-3 py-1 border rounded-md outline-none"
               {...register("email", { required: true })}
                />
                <br/>
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}

            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input type="password" 
              placeholder="Enter your password" 
              className="w-80 px-3 py-1 border rounded-md outline-none" 
              {...register("password", { required: true })}
              />
              <br/>
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}

            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3")?.showModal()
                  }
                >
                  Login
                </button>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>

      {/* Mount Login modal here so it can open */}
      <Login />
    </>
  );
}

export default Signup;
