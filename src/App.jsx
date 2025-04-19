import PillarPage from "./PillarPage";
import BlogPost from "./BlogPost";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PillarPage />} />
        <Route path="/blog" element={<BlogPost />} />
      </Routes>
 
    </>
  );
}

export default App;
