import './App.css';
import Menu from './components/Menu/Menu';
import AppRouter from './components/AppRouter/AppRouter';
import {useRef, useEffect} from "react";

function App() {
  const topRef = useRef();
  return (
    <div className="app" ref={topRef}>
      <Menu topRef={topRef}/>
      <AppRouter topRef={topRef}/>
    </div>
  );
}

export default App;
