import type { SxProps, Theme } from "@mui/material/styles";

export const useStyles = (theme: Theme) => ({
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: "linear-gradient(45deg, #00a4aa, #000)",
    color: "black",
    boxShadow: 3,
    padding: theme.spacing(2),
  } as SxProps<Theme>,

  card: {
    width: "100%",
    maxWidth: "350px",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    backdropFilter: "blur(12px)",
    backgroundColor: "#DDDDDD",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
    color: "#000",
  } as SxProps<Theme>,

  heading: {
    fontSize: "1.8rem",
    fontWeight: 600,
    textAlign: "center",
    color: "#000",
  } as SxProps<Theme>,

  button: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(1.2),
    paddingBottom: theme.spacing(1.2),
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#00a4aa",
    color: "#000",
    "&:hover": {
      backgroundColor: "#007e88",
    },
  } as SxProps<Theme>,

  footerText: {
    mt: 2,
    fontSize: "0.875rem",
    textAlign: "center",
    color: "#000",
  } as SxProps<Theme>,

  link: {
    fontWeight: 500,
    color: "#00a4aa",
    textDecoration: "none",
    "&:hover": {
      color: "#007e88",
    },
  } as SxProps<Theme>,

  inputStyles: {
    input: {
      color: "#000",
    },
    "& .MuiInputLabel-root": {
      color: "#000",
      "&.Mui-focused": {
        color: "#00a4aa",
      },
    },
    "& .MuiOutlinedInput-root": {
      color: "#000",
      backgroundColor: "#fff",
      "& fieldset": {
        borderColor: "#00a4aa",
      },
      "&:hover fieldset": {
        borderColor: "#00a4aa",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00a4aa",
      },
    },
  } as SxProps<Theme>,
});
