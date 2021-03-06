import './App.css';
import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import FriendsNavBar from "./components/FriendsNavBar/FriendsNavBar";
import {addPostToState} from "./redux/state";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar state={props.state.friendsPage}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='/profile'
                               element={<Profile state={props.state.profilePage}
                                                 addPost={props.addPost}/>}/>
                        <Route path='/news'
                               element={<News/>}/>
                        <Route path='/music'
                               element={<Music/>}/>
                        <Route path='/settings'
                               element={<Settings/>}/>
                        <Route path='/friends'
                               element={<Friends state={props.state.friendsPage}/>}/>
                    </Routes>
                </div>
            </div>
    )
}

export default App;
