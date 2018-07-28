import React, {Component} from 'react'

import astronaut from '../Static/img/tronaut.png'

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
                                        <li className="nav-item ">
                                            <div className='container-fluid logos' style={{cursor: 'pointer'}}>
                                                <div className='row'>
                                                    <div className='col-md-4'>
                                                        <img style={{width: '70px', height: '70px', }} src={astronaut} alt='logo'/>
                                                    </div>
                                                    <div className='col-md-4'><h4>H O M E</h4></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
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