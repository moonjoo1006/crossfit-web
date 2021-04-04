import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {Restore, Favorite, LocationOn} from "@material-ui/icons";

const Footer = () => {

    return (
        <BottomNavigation className="footer">
            <BottomNavigationAction lable="Recent" icon={<Restore/>}/>
            <BottomNavigationAction lable="Favorite" icon={<Favorite/>}/>
            <BottomNavigationAction lable="LocationOn" icon={<LocationOn/>}/>
        </BottomNavigation>
    )
}

export default Footer;