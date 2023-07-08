function login(){
    if(document.form1.txt1.value==="" || document.form1.txt2.value===""){
        document.getElementById('error').style.display="block";
        document.getElementById('error').style.color="red";
        document.getElementById('email').style.border="1px solid red";
        document.getElementById('m-pass').style.border="1px solid red";
        document.getElementById('eye').style.display="block"
        document.getElementById('eyec').style.display="none"
        document.getElementById('eyeo').style.display="none"
        document.getElementById('errorico').style.display="block";
        document.getElementById('errorico').style.color="red";
    }
    else{
        var c =true
        if(c){
            if(document.form1.txt1.value==="admin123@gmail.com" && document.form1.txt2.value==="adminadmin"){
                document.getElementById('log').setAttribute("href","home.html");
                c = true;
            }
        }
        else{
            document.getElementById('log').setAttribute("href","###-");
            c = false;
        }
    }
}
function show(){
    if(document.form1.txt2.value !== ""){
        document.getElementById('eye').style.display="block"
        document.getElementById('errorico').style.display="none";
    }
    if(document.form1.txt2.value === ""){
        document.getElementById('eye').style.display="none"
    }
}
var stat = false;
function seye(){
    if(stat){
        document.getElementById('pass').setAttribute("type","password");
        stat = false;
    }
    else{
        document.getElementById('pass').setAttribute("type","text");
        stat = true;
    }
}
function eyc(){
    document.getElementById('eyec').style.display="none"
    document.getElementById('eyeo').style.display="block"
}
function eyo(){
    document.getElementById('eyeo').style.display="none"
    document.getElementById('eyec').style.display="block"
}