const request = require('supertest');
const { expressApp } = require('../expressApp');

describe('teting root path', () => {


    test('response code === 200', (done) => {

        request(expressApp)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            })

    });

    test('sum 1 + 3', (done) => {
        request(expressApp)
            .get('/calculator/sum?a=1&b=3')
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body.result).toBe(4);
                done();
            })
    });

    test('sum 5 + 31', (done) => {
        request(expressApp)
            .get('/calculator/sum?a=5&b=31')
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body.result).toBe(36);
                done();
            })
    });


    test('sum 0 - 4', (done) => {
        request(expressApp)
            .get('/calculator/substract?a=0&b=4')
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body.result).toBe(-4);
                done();
            })
    });


});
