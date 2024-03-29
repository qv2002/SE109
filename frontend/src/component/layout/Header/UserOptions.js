// import React, { Fragment, useState } from "react";
// import "./Header.css";
// import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
// import Backdrop from "@material-ui/core/Backdrop";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import PersonIcon from "@material-ui/icons/Person";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { useHistory } from "react-router-dom";
// import { useAlert } from "react-alert";
// import { logout } from "../../../actions/userAction";
// import { useDispatch, useSelector } from "react-redux";

// const UserOptions = () => {
//     const { cartItems } = useSelector((state) => state.cart);

//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((state) => state.user);
//     const history = useHistory();
//     const alert = useAlert();
//     const dispatch = useDispatch();

//     const options = [
//         { icon: <ListAltIcon />, name: "Đơn hàng", func: orders },
//         { icon: <PersonIcon />, name: "Tài khoản", func: account },
//         {
//             icon: <ShoppingCartIcon />,
//             name: `Giỏ hàng(${cartItems.length})`,
//             func: cart,
//         },
//         { icon: <ExitToAppIcon />, name: "Đăng xuất", func: logoutUser },
//     ];

//     if (user.role === "admin") {
//         options.unshift({
//             icon: <DashboardIcon />,
//             name: "Dashboard",
//             func: dashboard,
//         });
//     }

//     function dashboard() {
//         history.push("/admin/dashboard");
//     }

//     function orders() {
//         history.push("/orders");
//     }
//     function account() {
//         history.push("/account");
//     }
//     function cart() {
//         history.push("/cart");
//     }
//     function logoutUser() {
//         dispatch(logout());
//         alert.success("Đăng xuất thành công!");
//     }

//     return (
//         <Fragment>
//             <Backdrop open={open} style={{ zIndex: "10" }} />
//             <SpeedDial
//                 ariaLabel="SpeedDial tooltip example"
//                 onClose={() => setOpen(false)}
//                 onOpen={() => setOpen(true)}
//                 style={{ zIndex: "11" }}
//                 open={open}
//                 direction="down"
//                 className="speedDial"
//                 icon={
//                     <img
//                         className="speedDialIcon"
//                         src={user.avatar.url}
//                         alt="Profile"
//                     />
//                 }
//             >
//                 {options.map((item) => (
//                     <SpeedDialAction
//                         key={item.name}
//                         icon={item.icon}
//                         tooltipTitle={item.name}
//                         onClick={item.func}
//                         tooltipOpen={window.innerWidth <= 600 ? true : false}
//                     />
//                 ))}
//             </SpeedDial>
//         </Fragment>
//     );
// };

// export default UserOptions;






//--------------------------Fix code---------------------------

import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Home from "@material-ui/icons/Home";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const UserOptions = () => {
    const { cartItems } = useSelector((state) => state.cart);

    const [open, setOpen] = useState(false);
    const { user } = useSelector((state) => state.user);
    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    const options = [
        { icon: <Home />, name: "Trang chủ", func: home },
        { icon: <LocalMallIcon />, name: "Sản phẩm", func: products },
        { icon: <ListAltIcon />, name: "Đơn hàng", func: orders },
        { icon: <PersonIcon />, name: "Tài khoản", func: account },
        {
            icon: <ShoppingCartIcon />,
            name: `Giỏ hàng(${cartItems.length})`,
            func: cart,
        },
        { icon: <ExitToAppIcon />, name: "Đăng xuất", func: logoutUser },
    ];

    if (user.role === "admin") {
        options.unshift({
            icon: <DashboardIcon />,
            name: "Dashboard",
            func: dashboard,
        });
    }

    function dashboard() {
        history.push("/admin/dashboard");
    }

    function orders() {
        history.push("/orders");
    }
    function account() {
        history.push("/account");
    }
    function cart() {
        history.push("/cart");
    }
    function products() {
        history.push("/products");
    }
    function home() {
        history.push("/");
    }
    function logoutUser() {
        dispatch(logout());
        alert.success("Đăng xuất thành công!");
    }

    const styles = {
        marginTop:'6px',
        width: '58px',
        height: '58px',
    };
    return (
        <Fragment>
            <Backdrop open={open} style={{ zIndex: "10" }} />
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                style={{ zIndex: "11" }}
                open={open}
                direction="down"
                className="speedDial"
                icon={user.avatar.map((item) => (
                    <div key={item.url}>
                      <img style={styles} className="speedDialIcon" src={item.url} alt={user.name} />
                    </div>
                  ))}
            >
                {options.map((item) => (
                    <SpeedDialAction
                        key={item.name}
                        icon={item.icon}
                        tooltipTitle={item.name}
                        onClick={item.func}
                        tooltipOpen={window.innerWidth <= 600 ? true : false}
                    />
                ))}
            </SpeedDial>
        </Fragment>
    );
};

export default UserOptions;