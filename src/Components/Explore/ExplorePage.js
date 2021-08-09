import React from 'react'
import ExploreCard from './ExploreCard/ExploreCard'
import './ExplorePage.css'
import EducationIcon from '../../media/educationLogo.png';
import ProjectsLogo from '../../media/ProjectsLogo.png';
// import EducationIcon from '../../media/educationLogo.png';
// import EducationIcon from '../../media/educationLogo.png';
function SearchPage() {
    return (
        <div className="explorePage">
            {/* <h4>Skills</h4>  */}
            <ExploreCard icon="https://www.youtube.com/img/explore/destinations/icons/trending_color_64.png" title="Experience" />
            <ExploreCard icon="https://img-premium.flaticon.com/png/512/3080/premium/3080467.png?token=exp=1628422544~hmac=40fef1ac9f99e2db4c4f09d34dbb7940" title="Skills" />
            <ExploreCard icon="https://image.flaticon.com/icons/png/512/2683/2683272.png" title="Projects" />
            <ExploreCard icon="https://img-premium.flaticon.com/png/512/2936/premium/2936735.png?token=exp=1628422589~hmac=ab69ed88e049e85a2b755ccaa222e73c" title="Education" />
            <ExploreCard icon="https://image.flaticon.com/icons/png/512/1973/1973739.png" title="Language" />
        </div>
    )
}

export default SearchPage
