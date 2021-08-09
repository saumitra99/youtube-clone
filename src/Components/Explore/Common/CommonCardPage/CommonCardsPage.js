import React from 'react'
import Tabs from '../Tabs/Tabs'
import './CommonCardsPage.css'
function CommonCardsPage({ page, tabsDetails, data, icon }) {

    return (
        <div className="commonCardsPage">
            <div className="commonCardsPage__top">
                <img
                    src={icon}
                    alt=""
                />
                <p>{page}</p>
            </div>
            <div className="commonCardsPage__tabs">
                <Tabs tabsDetails={tabsDetails} cardDetails={data} />
            </div>

        </div>
    )
}

export default CommonCardsPage
