import CountryBorders from "./CountryBorders"

const CountryDetails = ({ countryDetails, addCommasToNumber }) => {
  const { name, nativeName, population, region, subregion, flag, capital, topLevelDomain, borders } = countryDetails

  const getCurrencies = (data) => {
    let currenciesNames = []
    if (data.currencies) {
      data.currencies.forEach(currency => {
        currenciesNames.push(currency.name)
        currenciesNames.push(', ')
      })
      return currenciesNames
    }
    else {
      return 'No Currencies'
    }
  }

  const getLangs = (data) => {
    let langsNames = []
    if (data.languages) {
      data.languages.forEach(language => {
        langsNames.push(language.name)        
        langsNames.push(', ')                
      })
      return langsNames
    }
    else {
      return 'No Languages'
    }
  }

  const getTopLevelDomain = () => {
    if (topLevelDomain) {
      return topLevelDomain[0]
    }
  }

  return (
    <section className="country-info"> 
      <div className="left-col">
        <img src={flag} alt={name}></img>
      </div>
      <div className="right-col">
        <h1 id="selected-country-name">{name}</h1>
        <div className="selected-country-info">
          <p id="native-name"><span className="info-label">Native Name: </span>{nativeName}</p>
          <p id="population"><span className="info-label">Population: </span>{addCommasToNumber(population)}</p>
          <p id="region"><span className="info-label">Region: </span>{region}</p>
          <p id="sub-region"><span className="info-label">Sub Region: </span>{subregion}</p>
          <p id="capital"><span className="info-label">Capital: </span>{capital}</p>
          <p id="domain"><span className="info-label">Top Level Domain: </span>{getTopLevelDomain()}</p>
          <p id="currencies"><span className="info-label">Euro: </span>{getCurrencies(countryDetails)}</p>
          <p id="langs"><span className="info-label">Languages: </span>{getLangs(countryDetails)}</p>
        </div>
        <div className="border-countries-container">
          <p className="info-label">Border Countries:</p>
          {
            borders ? <CountryBorders borders={borders} /> : <CountryBorders borders={'No Borders'} />
          }
        </div>
      </div> 
    </section> 
  )
}

export default CountryDetails