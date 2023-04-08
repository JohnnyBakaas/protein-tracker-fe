import { useState } from "react";

function AddFood({ onSubmit }) {
  const [name, setName] = useState("");
  const [protein, setProtein] = useState(0);
  const [kcal, setKcal] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const food = {
      name,
      protein,
      kcal,
      when: new Date().toISOString(),
    };
    onSubmit(food);
    setName("");
    setProtein(0);
    setKcal(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name">Name</label>
      </div>
      <div>
        <input
          type="number"
          id="protein"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
        <label htmlFor="protein">Protein</label>
      </div>
      <div>
        <input
          type="number"
          id="kcal"
          value={kcal}
          onChange={(e) => setKcal(e.target.value)}
        />
        <label htmlFor="kcal">Calories</label>
      </div>
      <button type="submit">Add Food</button>
    </form>
  );
}

export default AddFood;
