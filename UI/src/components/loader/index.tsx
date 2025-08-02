import { Box } from "@mui/material";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="70vh"
    >
      {/* Red layer (slightly larger) */}
      <Box position="absolute">
        <PuffLoader color="#3ca89f" size={85} />
      </Box>
    </Box>
  );
};

export default Loader;
