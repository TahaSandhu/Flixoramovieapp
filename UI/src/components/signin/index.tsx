import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <FormProvider {...methods}>
      <Box sx={styles.page}>
        <Box sx={styles.card}>
          <Typography sx={styles.heading}>Sign In</Typography>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            style={{ width: "100%" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                type="email"
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
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{
                  mt: 1,
                  backgroundColor: "#00a4aa",
                  color: "#000",
                  padding: 2,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#007e88",
                  },
                }}
              >
                Upload avatar
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  multiple
                />
              </Button>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{
                  mt: 1,
                  mb: 2,
                  backgroundColor: "#00a4aa",
                  color: "#000",
                  padding: 2,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#007e88",
                  },
                }}
              >
                Upload cover image
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  multiple
                />
              </Button>
            </Box>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={styles.button}
            >
              Sign In
            </Button>
            <Typography sx={styles.footerText}>
              Already a member?{" "}
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
