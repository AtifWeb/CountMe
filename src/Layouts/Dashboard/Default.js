import React from "react";
import { Row, Col, Card, ProgressBar, Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  getAllProducts,
  getAllMeals
} from "../../store/actions";
import { Link } from "react-router-dom";
import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../store/actions/types";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-labels";
import { CATEGORY_ICONS } from "../../assets/categoryIcons";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts();
    this.props.getAllMeals();
    this.createColorArray();
  }

 

  createColorArray = () => {
    if (this.props.colorsArray.length === 0) {
      for (var i = 0; i < 30; i++) {
        let x = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
        this.props.generateColors(x);
      }
    }
  };
}

const mapDispatchToProps = dispatch => {
  return {
    //getAllProducts: () => dispatch(getAllProducts()),
   // getAllMeals: () => dispatch(getAllMeals())
  };
};

export default connect(mapDispatchToProps)(Dashboard);
