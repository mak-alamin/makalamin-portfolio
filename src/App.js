import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Main></Main>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <Header></Header>
        </div>
      </div>
    </>
  );
}

export default App;
