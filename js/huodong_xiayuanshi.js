function move() {
	for (i = 1; i <= 10; i++)
		eval("div" + i).style.top = gettop();
}

function gettop() {
	var t = String(Math.floor(Math.random() * (document.body.clientHeight / 2))) + "px";
	return (t);
}

function vision() {
	for (i = 1; i <= 10; i++)
		eval("div" + i).style.visibility = "visible";
}

function start() {
	setInterval("move()", 1000);
	vision();
}
for (i = 1; i <= 10; i++) {
	var p = Math.floor(Math.random() * 5) + 9 * (i - 1);
	document.write("<div id=\"div" + i + "\" style=\"position:absolute;top:-30px;left:" + p +
		"%;width:21;height:21;visibility:hidden;\"><dd><img src=\"\./img/1.png\" WIDTH=\"21\" HEIGHT=\"29\"></dd></div>"
		);
}