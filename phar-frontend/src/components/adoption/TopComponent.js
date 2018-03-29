import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Captain from '../../images/captian.jpg'

class TopComponent extends Component {
render() {
        return (
        <div style={{ background: "#ECF0F1", paddingTop: 30, paddingBottom: 30 }}>
            <Container>
              <Row>
                <Col xs="4" sm="4" md="4" lg="4" xl="4">
                  <img className="img-fluid" src={Captain} alt="Captain" />
                </Col>
                <Col xs="8" sm="8" md="8" lg="8" xl="8">
                  <h4>Adoption</h4>
                  <hr/>
                  <br/>
                  <h6>Our Mission</h6>
                  <p>
                    Pathway Home Animal Society is a non-profit, no
                    kill, all volunteer run Animal Rescue. We are foster
                    home based group that is dedicated and committed to
                    giving animals a second chance at life. By working
                    with committed volunteers, foster homes and local
                    veterinarians we are able to rescue hundreds of
                    homeless and abandoned animals every year and
                    provide them with loving foster homes, spay, neuter
                    and necessary medical care before we find them the
                    well matched, carefully screened lifetime homes that
                    they deserve and need.
                  </p>
                  <h6>Adoption Policy</h6>
                  <p>
                    Since our Organization is foster home based an
                    appointment needs to be made in order to meet with
                    our adoptable animals. We also require that you
                    submit a fully filled out adoption questionnaire
                    prior to any meet and greet being scheduled. Feel
                    free to contact us via email at
                    pathwayhomeanimalsociety@hotmail.com or by phone at
                    602-993-9393 to do a meet and greet with any of our
                    animals...
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}

export default TopComponent