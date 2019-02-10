window.onload = function() {myFunction()};
function myFunction() {
if(document.URL.indexOf("#")==-1)
        {
            // Set the URL to whatever it was plus "#".
            url = document.URL+"#";
            location = "#";

            //Reload the page
            location.reload(true);
 
var doi = document.querySelector(".epub-doi").innerText;
            var tools = doi.replace("https://doi.org/","").replace("/","%2F");
			window.open("https://onlinelibrary.wiley.com/action/showCitFormats?doi=" + tools + "#");
		}

var str = document.querySelector("section.details").innerText;
res = str.trim().replace(/\n+/, "").replace(/Details/, "").replace(/\n.*\n.*\n/, " ");

var cr = res;
if (cr !== null) {
var copyright = cr;
}

	var node1 = document.createElement("p");
	node1.id = "copyleft";
	
	var DOI = document.querySelector(".epub-doi").innerText;
	
	var cite = localStorage.fullCite;
    console.log("CITATION: " + cite);

	var text1 = document.createTextNode(copyright + " This is the peer reviewed version of the following article: " + cite + ", which has been published in final form at " + DOI +". This article may be used for non-commercial purposes in accordance with Wiley Terms and Conditions for Self-Archiving. Uploaded in accordance with the publisher's self-archiving policy.");
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"

	var h = document.querySelector(".citation__title");
    h.insertBefore(node1, h.childNodes[0]);

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });		
}
