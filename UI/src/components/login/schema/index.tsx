import * as yup from "yup";

export const LoginSchema = yup.object({
  username: yup.string().required("Username required!"),
  password: yup.string().required("Password required!"),
});
