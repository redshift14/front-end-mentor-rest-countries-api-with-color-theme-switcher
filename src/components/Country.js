import { Link } from "react-router-dom"

const Country = ({alpha3Code, name, flag, population, region, capital}) => {
  return (
    <Link to={`/${alpha3Code}`} style={{ textDecoration: 'none' }} >
      <div className="flag-container">
        <img className="country-flag" src={flag} alt="flag"></img>
      </div>
      <div className="info-container">
        <h2 className="country-name">{name}</h2>
          <p className="population"><span className="info-label">Population: </span>{population}</p>
          <p className="region"><span className="info-label">Region: </span>{region}</p>
          <p className="capital"><span className="info-label">Capital: </span>{capital}</p>
      </div>
    </Link>
  )
}

export default Country