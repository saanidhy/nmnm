function next_page(){
    p_2=document.getElementById("p2").value;
    p_1=document.getElementById("p1").value;
    window.location="index2.0.html";
    localStorage.setItem("player 1:" , p_1);
    localStorage.setItem("player 2:" , p_2);
}
