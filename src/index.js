import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { signupHandler } from "custom hooks";
import { LikeProvider, PlaylistProvider, VideoProvider, WatchLaterProvider } from "contexts";

// Call make Server
makeServer();
signupHandler();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <WatchLaterProvider>
          <LikeProvider>
            <PlaylistProvider>
              <App />
            </PlaylistProvider>
          </LikeProvider>
        </WatchLaterProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
