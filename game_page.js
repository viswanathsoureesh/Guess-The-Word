player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
player1score = 0;
player2score = 0;
document.getElementById("player1name").innerHTML = player1name + ":";
document.getElementById("player2name").innerHTML = player2name + ":";
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("playerquestion").innerHTML = "Question Turn-" + player1name;
document.getElementById("playeranswer").innerHTML = "Answer Turn-" + player2name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    c1 = word.charAt(1);
    length = Math.floor(word.length / 2);
    c2 = word.charAt(length);
    lengthminus = word.length - 1;
    c3 = word.charAt(lengthminus);
    removec1 = word.replace(c1, "_");
    removec2 = removec1.replace(c2, "_");
    removec3 = removec2.replace(c3, "_");
    question_word = "<h4 id='word_display'> Q. " + removec3 + "</h4>"; 
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
      row = question_word + input_box + check_button; document.getElementById("output").innerHTML = row;
       document.getElementById("word").value = "";
}
question="player1";
answerturn="player2";
function check(){
    get_ans=document.getElementById("input_check_box").value;
    answer=get_ans.toLowerCase();

    if (answer==word){
        if(answerturn=="player1"){
            player1score=player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        }
        else{
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
        }
    }
    if(question=="player1"){
        question="player2";
        document.getElementById("playerquestion").innerHTML="question turn-"+player2name;
    }
    else{
        question="player1";
        document.getElementById("playerquestion").innerHTML="question turn-"+player1name;
    }


    if(answerturn=="player1"){
         answerturn="player2";
        document.getElementById("playeranswer").innerHTML="answer turn-"+player2name;
    }
    else{
        answerturn="player1";
        document.getElementById("playeranswer").innerHTML="answer turn-"+player1name;
    }
    document.getElementById("output").innerHTML="";
}