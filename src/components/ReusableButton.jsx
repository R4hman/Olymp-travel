import { Button, useMediaQuery } from "@mui/material";

const ReusableButton = ({
  link,
  children,
  color = "black",
  bgColor,
  onClick,
  width,
  height,
  size,
}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Button
      href={link}
      onClick={onClick}
      sx={{
        // width: {
        //   xs: "100%",
        //   sm: "100%",
        //   // md: `${width}`,
        // },
        width: isMobile ? "100%" : width,
        height: height + "px",
        backgroundColor: bgColor,
        padding: "8px 16px",
        fontSize: size,
        fontWeight: 600,
        color: color,
        textTransform: "none",
        "&:hover": {
          backgroundColor: bgColor,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default ReusableButton;
