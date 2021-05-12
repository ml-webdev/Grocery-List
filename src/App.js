import logo from './logo.svg';
import './App.css';
import Groceries from './components/Groceries';

function App() {
  
  return (
    <div className="App">
      <div className="groceryItems">
      <Groceries index='0'/>
      {/* {Groceries.objects[0].isPurchased? <Groceries index='0'/>} */}
      <Groceries index='1'/>
      <Groceries index='2'/>
      </div>
    </div>
  );
}

export default App;
