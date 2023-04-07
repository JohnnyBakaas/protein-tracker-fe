const TodaysIntake = ({ meals }) => {
  const todatsFood = SeperateTodaysFood(meals);
  return (
    <section>
      <h2>Idag</h2>
      {todatsFood}
    </section>
  );
};

const SeperateTodaysFood = (meals) => {
  const todaysMeals = [];
  meals[0].map((meal) => {
    const today = new Date();
    const dateToCheck = new Date(meal.when);

    if (
      dateToCheck.getFullYear() === today.getFullYear() &&
      dateToCheck.getMonth() === today.getMonth() &&
      dateToCheck.getDate() === today.getDate()
    ) {
      todaysMeals.push(meal);
    } else {
      // Fjern dette så fort vi har mer data
      todaysMeals.push(meal);
    }
  });

  let totalProtein = 0;
  let totalCalories = 0;
  todaysMeals.map((meal) => {
    totalProtein += meal.protein;
    totalCalories += meal.kcal;
  });
  let table = TodaysTable(todaysMeals);
  const kgToLbs = 2.2;

  return (
    <div>
      <p>kcal: {totalCalories} </p>
      <p>
        protein: {totalProtein} / {meals[1].waight * ~~kgToLbs}
      </p>
      {table}
    </div>
  );
};

const TodaysTable = (data) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Måltid</th>
          <th>Proteiner</th>
          <th>Kalorier</th>
          <th>Tid</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.protein}</td>
              <td>{item.kcal}</td>
              <td>
                {new Date(item.when).toLocaleTimeString("en-US", {
                  hour12: false,
                  hour: "numeric",
                  minute: "numeric",
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TodaysIntake;
