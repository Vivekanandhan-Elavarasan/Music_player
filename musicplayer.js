var song = /** @class */ (function () {
    function song(config) {
        this.songname = config.songname;
        this.singer = config.singer;
        this.url = config.url;
    }
    return song;
}());
var playlist = /** @class */ (function () {
    function playlist() {
        this.playlista = [];
    }
    playlist.prototype.addsong = function (newsonga) {
        this.playlista.push(newsonga);
        var i;
        for (i = (this.playlista.length - 1); i == (this.playlista.length - 1); i++) {
            var container = document.createElement("div");
            container.classList.add("container");
            var songn = document.createElement('div');
            songn.innerHTML = "Song Name :" + this.playlista[i].songname;
            container.appendChild(songn);
            var sin = document.createElement('div');
            sin.innerHTML = "Singer :" + this.playlista[i].singer;
            container.appendChild(sin);
            var audio = document.createElement('div');
            // audio.classList.add("container");
            audio.innerHTML = "<audio controls>\n        <source src=\"" + this.playlista[i].url + "\" type=\"audio/mpeg\">\n      Your browser does not support the audio element.\n      </audio>";
            container.appendChild(audio);
            document.body.appendChild(container);
            /* let audio = document.createElement('audio');
             let source = document.createElement("source");
             source.setAttribute("src",this.playlista[i].url)
             source.setAttribute("type","audio/mpeg")
             audio.appendChild(source);
             document.body.appendChild(audio);*/
        }
    };
    playlist.prototype.getsongdetails = function () {
        /* document.getElementById("demo").innerHTML = this.playlista[0].singer;
         document.getElementById("demo").innerHTML = this.playlista[0].songname;
         document.getElementById("demo").innerHTML = this.playlista[0].url;*/
    };
    return playlist;
}());
var playlistb = new playlist();
var createsong = function () {
    var newsong = new song({
        songname: document.getElementById("sname").value,
        singer: document.getElementById("singer").value,
        url: document.getElementById("url").value
    });
    playlistb.addsong(newsong);
    //alert(JSON.stringify(newsong));
    playlistb.getsongdetails();
};
