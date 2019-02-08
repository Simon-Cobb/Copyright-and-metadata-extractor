window.onload = function() {myFunction()};
function myFunction() {
if(document.URL.indexOf("#")==-1)
        {
            // Set the URL to whatever it was plus "#".
            url = document.URL+"#";
            location = "#";

            //Reload the page
            location.reload(true);

        }

var x = document.querySelector("#pb-page-content > div > div.pageBody.hub-page-body > div > div > div.container > div > div > div.citation-content.gutterless--xs.gutterless--sm.gutterless--md.col-md-8 > div:nth-child(2)").innerText;
var citation = x.trim().replace("How to cite","").replace(/doi:.+/,"").replace(/https:\/\/doi.+/,"").replace(/\n/,"").trim();
localStorage.setItem("fullCite", citation);
var cite = localStorage.fullCite;
    console.log("CITATION: " + cite);
	window.close();
}			
			