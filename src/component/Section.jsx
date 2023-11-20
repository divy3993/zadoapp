import {
  Box,
  Container,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Checkbox,
  Select,
  OutlinedInput,
  Button,
  FormControl,
} from "@mui/material";
import ReactSelect from "react-select";
import bgImg from "../assets/img3.jpg";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Section = ({setSearchList}) => {
    const [preference, setPreference] = useState([]);
  const [people, setPeople] = useState([]);
  const [city, setCity] = useState([]);
  
  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    let removeDuplicate = [];
    value.forEach((item) => {
      if (removeDuplicate.findIndex((o) => o.id === item.id) >= 0) {
        removeDuplicate = removeDuplicate.filter((data) => data.id !== item.id);
      } else {
        removeDuplicate.push(item);
      }
    });

    setPreference(removeDuplicate);
  };

  const handleChangePeople = (e) => {
    const {
      target: { value },
    } = e;

    let removeDuplicate = [];
    value.forEach((item) => {
      if (removeDuplicate.findIndex((o) => o.id === item.id) >= 0) {
        removeDuplicate = removeDuplicate.filter((data) => data.id !== item.id);
      } else {
        removeDuplicate.push(item);
      }
    });

    setPeople(removeDuplicate);
  };

  const handleChangeCity = (e) => {
    console.log(e);
    setCity(e);
  };

  const handleSearch = () => {
    setSearchList(true);
  };
  const MultiCheckOption = [
    {
      name: "Quality of public school",
      id: 1,
    },
    {
      name: "Air quality",
      id: 2,
    },
    {
      name: "Water quality",
      id: 3,
    },
    {
      name: "Super fund sites",
      id: 4,
    },
    {
      name: "Nature/trees",
      id: 5,
    },
  ];

  const options = [
    {
      label: "Boston",
      value: 1,
    },
    {
      label: "Foxborough ",
      value: 2,
    },
    {
      label: "Auburn",
      value: 3,
    },
    {
      label: "Sharon",
      value: 4,
    },
    {
      label: "Providence",
      value: 5,
    },
    {
      label: "Westwood",
      value: 6,
    },
  ];
  const selectStyle = {
    container: (styles) => ({
      ...styles,
      width: "600px",
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      color: "black",
    }),
    option: (styles) => ({
      ...styles,
      backgroundColor: "#c2ccd5",
      color: "black",
      ":hover": {
        backgroundColor: "#8ebce6",
      },
    }),
  };
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          width: "100vw",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flow",
          },
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: `right bottom`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ paddingTop: "10px" }}>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
            direction={"flow"}
            style={{
              display: "flex",
              height: "220px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={4} style={{ marginTop: "80px" }}>
              <InputLabel
                style={{ width: "280px", color: "black", fontWeight: "bold" }}
              >
                Enter top 5 towns/cities
              </InputLabel>
              <ReactSelect
                closeMenuOnSelect={false}
                isMulti
                options={options}
                styles={selectStyle}
                value={city}
                onChange={handleChangeCity}
                isOptionDisabled={() => city.length >= 5}
                placeholder="Select City"
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ paddingTop: "10px" }}>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
            direction="row"
            style={{
              display: "flex",
              height: "200px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={4}>
              <FormControl>
                <InputLabel id="new-label" style={{ width: "280px" }}>
                  Select Town Preference
                </InputLabel>
                <Select
                  id="new-label"
                  multiple
                  value={preference}
                  input={
                    <OutlinedInput
                      label="Select Town Preference"
                      style={{ color: "white", fontWeight: "bold" }}
                    />
                  }
                  label="Select Town Preference"
                  renderValue={(selected) =>
                    selected.map((x) => x.name).join(",")
                  }
                  onChange={handleChange}
                  style={{ width: "250px", backgroundColor: "white" }}
                >
                  {MultiCheckOption.map((data, index) => (
                    <MenuItem key={index} value={data}>
                      <Checkbox
                        checked={
                          preference.findIndex((item) => item.id === data.id) >=
                          0
                        }
                      />
                      <ListItemText primary={data.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl>
                <InputLabel id="composition">Racial Composition</InputLabel>
                <Select
                  id="composition"
                  multiple
                  label="Racial Composition"
                  value={people}
                  input={<OutlinedInput label="Racial Composition" />}
                  renderValue={(selected) =>
                    selected.map((x) => x.name).join(",")
                  }
                  onChange={handleChangePeople}
                  style={{ width: "250px", backgroundColor: "white" }}
                >
                  {MultiCheckOption.map((data, index) => (
                    <MenuItem key={index} value={data}>
                      <Checkbox
                        checked={
                          people.findIndex((item) => item.id === data.id) >= 0
                        }
                      />
                      <ListItemText primary={data.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "white",
                  marginBottom: "25px",
                  marginRight: "200px",
                }}
                onClick={handleSearch}
              >
                See Result Comapre
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Section;
