const FilterByRegion = ({ setFilter }) => {
  return (
    <select
      className="p-3 px-5 mt-6 md:mt-0 text-sm
    text-light-mode-text dark:text-dark-mode-text
     placeholder-light-mode-input dark:placeholder-dark-mode-text
     bg-light-mode-background dark:bg-dark-mode-elements
     min-w-48 rounded-md shadow-md"
      defaultValue=""
      onChange={setFilter}
    >
      <option value="" disabled selected hidden>
        Filter by region
      </option>
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default FilterByRegion;
