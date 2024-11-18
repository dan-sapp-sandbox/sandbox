"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

const pages = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "Github", url: "https://github.com/dan-sapp-sandbox" },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/dan-sapp-744145b6/" },
];
interface iEvent {
  currentTarget: Element;
}
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<Element | null>(null);

  const handleOpenNavMenu = (event: iEvent) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="bg-blue-900 sticky z-10">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <button
              onClick={handleOpenNavMenu}
              className="text-zinc-300"
            >
              <MenuIcon />
            </button>
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link className="text-xl text-black" href={page.url}>
                    {page.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <button
                key={page.title}
                onClick={handleCloseNavMenu}
                className="my-2 mx-8"
              >
                <Link
                  className="text-zinc-200 text-3xl hover:text-zinc-100"
                  href={page.url}
                >
                  {page.title}
                </Link>
              </button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
}
export default ResponsiveAppBar;
