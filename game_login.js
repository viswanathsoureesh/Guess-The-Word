function Adduser(){
    player1name=document.getElementById("player1_name_input").value;
    player2name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1name",player1name);
    localStorage.setItem("player2name",player2name);
    window.location="game_page.html";
}