import React from 'react';

import Container from './components/Container';
import Col from './components/Col';
import Row from './components/Row';
import MyComponent from './components/MyComponent';

const App = () => (
    <Container>
        <Row>
            <Col sm={3}>
                <MyComponent />
            </Col>
            <Col sm={9}>
                <MyComponent />
            </Col>
        </Row>
    </Container>
);

export default App;
