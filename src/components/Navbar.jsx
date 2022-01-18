import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import ShoppingIcon from "../images/shopping.png";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import Badge from "@mui/material/Badge";
import { ClientContext } from "../context/ClientProvider";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from "../context/AuthProvider";
import LogoutIcon from "@mui/icons-material/Logout";


const Navbar = () => {
  const { productsCount } = React.useContext(ClientContext);
  const { authWithGoogle, user, logout } = React.useContext(AuthContext);
  const [setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
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

          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                color: "white",
                display: { xs: "flex", md: "none" },
              }}
            >
              <img src={ShoppingIcon} alt="shoppingIcon" />
            </Typography>
          </Link>

          <Link className="seaAll" to="/products">
            <Button
              className="SeeAll"
              onClick={handleCloseNavMenu}
              style={{}}
              sx={{
                flexGrow: 1,
                color: "white",
                display: { xs: "flex", md: "none" },
              }}
            >
              See All
            </Button>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link className="seaAll" to="/products">
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
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon sx={{ color: "white" }} />
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
              <Link to="/cart">
                <IconButton>
                  <Badge
                    badgeContent={productsCount}
                    color="error"
                    sx={{ color: "white" }}
                  >
                    <ShoppingBagIcon sx={{ color: "white" }} />
                  </Badge>
                </IconButton>
              </Link>
            </Box>
          </Box>

          {user ? (
            <>
              <MenuItem>{user.displayName}</MenuItem>

              <IconButton onClick={logout}>
                <LogoutIcon sx={{ color: "white" }} onClick={logout} />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={authWithGoogle}>
              <PersonIcon sx={{ color: "white", marginRight: "2vw" }} />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
