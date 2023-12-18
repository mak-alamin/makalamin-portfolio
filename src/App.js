import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

import swapOn from "./icons/swapOn";
import swapOff from "./icons/swapOff";

function App() {
  const [swapStatus, setSwapStatus] = useState(false);

  return (
    <>
      <div className="drawer drawer-mobile">
        <label
          htmlFor="my-drawer"
          className="btn btn-circle swap swap-rotate drawer-button lg:hidden"
          onClick={() => setSwapStatus(!swapStatus)}
        >
          {swapStatus ? swapOn : swapOff}
        </label>

        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <Main></Main>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay"
            onClick={() => setSwapStatus(!swapStatus)}
          ></label>
          <Header setSwapStatus={setSwapStatus}></Header>
        </div>
      </div>
    </>
  );
}

export default App;
