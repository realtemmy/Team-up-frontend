import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import axiosService from "@/axios";

const Register = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const validateEmail = (email) => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!email || email.length < 1) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Email is not valid";
    } else {
      return "";
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }

    return "";
  };
  const onRegisterSuccess = (response) => {
    console.log("Google registration success: ", response);
  };
  const onRegisterError = (error) => {
    console.log("Google registration error: ", error);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    if (emailError || passwordError) {
      console.log(emailError, passwordError);
    } else {
      const res = axiosService.post("/auth/register", { formFields });
    }
  };
  return (
    <div
      style={{
        minWidth: "300px",
        maxWidth: "600px",
        margin: "0 auto",
        height: "100%",
        marginTop: "40px",
      }}
      className="mt h-screen border rounded-lg shadow bg-gray-100"
    >
      <div className="w-ful bg-white rounded-lg shadow px-8 py-4">
        <h4 className="font-bold text-3xl text-center">Create account</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <Label htmlFor="name">Name</Label>

            <Input type="text" name="name" id="name" placeholder="John Doe" />
          </div>
          <div className="mb-4 relative">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Johndoe@mail.com"
              onChange={(e) =>
                setFormFields({ ...formFields, email: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <Label htmlFor="password">Password</Label>

            <Input
              type="password"
              name="password"
              placeholder="********"
              onChange={(e) =>
                setFormFields({ ...formFields, password: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex mt-4 gap-1">
              <Label htmlFor="checkbox" className="cursor-pointer">
                Remember me
              </Label>
              <Checkbox id="checkbox" />
            </div>
            <div className="text-sm font-semibold">Forgot password?</div>
          </div>
          <div className="my-2 text-end w-full">
            <Button className="w-full">Login</Button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </form>
        <hr className="my-4" />
        {/* Google and Github sign in */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <GoogleLogin
            onSuccess={onRegisterSuccess}
            onError={onRegisterError}
          />
          <Button variant="outline" className="col-span-2 md:col-span-1">
            Sign up with Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
