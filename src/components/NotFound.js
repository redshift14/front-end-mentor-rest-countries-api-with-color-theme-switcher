import { Link } from "react-router-dom"

const NotFound = ({reset}) => {
  return (
    <section className="not-found-section">
      <h2>Country Not Found</h2>
      <Link to={'/'}>
        <button className="reset-countries" onClick={() => reset ? reset(): ''} >Reset</button>
      </Link>
    </section>
  )
}

export default NotFound

/*  */ 