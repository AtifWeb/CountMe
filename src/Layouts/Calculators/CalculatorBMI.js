import React from "react";
import '../styles/forms.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { BMI: '', weight: 0, height: 0 };
        this.handleChangeWeight = this.handleChangeWeight.bind(this);
        this.handleChangeHeight = this.handleChangeHeight.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeWeight(event) {
        this.setState({ weight: event.target.value });
    }
    handleChangeHeight(event) {
        this.setState({ height: event.target.value });
    }


    async handleSubmit(event) {
        event.preventDefault();
        let parameters = {
            weight: this.state.weight,
            height: this.state.height
        };

        await fetch('https://localhost:44384/api/User/CountBMI', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(parameters)
        }).then(response => response.json())
            .then(data => {
                this.setState({ BMI: data.bmi })
                
            }
        );

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <h1>Oblicz swoje BMI!</h1>
                <div>
                    <div>
                        <label id="inputs"> Waga [kg]:</label>
                        <input type="value"
                            placeholder="52.3"
                            required
                            value={this.weight}
                            onChange={this.handleChangeWeight} />
                    </div>
                </div>
                <div>
                    <div>
                        <label id="inputs">Wzrost [m]: </label>
                        <input type="value"
                            placeholder="1.58"
                            required
                            value={this.height}
                            onChange={this.handleChangeHeight} />
                    </div>
                </div>
                <input type="submit" value="Oblicz" />
                <div className="BMIresult">
                    <label>Twoje BMI wynosi: {this.state.BMI}</label>   
                                       
                 </div>
                
            </form>
        );
    }
}

export default Calculator;