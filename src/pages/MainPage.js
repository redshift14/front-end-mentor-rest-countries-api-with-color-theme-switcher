import { useState } from "react";

import SearchController from "../components/SearchController";
import Countries from "../components/Countries";
import NotFound from "../components/NotFound";

const MainPage = () => {

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  const fetchHandler = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (response.ok) {
        setLoading(false)
        setCountries(data)
      }
      else {
        setNotFound(true)
      }
    } catch (error) {
      console.log(error)
      setNotFound(true)
    }
  }

  const fetchCountries = async () => {
    setNotFound(false)
    fetchHandler('https://restcountries.com/v2/all')
  }

  const fetchCountriesByNames = async (countryName) => {
    let fetchUrl
    if (countryName === '') fetchUrl = `https://restcountries.com/v2/all`
    else {
      fetchUrl = `https://restcountries.com/v2/name/${countryName}`
    }
    fetchHandler(fetchUrl)
  }

  const fetchCountriesByRegion = async (region) => {
    let fetchUrl
    if (region === 'all') fetchUrl = `https://restcountries.com/v2/all`
    else {
      fetchUrl = `https://restcountries.com/v2/region/${region}`
    }
    fetchHandler(fetchUrl)
  }

  return (
    <>
      {
        notFound ? <NotFound reset={fetchCountries}></NotFound> :
        <> <SearchController fetchCountriesByNames={fetchCountriesByNames} fetchCountriesByRegion={fetchCountriesByRegion} />
        <Countries fetchCountries={fetchCountries} loading={loading} countries={countries} /> </>
      }
    </>
  )
}

export default MainPage