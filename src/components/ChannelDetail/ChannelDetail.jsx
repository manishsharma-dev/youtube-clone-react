import { Stack, Box, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChannelCard, Videos, Sidebar } from "..";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import "./ChannelDetail.css";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    if(value === 0){
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
        (data) => setVideos(data?.items)
      );
    }
    else if(value === 1){

    }
    else if(value === 2){
      
    }
    
  }, [id,value]);
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        margin: "0 1rem",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: "0", md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
          height: "90vh",
          flex: 2,
        }}        
      >
        <Box>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Three Tabs Example"
              sx={{
                borderBottom: "1px solid #3d3d3d",                
              }}
              centered
            >
              <Tab
                label="VIDEOS"
                style={{
                  color: "white",
                }}
              />
              <Tab
                label="PLAYLIST"
                style={{
                  color: "white",
                }}
              />
              <Tab
                label="COMMUNITY"
                style={{
                  color: "white",
                }}
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Box display="flex" p="2">
                <Box sx={{ mr: { sm: "100px" } }} />
                <Videos videos={videos} />
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Content for Tab 2
            </TabPanel>
            <TabPanel value={value} index={2}>
              Content for Tab 3
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default ChannelDetail;
