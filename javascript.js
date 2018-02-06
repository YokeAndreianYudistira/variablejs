var	nama = "Aku di sini";
var alamat = "di jalan soekarno hatta";

document.getElementById('nama').innerHTML=nama;
document.getElementById('alamat').innerHTML=alamat;

function change_text() {
	document.getElementById('replace').innerHTML="Cantik ! "
}

function change_text2() {
	var result = document.getElementById('userinput').value;
	document.getElementById('id_an').innerHTML=result;
}

function color() {
	var oldHtml = document.getElementById('para').innerHTML;
	var newHTML = "<span style='color: #0000FF;'>" + oldHtml+ "</span>";
	document.getElementById('para').innerHTML=newHTML;
}