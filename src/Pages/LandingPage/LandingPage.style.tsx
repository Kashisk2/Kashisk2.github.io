const Style = {
  NavTab: {
    color: "common.white",
    fontWeight: "600",
    cursor: "pointer",
    py: 0.25,
    px: 1,

    lineHeight: "22px",
    borderBottom: "1px solid transparent",

    ":after": {
      display: "block",
      content: `""`,
      borderBottom: "solid 3px #664CCD",
      transform: "scaleX(0)",
      transition: " transform 250ms ease-in-out",
    },

    ":hover:after": { transform: " scaleX(1)" },
  },
  DrawerBlock: {
    p: 2,
    bgcolor: "common.black",
    height: 1,
  },
  UnderlineEffect: {
    borderBottom: "1px solid transparent",

    ":after": {
      display: "block",
      content: `""`,
      borderBottom: "solid 3px #664CCD",
      transform: "scaleX(0)",
      transition: " transform 250ms ease-in-out",
    },

    ":hover:after": { transform: " scaleX(1)" },
  },
  Cards: {
    background: "linear-gradient(90deg, #664CCD 0%, #8F5DE5 100%)",
    borderRadius: "4px",
    width: { xs: "162px", md: "180px" },
    px: 2,
    boxShadow:
      "0px 3px 3px 0px rgba(138,  43 ,  226 ,0.12),0px 3px 6px 0px rgba(138,  43 ,  226 ,0.22),0px 5px 10px 0px rgba(138,  43 ,  226 ,0.2),0px 8px 12px 1px rgba(138,  43 ,  226 ,0.19)",
    py: 3,
    display: "inline-block",
    flex: "0 0 auto",

    textAlign: "center",
  },
  Heading: {
    color: "common.white",

    fontSize: { xs: "19px", md: "48px" },
    lineHeight: { xs: "30px", md: "54px" },
  },
};
export default Style;
