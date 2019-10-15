


				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
				//																				   //
				//										index.js								   //
				//																				   //
				//	Auteur : Adel R. (Estia)													   //
				//																				   //
				//	Dernière édition : 01/10/2019												   //
				//																				   //
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('<!DOCTYPE html>\n<html>\n<head>\n<title>pere noel</title>\n</head>\n<body>\n<h1>titre</h1></body>\n</html>');
  res.write('<!DOCTYPE html>\n');
  res.write('<html>\n');
  res.write('<head>\n');
  // res.write('<!link rel = "stylesheet" type = "text/css" href = "./main.css">');


  res.write('<meta charset = "UTF-8">');
  res.write('<style>\n');
  res.write('body {background-color: grey;}\n');
  res.write('.barre-header {border: 1px black solid;}\n');
  res.write('.barre-footer {border: 1px black solid; clear: both; top: 20px;position: relative;}\n');
  res.write('textarea { text-align: center; resize: none; margin-top: 2%; margin-left: 2%; margin-right: 2% ; height: 70%;width: 96%;-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;   }\n');

  res.write('</style>\n');


  res.write('<link rel="icon" href="http://www.groupe-estia.fr/wp-content/uploads/2017/01/logo-estia-retina.png">');


  res.write('<title>Nom de l\'application</title>\n');

  res.write('</head>\n');
  res.write('<body>\n');
  res.write('<div class = "barre-header"> <h1 style = "text-align: center;"> Nom de l\'application </h1> </div>\n');
  res.write('<div>\n');
  res.write('<div style = "height: 400px; width: 49%;border: 1px black solid;float: left;margin-top: 20px;"> <br/> \
  	<textarea>Saisissez commentaire pour classification</textarea><br/><br/> \
  	<form><input type="checkbox" id = "check_box1" style = "margin-left: 2%;"><label for="check_box1">Option 1</label>&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id = "check_box2"><label for="check_box2">Option 2</label></form> \
  	<input type = "button" value = "Envoyer" style = "float: right; width: 70px;margin-right: 2%;"></input> </div>\n');

  res.write('');

  res.write('<div style = "height: 400px; width: 49%;border: 1px black solid;float: right;margin-top: 20px;">  </div>\n');
  res.write('<div>\n');
  res.write('<div class = "barre-footer"> <h1 style = "text-align: center"> &copy;Estia 2019 </h1> </div>\n');
  res.write('</body>\n');
  res.write('</html>\n');
  res.end();

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
