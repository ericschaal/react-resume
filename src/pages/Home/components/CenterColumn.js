/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React, { Fragment } from 'react';
import { Col, Badge, Row, Container, } from 'reactstrap';
import { isBrowser } from 'react-device-detect';
import Icon from 'react-fontawesome';

import Section from '../../../components/Section';

export default () => (
  <Col style={styles.col} xs={{ size: 10, offset: 1 }} lg={{ size: 7, offset: 0 }}>
    <Section name="user" title="À PROPOS">
      <Container style={styles.workContainer}>
        <Row>
          <Col xs="12">
            <p style={styles.workDescription}>
              Grâce au travail de mes parents, je voyage de part et d’autre du monde depuis ma plus jeune enfance. Ces
              expériences uniques m’ont enrichi tant sur le contact humain que sur l’ouverture d’esprit. L’enseignement
              de qualité que j’ai reçu au sein des lycées français de l’AEFE m’a permis d’intégrer un cursus
              d’excellence.
            </p>
          </Col>
        </Row>
      </Container>
    </Section>

    <Section name="mortar-board" title="FORMATION">
      <Container style={styles.workContainer}>

        <Row style={{ marginBottom: 12 }}>
          <Col xs="8">
            <Row>
              <p style={styles.workName}>INSA de Lyon</p>
            </Row>
            <Row>
              <p style={styles.workTitle}>Formation d'ingenieur</p>
            </Row>
          </Col>
          <Col xs="4">
            <Row>
              <Col className="float-right" xs="12">
                <p style={styles.workDate}>Sept. 2017</p>
              </Col>
            </Row>
            <Row>
              <Col className="float-right" xs="12">
                <p style={styles.workDate}>Villeurbanne, France</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginBottom: 12 }}>
          <Col xs="8">
            <Row>
              <p style={styles.workName}>Lycée Français de Tananarive</p>
            </Row>
            <Row>
              <p style={styles.workTitle}>Baccalauréat Scientifique, mention très bien</p>
            </Row>
          </Col>
          <Col xs="4">
            <Row className="float-right">
              <Col xs="12">
                <p style={styles.workDate}>Sept. 2017</p>
              </Col>
            </Row>
            <Row className="float-right">
              <Col xs="12">
                <p style={styles.workDate}>Antananarivo, Madagascar</p>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    </Section>

    <Section name="building" title="EXPÉRIENCES PROFESSIONNELLES">
      <Container style={styles.workContainer}>
        <Row style={{ marginBottom: 12 }}>
          <Col xs="8">
            <Row>
              <p style={styles.workName}>Cancer Research UK</p>
            </Row>
            <Row>
              <p style={styles.workTitle}>Stage en milieu ouvrier de Seconde</p>
            </Row>
          </Col>
          <Col xs="4">
            <Row className="float-right">
              <Col xs="12">
                <p style={styles.workDate}>Juin 2015</p>
              </Col>
            </Row>
            <Row className="float-right">
              <Col xs="12">
                <p style={styles.workDate}>Londres, Royaume-Uni</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginBottom: 12 }}>
          <Col style={styles.workDescriptionContainer} xs="12">
            <p style={styles.workDescription}>
              Revente d’objets récoltés par donation, distribution de prospectus, vente de tickets de tombola, dans le
              but de lever des fonds pour la recherche contre le cancer.
            </p>
          </Col>
        </Row>
      </Container>
    </Section>

    <Section name="calculator" title="COMPETENCES">
      <Container style={styles.workContainer}>
        <Row>
          <Col xs="12">
            <ul style={{ padding: 0 }}>
              <li style={{paddingBottom: 6}}><b>Informatique</b></li>
              <ul style={{ paddingBottom: 20 }}>
                <Row>
                  <text>Logiciels bureautique:</text>
                  <div style={{ marginLeft: 12 }}>
                    <Badge style={{ marginRight: 5 }} color="success" pill>Microsoft Office</Badge>
                    <Badge style={{ marginRight: 5 }} color="success" pill>LibreOffice</Badge>
                    <Badge style={{ marginRight: 5 }} color="success" pill>OpenOffice</Badge>
                  </div>
                </Row>
                <Row>
                  <text>Montage photo/vidéo:</text>
                  <div style={{ marginLeft: 12 }}>
                    <Badge style={{ marginRight: 5 }} color="success" pill>Gimp</Badge>
                    <Badge style={{ marginRight: 5 }} color="success" pill>Sony Vegas Pro</Badge>
                  </div>
                </Row>
                <Row>
                  <text>Systèmes d'exploitation:</text>
                  <div style={{ marginLeft: 12 }}>
                    <Badge style={{ marginRight: 5 }} color="success" pill>Windows</Badge>
                    <Badge style={{ marginRight: 5 }} color="success" pill>MacOS</Badge>
                    <Badge style={{ marginRight: 5 }} color="success" pill>Linux</Badge>
                  </div>
                </Row>
                <Row>
                  <text>Conception:</text>
                  <div style={{ marginLeft: 12 }}>
                    <Badge style={{ marginRight: 5 }} color="success" pill>SolidEdge ST8</Badge>
                  </div>
                </Row>
              </ul>
              <li style={{paddingBottom: 6}}><b>Sport</b></li>
              <ul>
                <Row>
                  <Badge color="info" pill>Natation Competition</Badge>
                </Row>
              </ul>
            </ul>
          </Col>
        </Row>
      </Container>
    </Section>

    <Section name="globe" title="LANGUES">
      <Container style={styles.workContainer}>
        <ul style={{ padding: 0 }}>
          <li><p><b>Anglais: </b> Courant, C1, IELTS (8/9)</p></li>
          <li><p><b>Espagnol: </b> Avancé, B1</p></li>
          <li><p><b>Japonais: </b> Débutant, A1</p></li>
          <li><p><b>Grec: </b> Débutant, A1</p></li>
        </ul>
      </Container>
    </Section>


  </Col>
)


const styles = {
  col: {
    background: '#fefefe',
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
    textAlign: 'right',
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