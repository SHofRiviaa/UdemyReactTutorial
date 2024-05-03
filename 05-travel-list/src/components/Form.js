import { useState } from "react";

export default //TO implement the controlled element technique, we need to add a state to the Form component
// 1 create a state variable to hold the value of the input field
// 2 pass the value of the input field to the input element
// 3 add an event handler to the input element to update the state variable like onChange={(e) => setItem(e.target.value)}
function Form({ onAddItems }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!item) return;

    const newItem = { item, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setItem("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for Dune?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
