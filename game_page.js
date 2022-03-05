player1_name=localStorage.getItem("Player1_name");
player2_name=localStorage.getItem("Player2_name");

player1_score=0;
player2_score=0;

document.getElementById("Player1_name").innerHTML=player1_name+" : ";
document.getElementById("Player2_name").innerHTML=player2_name+" : ";

document.getElementById("Player1_score").innerHTML=player1_score;
document.getElementById("Player2_score").innerHTML=player2_score;

document.getElementById("Player_question").innerHTML="Question Turn-"+player1_name;
document.getElementById("Player_answer").innerHTML="Answer Turn-"+player2_name;

function send()
{
    Number1=document.getElementById("number1").value;
    Number2=document.getElementById("number2").value;

    actual_answer=parseInt(Number1)*parseInt(Number2);
    console.log(actual_answer);

    question_Number="<h4>"+Number1+"X"+Number2+"</h4>";

    input= "<br>Answer : <input type='number' id='input_check_box'>";
    check1= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    document.getElementById("output").innerHTML=question_Number+input+check1;
    document.getElementById("number1").value="";

    document.getElementById("number2").value="";

}

question_turn="player1";
    answer_turn="player2";

    function check()
    {
        answer=document.getElementById("input_check_box").value;
       
        console.log("answerInLowerCase-"+answer);
        
        if(answer==actual_answer)
        {
        if(answer_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("Player1_score").innerHTML=player1_score;
        }

        else
        {
            player2_score=player2_score+1;
            document.getElementById("Player2_score").innerHTML=player2_score;
        }
    }

    if(question_turn=="player1")
    {
        question_turn=="player2";
        document.getElementById("Player_question").innerHTML="Question Turn-"+player2_name;
    }
    else
    {
        question_turn=="player1";
        document.getElementById("Player_question").innerHTML="Question Turn-"+player1_name;
    }

    if(answer_turn=="player1")
    {
        answer_turn=="player2";
        document.getElementById("Player_answer").innerHTML="answer Turn-"+player2_name;
    }
    else
    {
        answer_turn=="player1";
        document.getElementById("Player_answer").innerHTML="answer Turn-"+player1_name;
    }
    document.getElementById("output").innerHTML="";
    
    }