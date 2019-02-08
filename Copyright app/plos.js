var str = document.querySelector(".articleinfo").innerText;
var res = str.split("Copyright: ")[1].split(/\n/)[0];
var cr = res;
if (cr !== null) {
	var copyright = cr;
}

	var node1 = document.createElement("p");
	node1.id = "copyleft";	
	
	var text = document.createTextNode(copyright);
	node1.appendChild(text);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"
	
document.querySelector("h1#artTitle").appendChild(node1);

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });