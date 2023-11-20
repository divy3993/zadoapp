import { Box } from "@mui/material";
import Header from "./Header";
import Section from "./Section";
import PropertyListPage from "../pages/PropertyListPage";
import PropertyComparePage from "../pages/PropertyComparePage";
import { useState } from "react";

const Layout = () => {
  
  const [searchList, setSearchList] = useState(false);
  return (<>
    <Box>
      <Header />
      <Section setSearchList={setSearchList}
      />
      {searchList !== true && <PropertyListPage searchList={searchList} />}
      {searchList === true && <PropertyComparePage />}
    </Box>
  </>)
}

export default Layout;