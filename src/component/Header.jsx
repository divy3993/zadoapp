import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";

const Header = () => {
  /* const [preference, setPreference] = useState([]);
  const [people, setPeople] = useState([]);
  const [city, setCity] = useState([]);
  const [searchList, setSearchList] = useState(false);

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
  }; */
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <>
      {/* Header */}
      <AppBar position="sticky">
        <StyledToolBar>
          <Typography variant="h6">
            <AddHomeWorkIcon sx={{ marginRight: 1 }} />
            Zado
          </Typography>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default Header;
