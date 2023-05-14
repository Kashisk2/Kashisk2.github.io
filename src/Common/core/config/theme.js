import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 567,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
      grey: "#D9D9D9",
      darkBlue: "#003260",
      lightBlue: "#D9EDFF",
      pageBackground: "#FBFBFF",
      green: "#479706",
      orange: "#FBBF24",
      borderColor: "#EBEBEB",
    },
    gradient: {
      buttonBg: "linear-gradient(90deg, #664CCD 0%, #8F5DE5 100%)",
    },
    primary: {
      light: "#728ff8",
      main: "#8F5DE5",
      dark: "#0f40ec",
      contrastText: "#ffffff",
    },

    secondary: {
      light: "#067ae6",
      main: "#0053A0",
      dark: "#0053A0",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#464646",
    },
    error: {
      main: red.A700,
    },
  },
  typography: {
    lineHeight: 1.3,
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
  },
});

theme = createTheme({
  ...theme,
  typography: {
    h1: {
      fontWeight: "600",
      fontSize: "32px",
      lineHeight: "48px",
      letterSpacing: "normal",
    },
    h2: {
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "36px",
      letterSpacing: "normal",
    },
    h3: {
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "32px",
      letterSpacing: "normal",
      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
    subtitle1: {
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "28px",
      letterSpacing: "normal",
    },
    subtitle2: {
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "22px",
      letterSpacing: "normal",
    },
    body1: {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
    },
    body2: {
      fontWeight: "400",
      fontSize: "14px",
    },
    button: {
      fontWeight: "400",
    },
    caption: {
      fontWeight: "400",
      fontSize: "12px",
    },
    overline: {
      fontWeight: "400",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
        containedSecondary: {
          background: theme.palette.gradient.buttonBg,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: theme.palette.common.borderColor,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 22,
          padding: 0,

          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 4,
            transitionDuration: "300ms",
            "&.Mui-checked": {
              transform: "translateX(20px)",
              color: "#fff",
              "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.primary.main,
                opacity: 1,
                border: 0,
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
              color: "#33cf4d",
              border: "6px solid #fff",
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
              color:
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[600],
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
            },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 14,
            height: 14,
          },
          "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.grey[300],
            opacity: 1,
            transition: theme.transitions.create(["background-color"], {
              duration: 500,
            }),
          },
        },
      },
    },
  },
});

export default theme;
