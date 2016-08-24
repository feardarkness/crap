var request = require('request');
var _ = require('underscore');

var rand = Math.random();
var fundempresaUrl = "http://portal2.fundempresa.org.bo/portal/sitio/consultasWeb.jsp?tipoConsulta=SLEmpresas&random=" + rand;

var options = {
  url: fundempresaUrl,
  headers: {
    'User-Agent': 'request'
  }
};

request(fundempresaUrl, function (error, response, body) {
	if (error){
		console.log(error);
		return;
	}

	if (!error && response.statusCode == 200) {

		var options = {
		  url: fundempresaUrl,
		  headers: {
		    'Cookie': response.headers['set-cookie']
		  },
		  followRedirect: false
		};

		console.log("+++++++++++++++++++++++++++++++");
		console.log(body);
		console.log(response.headers);

		request(options, function(error, response, body){
			if (error){
				console.log(error);
				return;
			}			
			console.log("+++++++++++++++++++++++++++++++");
			console.log(body);
			//console.log("+++++++++++++++++++++++++++++++++++++++++++++");
			console.log(response.headers);
			//console.log("+++++++++++++++++++++++++++++++++++++++++++++");
			//console.log(_.keys(response));
		});
		
	}

});

