import React from "react";
import { connect } from "react-redux";
import "chartjs-plugin-labels";
import "../../assets/scss/style.scss";
import Sidebar from "../../App/components/Dashboard/Sidebar";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import CalendarAdd from "../../App/components/Dashboard/CalendarAdd";
import MenuIcon from "@material-ui/icons/Menu";
class Calendar extends React.Component {
  state = {
    popup_active: false,
    sidebarMBL: false,
  };
  handleDateClick = (arg) => {
    this.setState({
      popup_active: true,
    });
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
        {this.state.popup_active && (
          <CalendarAdd
            ClosePopForm={(e) =>
              this.setState({
                popup_active: false,
              })
            }
          />
        )}
        <Sidebar header_active={3} active={this.state.sidebarMBL} />
        <div className="dashboard_body dashboard_body_add">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={this.handleDateClick}
          />
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

export default connect(mapDispatchToProps)(Calendar);
