import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import './ExploreCard.css';
import { Link } from "react-router-dom"

export default function SimpleCard({ icon, title }) {

    return (

        <Card className="explorecard">
            <Link className="explorecard__link" to={`/Explore/${title}`}>
                <CardContent className="explorecard__content">
                    <div className="explorecard__content__icon">
                        <img
                            src={icon}
                            alt=""
                        />
                        <p>{title}</p>
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
}
