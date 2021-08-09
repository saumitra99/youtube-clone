import React from 'react'
import CommonCardPage from '../Common/CommonCardPage/CommonCardsPage'
import Skill from '../../../media/skills.png'
function Skills() {
    const tabsDetails = ["Web Development", "Programming Language", "Tools", "Other"];
    const data = [
        {
            tab: 0,
            shouldHover: false,
            thumbnail: "https://miro.medium.com/max/1200/1*yjH3SiDaVWtpBX0g_2q68g.png",
            title: "React.js",
            hoverData: "",
            channel: "Saumitra",
            views: "8M views  • 1.9 years ago",
            desp: "",
            time: "8:00"
        },
        {
            tab: 0,
            shouldHover: false,
            thumbnail: "https://miro.medium.com/max/1400/1*ppiHMoVTzehgjyVD68wfVA.png",
            title: "Redux-saga",
            hoverData: "",
            channel: "Saumitra",
            views: "7M views  • 1.9 years ago",
            desp: "",
            time: "3:21"
        },
        {
            tab: 0,
            shouldHover: false,
            thumbnail: "https://miro.medium.com/max/438/1*0G5zu7CnXdMT9pGbYUTQLQ.png",
            title: "Flask",
            hoverData: "",
            channel: "Saumitra",
            views: "7M views  • 1.9 years ago",
            desp: "",
            time: "2:29"
        },
        {
            tab: 0,
            shouldHover: false,
            thumbnail: "https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg",
            title: "JavaScript",
            hoverData: "",
            channel: "Saumitra",
            views: "8M views  • 1.9 years ago",
            desp: "",
            time: "5:59"
        },
        {
            tab: 0,
            shouldHover: false,
            thumbnail: "https://www.tutorialrepublic.com/lib/images/css-illustration.png",
            title: "CSS",
            hoverData: "",
            channel: "Saumitra",
            views: "4M views  • 1.9 years ago",
            desp: "",
            time: "8:19"
        },
        {
            tab: 0,
            shouldHover: false,
            thumbnail: "https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png",
            title: "Material UI",
            hoverData: "",
            channel: "Saumitra",
            views: "6M views  • 2 years ago",
            desp: "",
            time: "10:00"
        },
        {
            tab: 0,
            shouldHover: false,
            thumbnail: "https://i.imgur.com/eBzN4ag.jpeg",
            title: "Semantic UI",
            hoverData: "",
            channel: "Saumitra",
            views: "5M views  • 1 years ago",
            desp: "",
            time: "5:09"
        },
        {
            tab: 1,
            shouldHover: false,
            thumbnail: "https://www.thoughtco.com/thmb/hIHa_mf_Huj1_2q5nl8wXsCiKMQ=/4321x2419/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-java-5b4bda1cc9e77c0037171617.jpg",
            title: "Java",
            hoverData: "",
            channel: "Saumitra",
            views: "6M views  • 8 years ago",
            desp: "",
            time: "7:00"
        },
        {
            tab: 1,
            shouldHover: false,
            thumbnail: "https://everyday.codes/wp-content/uploads/2019/12/newpythonlogo.png",
            title: "Python",
            hoverData: "",
            channel: "Saumitra",
            views: "4M views  • 3 years ago",
            desp: "",
            time: "6:43"
        },
        {
            tab: 1,
            shouldHover: false,
            thumbnail: "https://wakeupandcode.com/wp-content/uploads/2019/03/C.NET_-1024x384-1.png",
            title: "C# .Net",
            hoverData: "",
            channel: "Saumitra",
            views: "800k views  • 5 months ago",
            desp: "",
            time: "9:33"
        },
        {
            tab: 1,
            shouldHover: false,
            thumbnail: "https://cloudblogs.microsoft.com/uploads/prod/sites/32/2020/05/SQL.png",
            title: "SQL",
            hoverData: "",
            channel: "Saumitra",
            views: "1M views  • 3 years ago",
            desp: "",
            time: "3:31"
        },
        {
            tab: 2,
            shouldHover: false,
            thumbnail: "https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png",
            title: "Github",
            hoverData: "",
            channel: "Saumitra",
            views: "8M views  • 2 years ago",
            desp: "",
            time: "1:11"
        },
        {
            tab: 2,
            shouldHover: false,
            thumbnail: "https://blog.adacore.com/uploads/_2400x1200_crop_center-center_none/iStock-1144628524.jpg",
            title: "Docker",
            hoverData: "",
            channel: "Saumitra",
            views: "980K views  • 1 years ago",
            desp: "",
            time: "3:21"
        },
        {
            tab: 2,
            shouldHover: false,
            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
            title: "npm",
            hoverData: "",
            channel: "Saumitra",
            views: "5M views  • 2 years ago",
            desp: "",
            time: "4:41"
        },
        {
            tab: 2,
            shouldHover: false,
            thumbnail: "http://s3.amazonaws.com/jonathanawotwi.com/wp-content/uploads/2019/03/07194619/webpack.png",
            title: "webpack",
            hoverData: "",
            channel: "Saumitra",
            views: "980k views  • 2 years ago",
            desp: "",
            time: "7:19"
        },
        {
            tab: 3,
            shouldHover: false,
            thumbnail: "https://simplifyreality.com/blog/wp-content/uploads/RPA-robotic-process-automation-1.png",
            title: "RPA",
            hoverData: "",
            channel: "Saumitra",
            views: "6M views  • 1 years ago",
            desp: "",
            time: "5:00"
        },

    ]
    return (
        <CommonCardPage page="Skills" tabsDetails={tabsDetails} data={data} icon={Skill} />
    )
}

export default Skills
