import Navbar from "../Navbar"

const Wrapper = (props) => {
  return (
    <div id="wrapper" className={ props.darkMode ? 'dark' : 'light' }>
      <Navbar darkMode={props.darkMode} changeDarkMode={props.changeDarkMode} />
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Wrapper