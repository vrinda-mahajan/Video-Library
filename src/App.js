import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "components";
import { Home } from "pages";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liked" element={<>Liked</>} />
      <Route path="/watch-later" element={<>Watch Later</>} />
      <Route path="/playlist" element={<>Playlist</>} />
      <Route path="/history" element={<>History</>} />
      <Route path="/mock" element={<MockmanEs /> } />
    </Routes>
    </div>
  );
}

export default App;
