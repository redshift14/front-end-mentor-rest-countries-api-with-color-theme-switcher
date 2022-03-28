import { useEffect } from "react"
import Country from "./Country"
import loader from '../resources/images/loader.gif'

const Countries = ({fetchCountries, loading, countries}) => {

  useEffect(() => {
    fetchCountries()
  },[])

  const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (loading) {
    return (
      <div className="loader">
      <img src={loader} alt="loading..."></img>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <section className="countries-cards-section">
      {
        countries.map((country) => {
          const { alpha3Code, flag, name, population, region, capital } = country
          return (
            <Country 
            key={alpha3Code}
            alpha3Code={alpha3Code}
            flag={flag}
            name={name} 
            population={addCommasToNumber(population)}
            region={region}
            capital={capital}
          />
          )
        })
      }
    </section>
  )
}

export default Countries