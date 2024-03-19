import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  const handleDelete = (id) => {
    const fruitsCopy = [...fruits];
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
    const fruitsCopy = [...fruits];

    fruitsCopy.push(fruitAAjouter);

    setFruits(fruitsCopy);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 underline text-center">
        Liste de fruits
      </h1>
      <ul className="space-y-2">
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => handleDelete(fruit.id)}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;
