var commands = ["!help","!info_p","!info_c","!version","!skills","!hobbies","!contact","!work","!portfolio","!close","!play","!anime"];
$(document).ready(function() {
  document.getElementsByClassName("commands")[0].value=">";
  var firstenter=0;
  $(document).keyup(function(event) {
      if ($(".commands").is(":focus") && event.key == "Enter") {
        blink=0;
        firstenter=1;
        if(firstenter==0){
          //document.getElementById("console").innerHTML="";
        }
        var command=document.getElementsByClassName("commands")[0].value;
        document.getElementsByClassName("commands")[0].value=">";
        if(command[0]==">"){
          command=command.slice(1,);
        }
        switch (command) {
            case "!help":
                    fixscroll();
                    help();
                    break;
           case "!clear":
                    fixscroll();
                    clear();
                    break;
          case "!info":
                    fixscroll();
                    info();
                    break;
          case "!contact":
                    fixscroll();
                    contact();
                    break;
          case "!version":
                    fixscroll();
                    version();
                    break;
          case "!skills":
                    fixscroll();
                    skills();
                    break;
        case "!close":
                    fixscroll();
                    close();
                    break;
        case "!anime":
                    fixscroll();
                    anime();
                    break;
        case "!gui":
                    fixscroll();
                    gui();
                    break;

            default:
                fixscroll();
                document.getElementById("console").innerHTML+="<br><p class=\"test\">Invalid command \""+command+"\". <br>Enter !help to display a list of valid commands</p>";
                break;
        }
      }
  });
});

function fixscroll(){
  $("#console").animate({ scrollTop: $('#console').prop("scrollHeight")}, 1000);
}

function help(){
  document.getElementById("console").innerHTML+="<span class=cname>    !help:<br></span>"
  document.getElementById("console").innerHTML+="<p><span class=“c_color”>!help:</span> Displays the lists of commands.<br><span class=“c_color”>!gui:</span> Displays all the information in a graphical format.<br><span class=“c_color”>!info:</span> Displays my personal information.<br><span class=“c_color”>!version:</span> shows the current version of this console.<br><span class=“c_color”>!skills:</span> Displays my skills.<br><span class=“c_color”>!hobbies:</span> Displays my hobbies.<br><span class=“c_color”>!contact:</span> write me a mail.<br><span class=“c_color”>!portfolio:</span> Displays my designing portfolio<br><span class=“c_color”>!close:</span> close this console<br><span class=“c_color”>!play:</span> plays one of my favorite music<br><span class=“c_color”>!anime:</span> Displays myanimelist<br><span class=“c_color”>!clear:</span> Clear console</p>";
}

function clear(){
  document.getElementById("console").innerHTML="";
}

function info(){
  document.getElementById("console").innerHTML+="<span class=cname>    !info:<br></span>";
  document.getElementById("console").innerHTML+="<p>Name: TimeTraveller<br>Age: 19<br>Sex: Male<br>Location: India";
}

function contact(){
  document.getElementById("console").innerHTML+="<span class=cname>    !contact:<br></span>";
  document.getElementById("console").innerHTML+="<p><span class=“c_color”>Discord: </span>Time Traveller#8305<br><span class=“c_color”>Email: </span>tt_mail@dr.com<br></p>";
}
function version(){
  document.getElementById("console").innerHTML+="<span class=cname>    !version:<br></span>";
  document.getElementById("console").innerHTML+="<p><span class=“c_color”>Version #: </span>v1.0<br><span class=“c_color”>Developed by: </span>TimeTraveller<br></p>";

}
function skills(){
  document.getElementById("console").innerHTML+="<span class=cname>    !skills:<br></span>";
  document.getElementById("console").innerHTML+="<p><span class=“c_color”>Graphics Designing: </span>I post some of my work here: <a href=\"\">Behance<a><br><span class=“c_color”>Development: </span>I don't really use it as of now: <a href=\"\">Github<a><br></p>";
}
function close(){
  window.close();
}
function anime(){
  document.getElementById("console").innerHTML+="<span class=cname>    !anime:<br></span>";
  document.getElementById("console").innerHTML+="<p>My anime list: It's almost regulary updated <a href=\"https://myanimelist.net/animelist/Time_Traveller\">MyAnimeList<a><br></p>";
}
function gui(){
  var gui_content="<div id=\"wrapper\"> <div id=box> <h1>Personal Information</h1> <hr> <img src=avatar.png><br><br><br><br><br> <p><span class=golden>Name:</span> Time Traveller</p> <p><span class=golden>Age:</span> 19</p> <p><span class=golden>Location:</span> India</p> <p><span class=golden>Sex:</span> Male</p> </div> <div id=box> <h1>Skills</h1> <hr> <p><span class=golden>Web:</span> Experienced in Javascript, jquery, HTML, CSS, SQL and basic AJAX.</p> <p><span class=golden>Languages:</span> C++, Python, basic c#.</p> <p><span class=golden>Graphic Designing:</span> 4+ years of experience with After Effects, 2+ years of experience in making posters, logos, flexes and other graphics.</p> <p><span class=golden>OS: </span>Ricing, package management, basic bash scripting.</p> </div> <div id=box> <h1>Projects</h1> <hr> <p><span class=golden>Work1:</span> Lorem Ipsum.</p> <p><span class=golden>Work2:</span> Lorem Ipsum.</p> <p><span class=golden>Work3:</span> Lorem Ipsum..</p> </div> <div id=box> <h1>Contact</h1> <hr> <p><span class=golden>Discord:</span> Time Traveller#8305</p> <p><span class=golden>Mail:</span> tt_mail@dr.com</p> </div> <div id=box> <h1>Hobbies</h1> <hr> <p>Anime</p> <p>Video Games</p> <p>Music- Vaporwave, Lofi-hiphop, rock, dubstep.</p> <p>Reading philosophy</p> <p>Manga</p> <p>Linux, Free software, ricing</p> </div> <div id=box> <h1>Misc</h1> <hr> <p>\”You have power over your mind - not outside events. Realize this, and you will find strength\” <span class=golden> ― Marcus Aurelius, Meditations </span></p> </div> <br></div>"
  document.getElementById("console").innerHTML+="<span class=cname>    !gui:<br></span>";
  document.getElementById("console").innerHTML+=gui_content;
}
