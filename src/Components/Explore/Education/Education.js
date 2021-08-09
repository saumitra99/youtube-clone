import React from 'react'
import CommonCardPage from '../Common/CommonCardPage/CommonCardsPage'

function Education() {
    const tabsDetails = ["Graduation", "Class 12th", "Class 10th"];
    const data = [{
        tab: 0,
        shouldHover: false,
        thumbnail: "https://images.shiksha.com/mediadata/images/articles/1584528545phpdljDz1.jpeg",
        title: "Btech in Computer Science with Specialization in Information Security",
        hoverData: "",
        channel: " Vellore Institute of Technology, Vellore",
        views: "10M views  • 07/2016 - 06/2020,",
        desp: "Completed my graduation with a CGPA of 8.5",
        time: "10:00"
    },
    {
        tab: 1,
        shouldHover: false,
        thumbnail: "https://www.stfrancislucknow.org/slider/inner_img1.jpg",
        title: "Completed class 12th",
        hoverData: "",
        channel: " St. Francis College",
        views: "3M views  • 04/2015 - 04/2016",
        desp: "Completed class 12 from ISC with 85% overall",
        time: "4:55"
    },
    {
        tab: 2,
        shouldHover: false,
        thumbnail: "https://www.stfrancislucknow.org/slider/inner_img1.jpg",
        title: "Completed class 10th",
        hoverData: "",
        channel: " St. Francis College",
        views: " 200k views  • - 04/2014",
        desp: "Completed class 10th from ICSE with 80% overall",
        time: "9:23"
    }]
    return (
        <CommonCardPage page="Education" tabsDetails={tabsDetails} data={data} icon="https://img-premium.flaticon.com/png/512/2936/premium/2936735.png?token=exp=1628422589~hmac=ab69ed88e049e85a2b755ccaa222e73c" />
    )
}

export default Education
