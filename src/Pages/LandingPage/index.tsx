import {
  Avatar,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  ListItemButton,
  ListItemText,
  Rating,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Style from "./LandingPage.style";
import Logo from "../../assets/logo.png";
import KashiImage from "../../assets/KashiImage.png";
import HeartEmoji from "../../assets/HeartEmoji.png";
import CoolEmoji from "../../assets/CoolEmoji.png";
import Html from "../../assets/Html.png";
import NodeJs from "../../assets/NodeJs.png";
import Humble from "../../assets/Humble.png";
import cssLogo from "../../assets/cssLogo.png";
import "./index.css";
import {
  Call,
  Close,
  GitHub,
  LinkedIn,
  Menu,
  WhatsApp,
} from "@mui/icons-material";
import { SyntheticEvent, useState } from "react";
const LandingPage = () => {
  const [open, setState] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };
  return (
    <Box>
      <Box
        id="nav"
        sx={{
          backgroundColor: "common.black",
          py: 1,
          zIndex: "100",
          position: "sticky",
          top: 0,
        }}
      >
        <Container maxWidth="xl" sx={{ maxWidth: "1200px !important" }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,

              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "150px" }}>
              <img src={Logo} width="100%" />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              <Typography variant="caption" sx={Style.NavTab}>
                Home
              </Typography>
              <Typography variant="caption" sx={Style.NavTab}>
                Service
              </Typography>
              <Typography variant="caption" sx={Style.NavTab}>
                Work
              </Typography>
              <Typography variant="caption" sx={Style.NavTab}>
                Portfolio
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontSize: "12px",
                  borderRadius: "100px",
                  fontWeight: 600,
                }}
              >
                Contact
              </Button>
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleDrawer(true)}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <Menu fontSize="large" sx={{ color: "white" }} />
            </IconButton>

            <SwipeableDrawer
              anchor="top"
              open={open}
              onClose={() => toggleDrawer(false)}
              onOpen={() => toggleDrawer(true)}
            >
              <Box sx={Style.DrawerBlock}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "150px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <img src={Logo} width="100%" />
                  </Box>
                  <IconButton onClick={() => toggleDrawer(false)}>
                    <Close sx={{ color: "white", p: 2 }} />
                  </IconButton>
                </Box>

                <Divider sx={{ mb: 2, borderColor: "white" }} />

                <Box sx={{ mb: 2 }}>
                  {/* <ListItemButton>
                  <ListItemText
                    primary="Pricing"
                    onClick={(e) => {
                      navigate(PageRoutes.PricingPage);
                      toggleDrawer(false);
                    }}
                  />
                </ListItemButton> */}
                  <ListItemButton>
                    <ListItemText
                      sx={{ ...Style.NavTab, px: 0 }}
                      primary="Home"
                      onClick={(e) => {
                        toggleDrawer(false);
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText
                      sx={{ ...Style.NavTab, px: 0 }}
                      primary="Service"
                      onClick={() => {
                        toggleDrawer(false);
                      }}
                    />
                  </ListItemButton>

                  <ListItemButton>
                    <ListItemText
                      sx={{ ...Style.NavTab, px: 0 }}
                      primary="Work"
                      onClick={() => {
                        toggleDrawer(false);
                      }}
                    />
                  </ListItemButton>

                  <ListItemButton>
                    <ListItemText
                      sx={{ ...Style.NavTab, px: 0 }}
                      primary="Portfolio"
                      onClick={() => {
                        toggleDrawer(false);
                      }}
                    />
                  </ListItemButton>
                </Box>
              </Box>
            </SwipeableDrawer>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: " #000000",
          //   backgroundImage: "linear-gradient(147deg,#000000   0%,#242227 74%)",
        }}
      >
        <Container maxWidth="xl" sx={{ maxWidth: "1200px !important" }}>
          <Box
            sx={{ display: "flex", alignItems: "center", py: { xs: 2, md: 6 } }}
          >
            <Box
              sx={{
                width: "50%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h1" sx={{ ...Style.Heading }}>
                    Hy! I am <br />
                    <span className="name">Kashiram Shekhda</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "common.grey",
                      mt: 1,
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    MERN Developer with good knowledge in web designing and
                    development, producting the Quality work
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      fontSize: "14px",

                      borderRadius: "100px",
                      fontWeight: 600,
                    }}
                  >
                    Hire me
                  </Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <LinkedIn
                    sx={{
                      color: "#8f5de5",
                      fontSize: { xs: "26px", md: "40px" },
                    }}
                  />
                  <GitHub
                    sx={{
                      color: "#8f5de5",
                      fontSize: { xs: "26px", md: "40px" },
                    }}
                  />
                  <WhatsApp
                    sx={{
                      color: "#8f5de5",
                      fontSize: { xs: "26px", md: "40px" },
                    }}
                  />
                  <Call
                    sx={{
                      color: "#8f5de5",
                      fontSize: { xs: "26px", md: "40px" },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",

                justifyContent: "flex-end",
              }}
            >
              <Box
                className="image-container"
                sx={{
                  position: "relative",
                  width: { xs: 1, md: "55%" },
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Avatar
                  src={KashiImage}
                  sx={{
                    width: "100%",
                    height: "100%",

                    maxWidth: "100%",

                    verticalAlign: "middle",
                    borderRadius: "0px",
                  }}
                  alt=""
                />
                <div className="overlay"></div>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              py: { xs: 4, md: 6 },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: { xs: 0.5, md: "auto" },
                minWidth: { xs: "0px", md: "400px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,

                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h1" sx={Style.Heading}>
                    My Awesome
                    <br />
                    <span className="name">Services</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "common.grey",
                      mt: 1,
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    MERN Developer (Frontend and Backend)
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      fontSize: "14px",

                      borderRadius: "100px",
                      fontWeight: 600,
                    }}
                  >
                    Download CV
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              className="scrollBar"
              sx={{
                display: "flex",
                overflow: "auto",
                px: 2,
                width: { xs: 0.5, md: "auto" },
                gap: 4,
              }}
            >
              <Box className="card" sx={Style.Cards}>
                <img
                  src={HeartEmoji}
                  width="60px"
                  height={"60px"}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
                <Typography
                  sx={{ color: "common.white", fontWeight: 600 }}
                  variant="h6"
                >
                  Design
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "common.grey", mt: 1 }}
                >
                  Chakra UI, Material UI, Styled-Components, Bootstrap & more
                </Typography>
              </Box>
              <Box sx={Style.Cards}>
                <img src={CoolEmoji} width="60px" height={"60px"} alt="" />
                <Typography
                  sx={{ color: "common.white", fontWeight: 600 }}
                  variant="h6"
                >
                  Development
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "common.grey", mt: 1 }}
                >
                  HTML, CSS, JavaScript, React, Redux, NodeJs, ExpressJs,
                  MongoDB, Mongoose
                </Typography>
              </Box>
              <Box sx={Style.Cards}>
                <img src={Humble} width="60px" height={"60px"} alt="" />
                <Typography
                  sx={{ color: "common.white", fontWeight: 600 }}
                  variant="h6"
                >
                  Design
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "common.grey", mt: 1 }}
                >
                  Chakra UI, Material UI, Styled-Components, Bootstrap & more
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 6,
              py: { xs: 4, md: 6 },
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  color: "common.white",
                  fontSize: "48px",
                  lineHeight: "54px",
                  cursor: "pointer",
                  ...Style.UnderlineEffect,
                }}
              >
                <span className="name">Skills</span>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                columnGap: 3,
                rowGap: 4,
                px: 1,
                width: 1,
              }}
            >
              <Box className="my-div">
                <img src={Html} alt="" />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "common.grey" }}
                >
                  HTML
                </Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
              <Box className="my-div">
                <img src={Html} alt="" />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "common.grey" }}
                >
                  CSS
                </Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>{" "}
              <Box className="my-div">
                <img src={Html} alt="" />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "common.grey" }}
                >
                  HTML
                </Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>{" "}
              <Box className="my-div">
                <img src={Html} alt="" />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "common.grey" }}
                >
                  HTML
                </Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>{" "}
              <Box className="my-div">
                <img src={Html} alt="" />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "common.grey" }}
                >
                  HTML
                </Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>{" "}
              <Box className="my-div">
                <img src={Html} alt="" />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "common.grey" }}
                >
                  HTML
                </Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>{" "}
              <Box className="my-div">
                <img src={Html} alt="" />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "common.grey" }}
                >
                  HTML
                </Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>{" "}
              <Box className="my-div">
                <img src={NodeJs} alt="" />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "common.grey" }}
                >
                  NodeJs
                </Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>{" "}
              <Box className="my-div">
                <img src={Html} alt="" />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "common.grey" }}
                >
                  HTML
                </Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
export default LandingPage;
