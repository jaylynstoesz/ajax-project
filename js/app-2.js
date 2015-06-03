function parse () {
  var output = {};
  var replaceChars = loc.replace("?", "");
  var strings = replaceChars.split("/");
    for (var i = 0; i < 1; i++) {
      var pair = strings[i].split("=");
      var key = pair[0];
      var value = pair[1];
      output[key] = value;
    };
    output["urlName"] = name;
  return output;
};

var loc = document.location.search;
var site = parse(loc);

var xhr = new XMLHttpRequest();

xhr.open("GET", "http://www.reddit.com/r/martialarts/comments/" + site.id + "/.json", true);
xhr.addEventListener("load", function() {
  var doc = JSON.parse(xhr.response);
  var content = document.getElementById("content-main");
    for (var i = 0; i < 1; i++) {

    var preStuff = doc[0].data.children[0].data;
    var titles = preStuff.title;
    var header = document.getElementById("header");
    header.innerHTML = titles;
  };



});

xhr.send(null);
