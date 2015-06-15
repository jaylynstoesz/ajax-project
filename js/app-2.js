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






    for (var i = 0; i < 1; i++) {
    var preStuff = doc[0].data.children[0].data;
    var titles = preStuff.title;
    var header = document.getElementById("header");
    header.innerHTML = titles;
    content.innerHTML = preStuff.selftext;
  }

  var commentsSecLength = doc[1].data.children.length;
  for (var j = 0; j < commentsSecLength; j++) {
    var comments = doc[1].data.children[j].data.body;

    var newDiv = document.createElement("div");
    var newDivCon = document.createTextNode(comments);
    newDiv.appendChild(newDivCon);
    var commentsSection = document.getElementById("comments-section");
    document.body.insertBefore(newDiv, commentsSection);
    console.log(commentsSection);

  }
  var vidSource = doc[0].data.children[0].data.url;
  var parsedVid = vidSource.split("v=")[1];
  console.log(parsedVid);






  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '390',
      width: '640',
      videoId: parsedVid,
    });
  }
});

xhr.send(null);
