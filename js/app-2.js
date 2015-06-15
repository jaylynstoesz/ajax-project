var loc = document.location.search;
function parse () {
  var output = {};
  var replaceChars = loc.replace("?", "");
  var strings = replaceChars.split("/");
    for (var i = 0; i < 1; i++) {
      var pair = strings[i].split("=");
      var key = pair[0];
      var value = pair[1];
      output[key] = value;
    }
    output.urlName = name;
  return output;
}
var site = parse(loc);


var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.reddit.com/r/martialarts/comments/" + site.id + "/.json", true);
xhr.addEventListener("load", function() {
  var doc = JSON.parse(xhr.response);
  var content = document.getElementById("content-main");
  var commentsSection = document.getElementById("comments-section");

////// header/title
    for (var i = 0; i < 1; i++) {
    var preStuff = doc[0].data.children[0].data;
    var titles = preStuff.title;
    var header = document.getElementById("header");
    header.innerHTML = titles;
    content.innerHTML = preStuff.selftext;
  }

////// parse to get yt ID
  var vidSource = doc[0].data.children[0].data.url;
  var parsedVid = vidSource.split("v=")[1];
  console.log(parsedVid);

///// create iframe element
  var iFrame = document.createElement("iframe");
    iFrame.height = 420;
    iFrame.src = "https://www.youtube.com/embed/" + parsedVid;

    var ytplayer = document.getElementById("ytplayer");
    ytplayer.appendChild(iFrame);

////comments section
  var commentsSecLength = doc[1].data.children.length;
  for (var j = 0; j < commentsSecLength; j++) {
    var comments = doc[1].data.children[j].data.body;

    var entry = document.createElement("div");
    entry.className = "entry";
    var thread = document.createTextNode(comments);
    entry.appendChild(thread);
    document.body.insertBefore(entry, commentsSection);
  }

});

xhr.send(null);
