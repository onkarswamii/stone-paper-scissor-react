import { useState } from "react";

function App() {

const [playerMove , setPlayerMove] = useState("?");
const [computerMove , setComputerMove] = useState("?");

const [playerScore , setPlayerScore] = useState(0);
const [computerScore , setComputerScore] = useState(0);

const [winner , setWinner] = useState("");

const [rounds , setRounds] = useState(0);

const [history , setHistory] = useState([]);

const [streak , setStreak] = useState(0);



let generateComputerMove = ()=>{

let randomNumber = Math.random();

if(randomNumber < 0.33){
return "Rock";
}
else if(randomNumber < 0.66){
return "Paper";
}
else{
return "Scissor";
}

}



let handlePlayerMove = (move)=>{

setPlayerMove(move);

let computerChoice = generateComputerMove();

setComputerMove(computerChoice);



if(move === computerChoice){

setWinner("Draw");

setStreak(0);

}

else if(

(move==="Rock" && computerChoice==="Scissor") ||

(move==="Paper" && computerChoice==="Rock") ||

(move==="Scissor" && computerChoice==="Paper")

){

setWinner("You Win");

setPlayerScore(playerScore+1);

setStreak(streak+1);

}

else{

setWinner("Computer Wins");

setComputerScore(computerScore+1);

setStreak(0);

}

setRounds(rounds+1);

setHistory([...history , move + " vs " + computerChoice]);

}



let resetGame = ()=>{

setPlayerMove("?");

setComputerMove("?");

setPlayerScore(0);

setComputerScore(0);

setWinner("");

setRounds(0);

setHistory([]);

setStreak(0);

}



return(

<div style={{textAlign:"center"}}>

<h1>Stone Paper Scissor</h1>

<h2>Computer : {computerMove === "Rock" && "🪨"}
{computerMove === "Paper" && "📄"}
{computerMove === "Scissor" && "✂️"}
{computerMove}</h2>


<h2>You : {playerMove === "Rock" && "🪨"}
{playerMove === "Paper" && "📄"}
{playerMove === "Scissor" && "✂️"}
{playerMove}</h2>

<h2>Score</h2>

<h1>{playerScore} : {computerScore}</h1>

<h2>Winner : {winner}</h2>

<h3>Rounds : {rounds}</h3>

<h3>Win Streak : {streak}</h3>


<div>

<button 
onClick={()=>handlePlayerMove("Rock")}
style={{margin:"5px"}}
>
🪨 Rock

</button>

<button 
onClick={()=>handlePlayerMove("Paper")}
style={{margin:"5px"}}
>
📄 Paper
</button>

<button 
onClick={()=>handlePlayerMove("Scissor")}
style={{margin:"5px"}}
>
✂️ Scissor
</button>

<br/>

<button 
onClick={resetGame}
style={{marginTop:"10px"}}
>
Reset Game
</button>

</div>


<h3>Move History</h3>

{history.map((item,index)=>(
<p key={index}>{item}</p>
))}


</div>

);

}

export default App;