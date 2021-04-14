import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {Nav} from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {IconContext} from 'react-icons';
import './App.css'
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import {SidebarData} from "./components/Sidebar/SidebarData";
import Logout from "./components/Logout/Logout";
import Home from "./pages/Home/Home";
import UploadImage from "./components/UploadImage/UploadImage";

function App() {
    //STATE STUFF
    const [loggedInUser, setLoggedInUser] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)

    //CSS STUFF
    const navStyles = {
        marginLeft: '10px'
    }

    useEffect(() => {
        const user = localStorage.getItem('User')
        user ? setLoggedInUser(true) : setLoggedInUser(false)
    }, [])

    return (
        <Router>
            {!loggedInUser ?
                <Nav>
                    <Link style={navStyles} to='/'>Login</Link>
                    <Link style={navStyles} to='/signup'>Signup</Link>
                </Nav>
                :
                //Sidebar
                <IconContext.Provider value={{color: '#fff'}}>
                    <div className="navbar">
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </Link>
                    </div>
                    <Nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className="navbar-toggle">
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose/>
                                </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.className}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </Nav>
                </IconContext.Provider>
            }

            <Switch>

                <Route path='/' exact>
                    <Login currentUser={currentUser} setCurrentUser={setCurrentUser} loggedInUser={loggedInUser}
                           setLoggedInUser={setLoggedInUser}/>
                </Route>

                <Route path='/signup' exact>
                    <Signup/>
                </Route>

                <Route path='/logout' exact>
                  <Logout setLoggedInUser={setLoggedInUser}/>
                </Route>

                <Route path='/home'>
                    <Home />
                </Route>

                <Route path='/upload'>
                    <UploadImage />
                </Route>

            </Switch>
        </Router>

    );
}

export default App;
