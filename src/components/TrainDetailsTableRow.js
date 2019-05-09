import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);

    }
    // delete() {
    //     axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
    //         .then(console.log('Deleted'))
    //         .catch(err => console.log(err))
    // }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.TrainType}
                </td>
                <td>
                    {this.props.obj.TrainNumber}
                </td>
                <td>
                    {this.props.obj.StartStation}
                </td>
                <td>
                    {this.props.obj.OutStation}
                </td>
                <td>
                    {this.props.obj.StartTime}
                </td>
                <td>
                    {this.props.obj.EndTime}
                </td>




                <td>
                    <Link to={"/newtrainrecord/book/"+this.props.obj._id} className="btn btn-primary">Book</Link>
                </td>
                {/*<td>*/}
                {/*    <button onClick={this.delete} className="btn btn-danger">Delete</button>*/}
                {/*</td>*/}
            </tr>
        );
    }
}

export default TableRow;