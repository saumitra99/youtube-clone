import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import RecommendedVideos from '../RecommendedVideos/RecommendedVideos'
import SearchPage from '../Explore/ExplorePage'
import Experience from '../Explore/Experience/Experience'
import Project from '../Explore/Projects/Projects'
import Education from '../Explore/Education/Education'
import Language from '../Explore/Language/Language'
import ComingSoon from '../ComingSoon/ComingSoon'
import Skills from '../Explore/Skills/Skills'
function Routes() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>

                    <Route path="/Explore/Language">
                        <div className="app__page">
                            <Sidebar />
                            <Language />

                        </div>
                    </Route>
                    <Route path="/Explore/Education">
                        <div className="app__page">
                            <Sidebar />
                            <Education />

                        </div>
                    </Route>
                    <Route path="/Explore/Projects">
                        <div className="app__page">
                            <Sidebar />
                            <Project />

                        </div>
                    </Route>
                    <Route path="/Explore/Skills">
                        <div className="app__page">
                            <Sidebar />
                            <Skills />

                        </div>
                    </Route>
                    <Route path="/Explore/Experience">
                        <div className="app__page">
                            <Sidebar />
                            <Experience />

                        </div>
                    </Route>
                    <Route path="/Explore">
                        <div className="app__page">
                            <Sidebar />
                            <SearchPage />
                        </div>
                    </Route>
                    <Route path="/">
                        <div className="app__page">
                            <Sidebar />
                            <RecommendedVideos />
                        </div>
                    </Route>
                    <Route>
                        <div>
                            <Sidebar />
                            <ComingSoon />

                        </div>
                    </Route>

                </Switch>
            </Router>

        </div>
    )
}

export default Routes
