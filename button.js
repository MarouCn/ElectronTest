var remote = require('electron').remote;
 //require('remote'); 

 var dialog =  require('electron').remote.dialog;
 //remote.require('dialog'); 
 
 var fs = require('fs');
 

function openFile () {

 dialog.showOpenDialog(function (fileNames) {

  if (fileNames === undefined) return;

  var fileName = fileNames[0];

  fs.readFile(fileName, 'utf-8', function (err, data) {

    document.getElementById("editor").value = data;
	var obj = JSON.parse(data);
	console.log(obj.Name);
	document.getElementById("name").value=obj.Name;
   document.getElementById("start").value=obj.Start;
    document.getElementById("end").value=obj.End;

		
  });

 }); 

}

function saveFile () {

  dialog.showSaveDialog(function (fileName) {

    if (fileName === undefined) return;

    fs.writeFile(fileName, document.getElementById("editor").value, function (err) { 
dialog.showMessageBox({ message: " Files is saved",

      buttons: ["OK"] });	

    });

  }); 

}