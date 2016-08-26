
var request = require('request');
var _ = require('underscore');

var cheerio = require('cheerio')

var rand = Math.random();
var fundempresaUrl = "http://portal2.fundempresa.org.bo/portal/sitio/consultasWeb.jsp?tipoConsulta=SLEmpresas&random=" + rand;
/*
console.log(fundempresaUrl);
return;
*/
var j = request.jar();
var options = {
	url: fundempresaUrl,
	method: 'GET',
	headers: {
		"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.108 Safari/537.36",
		//'Connection': 'keep-alive'
	},
	followRedirect: true,
	followAllRedirects: true,
	forever: true,
	//jar: j,
	jar: true,
};



request(options, function (error, response, body) {
	console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
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

		console.log("+++++++++++++++++++++++++++++++");
		console.log(response.req);
		console.log("+++++++++++++++++++++++++++++++");
		console.log(response.headers['set-cookie']);
		console.log("+++++++++++++++++++++++++++++++");
		console.log(thaCokeeee);
		console.log("+++++++++++++++++++++++++++++++");
		console.log( response.req._headers );
		console.log("+++++++++++++++++++++++++++++++");

		var $ = cheerio.load(body);
		var dtLoginHidden = $('#dtLoginHidden').val();
		var nuSecHidden = $('#nuSecHidden').val().replace(" ", "");	// no se necesita el replace

		var options = {
			//url: "http://portal2.fundempresa.org.bo/portal/servlet/SLPago",
			//url: "http://portal2.fundempresa.org.bo/portal/servlet/SLPago?nombre=hector&nombre-ISN-DDE=0&matricula=&idMatricula=empresas&servlet=SLBasica&matricula-ISN-DDE=0&nit=&NIT-DDE=&licFunc=&licFunc-ISN-DDE=0&submit1=PorNombre&nuSecHidden=2016082416044255509683167688402251",
			//url: "http://portal2.fundempresa.org.bo/portal/servlet/SLEmpresasList",
			url : "http://portal2.fundempresa.org.bo/portal/servlet/SLPago?nombre=hotel&nombre-ISN-DDE=0&matricula=&idMatricula=empresas&servlet=SLBasica&matricula-ISN-DDE=0&nit=&NIT-DDE=&licFunc=&licFunc-ISN-DDE=0&submit1=PorNombre&nuSecHidden=" + nuSecHidden,
			method: 'GET',
			headers: {
				//'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0',
				//'Connection': 'keep-alive',
				//'Cookie' : 'JSESSIONID=3E90DBFB6BB6E9D6ACBECCC3AE6554BF',
				//'Cookie': thaCokeeee,
				//'content-type': 'application/x-www-form-urlencoded',
				"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
				"Accept-Encoding": "gzip, deflate, sdch",
				"Accept-Language": "en-US,en;q=0.8",
				"Cache-Control": "no-cache",
				"Connection": "keep-alive",
				//"Cookie": "JSESSIONID=56C8D1BB5EA3BDB402A11D21246B1E86; __utma=228589322.1435119121.1466609502.1472042514.1472163439.11; __utmc=228589322; __utmz=228589322.1471274563.8.8.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)",
				"Host": "portal2.fundempresa.org.bo",
				"Pragma": "no-cache",
				"Referer": "http://portal2.fundempresa.org.bo/portal/servlet/SLEmpresasList",
				"Upgrade-Insecure-Requests": "1",
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.108 Safari/537.36",
			},
			followRedirect: true,
			forever: true,
			//jar: j,
			jar: true,
			/*
			form: {
				"nombre": "hotel",
				"nombre-ISN-DDE": "0",
				"matricula": "",
				"matricula-ISN-DDE": "0",
				"nit": "",
				"NIT-DDE": "",
				"licFunc": "",
				"licFunc-ISN-DDE": "0",
				"consultaSel": "PorNombre",
				"nuSecHidden": nuSecHidden,
				//"nuSecHidden": dtLoginHidden,
				//"dtLoginHidden": nuSecHidden,
			}
			*/
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
			var options = {
				//url: "http://portal2.fundempresa.org.bo/portal/servlet/SLPago",
				//url: "http://portal2.fundempresa.org.bo/portal/servlet/SLPago?nombre=hector&nombre-ISN-DDE=0&matricula=&idMatricula=empresas&servlet=SLBasica&matricula-ISN-DDE=0&nit=&NIT-DDE=&licFunc=&licFunc-ISN-DDE=0&submit1=PorNombre&nuSecHidden=2016082416044255509683167688402251",
				//url: "http://portal2.fundempresa.org.bo/portal/servlet/SLEmpresasList",
				url : "http://portal2.fundempresa.org.bo/portal/servlet/SLPago?nombre=hotel&nombre-ISN-DDE=0&matricula=&idMatricula=empresas&servlet=SLBasica&matricula-ISN-DDE=0&nit=&NIT-DDE=&licFunc=&licFunc-ISN-DDE=0&submit1=PorNombre&nuSecHidden=" + nuSecHidden,
				method: 'GET',
				headers: {
					//'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0',
					//'Connection': 'keep-alive',
					//'Cookie' : 'JSESSIONID=3E90DBFB6BB6E9D6ACBECCC3AE6554BF',
					//'Cookie': thaCokeeee,
					//'content-type': 'application/x-www-form-urlencoded',
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
					"Accept-Encoding": "gzip, deflate, sdch",
					"Accept-Language": "en-US,en;q=0.8",
					"Cache-Control": "no-cache",
					"Connection": "keep-alive",
					//"Cookie": "JSESSIONID=56C8D1BB5EA3BDB402A11D21246B1E86; __utma=228589322.1435119121.1466609502.1472042514.1472163439.11; __utmc=228589322; __utmz=228589322.1471274563.8.8.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)",
					"Host": "portal2.fundempresa.org.bo",
					"Pragma": "no-cache",
					"Referer": "http://portal2.fundempresa.org.bo/portal/servlet/SLEmpresasList",
					"Upgrade-Insecure-Requests": "1",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.108 Safari/537.36",
				},
				followRedirect: true,
				forever: true,
				//jar: j,
				jar: true,
				/*
				form: {
					"nombre": "hotel",
					"nombre-ISN-DDE": "0",
					"matricula": "",
					"matricula-ISN-DDE": "0",
					"nit": "",
					"NIT-DDE": "",
					"licFunc": "",
					"licFunc-ISN-DDE": "0",
					"consultaSel": "PorNombre",
					"nuSecHidden": nuSecHidden,
					//"nuSecHidden": dtLoginHidden,
					//"dtLoginHidden": nuSecHidden,
				}
				*/
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
				console.log( response.req._headers );
				console.log("+++++++++++++++++++++++++++++++");
				console.log( _.keys(response) );
				console.log("+++++++++++++++++++++++++++++++");
				console.log( response );
				//console.log(response.headers);
			});
		});

		


		

	}

});

