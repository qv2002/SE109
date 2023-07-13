// import React from "react";
// import { ReactNavbar } from "overlay-navbar"
// import logo from "../../../image/logo.png";

// const options = {

//     logoWidth: "20vmax",
//     logo,
//     burgerColor: "rgba(0, 0, 0, 0.616)",
//     burgerColorHover: " black",
//     navColor1: "white",
//     logoHoverSize: "10px",
//     logoHoverColor: " rgba(0, 0, 0, 0.616)",
//     link1Text: "Trang chủ",
//     link2Text: "Sản phẩm",
//     link3Text: "Liên hệ",
//     link4Text: "Chi tiết",
//     link1Url: "/",
//     link2Url: "/products",
//     link3Url: "/contact",
//     link4Url: "/about",
//     link1Size: "1.3vmax",
//     link1Color: "rgba(0, 0, 0, 0.616)",
//     nav1justifyContent: "flex-end",
//     nav2justifyContent: "flex-end",
//     nav3justifyContent: "flex-start",
//     nav4justifyContent: "flex-start",
//     link1ColorHover: "black",
//     link1Margin: "1vmax",
//     profileIconUrl: "/login",
//     profileIconColor: "rgba(0, 0, 0, 0.616)",
//     searchIconColor: "rgba(0, 0, 0, 0.616)",
//     cartIconColor: "rgba(0, 0, 0, 0.616)",
//     profileIconColorHover: "black",
//     searchIconColorHover: "black",
//     cartIconColorHover: "black",
//     cartIconMargin: "1vmax",
// };
// const Header = () => {
//     return (
//         <ReactNavbar  {...options} />
//     );
// }
// export default Header;


//---------------------------------------------------------------

import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab, Typography, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Menu, AccountCircle, Home, ShoppingCart, Phone, Info } from "@material-ui/icons";
import logo from "../../../image/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogoClick = () => {
    setValue(0);
    history.push("/");
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#ffffff" }}>
      <Toolbar>
        {isMobile ? (
        <>
          <IconButton color="black" onClick={handleDrawerOpen}>
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" style={{ display: "flex", alignItems: "center", cursor: "pointer", margin: "auto" }} onClick={handleLogoClick}>
            <img src={logo} alt="Logo" style={{ height: "80px", width: "160px"}} />
          </Typography>
        </>
        ) : (
          <Typography variant="h6" component="div" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleLogoClick}>
            <img src={logo} alt="Logo" style={{ height: "80px", marginRight: "10px" }} />
            <span style={{ fontWeight: "bold" }}>My Website</span>
          </Typography>
        )}
        {isMobile ? (
          <>
            <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
              <List>
                <ListItem style={{ height: "120px" }} button onClick={handleDrawerClose} component={Link} to="/" selected={value === 0}>
                  <img src={logo} alt="Logo" style={{ display: "block", alignItems: "center", justifyContent: "center", height: "100px", margin: "auto" }} />
                </ListItem>
                <ListItem className="listItem" button onClick={handleDrawerClose} component={Link} to="/">
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <span className="MuiListItemText-primary">Trang chủ</span>
                </ListItem>
                <ListItem className="listItem" button onClick={handleDrawerClose} component={Link} to="/products" selected={value === 1}>
                  <ListItemIcon>
                    <ShoppingCart />
                  </ListItemIcon>
                  <span className="MuiListItemText-primary">Sản phẩm</span>
                </ListItem>
                <ListItem className="listItem" button onClick={handleDrawerClose} component={Link} to="/contact" selected={value === 2}>
                  <ListItemIcon>
                    <Phone />
                  </ListItemIcon>
                  <span className="MuiListItemText-primary">Liên hệ</span>
                </ListItem>
                <ListItem className="listItem" button onClick={handleDrawerClose} component={Link} to="/about" selected={value === 3}>
                  <ListItemIcon>
                    <Info />
                  </ListItemIcon>
                  <span className="MuiListItemText-primary">Chi tiết</span>
                </ListItem>
                {!isAuthenticated && (
                  <ListItem button onClick={handleDrawerClose} component={Link} to="/login">
                    <ListItemIcon>
                      <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="Đăng nhập" />
                  </ListItem>
                )}
              </List>
            </Drawer>
          </>
        ) : (
          <Tabs value={value} onChange={handleChange} aria-label="navigation" className="navigation">
            <Tab label="Trang chủ" component={Link} to="/" style={{ color: "#000000" }} />
            <Tab label="Sản phẩm" component={Link} to="/products" style={{ color: "#000000" }} />
            <Tab label="Liên hệ" component={Link} to="/contact" style={{ color: "#000000" }} />
            <Tab label="Chi tiết" component={Link} to="/about" style={{ color: "#000000" }} />
            {!isAuthenticated && (
              <Tab label="Đăng nhập" component={Link} to="/login" style={{ color: "#000000" }} />
            )}
          </Tabs>
        )}
        {isMobile && isAuthenticated && <AccountCircle />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;













