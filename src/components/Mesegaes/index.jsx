import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Img1 from "../../assets/Ellipse 15.png";
import Grid from "@mui/material/Grid"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#484848",
            marginTop: "68px",
          }}
        >
          All Messages
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 224,
            marginTop: "16px",
            borderRadius: "12px 0px 0px 12px",
          }}
        >
          <Grid container>
          <Grid item md={2.5} sm={12} xs={12}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{width:"100%" }}
          >
            {" "}
            <Tab
              label="Jhon Doberman"
              {...a11yProps(0)}
              sx={{
                backgroundColor: "#EFF0F2",
                height: "103px",
                fontSize: "16px",
                color: "black",
                fontWeight: "700",
                borderRadius: "12px 0px 0px 12px",
              }}
            />
            <Tab label="Jhon Doberman" {...a11yProps(1)} sx={{ fontSize: "16px",
                color: "black",
                fontWeight: "700",
                height: "103px",}} />
            <Tab label="Jhon Doberman" {...a11yProps(2)} sx={{ fontSize: "16px",
                color: "black",
                fontWeight: "700",
                height: "103px",}}/>
          </Tabs>
          </Grid>
          <Grid item md={9} sm={12} xs={12}>
          <Box
            sx={{
              backgroundColor: "#EFF0F2",
              width: "100%",
              borderRadius: "0px 12px 12px 12px",
              height:"518px"
            }}
          >
            <TabPanel
              value={value}
              index={0}
              sx={{ backgroundColor: "#EFF0F2", }}
            >
             <Typography sx={{fontWeight:"800",fontSize:"60px",color:"#E0E2E6",textAlign:"center",marginTop:"200px"}}>
    Messege Body               
             </Typography>
             <InputBase
        sx={{ ml: 1, flex: 1,backgroundColor:"white",width:"100%" }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
          </Grid>

          </Grid>

        </Box>
      </Container>
    </div>
  );
}
