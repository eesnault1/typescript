export default function Fruit({ fruitInfo, onClick }) {
  return (
    <li className="flex justify-between items-center shadow-sm rounded-md p-2 border border-gray-150 hover:bg-gray-50">
      <span className="text-gray-700 text-lg">{fruitInfo.nom}</span>
      <button
        onClick={onClick}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-150 ease-in-out"
      >
        X
      </button>
    </li>
  );
}
