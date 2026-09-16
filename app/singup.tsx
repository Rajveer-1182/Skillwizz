import SignupForm from "@/components/singup-form";

export default function SingupPage() {
  const handleSignup = (userType: "employer" | "employee") => {
    // Handle the signup logic here, e.g., redirect to a dashboard or show a success message
    console.log(`Signed up as ${userType}`);
  };

  return <SignupForm onSignup={handleSignup} />;
}