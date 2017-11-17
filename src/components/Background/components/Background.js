/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import Particles from 'react-particles-js';
import {isBrowser} from 'react-device-detect';

export default () => {
    return (isBrowser) ?
        (
            <Particles
                params={{
                    particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#172A40",
                                blur: 1
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: true,
                                mode: "push"
                            },
                            resize: true
                        },
                    }
                }}
                style={{
                    background: '#252839',
                    width: '100%',
                    height: '100%',
                    position:'fixed',
                    top:0,
                    right:0,
                    bottom:0,
                    left:0,
                    zIndex: -100,
                }}
            />
        )
        :
        (
            <div style={{
                background: '#252839',
                width: '100%',
                height: '100%',
                position:'fixed',
                top:0,
                right:0,
                bottom:0,
                left:0,
                zIndex: -100,
            }} ></div>
        )
};

