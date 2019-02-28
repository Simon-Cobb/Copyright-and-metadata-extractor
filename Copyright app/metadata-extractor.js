var cr = document.querySelector("p#copyleft").innerText;
var copyright = '<div><p>Copyright statement:</p><textarea class="metadata" onclick=selectFunction(); rows="3" cols="100" wrap="virtual">' + cr + '</textarea></div>';

var cov = document.querySelector("p#cover");
if(cov) {
cov = document.querySelector("p#cover").innerText;
var coversheet = '<div><p>Coversheet statement:</p><textarea class="metadata" onclick=selectFunction(); rows="3" cols="100" wrap="virtual">' + cov + '</textarea></div>';
	} else {
  var coversheet = '';
}

var x2 = document.getElementsByName("citation_title");
var text = "";
var i;
for (i = 0; i < x2.length; i++) {
  txt2 = text + '<div><p>Title:</p><textarea class="metadata" onclick=selectFunction(); rows="2" cols="100" wrap="virtual">' + x2[i].content + '</textarea></div>';
}

var x3 = document.querySelector(".abstract.author");
if(x3) {
	var abs = x3.innerText;
	 abs = abs.replace(/^Abstract/,'').trim();
    var abstract = '<div><p>Abstract:</p><textarea class="metadata" onclick=selectFunction(); rows="5" cols="100" wrap="virtual">' + abs + '</textarea></div>';
	} else {
	var abstract = ''; 
}

var x4 = document.querySelector("p#betterKWs");
if(x4) {
x4 = document.querySelector("p#betterKWs").innerText;
var txt4 = '<div><p>Keywords:</p><textarea class="metadata" onclick=selectFunction(); rows="1" cols="100" wrap="virtual">' + x4 + '</textarea></div>';
	} else {
  var txt4 = '';
}

//var auth = document.getElementsByName("citation_author");
//var text = "";
//var i;
//for (i = 0; i < auth.length; i++) {
 // var z = text + '<div><p>Authors:</p><ul><textarea class="metadata" onclick=selectFunction; rows="1" cols="20" wrap="virtual">' + auth[i].content + '</textarea></ul></div>';
//} 

//else {
 // var author = '';
//  var s='';var mt1 = document.querySelectorAll('#author-group > a > span > span.text.surname');for (i=0;i<mt1.length;i++){s=s+'<div><ul><textarea class="metadata" onclick=selectFunction; rows="1" cols="30" wrap="virtual">'+mt1[i].innerText+'</textarea></ul></div>';}
//var y='';var mt2 = document.querySelectorAll('#author-group > a > span > span.text.given-name');for (i=0;i<mt2.length;i++){y=y+'<div><ul><textarea class="metadata" onclick=selectFunction; rows="1" cols="30" wrap="virtual">'+mt2[i].innerText+'</textarea></ul></div>';}
//z='<p>Authors:<table border=1 style=\'font:x-small verdana\'><tr><td><p>Surname:</p>' + s+'</td><td><p>Given name:</p>' + y+'</td></tr></table>';
//}

var s='';var mt1 = document.querySelectorAll('#author-group > a > span > span.text.surname');for (i=0;i<mt1.length;i++){s=s+'<div><ul><textarea class="metadata" onclick=selectFunction; rows="1" cols="30" wrap="virtual">'+mt1[i].innerText+'</textarea></ul></div>';}
var y='';var mt2 = document.querySelectorAll('#author-group > a > span > span.text.given-name');for (i=0;i<mt2.length;i++){y=y+'<div><ul><textarea class="metadata" onclick=selectFunction; rows="1" cols="30" wrap="virtual">'+mt2[i].innerText+'</textarea></ul></div>';}
z='<p>Authors:<table border=1 style=\'font:x-small verdana\'><tr><td><p>Surname:</p>' + s+'</td><td><p>Given name:</p>' + y+'</td></tr></table>';

var d1 = document.querySelector("div#banner.Banner");
if(d1) { 
 d1 = d1.innerText;
 accpt = d1.split('Accepted ')[1];
 } if (accpt) {
var accpt = accpt.split(',')[0].trim();
var date1 = '<div><p>Acceptance date:</p><textarea class="metadata" onclick=selectFunction; rows="1" cols="20" wrap="virtual">' + accpt + '</textarea></div>';
} else {
  var date1 = '';
}

var d2 = document.getElementsByName("citation_online_date");
var text = "";
var i;
for (i = 0; i < d2.length; i++) {
var date2 = text + '<div><p>Published online date:</p><textarea class="metadata" onclick=selectFunction; rows="1" cols="20" wrap="virtual">' + d2[i].content + '</textarea></div>';
}

var d3 = document.getElementsByName("citation_publication_date");
if(d3) {
var text = "";
var i;
for (i = 0; i < d3.length; i++) {
  var date3 = text + '<div><p>Publication date:</p><textarea class="metadata" onclick=selectFunction; rows="1" cols="20" wrap="virtual">' + d3[i].content + '</textarea></div>';
}} else {
  var date3 = '';
}

var doi = document.getElementsByName("citation_doi");
var text = "";
var i;
for (i = 0; i < doi.length; i++) {
  DOI = text + '<div><p>DOI:</p><textarea class="metadata" onclick=selectFunction; rows="1" cols="50" wrap="virtual">' + doi[i].content + '</textarea></div>';
}

var jt = document.getElementsByName("citation_journal_title");
var text = "";
var i;
for (i = 0; i < jt.length; i++) {
  journal = text + '<div><p>Journal:</p><textarea class="metadata" onclick=selectFunction; rows="1" cols="50" wrap="virtual">' + jt[i].content + '</textarea></div>';
}

var issn = document.getElementsByName("citation_issn");
var text = "";
var i;
for (i = 0; i < issn.length; i++) {
  ISSN = text + '<div><p>ISSN:</p><textarea class="metadata" onclick=selectFunction; rows="1" cols="15" wrap="virtual">' + issn[i].content + '</textarea></div>';
}

var volume = document.getElementsByName("citation_volume")[0];
if(volume) {
  vol = '<div><p>Volume:</p><textarea class="metadata" onclick=selectFunction; rows="1" cols="10" wrap="virtual">' + volume.content + '</textarea></div>';
} else {
  var vol = '';
}

var issue = document.getElementsByName("citation_issue")[0];
if(issue) {
iss = '<div><p>Issue:</p><textarea class="metadata" onclick=selectFunction; rows="1" cols="10" wrap="virtual">' + issue.content + '</textarea></div>';
} else {
  var iss = '';
}

var firstP = document.getElementsByName("citation_firstpage")[0];
if(firstP) {
var fp = '<div><p>First page:</p><textarea class="metadata" onclick=selectFunction; rows="1" cols="15" wrap="virtual">' + firstP.content + '</textarea></div>';
} else {
  var fp = '';
}
var lastP = document.getElementsByName("citation_lastpage")[0];
if(lastP) {
var lp = '<div><p>First page:</p><textarea class="metadata" onclick=selectFunction; rows="1" cols="15" wrap="virtual">' + lastP.content + '</textarea></div>';
} else {
  var lp = '';
}
pp = '<p>Pagination:<table border=1 style=\'font:x-small verdana\'><tr><td>' + fp +'</td><td>' + lp +'</td></tr></table>';

var txt = "<p>" + copyright + coversheet + txt2 + abstract + txt4 + z + date1 + date2 + date3 + DOI + journal + ISSN + vol + iss + pp + "</p>"

var m = window.open('', 'm', '');
m.document.open();
m.document.write(txt);
m.document.close();