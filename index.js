'use strict'

require('dotenv').load();
const { expressApp } = require('./expressApp');
const { Observable, concat } = require('rxjs');

const port = parseInt(process.env.REST_END_POINT_PORT || '7070');
const endPoint = process.env.REST_HTTP_END_POINT || 'localhost';

const { toArray } = require('rxjs/operators');


function startExpress$(app) {
    return Observable.create(observer => {
        observer.next("Starting express aplication");

        app.listen(port, () => {
            console.log(`REST server is running at ${endPoint}:${port}`);
        });

        observer.complete();
    });
}

concat(
    startExpress$(expressApp),
).pipe(toArray())
    .subscribe(() => {
        console.log('SE TEMINO DE CREAR EL FLUJO PRINCIPAL DEL SERVER');
    },
        error => {
            console.log('ERROR ===> ', error);
        },
        () => {
            // console.log('on complete');
        }
    );