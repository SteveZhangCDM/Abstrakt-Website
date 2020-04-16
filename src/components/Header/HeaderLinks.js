/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import MovieIcon from '@material-ui/icons/Movie';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link to="/" className={classes.navLink}>
            <HomeIcon className={classes.icons} /> Home
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="About"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={InfoIcon}
            dropdownList={[
              //TODO: Change the link to the Team's Page
              <Link to="/about" className={classes.dropdownLink}>
                The Team
            </Link>,
              <Link to="/our-product" className={classes.dropdownLink}>
                Our Product
            </Link>
            ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            //TODO: Update with correct url to video
            href="https://www.youtube.com/watch?v=5gY_iiCjqjI"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <MovieIcon className={classes.icons} /> Demo Video
        </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Follow us on twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              //TODO: Update link to our twitter account
              href="https://twitter.com/AbstraktVR?ref=abstraktvr"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <TwitterIcon className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Follow us on facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              //TODO: Update link to our facebook page
              href="https://www.facebook.com/AbstraktVR?ref=abstraktvr"
              target="_blank"
              className={classes.navLink}
            >
              <FacebookIcon className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Follow us on instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              //TODO: Update to our instagram account
              href="https://instagram.com/abstrakt.vr?igshid=ligtzcjkwotx"
              target="_blank"
              className={classes.navLink}
            >
              <InstagramIcon className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
  );
}
