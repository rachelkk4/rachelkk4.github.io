var modal = document.getElementById('vr-demo');
var btn = document.getElementById('vr-demo-btn');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	"use strict";
	modal.style.display = "none";
};

span.onclick = function() {
	"use strict";
	modal.style.display = "none";
};

window.onclick = function(event) {
	"use strict";
	if (event.target === modal) {
		modal.style.display = "none";
	}
};