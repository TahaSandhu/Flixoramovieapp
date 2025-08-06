import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography, useTheme, Link } from "@mui/material";
import { Login as LoginProps } from "./types";
import { LoginSchema } from "./schema";
import { useStyles } from "./styles";
import TextInput from "../textField";

const Login = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const methods = useForm<LoginProps>({
    mode: "onChange",
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: LoginProps) => {
    console.log("Login:", data);
  };

  return (
    <FormProvider {...methods}>
      <Box sx={styles.page}>
        <Box sx={styles.card}>
          <Typography sx={styles.heading}>Login</Typography>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            style={{ width: "100%" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
            </Box>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={styles.button}
            >
              Login
            </Button>
            <Typography sx={styles.footerText}>
              Not a member?{" "}
              <Link href="/signup" underline="hover" sx={styles.link}>
                Sign In
              </Link>
            </Typography>
          </form>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default Login;
