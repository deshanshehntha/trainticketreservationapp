import React, { Component } from 'react';
import axios from 'axios';

import TableRow from './TrainDetailsTableRow.js';



export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {trainDetails: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/newtrainrecord/all')
            .then(response => {
                this.setState({ trainDetails: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.trainDetails.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Train Details</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Train Type</th>
                        <th>Train Number</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}