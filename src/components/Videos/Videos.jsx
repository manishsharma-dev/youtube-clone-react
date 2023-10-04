import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "..";
const Videos = ({ videos, direction }) => {
  if (!videos && !videos.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.type === 'video' && <VideoCard video={item} />}
          {item.type === 'channel' && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
