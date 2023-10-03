import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "..";
import "./Feed.css";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&regionCode=IN&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCategory]);
  return (
    <Stack> 
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span
            style={{
              color: "#F31503",
            }}
          >
            {" "}
            videos
          </span>
        </Typography>
        <Videos videos={videos} />     
    </Stack>
  );
};

export default Feed;
