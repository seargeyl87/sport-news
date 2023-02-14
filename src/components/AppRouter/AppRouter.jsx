import { Routes, Route } from "react-router-dom";
import ListNews from "../ListNews/ListNews";
import NewsDetails from '../NewsDetails/NewsDetails';

const AppRouter = ({topRef}) => {
  return (
    <Routes>
      <Route path="/" element={<ListNews topRef={topRef}/>} /> 
      <Route path="/news/:id" element={<NewsDetails topRef={topRef}/>}/>
      <Route path="/news/tag/:id" element={<ListNews topRef={topRef}/>}/>

    </Routes>
  );
} 

export default AppRouter;
 