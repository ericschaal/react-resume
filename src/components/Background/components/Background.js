/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import Particles from 'react-particles-js';

export default () => (
    <div>
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
                background: '#FFF7DC',
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
    </div>
)