import * as yup from "yup";

export const SigninSchema = yup.object({
  fullName: yup.string().required("Full name required!"),
  email: yup.string().required("Email required!"),
  username: yup.string().required("Username required!"),
  password: yup.string().required("Password required!"),
  avatar: yup.string().required("Avatar required!"),
});
