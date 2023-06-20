import React from "react";
import "./videofooter.css";
import MusicNoteIcon  from '@mui/icons-material/Audiotrack';
function Videofooter({name,description,music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoFooterMusic_text"> 
          <p>{music}</p>
          </div>
        </div>
      </div>
      <img className="videoFooter__record"
      alt="Imagem vinil em moviemento"
      src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d17bbec-b930-41e4-ab50-af1ea81bb7da"
      />
    </div>
  );
}

export default Videofooter;
