const soap = require('easy-soap-request');
//const fs = require('fs');

const url = 'https://geosaludpreproduccion:8080/geosaludpreprod/servlet/awsgeosaludexpone?wsdl';

const headers = {
    'user-agent': 'Test GEOSalud',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'DatosPaciente',
};

const xml = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="Consolidado">
    <soapenv:Header/>
    <soapenv:Body>
        <con:wsGeoSaludExpone.Execute>
            <con:Tipows>DATOSPACIENTECOBERTURA</con:Tipows>
            <con:Xmlin>&lt;sdtParmWSPaciente&gt;
            &lt;PersId&gt;911651&lt;/PersId&gt;
            &lt;Cobertura&gt;5040&lt;/Cobertura&gt;
            &lt;PlanId&gt;1&lt;/PlanId&gt;
            &lt;/sdtParmWSPaciente&gt;</con:Xmlin>
        </con:wsGeoSaludExpone.Execute>
    </soapenv:Body>
    </soapenv:Envelope>
`;

(async () => {
    const { response } = await soap(url, headers, xml, 1000); // Optional timeout parameter(milliseconds)
    const { body, statusCode } = response;
    console.log(body);
    console.log(statusCode);
})();


/*
const soapRequest = require('easy-soap-request');
const fs = require('fs');
 
// example data
const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const headers = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};
const xml = fs.readFileSync('test/zipCodeEnvelope.xml', 'utf-8');
 
// usage of module
(async () => {
  const { response } = await soapRequest(url, headers, xml, 1000); // Optional timeout parameter(milliseconds)
  const { body, statusCode } = response;
  console.log(body);
  console.log(statusCode);
})();
*/