import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../../utils/constants";
const VideoCard = ({video}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={video.video.videoId ? `/video/${video.video.videoId }` : demoVideoUrl}>
        <CardMedia
          image={video.video?.thumbnails[0]?.url}
          alt={video.video?.title}
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: 180,
          }}
        />
        <CardContent
          sx={{
            backgroundColor: "#1e1e1e",
            height: "106px",
          }}
        >
          <Link to={video.video.videoId ? `/video/${video.video.videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {video.video?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              video?.video?.author?.channelId
                ? `/channel/${video?.video?.author?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {video?.video?.author?.title.slice(0, 60) ||
                demoChannelTitle.slice(0, 60)}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
