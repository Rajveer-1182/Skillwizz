"use client";

import SignupForm from "@/components/singup-form";

export default function SignupPage() {
  const handleSignup = (userType: "employer" | "employee") => {
    console.log(`Signed up as ${userType}`);
  };

  return (
    <main className="min-h-screen bg-[#000c2a] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-[#00418d] p-6 shadow-2xl sm:p-8">
        <SignupForm onSignup={handleSignup} />
      </div>
    </main>
  );
}