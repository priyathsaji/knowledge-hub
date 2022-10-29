import React from "react";
import Box from "@mui/material/Box";
import DocsTree from "../../Components/docs/DocsTree";
import DocContent from "../../Components/docs/DocsContent";
import styled from "@emotion/styled";
import { display } from "@mui/system";

const StyledBox = styled(Box)((theme) => {
  return {
    display: "flex",
    height: "100%"
  };
});

export default function Docs() {
  return (
    <StyledBox>
      <Box sx={{flex:1,
    display:{
        xs:'none',md:'block'
    }}}>
        <DocsTree />
      </Box>
      <Box sx={{flex:3}}>
        <DocContent />
      </Box>
    </StyledBox>
  );
}


        <DocsTree />
