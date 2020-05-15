interface songconfig{
    songname:string;
    singer:string;
    url: string;
}

class song{
    songname:string;
    singer: string;
    url: string;

    constructor(config:songconfig){
        this.songname = config.songname;
        this.singer = config.singer;
        this.url = config.url;
    }

    

}

class playlist{
    playlista:song[]=[];
    addsong(newsonga:songconfig){
        this.playlista.push(newsonga);
        let i:number;
        for(i=(this.playlista.length-1);i==(this.playlista.length-1);i++){
        let container= document.createElement("div");
        container.classList.add("container");
        let songn = document.createElement('div');
        songn.innerHTML = "Song Name :"+this.playlista[i].songname;
        container.appendChild(songn);
        let sin = document.createElement('div');
        sin.innerHTML = "Singer :"+this.playlista[i].singer;
        container.appendChild(sin);
        let audio = document.createElement('div');
       // audio.classList.add("container");
        audio.innerHTML = `<audio controls>
        <source src="${this.playlista[i].url}" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio>`
      container.appendChild(audio);
      document.body.appendChild(container);
       /* let audio = document.createElement('audio');
        let source = document.createElement("source");
        source.setAttribute("src",this.playlista[i].url)
        source.setAttribute("type","audio/mpeg")
        audio.appendChild(source);
        document.body.appendChild(audio);*/

        }
      
    }

    getsongdetails(){
       /* document.getElementById("demo").innerHTML = this.playlista[0].singer;
        document.getElementById("demo").innerHTML = this.playlista[0].songname;
        document.getElementById("demo").innerHTML = this.playlista[0].url;*/
    }
}
let playlistb = new playlist();
let createsong = () =>{
let newsong = new song({
    songname:(<HTMLInputElement>document.getElementById("sname")).value as string,
    singer:(<HTMLInputElement>document.getElementById("singer")).value as string,
    url:(<HTMLInputElement>document.getElementById("url")).value as string
});


playlistb.addsong(newsong);
//alert(JSON.stringify(newsong));
playlistb.getsongdetails();
}

