import React from 'react';
import { useState, useContext } from 'react';

import { Button } from '@material-ui/core';
import ReactTransitionGroup, { CSSTransition } from 'react-transition-group';

import darkTheme, { defaultStyles } from '../theme-config/dark-theme';

import './main-player.scss'

export default function MainPlayer(props: { id: number }) {
    let [inProp, setInProp] = useState(false);
    let commonStyle = defaultStyles();
    return (

        <div className={commonStyle.default}>
            <div className={commonStyle["top-section"]}>
                THis is top
            </div>
            <div className={commonStyle["middle-section"]}>
            Thisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddle
            Thisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddle
            Thisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddle
            Thisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddle
            Thisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddle
            Thisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddle
            Thisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddle
            Thisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddleThisis mmiddle
            </div>
            <div className={commonStyle["bottom-section"]}>
            THis is bottom

            </div>
        </div>
    )

}