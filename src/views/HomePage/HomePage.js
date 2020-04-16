import React from 'react'
import Parallax from '../../components/Parallax/Parallax.js';
import Trailer from '../Trailer/Trailer.js';
import classNames from "classnames";
import styles from "../../assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const HomePage = () => {

    const classes = useStyles();

    return (
        <div>
            <Parallax image={require("../../assets/images/banner.jpg")}>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <Trailer />
            </div>
        </div>

    )
}

export default HomePage;