import { useEffect, useState } from "react";
import TodaysIntake from "./components/TodaysIntake";

function App() {
  const [loadingFood, setLoadingFood] = useState(true);
  const [food, setFood] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/food").then((response) => {
      response.json().then((data) => {
        setFood(data);
        setLoadingFood(false);
      });
    });
  }, []);

  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/user").then((response) => {
      response.json().then((data) => {
        setUser(data);
        setLoadingUser(false);
      });
    });
  }, []);

  if (loadingFood || loadingUser) return <div>Loading...</div>;

  return (
    <div>
      <TodaysIntake meals={[food, user]} />
    </div>
  );
}

export default App;
