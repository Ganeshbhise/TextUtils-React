import React from 'react'//press imr for importing react
import PropTypes from 'prop-types'//press impt to import proptypes
import {Link} from 'react-router-dom';//import link and (replace a <-->Link and href<-->to to setup router for do not reloading otherwisw use a and href with loading)
//--------------------------------IMP----------------------------------------------------------------------------------------------------------------------------------------
//use Link And to instead of a and href to avoid laoding page and fast performance
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
// press rfc for function generations
function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link  className="navbar-brand" to='/'>{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.change}</label>
            </div>

            <div className={`form-check form-switch text-${props.mode==='light'?'success':'light'}`}>
              <input className="form-check-input mx-2" onClick={props.toggleMode1} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable green mode</label>
            </div>
            
          </div>
        </div>
      </nav>
    )
}
//press pts for (proptypes.string)first p should be small otherwise all p inside the object should be capital
//isrequired when given me must provide value otherwise it willl throw an error
//.string is used when only string values we have to give
Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

//defaultpropes used to show some default text when not given
Navbar.defaultProps = {
    title: 'set your title here',
    aboutText: ' about'
};

export default Navbar
