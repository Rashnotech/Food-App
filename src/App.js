import { nanoid } from "nanoid";
import { useState } from "react";
import Form from "./Component/foodentries";
import FoodList from "./Component/foodlist";

function App() {
  const [food, setFood] = useState([]);
  const handleChange = () => {
    const searchItem = document.querySelector("#search").value;
    const filterword = searchItem.toLowerCase();
    setFood((prevFood) => {
      return prevFood.filter((foodlist) =>
        foodlist.foodname.toLowerCase().match(new RegExp(filterword, "g"))
      );
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const rating = document.querySelector("#rating").value;
    const price = document.querySelector("#price").value;
    const image = document.querySelector("#picture").files;
    const feedback = document.querySelector("#error");
    const result = food.some(
      (foodlist) => foodlist.foodname.toLowerCase() === name.toLowerCase()
    );
    if (result) {
      feedback.textContent = "Favorite food already exist";
    } else {
      setFood((prevFood) => {
        return [
          ...prevFood,
          {
            id: nanoid(),
            foodname: name,
            foodprice: price,
            ratings: rating,
            picture: image,
          },
        ];
      });
      feedback.textContent = "";
    }
  };
  return (
    <div className="bg-gray-800 md:h-screen flex justify-center items-center">
      <div className="md:flex bg-slate-50 text-slate-600 md:w-3/4 md:h-3/4">
        <Form handleSubmit={handleSubmit} />
        <FoodList Foodstore={food} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
