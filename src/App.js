import './App.css';
import Data from "./components/Data";
import Card from './components/Card';
import Navbar from "./components/Navbar";

function App(){
  const cards = Data.map(item =>{
    return(
      <Card 
      key = {item.key}
      item= {item}
      
      />
    )
  })
  return (
    <div className="App">
    <Navbar />
    {cards}
    </div>
  );
}

export default App;
