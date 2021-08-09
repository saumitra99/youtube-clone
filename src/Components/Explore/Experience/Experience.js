import React from 'react'
import CommonCardPage from '../Common/CommonCardPage/CommonCardsPage'
// import Tabs from './Tabs/Tabs'
// import './Experience.css'
function Experience() {
    const tabsDetails = ["Current", "Past"];
    const data = [{
        tab: 0,
        shouldHover: false,
        thumbnail: "https://ms-f7-sites-01-cdn.azureedge.net/docs/stories/784038-cerner-partner-professional-service-microsoft365-teams/resources/c4f1356a-0ba1-41da-a067-98abe001e1bd/1205062810752828843_1207010660882967528",
        title: "Cerner Corporation  ",
        channel: " Software Engineer",
        views: "11M views  • 1.2 years ago",
        desp: "Worked in 4 teams simultaneously 1. Website development using react redux and flask. 2. RSA Archer Team for configurations and developing applications from the admin side. C# .net for development application mainly for Sharepoint and db integration. RPA for automating monotonous work.",
        time: "23:45"
    },
    {
        tab: 1,
        shouldHover: false,
        thumbnail: "https://ms-f7-sites-01-cdn.azureedge.net/docs/stories/784038-cerner-partner-professional-service-microsoft365-teams/resources/c4f1356a-0ba1-41da-a067-98abe001e1bd/1205062810752828843_1207010660882967528",
        title: "Cerner Corporation  ",
        channel: " Software Intern",
        views: "9M views  • 12/2019-06/2020",
        desp: "I did my internship for 6 months in the field of web development. I mainly worked on react.js, redux and flask. Being in cerner i also got the opportunity to learn django , ruby as well as ruby on rails. I made a full stack website for cerner during this period.",
        time: "0:23"
    },
    {
        tab: 1,
        shouldHover: false,
        thumbnail: "https://www.mcafee.com/content/dam/consumer/en/company-logo/McAFEE_TAG_H_RGB.png",
        title: "McAfee",
        channel: "Summer Intern  ",
        views: " 5M views  • 06/2019-07/2019",
        desp: " I did my summer internship in McAfee's team called E-Policy orchestrator. Worked as a vulnerability tester.",
        time: "7:23"
    }]
    return (
        <CommonCardPage page="Experience" tabsDetails={tabsDetails} data={data} icon="https://www.youtube.com/img/trending/avatar/trending_avatar.png" />
    )
}

export default Experience
