import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import styled from "styled-components";
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

const Btn = styled(Button)`
    margin-bottom: 40px;
`;
export default class App extends Component {

    state = {
        visible: true,
    };

    toggleChar = () => {
        const {visible} = this.state;
        this.setState({
            visible: !visible,
        })
    }

    render() {

        const {visible} = this.state;

        const content = visible ? <RandomChar/> : null;

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

                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

