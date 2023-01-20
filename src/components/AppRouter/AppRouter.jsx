import { Routes, Route } from "react-router-dom";
import ListNews from "../ListNews/ListNews";
import NewsOpened from '../NewsOpened/NewsOpened';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ListNews />} />
      <Route path="/news/15" element={<NewsOpened/>}/>
    </Routes>
  );
}

export default AppRouter;
