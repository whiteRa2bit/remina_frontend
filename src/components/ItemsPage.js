import React, { Component } from 'react';
import '../styles/index.css';
import { withRouter } from "react-router-dom";

// import Item from './Item'


class Item extends Component {
    render() {
        return (
            <div> 
                <p> Name: {this.props.name} </p>
                <p> Topic: {this.props.topic} </p>
                <p> Link: {this.props.link} </p>
                <p> Rate: {this.props.rate} </p>
            </div>
        )
    }
}


class ItemsPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            items: null,
        };
    }
    getItems() {
        fetch(process.env.REACT_APP_GET_ITEMS_URL, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            this.setState({ items: data["data"]["items"] });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
    componentWillMount() {
        this.getItems();
    }
    render() {
        const items = [{ name: "test", link: "test", topic: "test", rate: "test" }];
        return this.state.items ? (
            <div>
                <p> Items </p>
                {this.state.items.map((item, index) => (
                    <Item
                    name={item["name"]}
                    link={item["link"]}
                    rate={item["rate"]}
                    topic={item["topic"]}
                    />
                ))}
            </div>
        ) : (
            <div>
                <p> In progress</p>
            </div>
        );
    }
}

export default withRouter(ItemsPage)
