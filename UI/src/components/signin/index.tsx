import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import { SIGNIN as SigninProps } from "./types";
import { SigninSchema } from "./schema";
import { useStyles } from "./styles";
import TextInput from "../textField";

const SignIn = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const methods = useForm<SigninProps>({
    mode: "onChange",
    resolver: yupResolver(SigninSchema),
  });

  const onSubmit = (data: SigninProps) => {
    console.log("Signin submitted:", data);
  };

  return (
    <FormProvider {...methods}>
      <Box sx={styles.page}>
        <Box sx={styles.card}>
          <Typography sx={styles.heading}>Sign In</Typography>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            style={{ width: "100%" }}
          >
            <TextInput
              name="fullName"
              label="Full Name"
              placeholder="Enter full name"
              control={methods.control}
              error={methods.formState.errors?.fullName?.message}
              sx={styles.inputStyles}
            />
            <TextInput
              name="email"
              label="Email"
              placeholder="Enter email"
              control={methods.control}
              error={methods.formState.errors?.email?.message}
              sx={styles.inputStyles}
            />
            <TextInput
              name="username"
              label="Username"
              placeholder="Enter username"
              control={methods.control}
              error={methods.formState.errors?.username?.message}
              sx={styles.inputStyles}
            />
            <TextInput
              name="password"
              label="Password"
              placeholder="Enter password"
              control={methods.control}
              error={methods.formState.errors?.password?.message}
              type="password"
              sx={styles.inputStyles}
            />
            <TextInput
              name="avatar"
              label="Avatar"
              placeholder="Enter avatar"
              control={methods.control}
              error={methods.formState.errors?.avatar?.message}
              sx={styles.inputStyles}
            />
            <TextInput
              name="coverImage"
              label="Cover Image"
              placeholder="Enter cover image"
              control={methods.control}
              error={methods.formState.errors?.coverImage?.message}
              sx={styles.inputStyles}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={styles.button}
            >
              Signin
            </Button>
            <Typography sx={styles.footerText}>
              Already a user?{" "}
              <Link href="/login" underline="hover" sx={styles.link}>
                Login
              </Link>
            </Typography>
          </form>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default SignIn;
