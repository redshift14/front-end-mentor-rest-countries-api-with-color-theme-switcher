import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import CountryDetails from "../components/CountryDetails"
import CountryMap from "../components/CountryMap"
import loader from '../resources/images/loader.gif'
import NotFound from "../components/NotFound"

const DetailsPage = () => {

  const navigate = useNavigate()

  const { code } = useParams()

  const [loading, setLoading] = useState(true)
  const [countryDetails, setCountryDetails] = useState('')
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://restcountries.com/v2/alpha/${code}`, {signal: signal})
        const data = await response.json()
  
        if (response.ok) {
          setLoading(false)
          setCountryDetails(data)
        }
        else {
          console.log("not found")
          setNotFound(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    return () => {
      controller.abort()
    }
  }, [code])

  const addCommasToNumber = (number) => {
    if (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

  if (notFound) {
    return (
      <NotFound />
    )
  }

  if (loading) {
    return (
      <>
        <button id="back-btn" onClick={() => navigate(-1)}>Back</button>
        <div className="loader">
          <img src={loader} alt="loading..."></img>
          <p>Loading...</p>
        </div>
      </>
    )
  }

  return (
    <>
      <button id="back-btn" onClick={() => navigate(-1)}>Back</button>
      <CountryDetails countryDetails={countryDetails} addCommasToNumber={addCommasToNumber} />
      <CountryMap countryDetails={countryDetails} />
    </>
  )
}

export default DetailsPage