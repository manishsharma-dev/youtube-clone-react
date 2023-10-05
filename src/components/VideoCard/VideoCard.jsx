import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./VideoCard.css";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../../utils/constants";
const formatVideoLen = (seconds, badges) => {
  if (!seconds && badges.length) return badges[0];
  if (seconds < 60) {
    return seconds + "s";
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  } else {
    const hours = Math.floor(seconds / 3600);
    const remainingMinutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${remainingMinutes < 10 ? "0" : ""}${remainingMinutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  }
};

function formatNumberWithSuffix(number) {
  if (!number) {
    return "0";
  } else if (number < 1000) {
    return number.toString();
  } else if (number < 1000000) {
    return (number / 1000).toFixed(1) + "K";
  } else if (number < 1000000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number < 1000000000000) {
    return (number / 1000000000).toFixed(1) + "B";
  } else {
    return (number / 1000000000000).toFixed(1) + "T";
  }
}

const VideoCard = ({ video }) => {
  const videoInfo = video?.video?.isLiveNow
    ? video?.video?.badges[0]
    : formatVideoLen(video?.video?.lengthSeconds, video?.video?.badges);

  const dynamicStyles = {
    backgroundColor: video?.video?.isLiveNow ? "red" : "#000",
    // Add any other dynamic styles here
  };

  const videoViews = video?.video?.isLiveNow
    ? `${formatNumberWithSuffix(video?.video?.stats?.viewers)} Watching`
    : `${formatNumberWithSuffix(video?.video?.stats?.views)} Views`;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link
        to={
          video.video.videoId ? `/video/${video.video.videoId}` : demoVideoUrl
        }
      >
        <CardMedia
          image={video.video?.thumbnails[0]?.url}
          alt={video.video?.title}
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: 180,
            position: "relative",
          }}
        >
          <Typography
            style={dynamicStyles}
            sx={{
              bottom: "5px",
              right: "5px",
              padding: "3px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#fff",
              borderRight: "10px",
              position: "absolute",
            }}
          >
            {videoInfo}
          </Typography>
        </CardMedia>
        <CardContent
          sx={{
            backgroundColor: "#1e1e1e",
            height: "106px",
          }}
        >
          <Link
            to={
              video.video.videoId
                ? `/video/${video.video.videoId}`
                : demoVideoUrl
            }
          >
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
          <Box
            sx={{
              display: "flex",
              color: "gray",
              alignItems : 'center'
            }}
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {videoViews}
            </Typography>
            {!video?.video?.isLiveNow &&<Typography
              className="publishedTimeText"
              variant="subtitle2"
              fontWeight="bold"
              color="gray"
            >
              {video?.video?.publishedTimeText}
            </Typography>}
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
