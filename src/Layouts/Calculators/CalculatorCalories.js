import React from "react";
import '../styles/forms.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { kcal: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeHeight = this.handleChangeHeight.bind(this);
        this.handleChangeWeight = this.handleChangeWeight.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeActivity = this.handleChangeActivity.bind(this);
    }

    handleChangeWeight(event) {
        this.setState({ weight: event.target.value });
    }
    handleChangeHeight(event) {
        this.setState({ height: event.target.value });
    }
    handleChangeAge(event) {
        this.setState({ age: event.target.value });
    }
    handleChangeGender(event) {
        this.setState({ gender: event.target.value });
    }
    handleChangeActivity(event) {
        this.setState({ trainingActivity: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        let parameters = {
            weight: this.state.weight,
            height: this.state.height,
            age: this.state.age,
            gender: this.state.gender,
            trainingActivity: this.state.trainingActivity
        };

        await fetch('https://localhost:44384/api/User/CountCalories', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(parameters)
        }).then(response => response.json())
            .then(data => {
                this.setState({ kcal: data.calories })
            }
            );
            
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <h1>Oblicz swoje zapotrzebowanie kaloryczne!</h1>
                <div>
                    <div>
                        <label id="inputs">Wiek:</label>
                        <input type="value"
                            placeholder="22"
                            required
                            value={this.age}
                            onChange={this.handleChangeAge} />
                    </div>
                </div>
                <div>
                    <div>
                        <label id="inputs">Płeć:</label>
                        <select onChange={this.handleChangeGender}>
                            <option value="0">Kobieta</option>
                            <option value="1">Mężczyzna</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <label id="inputs">Waga [kg]:</label>
                        <input type="value"
                            placeholder="52.3"
                            required
                            value={this.weight}
                            onChange={this.handleChangeWeight} />
                    </div>
                </div>
                <div>
                    <div>
                        <label id="inputs">Wzrost [cm]:</label>
                        <input type="value"
                            placeholder="158"
                            required
                            value={this.height}
                            onChange={this.handleChangeHeight} />
                    </div>
                </div>
                <div>
                    <div>
                        <label id="inputs">Aktywność treningowa:</label>
                        <select onChange={this.handleChangeActivity}>
                        <option disabled selected value> - wybierz z listy - </option>
                            <option value="1.2">Mała</option>
                            <option value="1.4">Średnia</option>
                            <option value="1.6">Duża</option>
                            <option value="1.8">Bardzo duża</option>
                        </select>
                    </div>
                </div>
                <input type="submit" value="Oblicz" />
                <div className="kcalResult">
                    <label>Twoje zapotrzebowanie kaloryczne wynosi: {this.state.kcal}</label>   
                                       
                 </div>
            </form>
        );
    }
}

export default Calculator;