import React from "react"; //feito com o snippet rfce
import "./VideoFooter.css";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Manu</h3>
        <p>Descrição do vídeo</p>
        <div className="videoFooter__music">
          <p>Ícone</p>
          <p>Título da música - banda</p>
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
