import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../store/actions";
import { Card, Table } from 'react-bootstrap';

class ProductsList extends React.Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.getAllProducts();
    }
  }

  dataTable() {
    return {
      columns: this.renderTableHeaders(),
      rows: this.props.products
    };
  }

  renderTableHeaders() {
    return Object.keys(this.props.products[0]).map(key => {
      return {
        label: `${key.toUpperCase()}`,
        field: `${key}`,
        sort: "asc",
        width: 150
      };
    });
  }

  renderTableBody() {
    // if (this.props.fetchingData) {
    //   return <LoadingSpinner />;
    // }
    return this.props.products.map(product => {
      return (<Card>
        <Card.Header>
          <Card.Title as="h5">Hover Table</Card.Title>
          <span className="d-block m-t-5">
            use props <code>hover</code> with <code>Table</code> component
          </span>
        </Card.Header>
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      );
    });
  }

  renderCreateButton() {
    return (
      <React.Fragment style={{ textAlign: "right" }}>
        <Link to="/products/new" className="ui button primary">
          Add new product
        </Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.products.products),
    fetchingData: state.products.fetchingData,
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps, { getAllProducts })(
  ProductsList
);
