"use client";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "next/link";
import pageList from "./pageList";

function ResponsiveAppBar() {
  return (
    <div className="bg-blue-900 hidden md:flex sticky top-0 z-20">
      <Container>
        <Toolbar disableGutters>
          <Box className="flex justify-self-start self-center">
            {pageList.map((page) => (
              <button
                key={page.title}
                className="my-2 mx-8"
              >
                <Link
                  className="text-zinc-200 text-xl md:text-2xl lg:text-3xl hover:text-zinc-100"
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
