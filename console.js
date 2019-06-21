var url = "https://gist.githubusercontent.com/TimeTraveller-San/8ec2325e47f3168b8a37f6eb009a7923/raw/dba7a4f44ce394af0cbf2c33eb968add599de5c7/aaa_data.json"
$(document).ready(function() {
  document.getElementsByClassName("commands")[0].value="";
  $.getJSON(url, function(mydata) {
    $(document).on("click","#show_all",function() {
      all();
      fixscroll();
     });
    var firstenter=0;
    $(document).keyup(function(event) {
        if ($(".commands").is(":focus") && event.key == "Enter") {
          blink=0;
          firstenter=1;
          if(firstenter==0){
            //document.getElementById("console").innerHTML="";
          }
          var command = document.getElementsByClassName("commands")[0].value;
          document.getElementsByClassName("commands")[0].value="";

          // alert(mydata)
          // alert(command)
          // alert(command in mydata)
          if(command == "clear"){
            fixscroll();
            clear();
          }
          else if(command == "theme pink-skin"){
            change_theme("pink-skin");
          }
          else if(command == "theme dark-gold"){
            change_theme("dark-gold");
          }
          else if(command == "all"){
            fixscroll();
            all();
          }
          else if(command == "oh no"){
            easter_egg();
          }
          else if(command in mydata){
            print_console(command, mydata)
          }
          else{
            print_console("error", mydata)
          }

        }
    });
  });
});

function fixscroll(){
  $("#console").animate({ scrollTop: $('#console').prop("scrollHeight")}, 1000);
}

function help(){
  document.getElementById("console").innerHTML+="<span class=cname>    help:<br></span>"
  document.getElementById("console").innerHTML+="<p><span class=“c_color”>help:</span> Displays the lists of commands.<br><span class=“c_color”>all:</span> Displays all the information in a graphical format.<br><span class=“c_color”>info:</span> Displays my personal information.<br><span class=“c_color”>version:</span> shows the current version of this console.<br><span class=“c_color”>skills:</span> Displays my skills.<br><span class=“c_color”>hobbies:</span> Displays my hobbies.<br><span class=“c_color”>contact:</span> write me a mail.<br><span class=“c_color”>portfolio:</span> Displays my designing portfolio<br><span class=“c_color”>close:</span> close this console<br><span class=“c_color”>play:</span> plays one of my favorite music<br><span class=“c_color”>anime:</span> Displays myanimelist<br><span class=“c_color”>clear:</span> Clear console</p>";
}

function clear(){
  document.getElementById("console").innerHTML="";
}

function make_title(key){
  return "<span class=cname>" + key + "</span>"
}


function print_console(command, mydata){
  fixscroll()
  var keys = Object.keys(mydata[command]);
  data = ""
  for(var i=0; i<keys.length; i++){
      var key = keys[i];
      data += make_title(key) + " : " + mydata[command][key] + "<br>"
  }
  document.getElementById("console").innerHTML+="<span class=hcname>" + command + ":</span>";
  document.getElementById("console").innerHTML+="<p>" + data + "<\p>";
}


function easter_egg(){
  fixscroll();
  document.getElementById("console").innerHTML += "<img src=\"https://i.imgur.com/5I7gesN.jpg\" height=\"500\"></img><br><br>";
}

function info(mydata){
  var keys = Object.keys(mydata.info);
  data = ""
  for(var i=0; i<keys.length; i++){
      var key = keys[i];
      data += make_title(key) + " : " + mydata.info[key] + "<br>"
  }
  document.getElementById("console").innerHTML+="<span class=hcname>info:</span>";
  document.getElementById("console").innerHTML+="<p>" + data + "<\p>";
}

function contact(mydata){
  document.getElementById("console").innerHTML+="<span class=cname>    contact:<br></span>";
  document.getElementById("console").innerHTML+="<p><span class=“c_color”>Discord: </span>Time Traveller#8305<br><span class=“c_color”>Email: </span>tt_mail@dr.com<br></p>";
}
function version(mydata){
  document.getElementById("console").innerHTML+="<span class=cname>    version:<br></span>";
  document.getElementById("console").innerHTML+="<p><span class=“c_color”>Version #: </span>v1.0<br><span class=“c_color”>Developed by: </span>TimeTraveller<br></p>";

}
function skills(){
  document.getElementById("console").innerHTML+="<span class=cname>    skills:<br></span>";
  document.getElementById("console").innerHTML+="<p><span class=“c_color”>Graphics Designing: </span>I post some of my work here: <a href=\"\">Behance<a><br><span class=“c_color”>Development: </span>I don't really use it as of now: <a href=\"\">Github<a><br></p>";
}

function anime(){
  document.getElementById("console").innerHTML+="<span class=cname>    anime:<br></span>";
  document.getElementById("console").innerHTML+="<p>My anime list: It's almost regulary updated <a href=\"https://myanimelist.net/animelist/Time_Traveller\">MyAnimeList<a><br></p>";
}
function all(){
  $.getJSON(url, function(mydata) {
    var html = "<div id=\"wrapper\">";
    for(var key in mydata){
      var data = ""
      if(key=="error" || key=="help" || key=="theme")
        continue
      if(key=="info"){
        data += "<div id=box>";
        data += "<h1>"+key+"</h1><hr>";
        data += "<img src=avatar.png><br><br><br><br><br>"
        for(var ikey in mydata[key]){
          data += "<p><span class=golden> "+ikey+" : </span>"+mydata[key][ikey]+"</p>"
        }
        data+="</div>";
      }
      else{
        data += "<div id=box>";
        data += "<h1>"+key+"</h1><hr>";
        for(var ikey in mydata[key]){
          data += "<p><span class=golden>"+ikey+" : </span>"+mydata[key][ikey]+"</p>"
        }
        data+="</div>";

      }
      html+=data
    }
    html += "<br></div>"

    // var all_content="<div id=\"wrapper\"> <div id=box> <h1>Personal Information</h1> <hr> <img src=avatar.png><br><br><br><br><br> <p><span class=golden>Name:</span> Time Traveller</p> <p><span class=golden>Age:</span> 19</p> <p><span class=golden>Location:</span> India</p> <p><span class=golden>Sex:</span> Male</p> </div> <div id=box> <h1>Skills</h1> <hr> <p><span class=golden>Web:</span> Experienced in Javascript, jquery, HTML, CSS, SQL and basic AJAX.</p> <p><span class=golden>Languages:</span> C++, Python, basic c#.</p> <p><span class=golden>Graphic Designing:</span> 4+ years of experience with After Effects, 2+ years of experience in making posters, logos, flexes and other graphics.</p> <p><span class=golden>OS: </span>Ricing, package management, basic bash scripting.</p> </div> <div id=box> <h1>Projects</h1> <hr> <p><span class=golden>Work1:</span> Lorem Ipsum.</p> <p><span class=golden>Work2:</span> Lorem Ipsum.</p> <p><span class=golden>Work3:</span> Lorem Ipsum..</p> </div> <div id=box> <h1>Contact</h1> <hr> <p><span class=golden>Discord:</span> Time Traveller#8305</p> <p><span class=golden>Mail:</span> tt_mail@dr.com</p> </div> <div id=box> <h1>Hobbies</h1> <hr> <p>Anime</p> <p>Video Games</p> <p>Music- Vaporwave, Lofi-hiphop, rock, dubstep.</p> <p>Reading philosophy</p> <p>Manga</p> <p>Linux, Free software, ricing</p> </div> <div id=box> <h1>Misc</h1> <hr> <p>\”You have power over your mind - not outside events. Realize this, and you will find strength\” <span class=golden> ― Marcus Aurelius, Meditations </span></p> </div> <br></div>"
    document.getElementById("console").innerHTML+="<span class=cname>    all:<br></span>";
    document.getElementById("console").innerHTML+=html;
  });
}

function change_theme(theme){
  fixscroll();
  document.getElementById("console").innerHTML+="<p> Theme changed to: " + theme + "<\p>";
  fixscroll();
  if(theme=="pink-skin"){
    document.documentElement.style.setProperty('--main-bg-color', '#585153');
    document.documentElement.style.setProperty('--second-bg-color', '#e4dccf');
    document.documentElement.style.setProperty('--console-bg-color', 'rgb(80, 74, 75)');
    document.documentElement.style.setProperty('--secondary-color', '#e4dccf');
    document.documentElement.style.setProperty('--footer-background-color', 'rgb(80, 74, 75)');
    document.documentElement.style.setProperty('--table-bg-color', '#383832');
  }
  if(theme=="dark-gold"){
    document.documentElement.style.setProperty('--main-bg-color', '#0E1111');
    document.documentElement.style.setProperty('--second-bg-color', '#F5D76E');
    document.documentElement.style.setProperty('--console-bg-color', '#323435');
    document.documentElement.style.setProperty('--secondary-color', '#F5D76E');
    document.documentElement.style.setProperty('--footer-background-color', '#151617');
    document.documentElement.style.setProperty('--table-bg-color', '#383832');
  }

}
