import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";

import axiosService from "@/axios";

const Login = () => {
  const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

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

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(newEmail),
    }));
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: validatePassword(newPassword),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    if (emailErr || passwordErr) {
      return setErrors({
        email: emailErr,
        password: passwordErr,
      });
    }

    try {
      const res = await axiosService.post("/user/login", { email, password });
      const { token, user } = res;
      console.log(token, user);
      localStorage.setItem("token", token);
    } catch (error) {
      toast.error("There was an error");
      console.log("Error: ", error);
    }
  };

  const onGooglgSuccess = (response) => {
    console.log("Google response: ", response);
  };
  const onGoogleError = (error) => {
    console.log("Google error: ", error);
  };

  // let passwordRegex = /[a]/;

  // setEmailError(emailRegex.test(email));

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
        <h4 className="font-bold text-3xl text-center">Welcome back</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <Label htmlFor="email">Email</Label>
            {errors.email && (
              <span className="text-sm text-red-500 absolute right-0">
                {errors.email}
              </span>
            )}

            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Johndoe@mail.com"
              onChange={handleEmailChange}
              className={errors.email && "focus-visible:ring-red-500"}
            />
          </div>
          <div className="relative">
            <Label htmlFor="password">Password</Label>
            {errors.password && (
              <span className="text-sm text-red-500 absolute right-0">
                {errors.password}
              </span>
            )}

            <Input
              type="password"
              name="password"
              className={errors.password && "focus-visible:ring-red-500"}
              placeholder="********"
              onChange={handlePasswordChange}
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
            Don't have an account yet,{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </p>
        </form>
        <hr className="my-4" />
        {/* Google and Github sign in */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <GoogleLogin
            onSuccess={onGooglgSuccess}
            onError={onGoogleError}
            text="Sign up with Google"
          />
          <Button variant="outline" className="col-span-2 md:col-span-1">
            Sign in with Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
