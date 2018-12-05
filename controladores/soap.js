const soap = require('soap');
const easySoap = require('easy-soap-request');
const fs = require('fs');

const wsdl = 'https://geosaludpreproduccion:8080/geosaludpreprod/servlet/awsgeosaludexpone?wsdl';

soap.createClient(wsdl, (err, client) => {
    if (err) {
        console.log(err);
    } else {
        if (err) {
            console.log(err);
        } else {
            console.log(client);
        }
    }
});

/*
var soap = require('soap');
var url = 'http://webservices.daehosting.com/services/isbnservice.wso?WSDL';
var args = {};
soap.createClient(url, function(err, client) {
    if (err) {
        console.log(err);
    } else {
        if (err) {
            console.log(err);
        } else {
            //InsSujetoFotoFactura
            client.IsValidISBN13(args, function(err, result) {
                console.log("Resultado: " + JSON.stringify(result));
            });
        }
    }
});
*/