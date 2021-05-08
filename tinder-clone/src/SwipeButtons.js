import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import IconButton from '@material-ui/core/IconButton';


function SwipeButtons() {
    return (
        <div>
         <div className="swipeButtons">
            <IconButton  className="swpieButtons_Repeat">
                <ReplayIcon fontSize="large"></ReplayIcon>
            </IconButton>
            <IconButton  className="swpieButtons_left">
                <CloseIcon fontSize="large"></CloseIcon>
            </IconButton>
            <IconButton className="swpieButtons_star">
                <StarRateIcon fontSize="large"></StarRateIcon>
            </IconButton>
            <IconButton  className="swpieButtons_right">
                <FavoriteIcon fonstSize="large"></FavoriteIcon>
            </IconButton>
            <IconButton className="swipeButtons_lightning">
                <FlashOnIcon fontSize="large"></FlashOnIcon>
            </IconButton>
            
            </div> 
        </div>
    )
}

export default SwipeButtons
