import React, {Component} from 'react'

import '../Styles/navbar.css'

class Navbar extends Component {
    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                    <nav className=" navshadow navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <div className='container'>
                                <div className='row'>
                                    <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="navbar-brand nav-link">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    </ul>
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar