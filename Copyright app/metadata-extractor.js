var emb = document.querySelector("p#output");
if(emb) {
emb = document.querySelector("p#output").innerText;
var embargo = '<div><p>Embargo:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' + emb + '</div></div>';
} else {
  var embargo = '';
}

var cr = document.querySelector("p#copyleft");
if(cr) {
cr = document.querySelector("p#copyleft").innerText;
var copyright = '<div><p>Copyright statement:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' + cr + '</div></div>';
} else {
  var copyright = '';
}

var cov = document.querySelector("p#cover");
if(cov) {
cov = document.querySelector("p#cover").innerText;
var coversheet = '<div><p>Coversheet statement:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' + cov + '</div></div>';
	} else {
  var coversheet = '';
}

var x2 = document.getElementsByName("citation_title");
var y2 = document.getElementsByName("dc.Title");
if (x2) {
var text = "";
var i;
for (i = 0; i < x2.length; i++) {
 var txt2 = text + '<div><p>Title:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' + x2[i].content + '</div></div>'; }
} else if (y2) { 
var text = "";
var i;
for (i = 0; i < y2.length; i++) {
 var txt2 = text + '<div><p>Title:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' + y2[i].content + '</div></div>'; }
} else {
var txt2 = ''; }  

var ab1 = document.querySelector(".abstract.author");
var ab2 = document.querySelector('div.abstract-group');
var ab3 = document.querySelector('#Abs1');
var ab4 = '';var abstract4 = document.getElementsByName('citation_abstract');for (i=0;i<abstract4.length;i++){ab4=ab4+'<div><p>Abstract:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' +abstract4[i].content+'</div></div>';}
var ab5 = '';var abstract5 = document.getElementsByName('description');for (i=0;i<abstract5.length;i++){ab5=ab5+'<div><p>Abstract:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' +abstract5[i].content+'</div></div>';}
if(ab1) {
	var abs = ab1.innerText;
	 abs = abs.replace(/^Abstract/,'').replace(/^Abstract/,'').replace(/Purpose\n/,' Purpose: ').replace(/Background\n/,' Background: ').replace(/Method\n/,' Method: ').replace(/Methods\n/,' Methods: ').replace(/Methods and Materials\n/,' Methods and Materials: ').replace(/Results\n/,' Results: ').replace(/Conclusions\n/,' Conclusions: ').replace(/Conclusion\n/,' Conclusion: ').replace(/Aims\n/,' Aims: ').replace(/\n/g,'').trim();
	 var abstract = '<div><p>Abstract:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' + abs + '</div></div>';
	} else if (ab2) {
var abs = ab2.innerText;
	// abs = abs.split('Abstract')[1].replace(/\n/g,'').trim();
	 abs = abs.replace(/^(Abstract|Summary)/,'').replace(/Purpose\n/,' Purpose: ').replace(/Background\n/,' Background: ').replace(/Method\n/,' Method: ').replace(/Methods\n/,' Methods: ').replace(/Methods and Materials\n/,' Methods and Materials: ').replace(/Results\n/,' Results: ').replace(/Conclusions\n/,' Conclusions: ').replace(/Conclusion\n/,' Conclusion: ').replace(/Aims\n/,' Aims: ').replace(/\n/g,'').trim();
    var abstract = '<div><p>Abstract:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' + abs + '</div></div>';
	} else if (ab3) {
var abs = ab3.innerText;
	// abs = abs.replace(/^Abstract/,'').replace(/\n/g,'').trim();
	 abs = abs.replace(/^Abstract/,'').replace(/^Abstract/,'').replace(/Purpose\n/,' Purpose: ').replace(/Background\n/,' Background: ').replace(/Method\n/,' Method: ').replace(/Methods\n/,' Methods: ').replace(/Methods and Materials\n/,' Methods and Materials: ').replace(/Results\n/,' Results: ').replace(/Conclusions\n/,' Conclusions: ').replace(/Conclusion\n/,' Conclusion: ').replace(/Aims\n/,' Aims: ').replace(/\n/g,'').trim();
    var abstract = '<div><p>Abstract:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' + abs + '</div></div>';
	} else if (ab4) {
	var abstract = ab4; 
	} else if (ab5) {
	var abstract = ab5; }
	else {
	var abstract = ''; }

var kw1 = document.querySelector("p#betterKWs");
var kw2 = '';var keywords2 = document.getElementsByName('Keywords');for (i=0;i<keywords2.length;i++){kw2=kw2+'<div><p>Keywords:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' +keywords2[i].content+'</div></div>';}
var kw3 = '';var keywords3 = document.getElementsByName('citation_keywords');for (i=0;i<keywords3.length;i++){kw3=kw3+'<div><p>Keywords:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;" wrap="virtual">' +keywords3[i].content+'</div></div>';}
if(kw1) {
kw1 = document.querySelector("p#betterKWs").innerText;
var keywords = '<div><p>Keywords:</p><div contentEditable="true" style="color:blue;width:800px;border: solid 1px #808080;">' + kw1 + '</div></div>';
	} else if (kw2) {
	var keywords = kw2; 
	} else if (kw3) {
	var keywords = kw3; 
	} else {	
  var keywords = '';
}

var u='';var mt4 = document.getElementsByName('citation_author');for (i=0;i<mt4.length;i++){u=u+'<div><ul><div contentEditable="true" style="color:blue;width:200px;border: solid 1px #808080;">'+mt4[i].content+'</div></ul></div>';}
var v='';var mt3 = document.getElementsByName('dc.creator');for (i=0;i<mt3.length;i++){v=v+'<div><ul><div contentEditable="true" style="color:blue;width:200px;border: solid 1px #808080;">'+mt3[i].content+'</div></ul></div>';}
var s='';var mt1 = document.querySelectorAll('#author-group > a > span > span.text.surname');for (i=0;i<mt1.length;i++){s=s+'<div><ul><div contentEditable="true" style="color:blue;width:200px;border: solid 1px #808080;">'+mt1[i].innerText+'</div></ul></div>';}
var y='';var mt2 = document.querySelectorAll('#author-group > a > span > span.text.given-name');for (i=0;i<mt2.length;i++){y=y+'<div><ul><div contentEditable="true" style="color:blue;width:200px;border: solid 1px #808080;">'+mt2[i].innerText+'</div></ul></div>';}
if(u) {z='<p>Authors:<table border=0 style=\'font:x-small verdana\'><tr><td><p>Name:</p>' + u+'</td></tr></table>';}
else if (v) {z='<p>Authors:<table border=0 style=\'font:x-small verdana\'><tr><td><p>Name:</p>' + v+'</td></tr></table>';} 
else {z='<p>Authors:<table border=0 style=\'font:x-small verdana\'><tr><td><p>Surname:</p>' + s+'</td><td><p>Given name:</p>' + y+'</td></tr></table>';}

var doa1 = document.querySelector("div#banner.Banner");
var doa2 = document.querySelector('section.publication-history');
var doa3 = document.querySelector('body');
if(doa1) { 
 doa1 = doa1.innerText;
 accpt = doa1.split('Accepted ')[1];
 } if (accpt) {
var accpt = accpt.split(',')[0].trim();
var acceptanceDate = '<div><p>Acceptance date:</p><div contentEditable="true" style="color:blue;width:175px;border: solid 1px #808080;">' + accpt + '</div></div>';
} else if(doa2) { 
 doa2 = doa2.innerText;
 accpt = doa2.split('Manuscript accepted:')[1];
 } else if(doa3) { 
 doa3 = doa3.innerText;
 accpt = doa3.split(/Accepted:/)[1];  //.split(/publi/i)[0];
 if (accpt) { if (accpt.includes('P')) { accpt = accpt.split('P')[0] } else { accpt = accpt } } 
 else { accpt = '' }
 } if (accpt) {
var accpt = accpt.trim().split(/\n/)[0];
//var acc = Date.parse(accpt);
//accepted = acc.toISOString()
var acceptanceDate = '<div><p>Acceptance date:</p><div contentEditable="true" style="color:blue;width:175px;border: solid 1px #808080;">' + accpt + '</div></div>';
} else {
  var acceptanceDate = '';
}

var d2 = document.getElementsByName("citation_online_date");
var text = "";
var i;
for (i = 0; i < d2.length; i++) {
var date2 = text + '<div><p>Published online date:</p><div contentEditable="true" style="color:blue;width:175px;border: solid 1px #808080;">' + d2[i].content + '</div></div>';
}

var d3 = document.getElementsByName("citation_publication_date");
if(d3) {
var text = "";
var i;
for (i = 0; i < d3.length; i++) {
  var date3 = text + '<div><p>Publication date:</p><div contentEditable="true" style="color:blue;width:175px;border: solid 1px #808080;">' + d3[i].content + '</div></div>';
}} else {
  var date3 = '';
}

var doi1 = document.getElementsByName("citation_doi")[0];
var doi2 = document.getElementsByName("dc.Identifier")[0];
if (doi1 || doi2) {
var doi = doi1 || doi2;
  var DOI = '<div><p>DOI:</p><div contentEditable="true" style="color:blue;width:250px;border: solid 1px #808080;">' + doi.content + '</div></div>'; 
} else {
var DOI = ''; }

var jt1 = document.getElementsByName("citation_journal_title")[0];
if(jt1) {
var jt = jt1;
var journal = text + '<div><p>Journal:</p><div contentEditable="true" style="color:blue;width:400px;border: solid 1px #808080;">' + jt.content + '</div></div>';
}

var issn1='';var x = document.getElementsByName('citation_issn');for (i=0;i<x.length;i++){issn1=issn1+'<div><ul><div contentEditable="true" style="color:blue;width:200px;border: solid 1px #808080;">'+x[i].content+'</div></ul></div>';}
if(issn1) {ISSN='<p>ISSN:<table border=0 style=\'font:x-small verdana\'><tr><td>' + issn1+'</td></tr></table>';}
else {ISSN='';}

var volume = document.getElementsByName("citation_volume")[0];
if(volume) {
  vol = '<div><p>Volume:</p><div contentEditable="true" style="color:blue;width:250px;border: solid 1px #808080;">' + volume.content + '</div></div>';
} else {
  var vol = '';
}

var issue = document.getElementsByName("citation_issue")[0];
if(issue) {
iss = '<div><p>Issue:</p><div contentEditable="true" style="color:blue;width:250px;border: solid 1px #808080;">' + issue.content + '</div></div>';
} else {
  var iss = '';
}

var firstP = document.getElementsByName("citation_firstpage")[0];
if(firstP) {
var fp = '<div><p>First page:</p><div contentEditable="true" style="color:blue;width:250px;border: solid 1px #808080;">' + firstP.content + '</div></div>';
} else {
  var fp = '';
}
var lastP = document.getElementsByName("citation_lastpage")[0];
if(lastP) {
var lp = '<div><p>Last page:</p><div contentEditable="true" style="color:blue;width:250px;border: solid 1px #808080;">' + lastP.content + '</div></div>';
} else {
  var lp = '';
}
pp = '<p>Pagination:<table border=0 style=\'font:x-small verdana\'><tr><td>' + fp +'</td><td>' + lp +'</td></tr></table>';

var pub1 = document.getElementsByName("citation_publisher")[0];
var pub2 = document.getElementsByName("dc.Publisher")[0];
if(pub1 || pub2) {
var pub = pub1 || pub2;
var publisher = '<div><p>Publisher:</p><div contentEditable="true" style="color:blue;width:250px;border: solid 1px #808080;">' + pub.content + '</div></div>';
} else {
  var publisher = '';
} 

var txt = "<html><header><style></style></header><body><p>" + embargo + copyright + coversheet + txt2 + abstract + keywords + z + acceptanceDate + date2 + date3 + DOI + journal + ISSN + vol + iss + pp + publisher + "</p></body></html>"

var m = window.open('', 'm', '');
m.document.open();
m.document.write(txt);
m.document.close();