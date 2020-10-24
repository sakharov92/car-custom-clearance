import React from "react";
import { connect } from "react-redux";
import "./InputSection.css";

import {
    EDIT_WHEEL_TYPE, EDIT_FUEL_TYPE, EDIT_PRICE, EDIT_PRODUCTION_YEAR, EDIT_ENGINE_CAPACITY,
    EDIT_BATTERY_CAPACITY, EDIT_ORIGIN_COUNTRY, EDIT_FULL_WEIGHT
} from "../../Store/actions/actions";



class InputSection extends React.Component {

    fillYears = () => {
        let years = [];
        for (let i = 2020; i >= 2006; i--) {
            years.push(i);
        }
        return years;
    }
    wheelTypeHandler = ({ target: { value } }) => {
        this.props.EDIT_WHEEL_TYPE(value);
        this.props.EDIT_FUEL_TYPE("gasoline")
    }
    fuelTypeHandler = ({ target: { value } }) => {
        this.props.EDIT_FUEL_TYPE(value)
    }

    priceHandler = ({ target: { value } }) => {
        this.props.EDIT_PRICE(value)
    }
    productionYearHandler = ({ target: { value } }) => {
        this.props.EDIT_PRODUCTION_YEAR(value)
    }
    engineСapacityHandler = ({ target: { value } }) => {
        this.props.EDIT_ENGINE_CAPACITY(value)
    }
    batteryСapacityHandler = ({ target: { value } }) => {
        this.props.EDIT_BATTERY_CAPACITY(value)
    }
    originCountryHandler = ({ target: { value } }) => {
        this.props.EDIT_ORIGIN_COUNTRY(value)
    }
    fullWeightHandler = ({ target: { value } }) => {
        this.props.EDIT_FULL_WEIGHT(value)
    }






    render() {
        const { wheelType, fuelType, price, productionYear, engineСapacity, batteryСapacity, originCountry, fullWeight } = this.props.state;
        return (
            <form>

                <h3>Тип транспортного средства</h3>
                <select name="wheelTypeSelect" onChange={this.wheelTypeHandler} value={wheelType}>
                    <option value="passanger">Легковой</option>
                    <option value="moto">Мото</option>
                    <option value="truck">Грузовой</option>
                    <option value="bus">Автобус</option>
                </select>

                <div className={(wheelType === "moto") ? "hide fuelType" : "fuelType"}>
                    <h3>Тип топлива</h3>
                    <select name="fuelTypeSelect" value={fuelType} onChange={this.fuelTypeHandler}>
                        <option value="gasoline">Бензин</option>
                        <option value="diesel">Дизель</option>
                        <option value="hybrid" className={(wheelType === "truck" || wheelType === "bus") ? "hide" : ""}> Гибрид</option>
                        <option value="electro" className={(wheelType === "truck" || wheelType === "bus") ? "hide" : ""}>Электро</option>
                    </select>
                </div>

                <h3>Стоимость €</h3>
                <input name="price" type="number" max="100000000" min="0" step="1" value={price} onChange={this.priceHandler}></input>

                <div className={(fuelType === "hybrid" || fuelType === "electro" || wheelType === "moto") ? "hide productionYear" : "productionYear"}>
                    <h3>Год выпуска</h3>
                    <select name="productionYearSelect" onChange={this.productionYearHandler} value={productionYear}>
                        {
                            this.fillYears().map((e, i) => <option key={(new Date()).getTime() + i}>{e}</option>)
                        }
                        <option>2005 и старше</option>
                    </select>
                </div>

                <div className={(fuelType === "electro" || fuelType === "hybrid") ? "hide" : "engineСapacity"} >
                    <h3>Обьем двигателя см<sup>3</sup></h3>
                    <input name="engineСapacity" type="number" max="25000" min="0" step="1" value={engineСapacity} onChange={this.engineСapacityHandler}></input>
                </div>

                <div className={fuelType === "electro" ? "batteryСapacity" : "batteryСapacity hide"}>
                    <h3>Емкость батареи КВтЧ</h3>
                    <input name="batteryСapacity" type="number" max="500" min="0" step="1" onChange={this.batteryСapacityHandler} value={batteryСapacity}></input>
                </div>

                <h3>Страна происхождения</h3>
                <select name="originCountrySelect" value={originCountry} onChange={this.originCountryHandler}>
                    <option value="EAUT">ЕАСТ</option>
                    <option value="EU">ЕС</option>
                    <option value="Canada">Канада</option>
                    <option value="other">Другая</option>
                </select>

                <div className={wheelType === "truck" ? "carrying" : "carrying hide"}>
                    <h3>Полынй вес</h3>
                    <select name="fullWeightSelect" value={fullWeight} onChange={this.fullWeightHandler}>
                        <option value="5-">до 5 тонн</option>
                        <option value="5-20">от 5 до 20 тонн</option>
                        <option value="20+">более 20 тонн</option>
                    </select>
                </div>

            </form>
        )
    }
}

export default connect((state) => ({ state: state.editData }), {
    EDIT_WHEEL_TYPE, EDIT_FUEL_TYPE, EDIT_PRICE, EDIT_PRODUCTION_YEAR, EDIT_ENGINE_CAPACITY,
    EDIT_BATTERY_CAPACITY, EDIT_ORIGIN_COUNTRY, EDIT_FULL_WEIGHT
})(InputSection);