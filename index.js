var request = require('request');
var _ = require('underscore');

var cheerio = require('cheerio')

var rand = Math.random();
var fundempresaUrl = "http://portal2.fundempresa.org.bo/portal/sitio/consultasWeb.jsp?tipoConsulta=SLEmpresas&random=" + rand;

var j = request.jar();
var options = {
	url: fundempresaUrl,
	method: 'GET',
	headers: {
		'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0',
		'Connection': 'keep-alive'
	},
	followRedirect: false,
	forever: true,
	//jar: j,
};

request(options, function (error, response, body) {
/*
	var cookies = j.getCookies(fundempresaUrl);
	console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
	console.log(cookies);
	console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
	console.log(response.req);
	console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
	console.log(response.headers);
	return;
*/
	console.log("+++++++++++++++++++++++++++++++");
	console.log(response);
	console.log(response.status);
	console.log('+++++++++++++++++++++++++++++++++++++++++')

	if (error){
		console.log(error);
		return;
	}

	if (!error && response.statusCode == 200) {
		// cookie yumi yumi
		var thaCokeeee = response.headers['set-cookie'][0].split(";")[0];
		//console.log(response.headers['set-cookie'][0].split(";")[0]);
		//return;

		var $ = cheerio.load(body);
		var dtLoginHidden = $('#dtLoginHidden').val();
		var nuSecHidden = $('#nuSecHidden').val();

		var options = {
			url: "http://portal2.fundempresa.org.bo/portal/servlet/SLPago",
			//url: "http://portal2.fundempresa.org.bo/portal/servlet/SLPago?nombre=hector&nombre-ISN-DDE=0&matricula=&idMatricula=empresas&servlet=SLBasica&matricula-ISN-DDE=0&nit=&NIT-DDE=&licFunc=&licFunc-ISN-DDE=0&submit1=PorNombre&nuSecHidden=2016082416044255509683167688402251",
			method: 'POST',
			headers: {
				'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0',
				'Connection': 'keep-alive',
				//'Cookie' : 'JSESSIONID=3E90DBFB6BB6E9D6ACBECCC3AE6554BF',
				'Cookie' : thaCokeeee,
			},
			followRedirect: false,
			forever: true,
			//jar: j,
			formData: {
				"cdUsuario": "usuarioweb",
				"cdClave": "cons123",
				"tipoConsulta": "SLEmpresas",
				"nuSecHidden": dtLoginHidden,
				"dtLoginHidden": nuSecHidden,
			}
		};

		//POSTDATA=cdUsuario=usuarioweb&cdClave=cons123&tipoConsulta=SLEmpresas&nuSecHidden=2016082416512441808090247609077488&dtLoginHidden=2016-08-24+16%3A51%3A24.418

		//console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
		//console.log(response.headers['set-cookie']);
		//console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");



		console.log("+++++++++++++++++++++++++++++++");
		//console.log(body);
		console.log(response.headers);

		request(options, function(error, response, body){
			if (error){
				console.log(error);
				return;
			}
			console.log("+++++++++++++++++++++++++++++++");
			console.log(response.req);
			//console.log(response.req);
			//console.log(body);
			//console.log(response.headers);
		});

	}

});

