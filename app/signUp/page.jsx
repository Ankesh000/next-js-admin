import React from "react";
import Link from "next/link";
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side (Image) */}
      <div className="w-1/2 bg-gray-100 relative">
      <Image
  src="/Screenshot.png"
  alt="logo"
  layout="fill"
  objectFit="cover"
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
/>

      </div>

      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
          <p className="text-center text-1xl font-bold leading-6 tracking-tight text-gray-900">
            Have your account?
            <span className="ml-2 mr-2">
              <Link
                href="/login"
                className="font-medium text-pink-600 hover:text-green-900"
              >
                <button
                  type="submit"
                  className="w-small mt-3 bg-indigo-600 px-3 py-1 text-white rounded-md text-center text-sm font-semibold hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Sign in
                </button>
              </Link>
            </span>
          </p>

          <form className="mt-0">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name..."
                  required
                  className="w-full rounded-md border py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="current-email"
                  placeholder="Enter your email..."
                  required
                  className="w-full rounded-md border py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password..."
                  required
                  className="w-full rounded-md border py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full mt-4 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
