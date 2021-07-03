let chiffre1 = "";
let resulta ="";
let operation = "";
let signe= "";


const allos = document.querySelectorAll(".nbb")
const aaa = document.querySelectorAll(".operande")
const resultats = document.getElementById("resultats")
const za = document.getElementById("+")

allos.forEach(
    (button)=>{
        button.addEventListener("click",(e)=>{
            

            //injection de texte
            resultats.textContent += e.target.id
            operation+= button.id;

            //reinitialisation avec CE
            if(button.id === "ce"){
                chiffre1 = "";
                operation= "";
                resultats.innerText= "";
                signe="";
                resulta="";
            }

            if(button.id === "+" || button.id ===  "/" || button.id === "-" || button.id === "*" ){
                signe=button.id ;
                chiffre1 = operation.slice(0,-1);
                operation = "";  
            }

            if(signe == "+"){resulta= parseInt(chiffre1) + parseInt(operation);}
            else if(signe == "/"){resulta= parseInt(chiffre1) / parseInt(operation);}
            else if(signe == "*"){resulta= parseInt(chiffre1) * parseInt(operation);}
            else if(signe == "-"){resulta= parseInt(chiffre1) - parseInt(operation);}

            console.log("chiffre :"+ chiffre1 + " signe :" + signe  + " chiffre II :"+  operation +"  resulta  "+ resulta)
            
        })
    }
)
start.addEventListener("click",()=>{
            resultats.innerText= resulta;
            operation= "";
            chiffre1 = "";
            signe="";
        
            allos.addEventListener("click",(e)=>{
                resulta=""
            })
        })