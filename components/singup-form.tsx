"use client";

import type React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

interface SignupFormProps {
  onSignup: (userType: "employer" | "employee") => void;
}

export default function SignupForm({ onSignup }: SignupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [userType, setUserType] =
    useState<"employer" | "employee">("employee");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, send the data to your backend here.
    console.log({
      name,
      email,
      phone,
      password,
      userType,
    });

    onSignup(userType);
  };

  return (
    <div className="text-white">

      {/* =========================================
          TITLE
      ========================================== */}
      <h1 className="text-3xl font-semibold text-center mb-2">
        Sign Up
      </h1>

      <p className="text-center text-gray-300 mb-8">
        Create your account to get started
      </p>


      {/* =========================================
          FORM
      ========================================== */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* =======================================
            USER TYPE
        ======================================== */}
        <div className="grid grid-cols-2 gap-4 mb-6">

          {/* EMPLOYEE */}
          <button
            type="button"
            onClick={() => setUserType("employee")}
            className={`flex items-center justify-center py-3 px-6 rounded-md text-white transition ${
              userType === "employee"
                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                : "bg-gradient-to-r from-gray-500/80 to-gray-600/80"
            }`}
          >
            <span className="mr-2">👤</span>
            Employee
          </button>


          {/* EMPLOYER */}
          <button
            type="button"
            onClick={() => setUserType("employer")}
            className={`flex items-center justify-center py-3 px-6 rounded-md text-white transition ${
              userType === "employer"
                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                : "bg-gradient-to-r from-gray-500/80 to-gray-600/80"
            }`}
          >
            <span className="mr-2">👤</span>
            Employer
          </button>

        </div>


        {/* =======================================
            NAME
        ======================================== */}
        <div>

          <label
            htmlFor="name"
            className="block mb-2"
          >
            Full Name
          </label>

          <div className="relative">

            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="w-5 h-5 text-gray-400" />
            </div>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="
                w-full
                bg-[#333333]
                rounded
                pl-10
                pr-4
                py-3
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-[#4ECDC4]
              "
              required
            />

          </div>
        </div>


        {/* =======================================
            EMAIL
        ======================================== */}
        <div>

          <label
            htmlFor="email"
            className="block mb-2"
          >
            Email
          </label>

          <div className="relative">

            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
                w-full
                bg-[#333333]
                rounded
                pl-10
                pr-4
                py-3
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-[#4ECDC4]
              "
              required
            />

          </div>
        </div>


        {/* =======================================
            PHONE NUMBER
        ======================================== */}
        <div>

          <label
            htmlFor="phone"
            className="block mb-2"
          >
            Phone Number
          </label>

          <div className="relative">

            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Phone className="w-5 h-5 text-gray-400" />
            </div>

            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              maxLength={10}
              className="
                w-full
                bg-[#333333]
                rounded
                pl-10
                pr-4
                py-3
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-[#4ECDC4]
              "
              required
            />

          </div>
        </div>


        {/* =======================================
            PASSWORD
        ======================================== */}
        <div>

          <label
            htmlFor="password"
            className="block mb-2"
          >
            Password
          </label>

          <div className="relative">

            {/* LOCK ICON */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>


            {/* PASSWORD INPUT */}
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="
                w-full
                bg-[#333333]
                rounded
                pl-10
                pr-10
                py-3
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-[#4ECDC4]
              "
              required
            />


            {/* SHOW PASSWORD */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute
                inset-y-0
                right-0
                flex
                items-center
                pr-3
                cursor-pointer
              "
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-400" />
              ) : (
                <Eye className="w-5 h-5 text-gray-400" />
              )}
            </button>

          </div>
        </div>


        {/* =======================================
            SIGN UP BUTTON
        ======================================== */}
        <button
          type="submit"
          className="
            w-full
            py-3
            rounded
            bg-gradient-to-r
            from-[#4ECDC4]
            to-[#2d8a84]
            text-white
            hover:opacity-90
            font-medium
            transition
            duration-200
            mt-2
          "
        >
          Sign Up
        </button>


        {/* =======================================
            LOGIN LINK
        ======================================== */}
        <div className="text-center mt-4">

          <p className="text-gray-300">

            Already have an account?{" "}

            <Link
  href="/"
  className="
    text-blue-400
    hover:text-blue-300
    font-medium
    transition
    hover:underline
  "
>
  Login
</Link>

          </p>

        </div>

      </form>
    </div>
  );
}