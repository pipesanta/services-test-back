'use strict'

const SECRET_NUMBER = 1234;

const { calculateCodeBreaker } = require('../bin/codebreaker');

class GameController {
    constructor() {

    }

    static testController(req, res) {

        const { numberA, numberB } = req.query;

        console.log({
            numberA, numberB
        });

        const result = calculateCodeBreaker(numberA, numberB);

        const testResponse = { date: Date.now(), name: 'testig funciton', result };


        res.status(200)
            .json({ result: testResponse })
    }


}

module.exports = GameController;