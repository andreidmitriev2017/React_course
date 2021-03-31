import React, {Component} from 'react';
import styled from 'styled-components';
// import './itemList.css';

const ItemLi = styled.ul`
    .list-group-item {
        cursor: pointer;
    }
`;

export default class ItemList extends Component {

    render() {
        // className="item-list list-group"
        return (
            <ItemLi className="list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ItemLi>
        );
    }
}