import { useRef } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import { ITEMDATA } from "./constants";

const SlidingImageList = () => {
  const scrollRef = useRef<HTMLUListElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        maxWidth: "1200px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "black",
          transition: "color 0.3s ease",
          "&:hover": {
            color: "#00a4aa",
            backgroundColor: "transparent",
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <ImageList
        ref={scrollRef}
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        cols={ITEMDATA.length}
        rowHeight={350}
      >
        {ITEMDATA.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              flex: "0 0 auto",
              width: 250,
              position: "relative",
              "&:hover": {
                border: "2px solid #00a4aa",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            <img
              srcSet={`${item.img}?w=250&h=350&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=250&h=350&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                color: "#fff",
                padding: "20px",
              }}
            >
              <Box sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                {item.title}
              </Box>
              <Box sx={{ fontSize: "0.875rem" }}>
                {item.description}
              </Box>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "black",
          transition: "color 0.3s ease",
          "&:hover": {
            color: "#00a4aa",
            backgroundColor: "transparent",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default SlidingImageList;
