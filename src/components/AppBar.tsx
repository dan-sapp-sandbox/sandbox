"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";

export const pages = [
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

function ResponsiveAppBar() {
  return (
    <div className="bg-blue-900 hidden md:flex sticky top-0">
      <Container>
        <Toolbar disableGutters>
          <Box className="flex justify-self-start self-center">
            {pages.map((page) => (
              <button
                key={page.title}
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
