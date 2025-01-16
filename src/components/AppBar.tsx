"use client";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import ArticleIcon from "@mui/icons-material/Article";

export const pages = [
  {
    title: "Home",
    url: "/",
    image: (
      <HomeIcon
        sx={{ height: "2.5rem", width: "2.5rem" }}
        className="text-zinc-200"
      />
    ),
  },
  {
    title: "Resume",
    url:
      "https://docs.google.com/document/d/e/2PACX-1vTxM5BOxqBemhI7wWHlvLhdaQ13Qbuw0GONkrww9KVQ3HAsuBHEwrHJuipAKfF5Tg/pub",
    image: (
      <ArticleIcon
        sx={{ height: "2.5rem", width: "2.5rem" }}
        className="text-zinc-200"
      />
    ),
  },
  {
    title: "Projects",
    url: "/projects",
    image: (
      <ConstructionIcon
        sx={{ height: "2.5rem", width: "2.5rem" }}
        className="text-zinc-200"
      />
    ),
  },
  {
    title: "Github",
    url: "https://github.com/dan-sapp-sandbox",
    image: (
      /* eslint-disable-next-line */
      <img
        alt="github"
        className="h-10 w-10"
        src="/static/images/github.svg"
      />
    ),
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/dan-sapp-744145b6/",
    image: (
      /* eslint-disable-next-line */
      <img
        alt="linkedin"
        className="h-10 w-10"
        src="/static/images/linkedin.svg"
      />
    ),
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
                  className="text-zinc-200 text-2xl lg:text-3xl hover:text-zinc-100"
                  href={page.url}
                  target={page.title === "Home" ? "" : "_blank"}
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
