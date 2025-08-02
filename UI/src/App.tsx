import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Loader from "./components/loader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box sx={{ bg: "black" }}>
\        <Button
          variant="outlined"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Typography variant="h3">Hello Bro</Typography>
        {count > 2 && <Loader />}
      </Box>
    </>
  );
}

export default App;
