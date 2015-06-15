var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.reddit.com/r/MartialArts.json", true);
xhr.addEventListener("load", function() {
  var doc = JSON.parse(xhr.response);

  var content = document.getElementById("content-main");
  var setPath = doc.data.children;

    for (var i = 0; i <= setPath.length; i++) {
      var id = setPath[i].data.id;
      var ref = "/show.html?id=" + id + "/";

      var domain = setPath[i].data.domain;
      if (domain === "youtube.com") {
        var title = setPath[i].data.title;
          if (title.length > 150) {
             title = title.substr(0, 150) + "...";
           }
        var numComments = setPath[i].data.num_comments;
        var score = setPath[i].data.score;

        var a = document.createElement("a");
        a.href = ref;
          if (numComments === 1) {
            a.innerHTML = "<b>" + title + "</b>" + "<br><br> (" + numComments + " Comment, " + score + " points)";
          } else {
            a.innerHTML = "<b>" + title + "</b>" + "<br><br> (" + numComments + " Comments, " + score + " points)";
          }

        var tile = document.createElement("div");
        tile.appendChild(a);
        tile.className = "tile";
        document.body.insertBefore(tile, content);
      }
    }
});

xhr.send(null);
