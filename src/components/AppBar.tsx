"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";

const pages = [
  {
    title: "Home",
    url: "/",
    image: <HomeIcon className="text-zinc-200 h-8 w-8" />,
  },
  {
    title: "Projects",
    url: "/projects",
    image: <ConstructionIcon className="text-zinc-200 h-8 w-8" />,
  },
  {
    isDivider: true,
    url: "none",
  },
  {
    title: "Github",
    url: "https://github.com/dan-sapp-sandbox",
    /* eslint-disable-next-line */
    image: <img className="h-8 w-8" src="/static/images/github-icon-2.svg" />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/dan-sapp-744145b6/",
    /* eslint-disable-next-line */
    image: <img className="h-8 w-8" src="/static/images/linkedin-icon-2.svg" />,
  },
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
            <Drawer
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={handleCloseNavMenu}
                className="bg-blue-900 h-full text-zinc-200"
              >
                <List>
                  {pages.map((page, index) => {
                    if (page.isDivider) {
                      return <Divider key={index} className="bg-zinc-200" />;
                    }
                    return (
                      <ListItem
                        className="h-20"
                        key={page.title}
                        disablePadding
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            {page.image}
                          </ListItemIcon>
                          <span className="text-2xl text-zinc-200">
                            {page.title}
                          </span>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.filter((x) => !x.isDivider).map((page) => (
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
