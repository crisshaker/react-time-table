import React, { Component } from "react";
import { connect } from "react-redux";
import TableRow from "./TableRow";

class Table extends Component {
  constructor(props) {
    super(props);

    this.renderTableRows = this.renderTableRows.bind(this);
  }

  renderTableRows() {
    const { venues } = this.props;

    return venues.map(venue => <TableRow venue={venue} key={venue._id} />);
  }

  render() {
    return (
      <div className="table">
        <h2>Monday</h2>
        <table>
          <tbody>
            <tr>
              <td>Venue</td>
              <td>7:30</td>
              <td>8:30</td>
              <td>9:30</td>
              <td>10:30</td>
              <td>11:30</td>
              <td>12:30</td>
              <td>13:30</td>
              <td>14:30</td>
              <td>15:30</td>
              <td>16:30</td>
              <td>17:30</td>
              <td>18:30</td>
            </tr>
            {this.renderTableRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ venues }) => {
  return {
    venues
  };
};

export default connect(mapStateToProps)(Table);
