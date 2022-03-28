const SearchController = ({fetchCountriesByNames, fetchCountriesByRegion}) => {
  return (
    <section className="search-filter-section">
      <input type="text" id="country-name-field" placeholder="Search for a country..." onKeyUp={(e) => fetchCountriesByNames(e.target.value)} ></input>
      <select id="filter" title="filter-countries" onChange={(e) => fetchCountriesByRegion(e.target.value)} >
      <option disabled>Filter By Region</option>
        <option value="all" >All Regions</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  )
}

export default SearchController