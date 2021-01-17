import PaintingList from "./components/PaintingList";
import Sections from './components/Sections'
import paintings from "./paintings.json";

export default function App() {
  return (
    <div>
      
      <Sections title='Топ недель'>
        <PaintingList items={paintings}/>
      </Sections>
    
      <Sections title='Лучшее'>
        <PaintingList items={paintings}/>
      </Sections>
      <Sections />

    </div>
  );
};

