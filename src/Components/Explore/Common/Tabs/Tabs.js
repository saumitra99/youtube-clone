import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '../Card/Card';
import './Tabs.css'
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));

export default function FullWidthTabs({ tabsDetails, cardDetails }) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className="exporeTabs__panel">
            <AppBar className="exploreTabs" position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="full width tabs example"
                >
                    {tabsDetails.map((name, index) => {
                        return (<Tab label={name} {...a11yProps(index)} />)
                    })}
                </Tabs>
            </AppBar>
            <div >
                {tabsDetails.map((name, indexi) => {
                    console.log(indexi)
                    return (
                        <TabPanel value={value} index={indexi} dir={theme.direction}>
                            {cardDetails.map((data, indexj) => {
                                if (indexi == data.tab) {
                                    return (
                                        <>
                                            <Card thumbnail={data.thumbnail} title={data.title} channel={data.channel} views={data.views} desp={data.desp} hoverData={data.hoverData} shouldHover={data.shouldHover} time={data.time} />
                                            <br />
                                        </>
                                    )
                                }
                            })}
                        </TabPanel>

                    )

                })}
            </div>
        </div>
    );
}
