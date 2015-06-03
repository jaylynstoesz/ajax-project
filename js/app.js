var button = document.getElementById("button");

var xhr = new XMLHttpRequest("button");

xhr.open("GET", "http://www.reddit.com/r/MartialArts.json", true);
xhr.addEventListener("load", function() {
  var doc = JSON.parse(xhr.response);
  var content = document.getElementById("content-main")
  var preStuff = doc.data.children;

    for (var i = 0; i <= preStuff.length; i++) {
      var id = preStuff[i].data.id;
      var ref = "/show.html?id=" + id + "/";

      var titles = preStuff[i].data.title;
      var a = document.createElement("a");
      a.innerHTML = titles;
      a.href = ref;
      var score = preStuff[i].data.score;
      var author = preStuff[i].data.author;
      var numComments = preStuff[i].data.num_comments;

      var newP = document.createElement("div");
      newP.appendChild(a);
      var newContent = document.createElement("div");
      newContent = document.createTextNode("Posted by: " + author + "  -  Score: " + score + "  -  Comments: " + numComments);
      newP.appendChild(newContent);
      document.body.insertBefore(newContent, content);
      document.body.insertBefore(newP, newContent);
    };

});

xhr.send(null);
