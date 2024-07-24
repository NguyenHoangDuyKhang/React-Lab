import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import axios from "axios";

import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import "../../style/form.css";
import Register from "./register";

function TestForm() {
  const [users, SetUsers] = useState(null);

  // Xử lý login khi người dùng login bằng Google
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      SetUsers(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    console.log(decoded);
    SetUsers(decoded);
    localStorage.setItem("user", JSON.stringify(decoded));
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const handleLogout = () => {
    googleLogout();
    SetUsers(null);
    localStorage.removeItem("user");
  };

  // Xử lý login khi người dùng nhập từ input
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    SetUsers(data);
    console.log(data);
    try {
      let res = await axios.post("http://10.82.60.26:3001/auth/login", {
        username: data.email,
        password: data.password,
      });
      console.log(res);
      toast.success(`Login Success!`);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const GetUser = async () => {
    let Token = localStorage.getItem("user");
    console.log(Token);
    const a = JSON.parse(Token);
    try {
      let res = await axios.get("http://10.82.60.26:3001/user", {
        headers: {
          Authorization: `Bearer ${a.access_token}`,
        },
      });
      console.log("Đây là res của GetUster", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetUser()
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-md-6 col-lg-8">
            <div className="card shadow-lg p-4 gradient-background">
              <h3>Login Form</h3>
              <div className="row no-gutters">
                <div className="col-lg-5 text-center">
                  <img
                    src="https://i.pinimg.com/564x/44/6d/93/446d93702f14f2c09549fdce5500b8ec.jpg"
                    className="img-fluid"
                    alt="login"
                  />
                </div>
                <div className="col-lg-7">
                  <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        {...register("email", {
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                        type="email"
                        placeholder="Email..."
                      />
                    </Form.Group>
                    <Form.Text>
                      {errors.email && (
                        <Alert variant={"danger"}>
                          Email không được để trống!
                        </Alert>
                      )}
                    </Form.Text>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="form-label">Mật khẩu</Form.Label>
                      <Form.Control
                        {...register("password", {
                          required: true,
                        })}
                        type="password"
                        placeholder="Password..."
                      />
                    </Form.Group>
                    <Form.Text>
                      {errors.password && (
                        <Alert variant={"danger"}>
                          Tên không được để trống!
                        </Alert>
                      )}
                    </Form.Text>

                    <Button variant="primary" type="submit" className="w-100">
                      Đăng nhập
                    </Button>

                    <Form.Group className="mt-2">
                      <span>Hoặc</span>

                      <div className="row d-flex align-items-center justify-content-center">
                        <div className="login100-social-item bg1">
                          <i class="bi bi-facebook"></i>
                        </div>

                        <div className="login100-social-item bg2">
                          <i class="bi bi-twitter"></i>
                        </div>

                        <div className="login100-social-item bg3">
                          <i class="bi bi-google"></i>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <GoogleLogin
                          onSuccess={handleLoginSuccess}
                          onError={handleLoginError}
                          className="Login row"
                        />
                      </div>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {users && (
        <div>
          <h3>Welcome, {users.email}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      <Register />
    </>
  );
}

export default TestForm;
