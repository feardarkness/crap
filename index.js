var request = require('request');
var _ = require('underscore');

var rand = Math.random();
var fundempresaUrl = "http://portal2.fundempresa.org.bo/portal/sitio/consultasWeb.jsp?tipoConsulta=SLEmpresas&random=" + rand;

request(fundempresaUrl, function (error, response, body) {
	if (error){
		console.log(error);
		return;
	}

	if (!error && response.statusCode == 200) {
		console.log(body);
		console.log(response);
		console.log(_.keys(response));
	}

});


21:51:26.047[144ms][total 144ms] Estado: 200[OK]
POST http://portal2.fundempresa.org.bo/portal/servlet/SLEmpresasList Indicadores cargados[LOAD_DOCUMENT_URI  LOAD_INITIAL_DOCUMENT_URI  ] Tamaño[8108] Tipo Mime[text/html]
   Cabeceras pedidas:
      Host[portal2.fundempresa.org.bo]
      User-Agent[Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0]
      Accept[text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8]
      Accept-Language[en-US,en;q=0.5]
      Accept-Encoding[gzip, deflate]
      Referer[http://portal2.fundempresa.org.bo/portal/servlet/SLEmpresas?nuSecHidden=2016082321491799708929758425939004]
      Cookie[JSESSIONID=6FF543AF89ABF381D6FDC12FE7531D31; __utma=228589322.1369012542.1472000692.1472000692.1472003463.2; __utmz=228589322.1472000692.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmb=228589322.1.10.1472003463; __utmc=228589322; __utmt=1]
      Connection[keep-alive]
      Upgrade-Insecure-Requests[1]
   Post Data:
      nombre[ariel]
      nombre-ISN-DDE[0]
      matricula[]
      matricula-ISN-DDE[0]
      nit[]
      NIT-DDE[]
      licFunc[]
      licFunc-ISN-DDE[0]
      consultaSel[PorNombre]
      nuSecHidden[2016082321491799708929758425939004]
   Cabeceras recibidas:
      Date[Wed, 24 Aug 2016 01:49:38 GMT]
      Server[Apache/2.0.47 (Win32) mod_jk/1.2.4]
      Content-Length[8108]
      Connection[close]
      Content-Type[text/html; charset=ISO-8859-1]
