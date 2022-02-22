// ! generate random number and print it by using console
let luckyNumber = Math.floor(Math.random() * 20) +1;
console.log(luckyNumber);




// todo----- some prefrences needed ?

let userInput = Number(0);
let score = 20;
let highScore = 0;

// todo-----function for luck number
function newLuck(){
    luckyNumber = Math.floor(Math.random() * 20) +1;
    console.log(luckyNumber)
    document.querySelector('body').style='background-color: #222;'
    // userInput =Number(0)
    userInput = document.querySelector('.guess').value="";
}

// document.querySelector('.guess').value = "0";

// ! functions starts here

document.querySelector('#check').addEventListener('click',
    function () {
        userInput = document.querySelector('.guess').value;

        // ! condition for win and replace the text with "you win"
        if (userInput == luckyNumber) {
            document.querySelector('.message').textContent = "YOU WIN";
            // document.querySelector('body').style.backgroundColor = '#146356';
            document.querySelector('body').setAttribute ("style" , "background-color: #146356; color: white;");

            // score++;
            highScore +=5;
            document.querySelector('.score').textContent =score;
            document.querySelector('.highscore').textContent =highScore;

            

        }else{
            if(userInput > luckyNumber){
                document.querySelector('.message').textContent = "Too High..."
                // document.querySelector('body').style='background-color: #222;'
            }
            if (userInput < luckyNumber){
                document.querySelector('.message').textContent = "Too Low..."
                // document.querySelector('body').style='background-color: #222;'
                document.querySelector('.message').style.color ="#41ffed"

            }
            
            score--;
            score = score;
            document.querySelector('.score').textContent =score;


        }if(userInput > 20){
                document.querySelector('.message').textContent = "Please enter a relevant Number"
                document.querySelector('.message').style.color="red"
            }if(0 >= userInput){
                document.querySelector('.message').textContent = "Please enter a relevant Number"
                document.querySelector('.message').style.color="red"
                // document.querySelector('body').style.backgroundColor="red"
                
            }
            // todo ======GAme OVer
            if(score==0){
                window.alert("Game Over To RESTART, First Refresh it.")
            }
        
    }
);

// ! functions for new random number
// document.querySelector('.again').addEventListener('click', 
//     function (){
    //         // let luckyNumber = Math.floor(Math.random() * 20) +1;
    //         // let newLuck=luckyNumber
    //         console.log(luckyNumber);
    //     }
    
    // );
    
    document.querySelector('.again').addEventListener('click',newLuck); 
