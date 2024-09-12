// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import { Feedback } from "./components";
import { FeedbackStateProvider } from "./context";
function App() {
  return (
    <FeedbackStateProvider>
      <main>
        <Feedback />
      </main>
    </FeedbackStateProvider>
  );
}

export default App;
