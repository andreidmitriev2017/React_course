import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

import gotService from '../../services/gotServices';
import Spinner from '../spinner';

const ListItem = styled(ListGroup)`
    .list-group-item {
        cursor: pointer;
    }
`

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null,
    }

    componentDidMount() {
        this.gotService.getAllCharcters()
            .then(charList => {
                this.setState({charList});
            });
    }

    renderItems(arr) {
        return arr.map((item) => {
            return (
                <ListGroupItem
                    key={item.id}
                    onClick={() => this.props.onCharSelected(item.id)}
                >
                    {item.name}
                </ListGroupItem>
            )
        });
    }

    render() {

        const {charList} = this.state;

        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ListItem className="item-list">
                {items}
            </ListItem>
        );
    }
}