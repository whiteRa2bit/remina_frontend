import React, { Component } from 'react';
import '../styles/index.css';
import { withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class AddItemPage extends Component {
    state = {
        name: '',
        type: '',
        rate: '',
        link: '',
    };
    handleChange = (event) => {
        const { target: { name, value } } = event;
        this.setState({[name]: value});
    };
    addItem = () => {
        const data = {
            name: this.state.name,
            type: this.state.type,
            rate: parseInt(this.state.rate),
            link: this.state.link
        };
        console.log(data);
        fetch(process.env.REACT_APP_ADD_ITEM_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    render() {
        return (
            <div className='ItemPage'>
                <div className='Bar'>
                    <div className='Logo'>
                        <p> REMINA </p>
                    </div>
                </div>
                <div className='MainPage'>
                    <div className='Attributes'>
                        <TextField 
                            className='ItemAttribute'
                            label='Name'
                            type='search'
                            variant='filled'
                            name='name'
                            onChange={this.handleChange}
                        />
                        <TextField 
                            className='ItemAttribute'
                            label='Type'
                            type='search'
                            variant='filled'
                            name='type'
                            onChange={this.handleChange}
                        />
                        <TextField 
                            className='ItemAttribute'
                            label='Rate'
                            type='search'
                            variant='filled'
                            name='rate'
                            onChange={this.handleChange}
                        />
                        <TextField 
                            className='ItemAttribute'
                            label='Link'
                            type='search'
                            variant='filled'
                            name='link'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='Actions'>
                        <Button variant="outlined" className='ActionButton' onClick={this.addItem}>Add</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddItemPage)
