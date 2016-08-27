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
		"Host": "portal2.fundempresa.org.bo",
		"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0",
		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
		"Accept-Language": "en-US,en;q=0.5",
		"Accept-Encoding": "gzip, deflate",
		"Referer": "http://fundempresa.org.bo/",
		//"Connection": "keep-alive",
		"Upgrade-Insecure-Requests": "1",
	},
	followRedirect: true,
	forever: true,
	jar: j,
};

request(options, function (error, response, body) {
	var $ = cheerio.load(body);
	var nuSecHidden = $("#nuSecHidden").val();
	var dtLoginHidden = $("#dtLoginHidden").val();

	var options = {
		url: "http://portal2.fundempresa.org.bo/portal/servlet/SLFramePrincipalWeb",
		method: 'POST',
		headers: {
			"Host": "portal2.fundempresa.org.bo",
			"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0",
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
			"Accept-Language": "en-US,en;q=0.5",
			"Accept-Encoding": "gzip, deflate",
			"Referer": "http://fundempresa.org.bo/",
			"Upgrade-Insecure-Requests": "1",
		},
		followRedirect: true,
		forever: true,
		jar: j,
		form: {
			"cdUsuario": "usuarioweb",
			"cdClave": "cons123",
			"tipoConsulta": "SLEmpresas",
			"nuSecHidden": nuSecHidden,
			"dtLoginHidden": dtLoginHidden,
		}
	};

	request(options, function (error, response, body) {
		var $ = cheerio.load(body);
		var frameUrl = $("#WORK").prop('src');		// http://portal2.fundempresa.org.bo:80/portal/servlet/SLEmpresas?nuSecHidden=20160826172503098008409301377929779
		var options = {
			url: frameUrl,
			method: 'GET',
			headers: {
				"Host": "portal2.fundempresa.org.bo",
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0",
				"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate",
				"Referer": "http://portal2.fundempresa.org.bo/portal/servlet/SLFramePrincipalWeb",
				"Upgrade-Insecure-Requests": "1",
			},
			followRedirect: true,
			forever: true,
			jar: j,
		};

		request(options, function (error, response, body) {
			var nuSecHidden2 = frameUrl.split('=')[1];
			var options = {
				url: "http://portal2.fundempresa.org.bo/portal/servlet/SLEmpresasList",
				method: 'POST',
				headers: {
					"Host": "portal2.fundempresa.org.bo",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate",
					"Referer": frameUrl,
					"Upgrade-Insecure-Requests": "1",
				},
				followRedirect: true,
				forever: true,
				jar: j,
				form: {
					"nombre": "casa",
					"nombre-ISN-DDE": "0",
					"matricula": "",
					"matricula-ISN-DDE": "0",
					"nit": "",
					"NIT-DDE": "",
					"licFunc": "",
					"licFunc-ISN-DDE": "0",
					"consultaSel": "PorNombre",
					"nuSecHidden": nuSecHidden2,
				}
			};

			request(options, function (error, response, body) {
				var options = {
					url: "http://portal2.fundempresa.org.bo/portal/servlet/SLPago?nombre=casa&nombre-ISN-DDE=0&matricula=&idMatricula=empresas&servlet=SLBasica&matricula-ISN-DDE=0&nit=&NIT-DDE=&licFunc=&licFunc-ISN-DDE=0&submit1=PorNombre&nuSecHidden="+nuSecHidden2,
					method: 'GET',
					headers: {
						"Host": "portal2.fundempresa.org.bo",
						"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0",
						"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
						"Accept-Language": "en-US,en;q=0.5",
						"Accept-Encoding": "gzip, deflate",
						"Referer": "http://portal2.fundempresa.org.bo/portal/servlet/SLEmpresasList",
						"Upgrade-Insecure-Requests": "1",
					},
					followRedirect: true,
					forever: true,
					jar: j,
				};
				request(options, function (error, response, body) {
					console.log(response.req._headers);
					console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
					console.log(response.headers);
					console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
					console.log(body);
					console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
					console.log(nuSecHidden);	
				});
				
			});

		});

	});

});

