import React, { useState } from 'react'
import "../Header/Header.scss"
import logo from "../../Images/lololo.png"
import Switch from '@material-ui/core/Switch';
import Timer from '../Timer/Timer';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TelegramIcon from '@material-ui/icons/Telegram';

const USDTList = ["BTC", "ETH", "USDT", "XRP", "TRX", "DASH", "ZEC", "XEM", "IOST", "WIN", "BTT", "WRX"];
const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 68,
        height: 35,
        padding: 0,
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(30px)',
            color: "#3dc6c1",
            '& + $track': {
                backgroundColor: '#545b62',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#fff',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 31,
        height: 31,
        alignSelf: "center",
        overflow: "visible",
        backgroundColor: "#3dc6c1"
    },
    track: {
        borderRadius: 50,
        border: `1px solid #fff`,
        backgroundColor: "#fff",
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

export default function Header() {

    const [toggle1, settoggle1] = useState(false);
    const [toggle2, settoggle2] = useState(false);

    return (
        <div className="header">
            <div className="header-wrap">
                <div className="logo"><img src={logo}></img></div>
                <div className="tabs">
                    <div className="tab">
                        <button onClick={() => { settoggle1(toggle1 ? false : true); }}>INR ▼</button>
                        <div className={toggle1 ? "open" : "hide"} id="dropdown-list" ><ul><li>INR</li></ul></div>
                    </div>

                    <div className="tab">
                        <button onClick={() => { settoggle2(toggle2 ? false : true); }}>USDT ▼</button>
                        <div className={toggle2 ? "open" : "hide"} id="dropdown-list"><ul>{USDTList.map((i) => <li>{i}</li>)}</ul></div>
                    </div>
                    <div className="tab">
                        <button>BUY USDT</button>
                    </div>
                </div>
                <div className="additionals">
                    <div className="timer"><Timer /></div>
                    <div className="social">
                        <button> <TelegramIcon className="TelegramIcon" />Connect Telegram</button>
                    </div>
                    <div className="switch">
                        <FormControlLabel
                            control={<IOSSwitch name="checkedB" />}

                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
