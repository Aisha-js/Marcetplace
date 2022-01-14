import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import ShoppingIcon from "../images/shopping.png";
import PersonIcon from "@mui/icons-material/Person";
import ShopIcon from '../images/shopping-bag.png'
import { Badge, Notifications, MailOutline } from "@mui/icons-material";
import { ClientContext } from "../context/ClientProvider";

const Navbar = () => {
  const { productsCount } = React.useContext(ClientContext)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const settings = [
    <MenuItem>
      <Typography textAlign="center">Войти</Typography>
    </MenuItem>,
    <Link to="/admin">
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography className="MenuItem" textAlign="center">
          Admin Panel
        </Typography>
      </MenuItem>
    </Link>,
    <Link to="/add">
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography className="MenuItem" textAlign="center">
          Add Product
        </Typography>
      </MenuItem>
    </Link>,
  ];
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img src={ShoppingIcon} alt="shoppingIcon" />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            ShopStore
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link
              className="seaAll"
              sx={{ textDecoration: "none" }}
              to="/products"
            >
              <Button
                className="SeeAll"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}

              >
                See All
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <SearchProduct />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> 
          <Box sx={{ my: 2, color: "white", display: "block" }}>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton>
              <ShoppingBagIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
