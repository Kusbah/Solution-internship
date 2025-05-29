import { useForm } from "react-hook-form"
import {z} from "zod";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().min(1, { message: "Email address is required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters longs" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/');
  };
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data)=>{
    console.log(data)
  }

  return (
    <div>
      <Row>
        <Col md={{ span: 6, offset: 4 }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label className="text">First Name</Form.Label>
              <Form.Control type="text" {...register("firstName")} isInvalid={!!errors.firstName?.message}/>
              <Form.Control.Feedback type="invalid">
                 {errors.firstName?.message}
              </Form.Control.Feedback>            
              </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text">Last Name</Form.Label>
              <Form.Control type="text" {...register("lastName")} isInvalid={!!errors.lastName?.message}/>
              <Form.Control.Feedback type="invalid">
                 {errors.lastName?.message}
              </Form.Control.Feedback>   
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text">Email address</Form.Label>
              <Form.Control type="text" {...register("email")} isInvalid={!!errors.email?.message}/>
              <Form.Control.Feedback type="invalid">
                 {errors.email?.message}
              </Form.Control.Feedback>   
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text">Password</Form.Label>
              <Form.Control type="password" {...register("password")} isInvalid={!!errors.password?.message}/>
              <Form.Control.Feedback type="invalid">
                 {errors.password?.message}
              </Form.Control.Feedback>   
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text">Confirm Password</Form.Label>
              <Form.Control type="password" {...register("confirmPassword")} isInvalid={!!errors.confirmPassword?.message}/>
              <Form.Control.Feedback type="invalid">
                 {errors.confirmPassword?.message}
              </Form.Control.Feedback>   
            </Form.Group>
            <Button variant="primary" type="submit" className="button">
              Submit
            </Button>
          </Form>
          <Button
            variant="info"
            type="button"
            className="button mt-3"
            onClick={goToLogin}
          >
            Login
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
