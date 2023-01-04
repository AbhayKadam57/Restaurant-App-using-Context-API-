import "./App.css";
import RestaurantCard from "./components/RestaurantCard";
import data from "./data";

function App() {
  return (
    <div className="App">
      <div className="Box">
        {data.map((item, index) => (
          <RestaurantCard key={index} detail={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
