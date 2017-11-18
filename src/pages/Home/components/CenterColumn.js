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
            <Container style={styles.workContainer}>
                <Row>
                    <Col xs="12">
                        <p style={styles.workDescription}>
                            Experienced Software Developer with a demonstrated history of working in the Smart
                            Healthcare
                            industry. Skilled in Java, JavaScript, C++ and experienced with Network architecture and
                            Distributed Systems. Currently pursuing a Bachelor of Science in Computer Science at McGill
                            University.
                        </p>
                    </Col>
                </Row>
            </Container>
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
                        <Row className="float-right">
                            <p style={styles.workDate}>September 2015 - April 2018</p>
                        </Row>
                        <Row className="float-right">
                            <p style={styles.workDate}>Montreal, QC, Canada</p>
                        </Row>
                    </Col>
                </Row>

                <Row style={{marginBottom: 12}}>
                    <Col xs="8">
                        <Row>
                            <p style={styles.workName}>Lycee Francais Charles de Gaulle</p>
                        </Row>
                        <Row>
                            <p style={styles.workTitle}>Baccalaureat Scientifque</p>
                        </Row>
                    </Col>
                    <Col xs="4">
                        <Row className="float-right">
                            <p style={styles.workDate}> September 2014 - June 2014 </p>
                        </Row>
                        <Row className="float-right">
                            <p style={styles.workDate}>Montreal, QC, Canada</p>
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
                        <Row className="float-right">
                            <p style={styles.workDate}>July 2017 - Current</p>
                        </Row>
                        <Row className="float-right">
                            <p style={styles.workDate}>Montreal, QC, Canada</p>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginBottom: 12}}>
                    <Col style={styles.workDescriptionContainer} xs="12">
                        <p style={styles.workDescription}>
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
                        <Row className="float-right">
                            <p style={styles.workDate}>June 2016 - August 2016</p>
                        </Row>
                        <Row className="float-right">
                            <p style={styles.workDate}>Antananarivo, Madagascar</p>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col style={styles.workDescriptionContainer} xs="12">
                        <p style={styles.workDescription}>
                            I deployed a complete software development environment (Project Management, Bug tracker,
                            VCS, Dependency Management, CI platform) to facilitate employee collaboration and project
                            development in order to boost company productivity.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Section>

        <Section name="code" title="SKILLS">
            <Container style={styles.workContainer}>
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
            <Container style={styles.workContainer}>
                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>Booker</strong></Col>
                    <Col xs="3" md="1"><span style={{color: 'orange'}}><Icon name="github"/> <Icon
                        name="arrow-circle-o-down"/></span></Col>
                    <Col xs="12" md="7"><p style={styles.workDescription}>Fault-tolerant distributed booking system with
                        transaction and replication support.</p></Col>
                </Row>

                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>Cookie Shell</strong></Col>
                    <Col xs="3" md="1">
                        <span style={{color: 'green'}}>
                            <Icon tag="a" href="https://github.com/ericschaal/cookie_shell" name="github"/>
                            <Icon tag="a" href="https://github.com/ericschaal/cookie_shell/archive/master.zip" name="arrow-circle-o-down"/>
                        </span>
                    </Col>
                    <Col
                        xs="12"
                        md="7"><p style={styles.workDescription}>Shell built from scratch with pipes, I/O redirection,
                        job management and history.</p></Col>
                </Row>
                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>Mancala AI</strong></Col>
                    <Col xs="3" md="1">
                        <span style={{color: 'orange'}}>
                            <Icon name="github"/>
                            <Icon name="arrow-circle-o-down"/>
                        </span>
                    </Col>
                    <Col xs="12" md="7"><p style={styles.workDescription}>Das Bohnenspie AI player using Alpha-Beta
                        Pruning.</p>
                    </Col>
                </Row>
                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>PleskDynDNS</strong></Col>
                    <Col xs="3" md="1">
                        <span style={{color: 'green'}}>
                        <Icon tag="a" href="https://github.com/ericschaal/dynDNSPleskClient" name="github"/>
                        <Icon tag="a" href="https://github.com/ericschaal/dynDNSPleskServer/archive/master.zip"
                              name="arrow-circle-o-down"/>
                        </span>
                    </Col>
                    <Col
                        xs="12"
                        md="7">
                        <p style={styles.workDescription}>
                            Dynamic DNS client and server for Plesk Control Panel written in Go.
                        </p>
                    </Col>
                </Row>
                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>Live Docker Container Migration</strong></Col>
                    <Col xs="3" md="1"><span style={{color: 'orange'}}><Icon name="github"/> <Icon
                        name="arrow-circle-o-down"/></span></Col>
                    <Col
                        xs="12"
                        md="7">
                        <p style={styles.workDescription}>
                            Live game server migration from one data center to another without downtime.
                        </p>
                    </Col>
                </Row>
                <Row style={styles.projectListItem}>
                    <Col xs="9" md="3"><strong>Travl [Ongoing]</strong></Col>
                    <Col xs="3" md="1"><span style={{color: 'orange'}}><Icon name="github"/> <Icon
                        name="arrow-circle-o-down"/></span></Col>
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
        borderRadius: '4px',
        padding: '30px 12px 30px 12px',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        marginBottom: 10,
    },
    workContainer: {
        paddingTop: 20,
        lineHeight: '100%',
    },
    workTitle: {
        fontSize: 15,
        marginBottom: 4,
        marginLeft: 0,
        padding: 0,
        color: '#757575'
    },
    workDate: {
        fontSize: 13,
        fontStyle: 'italic',
        marginBottom: 4,
        padding: 0,
    },
    workName: {
        fontSize: 17,
        marginLeft: 0,
        fontWeight: 600,
        marginBottom: 4,
        padding: 0,
    },
    workDescription: {
        fontSize: 16,
        textAlign: 'left',
    },
    workDescriptionContainer: {
        paddingTop: 12,
    },
    paragraph: {
        textAlign: 'left',
    },
    projectListItem: {
        paddingBottom: 16
    }
};