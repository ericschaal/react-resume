/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import { Col, Badge, Row, Container, } from 'reactstrap';
import { isBrowser } from 'react-device-detect';
import Icon from 'react-fontawesome';

import Section from '../../../components/Section';

export default () => (
  <Col style={styles.col} xs={{ size: 10, offset: 1 }} lg={{ size: 7, offset: 0 }}>
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

        <Row style={{ marginBottom: 12 }}>
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
              <Col className="float-right" xs="12">
                <p style={styles.workDate}>Sept. 2015 - April 2018</p>
              </Col>
            </Row>
            <Row>
              <Col className="float-right" xs="12">
                <p style={styles.workDate}>Montréal, QC, Canada</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginBottom: 12 }}>
          <Col xs="8">
            <Row>
              <p style={styles.workName}>Lycee Français Charles de Gaulle</p>
            </Row>
            <Row>
              <p style={styles.workTitle}>French National Science Baccalauréat Diploma</p>
            </Row>
          </Col>
          <Col xs="4">
            <Row>
              <Col className="float-right" xs="12">
                <p style={styles.workDate}> Sept. 2014 - June 2014 </p>
              </Col>
            </Row>
            <Row>
              <Col className="float-right" xs="12">
                <p style={styles.workDate}>Montréal, QC, Canada</p>
              </Col>
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
              <p style={styles.workName}>NXTSENS Microsystems</p>
            </Row>
            <Row>
              <p style={styles.workTitle}>Software Developer</p>
            </Row>
          </Col>
          <Col xs="4">
            <Row>
              <Col className="float-right" xs="12">
                <p style={styles.workDate}>July 2017 - <b>Current</b></p>
              </Col>
            </Row>
            <Row>
              <Col className="float-right" xs="12">
                <p style={styles.workDate}>Montréal, QC, Canada</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginBottom: 12 }}>
          <Col style={styles.workDescriptionContainer} xs="12">
            <p style={styles.workDescription}>
              Leading the development of a React-Native application capable of receiving, processing and
              displaying critical health data from a Bluetooth Low Energy medical device and uploading it
              to a FHIR conformant server. Advising meetings with cloud hosting service based on
              application infrastructure needs.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs="8">
            <Row>
              <p style={styles.workName}>Yuma</p>
            </Row>
            <Row>
              <p style={styles.workTitle}>Software Developer Intern</p>
            </Row>
          </Col>
          <Col xs="4">
            <Row>
              <Col className="float-right" xs="12">
                <p style={styles.workDate}>May 2017 - June 2017</p>
              </Col>
            </Row>
            <Row>
              <Col className="float-right" xs="12">
                <p style={styles.workDate}>Montreal, QC, Canada</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginBottom: 12 }}>
          <Col style={styles.workDescriptionContainer} xs="12">
            <p style={styles.workDescription}>
              Developed a scalable bulk email service using RabbitMQ capable of sending thousands
              of emails in a few seconds. Brainstormed database architecture with CTO.
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
              <Col className="float-right" xs="12">
                <p style={styles.workDate}>June 2016 - August 2016</p>
              </Col>
            </Row>
            <Row>
              <Col className="float-right" xs="12">
                <p style={styles.workDate}>Antananarivo, Madagascar</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col style={styles.workDescriptionContainer} xs="12">
            <p style={styles.workDescription}>
              Deployed a complete software development environment (Project Management, Bug
              tracker, VCS, Dependency Caching, CI platform) to facilitate employee collaboration
              and project development. Contributed to technical meetings with Facebook and Orange
              engineers concerning the launch of Internet.org in Madagascar.
            </p>
          </Col>
        </Row>
      </Container>
    </Section>

    <Section name="code" title="SKILLS">
      <Container style={styles.workContainer}>
        <Row>
          <Col xs="4">
            <text>Languages: </text>
          </Col>
          <Col xs="8">
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
          <Col xs="4">
            <text>Specialties: </text>
          </Col>
          <Col xs="8">
            <p>
              <Badge color="warning" pill>Machine Learning</Badge>
              <Badge color="warning" pill>Distributed Systems</Badge>
              <Badge color="warning" pill>Concurrent Programming</Badge>
              <Badge color="warning" pill>Computer Networks</Badge>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <text>Technologies: </text>
          </Col>
          <Col xs="8">
            <p>
              <Badge color="primary" pill>Tensorflow</Badge>
              <Badge color="primary" pill>Spring.io</Badge>
              <Badge color="primary" pill>React</Badge>
              <Badge color="primary" pill>Node.js</Badge>
              <Badge color="primary" pill>Meteor.js</Badge>
              <Badge color="primary" pill>Kubernetes</Badge>
              <Badge color="primary" pill>Docker</Badge>
            </p>
          </Col>
        </Row>
      </Container>
    </Section>

    <Section name="cog" title="PROJECTS">
      <Container style={styles.workContainer}>
        <Row style={styles.projectListItem}>
          <Col xs="9" md="3"><strong>Booker</strong></Col>
          <Col xs="3" md="1">
                        <span style={{ color: 'green' }}>
                            <Icon style={{ color: 'green' }} tag="a" href="https://github.com/ericschaal/booker"
                                  name="github"/>
                            <Icon style={{ color: 'green' }} tag="a"
                                  href="https://github.com/ericschaal/booker/archive/master.zip"
                                  name="arrow-circle-o-down"/>
                        </span>
          </Col>
          <Col xs="12" md="7"><p style={styles.workDescription}>Fault-tolerant distributed booking
            system with
            transaction and replication support.</p></Col>
        </Row>

        <Row style={styles.projectListItem}>
          <Col xs="9" md="3"><strong>Cookie Shell</strong></Col>
          <Col xs="3" md="1">
                        <span style={{ color: 'green' }}>
                            <Icon style={{ color: 'green' }} tag="a" href="https://github.com/ericschaal/cookie_shell"
                                  name="github"/>
                            <Icon style={{ color: 'green' }} tag="a"
                                  href="https://github.com/ericschaal/cookie_shell/archive/master.zip"
                                  name="arrow-circle-o-down"/>
                        </span>
          </Col>
          <Col
            xs="12"
            md="7"><p style={styles.workDescription}>Shell built from scratch with pipes, I/O
            redirection,
            job management and history.</p></Col>
        </Row>
        <Row style={styles.projectListItem}>
          <Col xs="9" md="3"><strong>Mancala AI</strong></Col>
          <Col xs="3" md="1">
                        <span style={{ color: 'orange' }}>
                            <Icon name="github"/>
                            <Icon name="arrow-circle-o-down"/>
                        </span>
          </Col>
          <Col xs="12" md="7"><p style={styles.workDescription}>Das Bohnenspie AI player using
            Alpha-Beta
            Pruning.</p>
          </Col>
        </Row>
        <Row style={styles.projectListItem}>
          <Col xs="9" md="3"><strong>PleskDynDNS</strong></Col>
          <Col xs="3" md="1">
                        <span>
                        <Icon style={{ color: 'green' }} tag="a" href="https://github.com/ericschaal/dynDNSPleskClient"
                              name="github"/>
                        <Icon style={{ color: 'green' }} tag="a"
                              href="https://github.com/ericschaal/dynDNSPleskServer/archive/master.zip"
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
          <Col xs="3" md="1"><span style={{ color: 'orange' }}><Icon name="github"/> <Icon
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
          <Col xs="3" md="1"><span style={{ color: 'orange' }}><Icon name="github"/> <Icon
            name="arrow-circle-o-down"/></span></Col>
          <Col xs="12" md="7">
            <p style={styles.workDescription}>
              A crowd-sourced and social travel agent that helps users build and
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
    textAlign: 'right'
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
    textAlign: 'justify',
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