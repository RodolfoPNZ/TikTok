import React, {useState} from 'react'
import "./sidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';

function Siderbar({likes,messeges,shares}) {

    const[liked,setLiked] = useState(false)

function handleLike(){
setLiked(!liked)
}

  return (
    <div className='videoSideBar'>
        <div 
        className='videoSideBar_options'
        onClick={handleLike}
        >
            {liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
            
            <p>{liked ? likes + 1 : likes}</p>

        </div>
        <div className='videoSideBar_options'>
            <p><TextsmsIcon fontSize='large'/></p>
            <p>{messeges}</p>
        </div>
        <div className='videoSideBar_options'>
            <p><ShareIcon fontSize='large'/></p>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default Siderbar