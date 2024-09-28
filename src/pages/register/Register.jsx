import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { setUser } from "@/redux/user/userSlice";
import axiosService from "@/axios";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formFields, setFormFields] = useState({
    name: "",
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

  const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) {
      return "Confirm password is required";
    } else if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = validateEmail(formFields.email);
    const passwordError = validatePassword(formFields.password);
    const confirmPasswordError = validateConfirmPassword(
      formFields.password,
      formFields.confirmPassword
    );

    if (emailError || passwordError || confirmPasswordError) {
      setErrors({
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
      return;
    }
    const { data, token } = await axiosService.post("/user/signup", formFields);
    // console.log(data, token);

    localStorage.setItem("token", token);
    dispatch(setUser(data));
    toast.success("User created successfully");
    navigate("/");
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
      <div className="w-full bg-white rounded-lg shadow px-8 py-4">
        <h4 className="font-bold text-3xl text-center">Create account</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              onChange={(e) =>
                setFormFields({ ...formFields, name: e.target.value })
              }
            />
          </div>
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
              onChange={(e) => {
                setFormFields({ ...formFields, email: e.target.value });
                setErrors({ email: validateEmail(e.target.value) });
              }}
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
              placeholder="********"
              onChange={(e) => {
                setFormFields({ ...formFields, password: e.target.value });
                setErrors({ password: validatePassword(e.target.value) });
              }}
              className={errors.password && "focus-visible:ring-red-500"}
            />
          </div>
          <div className="relative">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            {errors.confirmPassword && (
              <span className="text-sm text-red-500 absolute right-0">
                {errors.confirmPassword}
              </span>
            )}
            <Input
              type="password"
              name="confirmPassword"
              placeholder="********"
              onChange={(e) => {
                setFormFields({
                  ...formFields,
                  confirmPassword: e.target.value,
                });
                setErrors({
                  confirmPassword: validateConfirmPassword(
                    formFields.password,
                    e.target.value
                  ),
                });
              }}
              className={errors.confirmPassword && "focus-visible:ring-red-500"}
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
            <Button className="w-full">Register</Button>
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
      </div>
    </div>
  );
};

export default Register;
