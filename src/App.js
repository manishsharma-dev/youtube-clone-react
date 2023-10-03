import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Sidebar,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Stack
        sx={{
          flexDirection: { sx: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: "0", md: 2 },
          }}
        >
          <Sidebar />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            {" "}
            Copyright 2023 M Media
          </Typography>
        </Box>
        <Box
          p={2}
          sx={{
            overflowY: "auto",
            minHeight: "90vh",
            height: "100%",
            flex: 2,
          }}
        >
          <Routes>
            <Route path="/" exact element={<Feed />}></Route>
            <Route path="/video/:id" element={<VideoDetail />}></Route>
            <Route path="/channel/:id" element={<ChannelDetail />}></Route>
            <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
          </Routes>
        </Box>
      </Stack>
    </Box>
  </BrowserRouter>
);

export default App;
