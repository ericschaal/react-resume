/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/
import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import type {State, Props} from '../model';

export default class NavigationBar extends Component<Props, State> {

    toggle: () => void;

    constructor(props: Props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar style={styles.navBarContainer} color="faded" dark fixed expand="md">
                    <NavbarBrand style={styles.navBrand} href="/">Eric Schaal</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink target="_blank" style={styles.menuItem} href="/resume.pdf">Download my Resume</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const styles = {
    navBarContainer: {
        background: 'rgba(0,0,0,0.4)'
    },
    navBrand: {
        fontWeight: '100'
    },
    menuItem: {
        color: 'white',
    }
};