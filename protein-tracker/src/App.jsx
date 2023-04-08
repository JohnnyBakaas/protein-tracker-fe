import { useEffect, useState } from "react";
import TodaysIntake from "./components/TodaysIntake";
import AddFood from "./components/AddFood";

function App() {
  const [loadingFood, setLoadingFood] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);
  const [food, setFood] = useState();
  const [user, setUser] = useState();
  const [jalla, setJalla] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/food").then((response) => {
      response.json().then((data) => {
        setFood(data);
        setLoadingFood(false);
      });
    });

    fetch("http://localhost:3000/user").then((response) => {
      response.json().then((data) => {
        setUser(data);
        setLoadingUser(false);
      });
    });
  }, [jalla]);

  const handleAddFood = (food) => {
    // Make POST request to add the food to the database
    fetch("http://localhost:3000/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    })
      .then((response) => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Failed to add food");
        }
        // Update the food state with the new food
        setFood([...food, food]);
      })
      .catch((error) => {
        console.error(error);
      })
      .then(() => setJalla());
  };

  if (loadingFood || loadingUser) return <div>Loading...</div>;

  return (
    <div>
      <TodaysIntake data={{ food, user }} />
      <AddFood onSubmit={handleAddFood} />
    </div>
  );
}

export default App;
