export default function Search({ handleChange }) {
  return (
    <>
      <input
        onChange={() => handleChange()}
        id="search"
        type="search"
        placeholder="Search food list"
        className="form-input border placeholder:italic shadow-inner rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-purple-200"
      />
    </>
  );
}
