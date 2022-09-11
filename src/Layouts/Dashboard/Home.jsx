import React from "react";
import { connect } from "react-redux";
import "chartjs-plugin-labels";
import "../../assets/scss/style.scss";
import Sidebar from "../../App/components/Dashboard/Sidebar";
import ReactApexChart from "react-apexcharts";
import MenuIcon from "@material-ui/icons/Menu";
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarMBL: false,
      series: [55, 45],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        legend: {
          show: false,
        },
        labels: ["Eaten calories", "Remaning calories"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 400,
              },
              legend: {
                position: "bottom",
              },
            },
          },

          {
            breakpoint: 430,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  createColorArray = () => {
    if (this.props.colorsArray.length === 0) {
      for (var i = 0; i < 30; i++) {
        let x = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
        this.props.generateColors(x);
      }
    }
  };

  render() {
    return (
      <div className="dashbaord">
        <div className="header_wrapper_mbl">
          <MenuIcon
            onClick={(e) =>
              this.setState({
                sidebarMBL: !this.state.sidebarMBL,
              })
            }
          />
        </div>
        <Sidebar header_active={0} active={this.state.sidebarMBL} />
        <div className="dashboard_body dashboard_body_add dashboard_body_Home">
          <div className="buttons_wrapper">
            <button>Eaten calories</button>
            <button>Remaining calories</button>
          </div>
          <div className="chart_wrapper">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="pie"
              width={480}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //getAllProducts: () => dispatch(getAllProducts()),
    // getAllMeals: () => dispatch(getAllMeals())
  };
};

export default connect(mapDispatchToProps)(Home);
