import { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import { Videos } from "..";
import "./Feed.css";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { useSelector } from "react-redux";
const Feed = () => {
  const cateory = useSelector((state) => state.category);
  const selectedCategory = cateory.name;
  console.table(cateory);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    if (cateory.typeId === 1) {
      fetchFromAPI(`home/?hl=en&gl=IN`)
        .then((data) => {
          setVideos(data.contents);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (cateory.typeId === 2) {
      fetchFromAPI(`search/?q=${selectedCategory}&hl=en&gl=US`)
        .then((data) => {
          setVideos(data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [cateory.typeId, selectedCategory]);
  return (
    <Stack>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
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
