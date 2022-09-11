import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import {
  Button,
  Form,
  Modal,
  Col,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { toast } from "react-toastify";

class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderInput = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error, warning }
  }) => {
    return (
      <React.Fragment>
        {touched &&
          ((error && <span style={{ color: "red" }}>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        <Form.Group controlId="formInput">
          <Form.Label>{label}</Form.Label>
          <Form.Control {...input} type={type} placeholder={placeholder} />
        </Form.Group>
      </React.Fragment>
    );
  };

  renderSelectField = ({ input, label, children }) => {
    return (
      <React.Fragment>
        <Form.Group controlId="selectForm">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            {...input}
            as="select"
          />
        </Form.Group>
      </React.Fragment>
    );
  };

  renderProductTypeButtons = ({ input }) => {
    return (
      <Form.Group {...input} className="d-flex justify-content-center">
        <ToggleButtonGroup
          onChange={e => {
            this.setState({ typeOfProduct: e });
          }}
          value={`${this.state.typeOfProduct}`}
          name="typeOfProduct"
        >
          <ToggleButton variant="outline-primary" value="0" name="income">
            Income
          </ToggleButton>
          <ToggleButton variant="outline-primary" value="1" name="expense">
            Expense
          </ToggleButton>
        </ToggleButtonGroup>
      </Form.Group>
    );
  };

  renderTextArea = ({ input, label }) => {
    return (
      <Form.Group controlId="textArea">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          {...input}
          as="textarea"
          rows="2"
          style={{ resize: "none" }}
        />
      </Form.Group>
    );
  };

  renderCyclicFields = ({ input, label, children }) => {
    return (
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control type="number" min="0" step="1" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control {...input} as="select" children={children} />
        </Form.Group>
      </Form.Row>
    );
  };

  renderDatePicker = ({ input }) => {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          {...input}
          autoOk
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Product date"
          value={this.state.transactionDate}
          onChange={date => {
            this.setState({ transactionDate: date });
          }}
          disableFuture="true"
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
    );
  };

  renderEndDatePicker = ({ input }) => {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          {...input}
          autoOk
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline2"
          label="Product end date"
          minDate={this.state.transactionDate}
          onChange={date => {
            this.setState({ endDate: date });
          }}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
    );
  };

  renderCheckbox = ({ input, label, children, defaultValue }) => {
    return (
      <Form.Group>
        <Form.Check label={label} {...input} />
      </Form.Group>
    );
  };

  renderCategories = () => {
    return this.props.categories
      .filter(c => c.type == this.props.transactionType)
      .map(category => {
        return (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        );
      });
  };

  onExit = () => {
    this.setState({ transactionDate: new Date(), typeOfProduct: 1 });
    this.props.reset();
    this.props.exitModal();
  };

  onSubmit = formValues => {
    formValues.type = parseInt(formValues.type);

    formValues.period = formValues.period ? parseInt(formValues.period) : 0;
    formValues.cycle = formValues.cycle ? formValues.cycle : "";
    formValues.categoryId = parseInt(formValues.categoryId);
    formValues.date = this.state.transactionDate;
    formValues.endDate = this.state.endDate;

    if (
      this.props.limit.goal > 0 &&
      formValues.type === 1 &&
      Math.abs(this.props.limit.spent) +
        Math.abs(parseFloat(formValues.amount)) >
        this.props.limit.goal
    ) {
      toast.warning("You exceeded your main limit");
    }

    let categoryLimit = this.props.limit.categoryLimits.find(
      l => l.categoryId === formValues.categoryId
    );
    if (
      this.props.limit.goal > 0 &&
      formValues.type === 1 &&
      categoryLimit.goal > 0 &&
      Math.abs(categoryLimit.spent) + Math.abs(parseFloat(formValues.amount)) >
        categoryLimit.goal
    ) {
      toast.warning("You exceeded your category limit");
    }

    this.props.onSubmit(formValues);
    this.setState({ transactionDate: new Date(), typeOfProduct: 1 });
  };

  render() {
    return (
      <Modal
        show={
          this.props.modalState && this.props.openedModal === "newProduct"
        }
        onHide={this.props.exitModal}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Field
              name="type"
              label="Type of transaction"
              component={this.renderProductTypeButtons}
            />
            <Field
              name="amount"
              type="number"
              component={this.renderInput}
              label="Amount"
              className="input-group mb-3"
            />

            <Field
              name="categoryId"
              component={this.renderSelectField}
              label="Category"
              className="input-group mb-4"
            />
            <Field
              name="description"
              label="Description"
              type="text"
              component={this.renderTextArea}
              className="input-group mb-3"
            />
            <Field
              value={this.state.transactionDate}
              name="date"
              component={this.renderDatePicker}
            />
            <Field
              name="isCyclic"
              id="isCyclic"
              component={this.renderCheckbox}
              type="checkbox"
              label="Is Cyclic?"
            />
            {this.props.isCyclic && (
              <Form.Group>
                <Form.Label className="mb-0">Period</Form.Label>
                <Form.Row mb={0}>
                  <Form.Group as={Col}>
                    <Field
                      name="period"
                      id="period"
                      component={this.renderInput}
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Field
                      name="cycle"
                      id="cycle"
                      component={this.renderSelectField}
                    >
                      <option>days</option>
                      <option>weeks</option>
                      <option>months</option>
                      <option>years</option>
                    </Field>
                  </Form.Group>
                  {/* <Field
                    value={this.state.endDate}
                    name="endDate"
                    component={this.renderEndDatePicker}
                  /> */}
                </Form.Row>
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.onExit}>
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={this.props.handleSubmit(this.onSubmit)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.amount) {
    errors.amount = "Amount is required";
  } else if (isNaN(Number(values.amount))) {
    errors.amount = "Enter valid amount.";
  }

  if (!values.period) {
    errors.period = "Period is required";
  }
  return errors;
};

const selector = formValueSelector("addProductForm");


const formWrapper = reduxForm({
  form: "addProductForm",
  validate
})(AddProductForm);

export default connect()(formWrapper);
