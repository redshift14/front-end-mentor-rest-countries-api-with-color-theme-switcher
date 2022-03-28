const CountryMap = ({ countryDetails }) => {

  const getLat = (data) => {
    if (data) {
      return data.latlng[0]
    }
    else {
      return 0
    }
  }

  const getLog = (data) => {
    if (data) {
      return data.latlng[1]
    }
    else {
      return 0
    }
  }

  return (
    <iframe
        src={`https://www.google.com/maps?q=${getLat(countryDetails)},${getLog(countryDetails)}&z=5&ie=UTF8&iwloc=&output=embed`}
        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="map" className="map"
    />
  );
}

export default CountryMap