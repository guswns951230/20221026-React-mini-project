// css file import
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";

// 공용으로 쓸 data context Provider 추가
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
