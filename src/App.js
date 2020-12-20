import React, {Component} from "react";
import './App.css'

const App = () => {
    return (
        <div className={`app-wrapper`}>
            <header className={`header`}>
                <img src="https://cdn.worldvectorlogo.com/logos/slack.svg" alt="2"/>
            </header>
            <nav className={`nav`}>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className={`content`}>
                <div>
                    <img
                        src="https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg"
                        alt=""/>
                </div>
                <div>
                    ava+description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
