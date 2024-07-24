import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { toast } from "react-toastify";
// import axios from "axios";
import "./../../style/form.css";


function Register() {
  const [registerData, SetregisterData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { interest: [] },
  });

  const onSubmit = async (data) => {
    SetregisterData(data);
    console.log(registerData);
    toast.success(`Register Success!`);
    // Xử lý đăng ký ở đây
    // try {
    //   let res = await axios.post("http://10.82.60.26:3001/user/register", {
    //     username: data.name,
    //     email: data.email,
    //     password: data.password,
    //     full_name: data.fullname,
    //   });
    //   console.log(res.data);
    

    // } catch (error) {
    //   console.log(error.message);
    // }

    // console.log(registerData);
  };

  //   useEffect(()=> {
  //     console.log(registerData);
  //   })

  return (
    <>
      <div className="container mb-5">
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-md-6 col-lg-10">
            <div className="card shadow-lg p-4 gradient-background">
              <h3>Register Form</h3>
              <div className="row no-gutters">
                <div className="col-lg-5">
                  <img
                    src="https://i.pinimg.com/564x/44/6d/93/446d93702f14f2c09549fdce5500b8ec.jpg"
                    className="img-fluid"
                    alt="login"
                  />
                </div>
                <div className="col-lg-7">
                  <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="form-label">Tên</Form.Label>
                      <Form.Control
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Tên không được để trống",
                          },
                          pattern: {
                            value: /^[A-Za-z]/,
                            message: "Tên không đúng định dạng",
                          },
                        })}
                        type="name"
                        placeholder="Tên..."
                      />
                    </Form.Group>
                    <Form.Text>
                      {errors.name && (
                        <Alert variant={"danger"}>{errors.name.message}</Alert>
                      )}
                    </Form.Text>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email không được để trống",
                          },
                          pattern: {
                            value:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email không đúng định dạng",
                          },
                        })}
                        type="email"
                        placeholder="Email..."
                      />
                    </Form.Group>
                    <Form.Text>
                      {errors.email && (
                        <Alert variant={"danger"}>
                         {errors.email.message}
                        </Alert>
                      )}
                    </Form.Text>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        {...register("password", {
                          required: {
                            value: true,
                            message: "password không được để trống",
                          },
                          minLength: {
                            value: 6,
                            message: "password không được nhỏ hơn 6 ký tự",
                          },
                        })}
                        type="password"
                        placeholder="Password..."
                      />
                    </Form.Group>
                    <Form.Text>
                      {errors.password && (
                        <Alert variant={"danger"}>
                          {errors.password.message}
                        </Alert>
                      )}
                    </Form.Text>

                    <Form.Group className="mb-3">
                      <Form.Check
                        type="radio"
                        name="gender"
                        label={`Male`}
                        value={0}
                        {...register("gender", {
                          required: {
                            value: true,
                            message: "gender không được để trống",
                          },
                        })}
                      />
                      <Form.Check
                        type="radio"
                        name="gender"
                        value={1}
                        label={`Famele`}
                        {...register("gender", {
                          required: {
                            value: true,
                            message: "gender không được để trống",
                          },
                        })}
                      />
                    </Form.Group>
                    <Form.Text>
                      {errors.gender && (
                        <Alert variant={"danger"}>
                          {errors.gender.message}
                        </Alert>
                      )}
                    </Form.Text>

                    <Form.Group className="mb-3">
                      <Form.Select
                        {...register("Country", {
                          required: true,
                        })}
                        className="Country"
                      >
                        <option value="">Country</option>
                        <option value="1">Việt Nam</option>
                        <option value="2">Nga</option>
                        <option value="3">Mỹ</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Text>
                      {errors.Country && (
                        <Alert variant={"danger"}>
                          Ngành không được để trống!
                        </Alert>
                      )}
                    </Form.Text>

                     <Form.Group className="mb-3">
                      <Form.Label>Bio</Form.Label>
                      <Form.Control as="textarea" rows={3}
                       {...register("bio", {
                        required: {
                          value: true,
                          message: "Bio Không được để trống",
                        },
                      })}
                      />
                
                    </Form.Group>
                    <Form.Text>
                      {errors.bio && (
                        <Alert variant={"danger"}>
                          {errors.bio.message}
                        </Alert>
                      )}
                    </Form.Text>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="form-label">Birthday</Form.Label>
                      <Form.Control
                        {...register("date", {
                          required: {
                            value: true,
                            message: "Birthday không được để trống",
                          }
                        })}
                        type="date"
                      />
                    </Form.Group>
                    <Form.Text>
                      {errors.date && (
                        <Alert variant={"danger"}>{errors.date.message}</Alert>
                      )}
                    </Form.Text>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="form-label">Appointment</Form.Label>
                      <Form.Control
                        {...register("Appointment", {
                          required: {
                            value: true,
                            message: "Appointment không được để trống",
                          }
                        })}
                      type="datetime-local"
                      />
                    </Form.Group>
                    <Form.Text>
                      {errors.Appointment && (
                        <Alert variant={"danger"}>{errors.Appointment.message}</Alert>
                      )}
                    </Form.Text>



                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Hobbies</Form.Label>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Nghe Nhạc"
                        value="ListenMusic"
                        className="interest"
                        name="interest"
                        {...register("Hobbies", {
                          required: {
                            value: true,
                            message: "Hobbies không được để trống",
                          }
                        })}
                      />
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Xem phim"
                        value="watchMove"
                        className="interest"
                        name="interest"
                        {...register("Hobbies", {
                          required: {
                            value: true,
                            message: "Hobbies không được để trống",
                          }
                        })}
                      />
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Chơi thể thao"
                        value="palysport"
                        className="interest"
                        name="interest"
                        {...register("Hobbies", {
                          required: {
                            value: true,
                            message: "Hobbies không được để trống",
                          }
                        })}
                      />
                      </Form.Group>
                    <Form.Text>
                      {errors.Hobbies && (
                        <Alert variant={"danger"}>
                          {errors.Hobbies.message}
                        </Alert>
                      )}
                    </Form.Text>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="form-label">Address</Form.Label>
                      <Form.Control
                        {...register("address", {
                          required: {
                            value: true,
                            message: "Address không được để trống",
                          }
                        })}
                      type="text"
                      />
                    </Form.Group>
                    <Form.Text>
                      {errors.address && (
                        <Alert variant={"danger"}>{errors.address.message}</Alert>
                      )}
                    </Form.Text>


                    <Form.Group className="row col-12" controlId="formBasicEmail">
                      <div className="col-lg-6">
                      <Form.Label className="form-label">City</Form.Label>
                      <Form.Control
                        {...register("city", {
                          required: {
                            value: true,
                            message: "City không được để trống",
                          }
                        })}
                      type="text"
                      className="mb-3"
                      />
                      <Form.Text>
                      {errors.city && (
                        <Alert variant={"danger"}>{errors.city.message}</Alert>
                      )}
                    </Form.Text>
                      </div>

                      <div className="col-lg-6">
                      <Form.Label className="form-label">Zip Code</Form.Label>
                      <Form.Control
                        {...register("zipcode", {
                          required: {
                            value: true,
                            message: "Zip Code không được để trống",
                          }
                        })}
                      type="text"
                       className="mb-3"
                      />
                      <Form.Text className="mt-3" >
                      {errors.zipcode && (
                        <Alert variant={"danger"}>{errors.zipcode.message}</Alert>
                      )}
                    </Form.Text>
                      </div>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Đăng Ký
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
