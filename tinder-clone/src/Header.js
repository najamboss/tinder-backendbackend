import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div>
            <div className='header'>
                
                
                <IconButton >
                <PersonIcon fontSize="large" className="header_icon"></PersonIcon>
                </IconButton>
                <img className="header_logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WLLQxT7M-194dgg1Wid3Fw_LCV1SfHv1ug&usqp=CAU"
                />
                <IconButton>  <ForumIcon></ForumIcon></IconButton>
              
                
            </div>
        </div>
    )
}

export default Header
