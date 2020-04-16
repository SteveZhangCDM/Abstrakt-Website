import React from 'react';

import styles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js"
import ReactPlayer from 'react-player';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/images/ABSTRAKT_black.png";

const useStyles = makeStyles(styles);

const Trailer = () => {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <GridContainer>
                        <GridItem>
                            <img src={logo} alt="logo" vspace="100"/>
                        </GridItem>
                        <GridItem align="center">
                            <div className='player-wrapper'>
                                <ReactPlayer
                                    url='https://www.youtube.com/watch?v=5gY_iiCjqjI'
                                    playing
                                />
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    )
}

export default Trailer;