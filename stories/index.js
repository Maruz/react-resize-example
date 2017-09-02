import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Container from '../src/components/Container';
import Col from '../src/components/Col';
import Row from '../src/components/Row';
import MyComponent from '../src/components/MyComponent';

storiesOf('Component with', module)
    .add('wrapper', () => (
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
    ));
