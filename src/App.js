import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Manu"
          description="Eu danço a dança das tuas marés."
          music="Bom Mesmo É Estar Debaixo... - Luedji Luna"
          url="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
        />

        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Manu"
          description="Eu danço a dança das tuas marés."
          music="Bom Mesmo É Estar Debaixo... - Luedji Luna"
          url="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
        />
        <Video 
          likes={100}
          messages={200}
          shares={300}
          name="Manu"
          description="Eu danço a dança das tuas marés."
          music="Bom Mesmo É Estar Debaixo... - Luedji Luna"
          url="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
        />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
