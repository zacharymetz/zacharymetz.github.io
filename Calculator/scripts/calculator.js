//  the flags for the calculator 
var initalizedZero = true;    //  when the equals sign is hit it puts a 0 in the current equation holdler 
                              //  and if another number is pressed then replace it but if its a period then just add it
var openParentheses = 0;

/*
  Hold all the logic of adding stuff to the equation and what is allowed and its formatting such as spaces 
  and if possible 
*/
function addToEquaton(c){
  
  var equation = $("#equaltion-holder").html();
  if(c == "."){  //  if the char is a period
    //  if its an inital zero then just add the period 
    if(initalizedZero){
      initalizedZero = false;
      $("#equaltion-holder").append(c);
      return true;
    }
    // check to see that the last put down symbol is a number 
    //if the last thing is a . dont add it 
    if(equation.charAt(equation.length-1) == c){
      return false;
    }
    if(!isNaN(parseInt(equation.charAt(equation.length-1), 10))){
      // now got backwards unti we hit a white space and if we hit a period first then we cannot add the . to it 
      // and make sure we are not at the end of the string
      console.log("asdasdasd");
      //  have a for loop going backwards 
      for(var i=equation.length;i>0;i--){
        console.log(equation.charAt(i-1));
        if(equation.charAt(i-1) == '.'){
          console.log("yeet");
          return false;
        }else{
          if(isNaN(parseInt(equation.charAt(i-1), 10))){

            $("#equaltion-holder").append(c);
            return true;
          }
        }

      }

      //  if we got here then it is an integer already so we can add it without white space 
      $("#equaltion-holder").append(c);
      return true;
    }
  }
  //  check if it is an operator or a number char 
  if(isNaN(parseInt(c, 10))){
    // since its an operator like () or /,+,*,- we need to see if 
  if(c == "("){ //  incriment the counter of unopend parenthases 
      if(initalizedZero){ //  do an initalized zerop check
          initalizedZero = false;
          $("#equaltion-holder").html("");
      }
        openParentheses++;
        renderGhostParentheses();
        //  we should return here 
        $("#equaltion-holder").append(" ");
        $("#equaltion-holder").append(c);
        return true;
      }
      
      if(c == ")" ){ //  only allow if therte are open parenthases
      
        if(openParentheses > 0){
          openParentheses--;
          renderGhostParentheses();
        }else{
          //  invalid add 
          return false;
        }
      }
    //  if there is an operator or a period we cannot one of the following : /,+,*,-,) becasue they need a number or (
    //  after them
    if(["/","+","*","-","."].indexOf(equation.charAt(equation.length-1)) == -1){
      $("#equaltion-holder").append(" ");
      $("#equaltion-holder").append(c);
      return true;
    }
    
    // restriction in closing not on opening 

  }else{
    //  since we are adding a number it would be bad form to leave the 0
    if(initalizedZero){
      initalizedZero = false;
      $("#equaltion-holder").html("");
    }


    //  it is a number check if there is a number currently there or a period to see if you should add white space 
  console.log(c);
    if(equation.slice(-1) != "." && isNaN(parseInt(equation.charAt(equation.length-1), 10)) ){
      //  preform a check here to see if its an opening parenthases 
      $("#equaltion-holder").append(" ");
    }
    $("#equaltion-holder").append(c);
    return true;
  }
  return false;
}
//  if the string is grater than 1 remove the character and the 
//  subsequent space 
//  aslo if string is empty at the end initalize the 0 
function backspace(){
  var equation = $("#equaltion-holder").html();
  if(equation.length > 0){
    //  remove the character 
    equation = equation.slice(0,-1);
    if(equation.charAt(equation.length-1) == " "){
      // remove the space 
      equation = equation.slice(0,-1);
    }
    //  now check to see if we should throug an inialized 0 in there 
    if(equation.length == 0){
      $("#equaltion-holder").html("0");
    initalizedZero = true;
    openParentheses = 0;
    renderGhostParentheses();
    }else{
      $("#equaltion-holder").html(equation);
    }
  }
}

function renderGhostParentheses(){
  //just add the ) to eh ghost holder 
  $("#equaltion-holder-ghost").html("");
  for(var i=0;i<openParentheses;i++){
    $("#equaltion-holder-ghost").append(" )");
  }
  return;

}
/* Set up for all the button event listeners*/
$(document).ready(function(){
  $("#calc-btn-par-open").click(function(){
    addToEquaton("(");
  });
  $("#calc-btn-par-close").click(function(){
    addToEquaton(")");
  });
  $("#calc-btn-c").click(function(){
    $("#equaltion-holder").html("0");
    initalizedZero = true;
    openParentheses = 0;
    renderGhostParentheses();
  });
  $("#calc-btn-ce").click(function(){
   backspace();
  });

  $("#calc-btn-9").click(function(){
   addToEquaton("9");
  });
  $("#calc-btn-8").click(function(){
    addToEquaton("8");
  });
  $("#calc-btn-7").click(function(){
    addToEquaton("7");
  });
  $("#calc-btn-6").click(function(){
    addToEquaton("6");
  });
  $("#calc-btn-5").click(function(){
    addToEquaton("5");
  });
  $("#calc-btn-4").click(function(){
    addToEquaton("4");
  });
  $("#calc-btn-3").click(function(){
    addToEquaton("3");
  });
  $("#calc-btn-2").click(function(){
    addToEquaton("2");
  });
  $("#calc-btn-1").click(function(){
    addToEquaton("1");
  });
  $("#calc-btn-0").click(function(){
    addToEquaton("0");
  });

  $("#calc-btn-div").click(function(){
    initalizedZero = false;
    addToEquaton("/");
  });
  $("#calc-btn-mul").click(function(){
    initalizedZero = false;
    addToEquaton("*");
  });
  $("#calc-btn-min").click(function(){
    initalizedZero = false;
    addToEquaton("-");
  });
  $("#calc-btn-add").click(function(){
    initalizedZero = false;
    addToEquaton("+");
  });

  $("#calc-btn-equals").click(function(){
    // tru to evealuate it and if exception its a error 
    try {
      if(eval($("#equaltion-holder").html()) == 0){
        initalizedZero = true;
      }
      $("#equaltion-ans").html($("#equaltion-holder").html() + " = " +eval($("#equaltion-holder").html()));
    }
    catch(error) {
      $("#equaltion-ans").html($("#equaltion-holder").html() + " = Error");
    }
    $("#equaltion-holder").html(eval($("#equaltion-holder").html()));
    openParentheses = 0;
    renderGhostParentheses();
  });
  $("#calc-btn-period").click(function(){
    addToEquaton(".");
  });
});