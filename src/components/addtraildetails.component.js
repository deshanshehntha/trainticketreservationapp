import React, {Component} from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";

export default class AddTrainTicket extends Component {

    constructor(props) {
        super(props);

        this.onChangeTrainType = this.onChangeTrainType.bind(this);
        this.onChangeTrainNumber = this.onChangeTrainNumber.bind(this);
        this.onChangeStartStation = this.onChangeStartStation.bind(this);
        this.onChangeOutStation = this.onChangeOutStation.bind(this);
        this.onChangeStartTime = this.onChangeStartTime.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            TrainType: '',
            TrainNumber: '',
            StartStation: '',
            OutStation: '',
            StartTime: '',
            EndTime: ''

        };

    }

    onChangeTrainType(e) {
        this.setState({
            TrainType: e.target.value
        });
    }

    onChangeTrainNumber(e) {
        this.setState({
            TrainNumber: e.target.value
        });
    }

    onChangeStartStation(e) {
        this.setState({
            StartStation: e.target.value
        });
    }

    onChangeOutStation(e) {
        this.setState({
            OutStation: e.target.value
        });
    }

    onChangeStartTime(e) {
        this.setState({
            StartTime: e.target.value
        });
    }

    onChangeEndTime(e) {
        this.setState({
            EndTime: e.target.value
        });
    }

    componentDidMount() {
        document.title = "Add New Train Details";
    }

    onSubmit(e) {
        e.preventDefault();

        const newTrainDetailRecord = {
            TrainType: this.state.TrainType,
            TrainNumber: this.state.TrainNumber,
            StartStation: this.state.StartStation,
            OutStation: this.state.OutStation,
            StartTime: this.state.StartTime,
            EndTime: this.state.EndTime
        };

        axios.post('http://localhost:4000/newtrainrecord/add', newTrainDetailRecord)
            .then(res => console.log(res.data));


        this.state = {
            TrainType: '',
            TrainNumber: '',
            StartStation: '',
            OutStation: '',
            StartTime: '',
            EndTime: ''
        };

        alert("New Record Added Successfully");
        let {history} = this.props;
        history.push({
            pathname: '/',
        });
    }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Add New Train Details</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Train Type : </label>
                        <input
                            type="text"
                            placeholder="Type"
                            className="form-control"
                            value={this.state.TrainType}
                            onChange={this.onChangeTrainType}
                        />
                    </div>
                    <div className="form-group">
                        <label>Train Number : </label>
                        <input
                            type="text"
                            placeholder="XXXX"
                            className="form-control"
                            value={this.state.TrainNumber}
                            onChange={this.onChangeTrainNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Start Station : </label>
                        <input
                            type="text"
                            placeholder="Start"
                            className="form-control"
                            value={this.state.StartStation}
                            onChange={this.onChangeStartStation}
                        />
                    </div>
                    <div className="form-group">
                        <label>End Station : </label>
                        <input
                            type="text"
                            placeholder="End"
                            className="form-control"
                            value={this.state.OutStation}
                            onChange={this.onChangeOutStation}
                        />
                    </div>
                    <div className="form-group">
                        <label>Start Time : </label>
                        <input
                            type="text"
                            placeholder="Start Time"
                            className="form-control"
                            value={this.state.StartTime}
                            onChange={this.onChangeStartTime}
                        />
                    </div>
                    <div className="form-group">
                        <label>End Time : </label>
                        <input
                            type="text"
                            placeholder="End Time"
                            className="form-control"
                            value={this.state.EndTime}
                            onChange={this.onChangeEndTime}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Train Detail" className="btn btn-primary"/>
                    </div>

                </form>
            </div>
        );
    }


}

