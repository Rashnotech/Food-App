export default function Form(props) {
  return (
    <div className="md:w-1/2 px-12 py-6 border-2 border-b-purple-700 md:border-0">
      <form
        className="space-y-4"
        onSubmit={(event) => props.handleSubmit(event)}
      >
        <div className="flex flex-col">
          <label htmlFor="foodname" className="text-slate-800 font-semibold">
            Food Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Enter favourite food name"
            className="form-text px-4 py-3 shadow-inner focus:ring-purple-200 focus:ring-1 border border-slate-400 rounded-md focus:outline-none placeholder:text-slate-400"
          />
          <p className="text-pink-600 text-xs font-semibold" id="error"></p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="text-slate-800 font-semibold">
            Price
          </label>
          <input
            id="price"
            type="text"
            required
            placeholder="Food price"
            className="form-text px-4 py-3 shadow-inner focus:ring-purple-200 focus:ring-1 border border-slate-400 rounded-md focus:outline-none placeholder:text-slate-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="rating" className="text-slate-800 font-semibold">
            Rating
          </label>
          <input
            type="number"
            min="0"
            required
            id="rating"
            placeholder="Rating: 3-5"
            className="form-number px-4 py-3 shadow-inner focus:ring-purple-200 focus:ring-1 border border-slate-400 rounded-md focus:outline-none placeholder:text-slate-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="upload" className="text-slate-800 font-semibold">
            Upload
          </label>
          <input
            id="picture"
            type="file"
            accept="image/*"
            className="form-file px-4 py-3 shadow-inner focus:ring-purple-200 focus:ring-1 border border-slate-400 rounded-md focus:outline-none placeholder:text-slate-400"
          />
        </div>
        <button
          type="submit"
          className="rounded-md hover:bg-purple-900 duration-200 hover:ease-in-out shadow-inner font-semibold bg-purple-700 text-sm text-slate-50 px-4 py-3"
        >
          Add Food
        </button>
      </form>
    </div>
  );
}
