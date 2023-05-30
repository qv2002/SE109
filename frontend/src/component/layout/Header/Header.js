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
import { AppBar, Toolbar, Tabs, Tab, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../image/logo.png";
import { useSelector } from "react-redux";
import { AccountCircle } from "@material-ui/icons";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [value, setValue] = useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogoClick = () => {
    setValue(0); // Đặt giá trị value để hiển thị tab trang chủ là đang được chọn
    history.push("/"); // Điều hướng đến trang chủ
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#ffffff" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleLogoClick}>
          <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
          <span style={{ fontWeight: "bold" }}>My Website</span>
        </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="navigation" style={{ marginRight: "100px" }}>
          <Tab label="Trang chủ" component={Link} to="/" style={{ color: "#000000" }} />
          <Tab label="Sản phẩm" component={Link} to="/products" style={{ color: "#000000" }} />
          <Tab label="Liên hệ" component={Link} to="/contact" style={{ color: "#000000" }} />
          <Tab label="Chi tiết" component={Link} to="/about" style={{ color: "#000000" }} />
          {!isAuthenticated && (
            <Tab label="Đăng nhập" component={Link} to="/login" style={{ color: "#000000" }} />
          )}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;







