import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Img1 from "../../assets/Vector.png";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Done from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import Star from "@mui/icons-material/Star"
import Divider from "@mui/material/Divider"
export default () => {
  return (
    <div>
      <Container sx={{ marginTop: "75px" }}>
        <Grid container>
          <Grid item md={3} sm={4} xs={12}>
            <Box
              sx={{
                width: "279px",
                backgroundColor: "#EFF0F2",
                borderRadius: "8px",
                paddingBottom: "63px",
              }}
            >
              <Grid
                container
                justifyContent="center"
                sx={{ paddingTop: "50px" }}
              >
                <Grid item md={12} xs={12} sm={12} sx={{ textAlign: "center" }}>
                  <img src={Img1} alt="" />
                </Grid>
                <Grid item md={12} xs={12} sm={12} sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#484848",
                      fontWeight: "600",
                      marginTop: "15px",
                    }}
                  >
                    Upload a Photo
                  </Typography>
                </Grid>
              </Grid>
              <Container maxWidth="sm" sx={{ marginTop: "43px" }}>
                <Typography
                  sx={{ color: "#484848", fontSize: "18px", fontWeight: "700" }}
                >
                  Identity Verification
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "200",
                    color: "#9A9A9A",
                    marginTop: "2px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </Typography>
                <Typography
                  sx={{
                    color: "#484848",
                    fontSize: "22px",
                    fontWeight: "700",
                    marginTop: "24px",
                  }}
                >
                  Jhon Doe
                </Typography>
                <Grid container sx={{ marginTop: "20px" }}>
                  <Grid item md={1.5}>
                    <Done sx={{ color: "#9A9A9A" }} />
                  </Grid>
                  <Grid item md={9}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "200",
                        color: "#9A9A9A",
                        marginTop: "2px",
                      }}
                    >
                      Email conformed
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ marginTop: "5px" }}>
                  <Grid item md={1.5}>
                    <Done sx={{ color: "#9A9A9A" }} />
                  </Grid>
                  <Grid item md={9}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "200",
                        color: "#9A9A9A",
                        marginTop: "2px",
                      }}
                    >
                      Email conformed
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Grid>
          <Grid item md={8} sm={8} xs={12} sx={{ backroundColor: "#EFF0F2" }}>
            <Container maxWidth="md">
              <Typography
                sx={{ fontWeight: "700", fontSize: "28px", color: "#484848" }}
              >
                Hello, John Doe
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#9A9A9A",
                  marginTop: "2px",
                }}
              >
                Joined in 2021
              </Typography>
              <Button
                sx={{
                  border: "1px solid #484848",
                  width: "158px",
                  height: "54px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#484848",
                  marginTop: "45px",
                }}
              >
                Edit Profile
              </Button>
                <Grid container sx={{marginTop:"30px"}}>
                  <Grid item md={1}>
              <Star/>
                  </Grid>
                  <Grid item md={11} >
                <Typography sx={{fontSize:"18px",fontWiegth:"800"}}>
                  0 Reviwes
                </Typography>
                </Grid>
                </Grid>
                <Divider sx={{marginTop:"30px"}}/>
                

                <a href="" style={{fontSize:"15px",color:"#484848",fontWeigth:"600",marginTop:"24px"}}>Reviewed By You</a>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
