import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './Card.css';

function Card({ thumbnail, title, channel, views, desp, hoverData, shouldHover, time }) {
    console.log(hoverData)
    return (
        <div className="card">
            <div className="card__img">
                <img
                    src={thumbnail}
                    alt=""
                />
                <p>{time}</p>
            </div>
            <div className="card__textall">
                <p>{title}</p>
                <p1><span className="card__textall__channel">{channel}{(shouldHover) ? (<span class="tooltiptext">{hoverData}</span>) : (null)}</span> {views}</p1>
                <div className="card__textall__details">
                    <p>{desp}</p>

                </div>
            </div>

        </div>
    )
}

export default Card
