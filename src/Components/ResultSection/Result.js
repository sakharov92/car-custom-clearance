import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Result.css";



const Result = ({ batteryСapacity, fullWeight, engineСapacity, fuelType, originCountry, price, productionYear, wheelType, isResultShown }) => {

    let dutyRate = 0.1;
    let excise = 0;
    let numOfYears = (new Date()).getFullYear() - productionYear;
    if (productionYear === "2005 и старше") { numOfYears = 15 }
    if (numOfYears === 0) { numOfYears = 1 }
    let NDSRate = 0.2;
    let isHybrid = false;
    const govExchangeCourse = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";





    const [eurRate, setEurRate] = useState(33.5)

    useEffect(() => {
        fetch(govExchangeCourse)
            .then(response => response.json())
            .then(response => response.map((e) => {
                if (e.cc == "EUR") {
                    setEurRate(e.rate.toFixed(2))
                }
            }));
    }, []);

    if (isResultShown) {
        switch (originCountry) {
            case "EU":
                dutyRate = 0.055;
                break;
            case "Canada":
            case "EAUT":
                dutyRate = 0;
                break;
            case "other":
                console.log("123")
                dutyRate = 0.1;
                break;

            default: break;
        }
    }
    switch (wheelType) {
        case "passanger":
            let base;
            switch (fuelType) {
                case "gasoline":
                    (engineСapacity > 3000) ? base = 100 : base = 50;
                    excise = base * numOfYears * engineСapacity / 1000;
                    break;
                case "diesel":
                    (engineСapacity > 3000) ? base = 150 : base = 75;
                    excise = base * numOfYears * engineСapacity / 1000;
                    break;
                case "hybrid":
                    isHybrid = true;
                    break;
                case "electro":
                    NDSRate = 0;
                    dutyRate = 0;
                    excise = batteryСapacity;
                    break;
                default: break;
            }
            break;
        case "moto":
            if (originCountry === "Canada") { dutyRate = 0.05 }
            if ((originCountry === "EAUT" || originCountry === "EU") && (engineСapacity <= 125)) { dutyRate = 0.033 }
            (engineСapacity < 500) ? excise = engineСapacity * 0.062 : ((engineСapacity >= 800) ? excise = engineСapacity * 0.447 : excise = engineСapacity * 0.443)
            break;
        case "track":
            (numOfYears < 5) ? excise = engineСapacity * 0.02 : ((numOfYears > 8) ? excise = engineСapacity : excise = engineСapacity * 0.8)
            if ((engineСapacity < 2500) && (originCountry === "Canada") && (fullWeight === "5-")) { dutyRate = 0.0625 }
            break;
        case "bus":
            (numOfYears === 1) ? excise = engineСapacity * 0.003 : ((numOfYears < 8) ? excise = engineСapacity * 0.007 : excise = engineСapacity * 0.35)
            if ((fuelType === "diesel") && (engineСapacity > 2500) && (engineСapacity <= 5000)) {
                if ((numOfYears < 8) && (numOfYears > 1)) { excise = engineСapacity * 0.003 }
                if (numOfYears > 8) { excise = engineСapacity * 0.15 }
            }
            break;
        default: break;
    }

    const duty = dutyRate * price;
    const NDS = (price * (1 + dutyRate) + (isHybrid ? "100" : excise)) * NDSRate;
    const fullFee = duty + NDS + (isHybrid ? "100" : excise);



    const pensFee = (fullFee, price) => {
        let fullPrice = (+fullFee + +price) * eurRate;
        console.log(fullPrice)
        if (fullPrice < 2118 * 165) {
            return (fullPrice * 0.03).toFixed();
        } else {
            if (fullPrice > 2118 * 290) {
                return (fullPrice * 0.05).toFixed();
            } else {
                return (fullPrice * 0.04).toFixed();
            }
        }
    }


    return (
        <div className="result">
            <div>Стоимость авто за границе: {isResultShown ? price : "0"} EUR</div>
            <div>Пошлина: {isResultShown ? duty : "0"} EUR</div>
            <div>Акциз: {isResultShown ? (isHybrid ? "100" : excise) : "0"} EUR</div>
            <div>НДС: {isResultShown ? NDS : "0"} EUR</div>
            <div>Таможенных платижей: {isResultShown ? fullFee : "0"} EUR</div>
            <div>Стоимсоть авто после растаможки: {isResultShown ? (+price + fullFee) : "0"} EUR</div>
            <div> Налог в пенсионный фонд при первой регистрации: {isResultShown ? pensFee(fullFee, price) : "0"} Грн</div>

        </div>
    )
}

export default connect((state) => {
    let propState = Object.assign({}, state.editData);
    propState.isResultShown = state.isResultShown;
    return propState;
})(Result);



