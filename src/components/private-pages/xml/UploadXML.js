import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from "../../../navs/Drawer";
import DrawerHeader from "../../../navs/DrawerHeader";
import {Container} from "@material-ui/core";
import {MDBContainer} from "mdb-react-ui-kit";
import './UploadXML.css';

const UploadXML = () => {

    return (
        <div className="sdd">
            <Box sx={{display: "flex"}}>
                <Drawer/>
                <Container id="marginDrawerHeader">
                    <DrawerHeader/>
                    <MDBContainer className="p-1 my-2">
                        <Typography paragraph className="my-3 pb-0">
                            Page Upload XML
                        </Typography>
                    </MDBContainer>
                </Container>
            </Box>

            <div className="box">
                <h2 className="header">
                    React drop files input
                </h2>


            </div>



        </div>
    );
};

export default UploadXML;