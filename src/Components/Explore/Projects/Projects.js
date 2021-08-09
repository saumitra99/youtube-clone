import React from 'react'
import CommonCardPage from '../Common/CommonCardPage/CommonCardsPage'
function Projects() {
    const tabsDetails = ["React", "RPA", ".Net"];
    const data = [{
        tab: 0,
        shouldHover: true,
        thumbnail: "https://miro.medium.com/max/1200/1*yjH3SiDaVWtpBX0g_2q68g.png",
        title: "Elog on-call management",
        hoverData: "React, Redux, Saga, Thunk, Material UI,npm,webpack, Flask, Ldap, PostgreSQL, SQLAlchemy,AzureAD, nginx, RestfulAPI.",
        channel: " Hover to see tech stack",
        views: "10M views  • 0 years ago",
        desp: "Created a ticket logging website for cerner to log and monitor tickets using react redux as the frontend and flask in the backend. Used a lot of RESTful APIs from rapid to fulfill the use case.",
        time: "3:00"
    },
    {
        tab: 1,
        shouldHover: true,
        thumbnail: "https://simplifyreality.com/blog/wp-content/uploads/RPA-robotic-process-automation-1.png",
        title: "Automatic ticket creation",
        hoverData: "RestfulAPI, Orchestrator, LoadQueue, ProcessCase, Robotic Process Automation.",
        channel: " Hover to see tech stack",
        views: "2M views  • 0 years ago",
        desp: "Created a robotic process using RPA for automating the creation of ticket through email which saves 48 hours/month doing the monotonous work.",
        time: "4:00"
    },
    {
        tab: 2,
        shouldHover: true,
        thumbnail: "https://wakeupandcode.com/wp-content/uploads/2019/03/C.NET_-1024x384-1.png",
        title: "Tech Events Calendar",
        hoverData: "Client Context, Shims, C#, .net, ODS connections, Octopus Deploy.",
        channel: " Hover to see tech stack",
        views: " 1M views  • 0 years ago",
        desp: "Using c# .Net created application to update sharepoint calendar with the events and change requests happened until today.",
        time: "7:33"
    }]
    return (
        <CommonCardPage page="Projects" tabsDetails={tabsDetails} data={data} icon="https://image.flaticon.com/icons/png/512/2683/2683272.png" />
    )
}

export default Projects
