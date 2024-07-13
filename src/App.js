import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <h1>세상에 이런 폰트가 나오다니 천재인듯</h1>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </div>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
