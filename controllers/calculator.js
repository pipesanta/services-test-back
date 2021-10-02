'use strict'

const calculator = require("../bin/calculator");

class CalculatorController {

    static sum(req, res) {

        const { a, b } = req.query;
        const result = calculator.sum(parseInt(a, 10), parseInt(b, 10));

        res.status(200)
            .json({ result })
    }


    static substract(req, res) {

        const { a, b } = req.query;
        const result = calculator.substract(parseInt(a, 10), parseInt(b, 10));

        res.status(200)
            .json({ result })
    }



}

module.exports = CalculatorController;