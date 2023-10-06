import Link from "next/link";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-gray-100 relative">
        <Image
          src="/Screenshot.png"
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-1/2 flex bg-gray-100 justify-center items-center">
        <div className="sm:w-full sm:max-w-sm ">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mt-4">
            Login to your account
          </h2>
          <p className=" text-center text-1xl font-bold leading-6 tracking-tight text-gray-900">
            Dont have account?
            <span className="ml-2 mr-2">
              <Link href="/signUp" className="font-small ">
                <button
                  type="submit"
                  className="w-small mt-3 bg-indigo-600 px-3 py-1 text-white rounded-md text-center text-sm font-semibold hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Sign up 
                </button>
              </Link>
            </span>
          </p>

          <form className="mt-5 space-y-3" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address *
              </label>
              <div className="mt-2 ">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address..."
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password *
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password..."
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
