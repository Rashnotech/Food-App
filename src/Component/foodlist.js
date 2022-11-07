import Search from "./search";

export default function FoodList({ Foodstore, handleChange }) {
  const usNumber = new Intl.NumberFormat("en-US");

  function picture(image, photoID) {
    var reader = new FileReader();
    const display = document.getElementById(photoID);
    reader.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        if (display.hasChildNodes()) {
          return;
        } else {
          display.appendChild(img);
        }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(image[0]);
  }

  return (
    <div className="px-8 py-4 w-full">
      <Search handleChange={handleChange} />
      {Foodstore.map((list) => (
        <div
          key={list.id}
          className=" w-full mt-4 border-b-2 border-b-purple-300 flex flex-row"
        >
          <div
            className="w-1/2 h-full border border-2 border-purple-400"
            id={list.id}
          >
            {picture(list.picture, list.id)}
          </div>
          <div className="flex p-2 flex-col justify-between">
            <h2 className="text-2xl text-slate-600">{list.foodname}</h2>
            <p className="text-2xl text-semibold">{`N${usNumber.format(
              list.foodprice
            )}`}</p>
            <p className="text-xl">{`Rating: ${list.ratings}/5`}</p>
          </div>
        </div>
      ))}
      {Foodstore.length === 0 ? (
        <div className="text-xl object-center italic text-slate-700 text-center mt-8 w-full">
          No Item
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

//
