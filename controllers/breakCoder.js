'use strict'

const SECRET_NUMBER = 1234;

const { calculateCodeBreaker } = require('../bin/codebreaker');

class GameController {
    constructor() {

    }

    static testController(req, res) {

        const testResponse = { date: Date.now(), name: 'testig funciton' };

        res.status(200)
            .json(testResponse)
    }


}

module.exports = GameController;