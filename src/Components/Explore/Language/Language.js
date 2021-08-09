import React from 'react'
import CommonCardPage from '../Common/CommonCardPage/CommonCardsPage'

function Language() {
    const tabsDetails = ["New"];
    const data = [{
        tab: 0,
        shouldHover: false,
        thumbnail: "https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg",
        title: "English",
        hoverData: "",
        channel: " Advance",
        views: "10M views  • 15 years ago",
        desp: "Honesty is the best policy",
        time: "33:00"
    },
    {
        tab: 0,
        shouldHover: true,
        thumbnail: "https://economictimes.indiatimes.com/thumb/msid-72136111,width-1200,height-900,resizemode-4,imgsize-361723/hindi-thnkstck.jpg?from=mdr",
        title: "हिंदी",
        hoverData: "Fluent",
        channel: " धाराप्रवाह",
        views: "३M व्यूज  • १४ साल पहले",
        desp: "ईमानदारी सर्वोत्तम नीति है",
        time: "११:५६"
    }
    ]
    return (
        <CommonCardPage page="Language" tabsDetails={tabsDetails} data={data} icon="https://image.flaticon.com/icons/png/512/1973/1973739.png" />
    )
}

export default Language
