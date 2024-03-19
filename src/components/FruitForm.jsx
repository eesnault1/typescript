import { useState } from "react";

export default function FruitForm({ handleAdd }) {
  const [nouveauFruit, setNouveauFruit] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = nouveauFruit;
    if (nom === "") {
      return;
    }
    const fruitAAjouter = { id, nom };
    handleAdd(fruitAAjouter);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="flex items-center mt-4 space-x-2"
      >
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit..."
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-150 rounded-md  focus:border-gray-400 outline-none "
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-150 ease-in-out"
        >
          Ajouter +
        </button>
      </form>
      {nouveauFruit === "" && (
        <div className="mt-1 text-center text-red-500">
          Entrez le nom d'un fruit pour l'ajouter à votre liste
        </div>
      )}
    </>
  );
}
