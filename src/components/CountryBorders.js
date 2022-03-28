import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const CountryBorders = ({borders}) => {

  const [borderCountries, setBorderCountries] = useState([])
  const [loadingBorders, setLoadingBorders] = useState(true)

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchBorders = async (borderCodes) => {
      setLoadingBorders(true)
      try {
        const response = await fetch(`https://restcountries.com/v2/alpha/?codes=${borderCodes}`, {signal: signal})
        const data = await response.json()
  
        if (response.ok) {
          setLoadingBorders(false)
          setBorderCountries(data)
        }
        else {
          console.log("not found")
        }
      } catch (error) {
        console.log(error)
      }
    }
    if (borders !== 'No Borders') {
      fetchBorders(borders)
    }
    return () => {
      controller.abort()
    }
  }, [borders])

  if (borders === 'No Borders') {
    return (
      <div>
        No Borders.
      </div>
    )
  }

  if (loadingBorders) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <>    
      {
        borderCountries.map((border) => {
          return (
              <Link to={`/${border.alpha3Code}`} key={border.alpha3Code} style={{ textDecoration: 'none' }} >
                <span>{border.name}</span>
              </Link>
          )
        })
      }
    </>
  )
}

export default CountryBorders