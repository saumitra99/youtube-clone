import React from 'react'
import ExploreCard from './ExploreCard/ExploreCard'
import './ExplorePage.css'
import Skills from '../../media/skills.png'
import Education from '../../media/education.png'
// import EducationIcon from '../../media/educationLogo.png';
// import EducationIcon from '../../media/educationLogo.png';
function SearchPage() {
    return (
        <div className="explorePage">
            {/* <h4>Skills</h4>  */}
            <ExploreCard icon="https://www.youtube.com/img/explore/destinations/icons/trending_color_64.png" title="Experience" />
            <ExploreCard icon={Skills} title="Skills" />
            <ExploreCard icon="https://image.flaticon.com/icons/png/512/2683/2683272.png" title="Projects" />
            <ExploreCard icon={Education} title="Education" />
            <ExploreCard icon="https://image.flaticon.com/icons/png/512/1973/1973739.png" title="Language" />
        </div>
    )
}

export default SearchPage
