import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Box } from "@mui/material";

const Section = ({ id, isLeft, children, onInView }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150); // 50ms suele ser suficiente

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    onInView(inView);
  }, [inView, onInView]);

  return (
    <Box
      ref={ref}
      id={id}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        // pt: id !== "contactUs" ? { xs: 14, sm: 14, md: 17 } : 0,

        pt: { xs: 10, sm: 12 },
        px: 2,
        pb: 3,
        overflow: "hidden", // Para que no se vea fuera del contenedor al animar
      }}
    >
      <Box
        sx={
          isLeft
            ? {
                position: "relative",
                zIndex: 2,
                maxWidth: 1200,
                width: "100%",
                transform: inView ? "translateX(0)" : "translateX(-120px)",
                opacity: inView ? 1 : 0,
                transition: "transform 1s ease, opacity 1s ease",
              }
            : {
                position: "relative",
                zIndex: 2,
                maxWidth: 1200,
                width: "100%",
                transform: inView ? "translateX(0)" : "translateX(120px)",
                opacity: inView ? 1 : 0,
                transition: "transform 1s ease, opacity 1s ease",
              }
        }
      >
        {children}
      </Box>
    </Box>
  );
};

export default Section;
