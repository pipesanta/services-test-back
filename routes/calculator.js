"use strict";

const rootRoute = "calculator";
const CalculatorControler = require("../controllers/calculator");


module.exports = {
  applyRoutes: (app) => {
    app.route(`/${rootRoute}`).get(CalculatorControler.sum.bind(this));
    app.route(`/${rootRoute}/sum`).get(CalculatorControler.sum.bind(this));
    app.route(`/${rootRoute}/substract`).get(CalculatorControler.substract.bind(this));
  }

};
