import React from "react"; //feito com o snippet rfce
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import "./VideoFooter.css";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Manu</h3>
        <p>
          Eu danço a dança das tuas marés.
        </p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoMusicFooter__text">
            <p>Bom Mesmo É Estar Debaixo... - Luedji Luna</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
