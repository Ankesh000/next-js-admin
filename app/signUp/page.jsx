import Link from "next/link";
import React from "react";
import {  redirect } from "next/navigation";

const SignUp = () => {

  return (
    <div className=" min-h-screen  flex flex-col bg-cyan-200	px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img
          className="mx-auto h-14 w-auto"
          src="../favicon.ico"
          alt="logo"
        />
        <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
        <p className="mt-1 text-center text-1xl font-bold leading-6 tracking-tight text-gray-900">
          or
          <span className="ml-2 mr-2">
            <Link
              href="/login"
              className="font-medium text-pink-600 hover:text-green-900"
            >
              Sign in
            </Link>
          </span>
        </p>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm  text-indent:50px">
        <form className="space-y-2">
          <div className="mt-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                placeholder="Enter your name..."
                type="text"
                required
                className="w-full rounded-md border-0 py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-2">
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="current-email"
                placeholder="Enter your email..."
                required
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                placeholder="Enter your password..."
                required
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full mt-6 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
