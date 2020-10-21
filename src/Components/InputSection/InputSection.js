import React from "react";
import { connect } from "react-redux";
import "./InputSection.css";

class InputSection extends React.Component {


    state = {
        wheelType: "passanger", //passanger, moto, truck, bus
        fuelType: "gasoline",
        price: 1000,
        productionYear: 2020,
        engineСapacity: 2000,
        batteryСapacity: 30,
        originCountry: "EU",
        fullWeight: "5-"
    }


    fillYears = () => {
        let years = [];
        for (let i = 2020; i >= 2006; i--) {
            years.push(i);
        }
        return years;
    }
    wheelTypeHandler = ({ target: { value } }) => {
        this.setState({
            wheelType: value,
            fuelType: "gasoline",
        })
    }
    fuelTypeHandler = ({ target: { value } }) => {
        this.setState({
            fuelType: value,
        })
    }

    priceHandler = ({ target: { value } }) => {
        this.setState({
            price: value
        })
    }
    productionYearHandler = ({ target: { value } }) => {
        this.setState({
            productionYear: value
        })
    }
    engineСapacityHandler = ({ target: { value } }) => {
        this.setState({
            engineСapacity: value
        })
    }
    batteryСapacityHandler = ({ target: { value } }) => {
        this.setState({
            batteryСapacity: value
        })
    }
    originCountryHandler = ({ target: { value } }) => {
        this.setState({
            originCountry: value
        })
    }
    fullWeightHandler = ({ target: { value } }) => {
        this.setState({
            fullWeight: value
        })
    }


    render() {
        // const { wheelType, fuelType, price, productionYear, engineСapacity, batteryСapacity, originCountry, carrying } = this.props.state;
        return (
            <form>

                <h3>Тип транспортного средства</h3>
                <select name="wheelTypeSelect" onChange={this.wheelTypeHandler} value={this.state.wheelType}>
                    <option value="passanger">Легковой</option>
                    <option value="moto">Мото</option>
                    <option value="truck">Грузовой</option>
                    <option value="bus">Автобус</option>
                </select>

                <div className={(this.state.wheelType === "moto") ? "hide fuelType" : "fuelType"}>
                    <h3>Тип топлива</h3>
                    <select name="fuelTypeSelect" value={this.state.fuelType} onChange={this.fuelTypeHandler}>
                        <option value="gasoline">Бензин</option>
                        <option value="diesel">Дизель</option>
                        <option value="hybrid" className={(this.state.wheelType === "truck" || this.state.wheelType === "bus") ? "hide" : ""}> Гибрид</option>
                        <option value="electro" className={(this.state.wheelType === "truck" || this.state.wheelType === "bus") ? "hide" : ""}>Электро</option>
                    </select>
                </div>

                <h3>Стоимость €</h3>
                <input name="price" type="number" max="100000000" min="0" step="1" value={this.state.price} onChange={this.priceHandler}></input>

                <div className={(this.state.fuelType === "hybrid" || this.state.fuelType === "electro" || this.state.wheelType === "moto") ? "hide productionYear" : "productionYear"}>
                    <h3>Год выпуска</h3>
                    <select name="productionYearSelect" onChange={this.productionYearHandler} value={this.state.productionYear}>
                        {
                            this.fillYears().map((e, i) => <option key={(new Date()).getTime() + i}>{e}</option>)
                        }
                        <option>2005 и старше</option>
                    </select>
                </div>

                <div className={(this.state.fuelType === "electro" || this.state.fuelType === "hybrid") ? "hide" : "engineСapacity"} >
                    <h3>Обьем двигателя см<sup>3</sup></h3>
                    <input name="engineСapacity" type="number" max="25000" min="0" step="1" value={this.state.engineСapacity} onChange={this.engineСapacityHandler}></input>
                </div>

                <div className={this.state.fuelType === "electro" ? "batteryСapacity" : "batteryСapacity hide"}>
                    <h3>Емкость батареи КВтЧ</h3>
                    <input name="batteryСapacity" type="number" max="500" min="0" step="1" onChange={this.batteryСapacityHandler} value={this.state.batteryСapacity}></input>
                </div>

                <h3>Страна происхождения</h3>
                <select name="originCountrySelect" value={this.state.originCountry} onChange={this.originCountryHandler}>
                    <option value="ETA">ЕАСТ</option>
                    <option value="EU">ЕС</option>
                    <option value="Canada">Канада</option>
                </select>

                <div className={this.state.wheelType === "truck" ? "carrying" : "carrying hide"}>
                    <h3>Полынй вес</h3>
                    <select name="fullWeightSelect" value={this.state.fullWeight} onChange={this.fullWeightHandler}>
                        <option value="5-">до 5 тонн</option>
                        <option value="5-20">от 5 до 20 тонн</option>
                        <option value="20+">более 20 тонн</option>
                    </select>
                </div>

            </form>
        )
    }
}

export default connect((state) => ({ state: state.editData }))(InputSection);