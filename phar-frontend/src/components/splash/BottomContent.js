import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import Zeus from '../../images/zeus_carol.jpg'
import Julian from '../../images/julian.jpg'

class BottomContent extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <img className="img-fluid" src={Zeus} />
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <div>Nothing to read into there! My man! I am Mr. Booby Buyer. I'll buy those boobies for 25 schmeckles! Hello Jerry, come to rub my face in urine again?

Close. It's gonna make your kidneys shut down. It's fine, everythings is fine. theres an infinite number of realities Morty, and in a few dozens of those i got lucky and turned everything back to normal. I took your family? Who do you think had taken more from them when you shot 2 Puh rum pum pow!

Then let me GET to know you! Alien Invasion Tomato Monster Mexican Armada Brothers Who Are Just Regular Brothers Running In A Van From An Asteroid And All Sorts Of Things: The Movie. What, I'm gonna touch it, and you're gonna tell me it's an alien dick or something? Are these pills supposed to wake me up or something?</div>
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <img className="img-fluid" src={Julian} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BottomContent