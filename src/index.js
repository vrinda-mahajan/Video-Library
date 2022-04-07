import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, HistoryProvider, LikeProvider, PlaylistProvider, VideoProvider, WatchLaterProvider } from "contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <WatchLaterProvider>
          <LikeProvider>
            <PlaylistProvider>
              <HistoryProvider>
                <AuthProvider>
                  <App />
                </AuthProvider>
              </HistoryProvider>
            </PlaylistProvider>
          </LikeProvider>
        </WatchLaterProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

