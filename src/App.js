import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

export default function App() {
  const card = data.map(card => {
    return (
      <Card
        key={card.id}
        {...card}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <div className="card-list">
        {card}
      </div>
    </div>
  );
}