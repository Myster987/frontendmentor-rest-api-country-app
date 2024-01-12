const SearchBar = ({ inputValue, handleInput }) => {
  return (
    <div
      className="flex min-w-full gap-6 rounded-md bg-light-mode-background
     p-3 px-5
      text-sm text-light-mode-text
      placeholder-light-mode-input shadow-md
      dark:bg-dark-mode-elements dark:text-dark-mode-text
      dark:placeholder-dark-mode-text md:min-w-96"
    >
      <img
        className="dark:invert-[1]"
        src="\search_icon.svg"
        alt="Search icon svg"
      />
      <input
        className="w-full bg-transparent outline-none"
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
