import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import styled from "styled-components";

import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage'

const Btn = styled(Button)`
    margin-bottom: 40px;
`;
export default class App extends Component {

    state = {
        visible: true,
        error: false,
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true,
        })
    }

    toggleChar = () => {
        const {visible} = this.state;
        this.setState({
            visible: !visible,
        })
    }


    render() {

        const {visible, error} = this.state;

        const content = visible ? <RandomChar/> : null;

        if (error) {
            return <ErrorMessage/>
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {content}
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Btn onClick={this.toggleChar}>Toggle rendom character</Btn>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};

