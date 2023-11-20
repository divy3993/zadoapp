import bgImg from "../assets/img2.jpg";
import {
    Container,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
  } from "@mui/material";
const PropertyComparePage = () => {
  return (
    <>
      <Container maxWidth={false} style={{ display: "flex", width: "100vw" }}>
        <Grid
          direction={"row"}
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
          style={{
            display: "flex",
            height: "200px",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={4} lg={12}>
            <Typography variant="h4" gutterBottom marginTop={5}>
              Most Prefered Town
            </Typography>
            <hr style={{ position: "relative" }} />
            <Card sx={{ maxWidth: 600, marginTop: "25px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={bgImg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    established
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={12}>
            <Typography variant="h4" gutterBottom marginTop={5}>
              Most Prefered Town
            </Typography>
            <hr style={{ position: "relative" }} />
            <Card
              sx={{ maxWidth: 600, marginTop: "25px", marginBottom: "50px" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={bgImg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    established
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid
          direction={"row"}
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
          style={{
            display: "flex",
            height: "200px",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={4} lg={12}>
            <Typography variant="h4" gutterBottom marginTop={5}>
              Most with most white (Foxborough)
            </Typography>
            <hr style={{ position: "relative" }} />
            <Card sx={{ maxWidth: 600, marginTop: "25px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={bgImg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    established
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={12}>
            <Typography variant="h4" gutterBottom marginTop={5}>
              Most with most white (Foxborough)
            </Typography>
            <hr style={{ position: "relative" }} />
            <Card
              sx={{ maxWidth: 600, marginTop: "25px", marginBottom: "50px" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={bgImg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    established
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PropertyComparePage;
