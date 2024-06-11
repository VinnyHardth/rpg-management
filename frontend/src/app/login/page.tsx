"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface FormData {
  login: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const requestData = {
        username: data.login, // Assuming login field contains either username or email
        email: data.login, // Assuming login field contains either username or email
        password: data.password,
      };

      const response = await fetch("http://localhost:3000/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const userData = await response.json();
        // Assuming you have a function to handle successful login and pass user data to it
        console.log(userData);
        router.push("/");
      } else {
        console.error("Login failed");
        // Handle login failure
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle error
    }
  };

  return (
    <main>
      <div className="container-fluid d-flex min-vh-100">
        <div className="row min-vw-100">
          <div className="col-12 col-md-4 bg-light d-flex justify-content-center align-items-center">
            <h2>Welcome!</h2>
          </div>
          <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="login" className="form-label">
                  Username or Email
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="login"
                  {...register("login", {
                    required: "Username or email is required",
                  })}
                  aria-invalid={errors.login ? "true" : "false"}
                />
                {errors.login && (
                  <span className="text-danger">{errors.login.message}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </div>

              <div className="d-grid col-12">
                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </div>

              <div className="text-center mt-3">
                <Link href="/register" className="btn btn-link">
                  Don&apos;t have an account? Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
