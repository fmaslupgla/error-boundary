import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const pages = ["Case1", "Case2", "Case3"];

  const redirectHandler = (event) => {
    navigate(event.target.id);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
            React-Error-Boundary
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                id={page}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={redirectHandler}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
