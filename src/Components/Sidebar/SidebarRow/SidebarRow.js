import React from 'react';
import './SidebarRow.css';
import { Link } from "react-router-dom"

function SidebarRow({ selected, Icon, title }) {
    return (
        <Link className="sidebar__Link" to={`/${title}`}>
            <div className={`sidebarRow ${selected && 'selected'}`}>
                <Icon className="sidebarRow__icon" />
                <h1 className="sidebarRow__title">{title}</h1>
            </div>
        </Link>
    )
}

export default SidebarRow
