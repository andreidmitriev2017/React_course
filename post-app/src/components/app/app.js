import React, {Component} from 'react';
import nextId from "react-id-generator";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";


import './app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    label: 'Going to learn react',
                    important: true,
                    id: nextId(),
                    like: false,
                },
                {
                    label: 'That is so good',
                    important: false,
                    id: nextId(),
                    like: false,
                },
                {
                    label: 'I need a break...',
                    important: false,
                    id: nextId(),
                    like: false,
                },
            ].filter(item => typeof item == 'object'),

            term: '',
            filter: 'all',
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImprotant = this.onToggleImprotant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem => elem.id === id));

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr,
            }
        });
    }

    addItem(text) {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++,
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr,
            }
        });
    }

    onToggleImprotant(id) {
        this.setState(({data}) => {
            const idx = data.findIndex(elem => elem.id === id);
            const old = data[idx];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];

            return {
                data: newArr,
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const idx = data.findIndex(elem => elem.id === id);
            const old = data[idx];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];

            return {
                data: newArr,
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(elem => elem.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImprotant={this.onToggleImprotant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}
