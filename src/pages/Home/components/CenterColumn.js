/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import {Col, Badge, Row, Container,} from 'reactstrap';
import {isBrowser} from 'react-device-detect';
import Icon from 'react-fontawesome';

import Section from '../../../components/Section';

export default () => (
    <Col style={styles.col} xs={{size: 10, offset: 1}} lg={{size: 7, offset: 0}}>
        <Section name="user" title="ABOUT">
            <p style={styles.paragraph}>Blah blah</p>
        </Section>

        <Section name="mortar-board" title="EDUCATION">
            <Container style={styles.workContainer}>

                <Row style={{marginBottom: 12}}>
                    <Col xs="8">
                        <Row>
                            <p style={styles.workName}>McGill University</p>
                        </Row>
                        <Row>
                            <p style={styles.workTitle}>B.Sc Computer Science</p>
                        </Row>
                    </Col>
                    <Col xs="4">
                        <Row>
                            <p style={styles.workDate}>September 2015 - April 2018</p>
                        </Row>
                        <Row>
                            <p style={styles.workDate}>Montreal, QC, Canada</p>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col xs="8">
                        <Row>
                            <p style={styles.workName}>EPFL</p>
                        </Row>
                        <Row>
                            <p style={styles.workTitle}>B.Eng Mechanical Engineering</p>
                        </Row>
                    </Col>
                    <Col xs="4">
                        <Row>
                            <p style={styles.workDate}>September 2014 - June 2015</p>
                        </Row>
                        <Row>
                            <p style={styles.workDate}>Lausanne, VD, Switzerland</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>

        <Section name="building" title="WORK EXPERIENCE">
            <Container style={styles.workContainer}>
                <Row>
                    <Col xs="8">
                        <Row>
                            <p style={styles.workName}>NXTSENS</p>
                        </Row>
                        <Row>
                            <p style={styles.workTitle}>Software Developer</p>
                        </Row>
                    </Col>
                    <Col xs="4">
                        <Row>
                            <p style={styles.workDate}>July 2017 - Current</p>
                        </Row>
                        <Row>
                            <p style={styles.workDate}>Montreal, QC, Canada</p>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginBottom: 12}}>
                    <Col style={styles.workDescriptionContainer} xs="12">
                        <p style={styles.workDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum dolor in quam
                            dapibus elementum. Integer interdum ac tellus nec fermentum. Quisque fringilla ut lectus ut
                            lobortis. Etiam vel lacus eget massa venenatis aliquam non nec neque. Integer libero lectus,
                            euismod ac porta scelerisque, accumsan sit amet ligula. Proin non ultricies nibh, et
                            sollicitudin ante. Nulla facilisi. Nulla odio nunc, bibendum ut scelerisque eu, volutpat nec
                            sapien. Morbi convallis erat mauris. Quisque viverra felis nec nisl porttitor euismod.
                            Vestibulum feugiat consequat sapien, et ornare nunc laoreet vitae.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col xs="8">
                        <Row>
                            <p style={styles.workName}>Orange S.A.</p>
                        </Row>
                        <Row>
                            <p style={styles.workTitle}>Software Developer Intern</p>
                        </Row>
                    </Col>
                    <Col xs="4">
                        <Row>
                            <p style={styles.workDate}>June 2016 - August 2016</p>
                        </Row>
                        <Row>
                            <p style={styles.workDate}>Antananarivo, Madagascar</p>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col style={styles.workDescriptionContainer} xs="12">
                        <p style={styles.workDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum dolor in quam
                            dapibus elementum. Integer interdum ac tellus nec fermentum. Quisque fringilla ut lectus ut
                            lobortis. Etiam vel lacus eget massa venenatis aliquam non nec neque. Integer libero lectus,
                            euismod ac porta scelerisque, accumsan sit amet ligula. Proin non ultricies nibh, et
                            sollicitudin ante. Nulla facilisi. Nulla odio nunc, bibendum ut scelerisque eu, volutpat nec
                            sapien. Morbi convallis erat mauris. Quisque viverra felis nec nisl porttitor euismod.
                            Vestibulum feugiat consequat sapien, et ornare nunc laoreet vitae.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Section>

        <Section name="code" title="SKILLS">
            <Container>
                <Row>
                    <Col xs="12">
                        <p>
                            <Badge color="success" pill>Java</Badge>
                            <Badge color="success" pill>C/C++</Badge>
                            <Badge color="success" pill>F#</Badge>
                            <Badge color="success" pill>C#</Badge>
                            <Badge color="success" pill>Go</Badge>
                            <Badge color="success" pill>JavaScript</Badge>
                            <Badge color="success" pill>MATLAB</Badge>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <p>
                            <Badge color="primary" pill>React</Badge>
                            <Badge color="primary" pill>React-Native</Badge>
                            <Badge color="primary" pill>Node.js</Badge>
                            <Badge color="primary" pill>Meteor.js</Badge>
                            <Badge color="primary" pill>Spring.io</Badge>
                            <Badge color="primary" pill>Neo4j</Badge>
                            <Badge color="primary" pill>Kubernetes</Badge>
                            <Badge color="primary" pill>Docker</Badge>
                            <Badge color="primary" pill>Google Cloud</Badge>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Section>

        <Section name="cog" title="PROJECTS">
            <Container style={styles.projectList}>
                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>Booker</strong></Col>
                    <Col xs="3" md="1"><span style={{color: 'orange'}}><Icon name="github"/> <Icon
                        name="arrow-circle-o-down"/></span></Col>
                    <Col xs="12" md="7"><p style={styles.workDescription}>Fault-tolerant distributed booking system with
                        transaction and replication support.</p></Col>
                </Row>

                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>Cookie Shell</strong></Col>
                    <Col xs="3" md="1"><span style={{color: 'green'}}><Icon name="github"/> <Icon
                        name="arrow-circle-o-down"/></span></Col>
                    <Col
                        xs="12"
                        md="7"><p style={styles.workDescription}>Shell built from scratch with pipes, I/O redirection,
                        job management and history.</p></Col>
                </Row>
                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>Mancala AI</strong></Col>
                    <Col xs="3" md="1"><span style={{color: 'green'}}><Icon name="github"/> <Icon
                        name="arrow-circle-o-down"/></span></Col>
                    <Col xs="12" md="7"><p style={styles.workDescription}>Das Bohnenspie AI player using Alpha-Beta Pruning.</p>
                    </Col>
                </Row>
                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>PleskDynDNS</strong></Col>
                    <Col xs="3" md="1"><span style={{color: 'green'}}><Icon name="github"/> <Icon
                        name="arrow-circle-o-down"/></span></Col>
                    <Col
                        xs="12"
                        md="7">
                        <p style={styles.workDescription}>
                            Dynamic DNS client and server for Plesk Control Panelwritten in Go.
                        </p>
                    </Col>
                </Row>
                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>Live Docker Container Migration</strong></Col>
                    <Col xs="3" md="1"><span style={{color: 'orange'}}><Icon name="github"/> <Icon name="arrow-circle-o-down"/></span></Col>
                    <Col
                        xs="12"
                        md="7">
                        <p style={styles.workDescription}>
                            Live game server migration from one data center toanother without downtime.
                        </p>
                    </Col>
                </Row>
                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>Travl [Ongoing startup project]</strong></Col>
                    <Col xs="3" md="1"><span style={{color: 'orange'}}><Icon name="github"/> <Icon name="arrow-circle-o-down"/></span></Col>
                    <Col xs="12" md="7">
                        <p style={styles.workDescription}>
                            A crowd-sourced and social travel agent that helpsusers build and
                            organize trips based on others' experiences. Built on Meteor.js.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Section>
    </Col>
)


const styles = {
    col: {
        background: '#f6f1ed',
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: '4px',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        marginBottom: 10,
    },
    workContainer: {
        paddingTop: 20,
        lineHeight: '100%',
    },
    workTitle: {
        fontSize: 14,
        marginBottom: 4,
        marginLeft: 12,
        padding: 0,
    },
    workDate: {
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 4,
        padding: 0,
    },
    workName: {
        marginLeft: 12,
        fontWeight: 600,
        marginBottom: 4,
        padding: 0,
    },
    workDescription: {
        fontSize: 16,
        textAlign: 'justify',
    },
    workDescriptionContainer: {
        paddingTop: 12,
    },
    paragraph: {
        textAlign: 'justify',
    },
    projectList: {
        paddingTop: 12,
    },
    projectListItem: {
        paddingBottom: 12
    }
};