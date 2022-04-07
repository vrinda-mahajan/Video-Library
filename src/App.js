import MockmanEs from "mockman-js";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar, ShrinkedSidebar, Sidebar } from "components";
import { Error404, History, Home, Liked, Playlist, PlaylistVideo, Profile, Signin, Signup, SingleVideo, WatchLater } from "pages";

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
    {
      !["/signin", "/signup"].includes(location.pathname) && <Navbar />
    }
    {
      !["/watch/","/signin", "/signup"].includes(location.pathname.substring(0,7))? <Sidebar /> :<ShrinkedSidebar />
    }
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liked" element={<Liked/>} />
      <Route path="/watch-later" element={<WatchLater/>} />
      <Route path="/playlist" element={<Playlist/>} />
      <Route path="/playlist/:playlistId" element={<PlaylistVideo/>} />
      <Route path="/history" element={<History/>} />
      <Route path="/watch/:videoId" element={<SingleVideo />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/mock" element={<MockmanEs /> } />
    </Routes>
    </div>
  );
}

export default App;
