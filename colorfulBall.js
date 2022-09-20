
  var ball = document.getElementById("ball1");
  var velocity = 1;
  var positionX = 0;
  var positionY = 0;
  var reverse1 = false;
  var reverse2 = false;
  var interval = 1;
  var color1 = 'red'
  var color2 = 'cyan'
  var color3 = 'blue'
  var color4 = 'green'
  var color5 = 'yellow'
  var color6 = 'purple'
  var counter = 0;
  var resetCounter = true;
  var color = "black"

// COLOR NUMBER COUNTER
function colorCount(){
  if (resetCounter === false){
    do{
       console.log(counter)
       counter = counter + 1;
    }while
       (counter < 1);
       console.log("counter: " + counter);
  }else{
    counter = 0;
  }
  if (counter > 6 || counter === 0){
   resetCounter = !resetCounter;
  }
}
setInterval(colorCount, 1000);

// COLOR1
  function selCount1(){ 
    if (count = 1){
      color = color1
      console.log("color1");
    }
  }
  setInterval(selCount1, 2000);

// COLOR2
  function selCount2(){
    if (count = 2){
      color = color2
      console.log("color2");
    }
  }
  setInterval(selCount2, 3000);

// COLOR3 
  function selCount3(){
    if (count = 3){
      color = color3
      console.log("color3");
    }
  }
  setInterval(selCount3, 4000);

// COLOR4
  function selCount4(){
    if (count = 4){
      color = color4
      console.log("color4");
    }
  }
  setInterval(selCount4, 5000);

// COLOR5
  function selCount5(){
    if (count = 5){
      color = color5
      console.log("color5");
    }
  }
  setInterval(selCount5, 6000);

// COLOR6
  function selCount6(){
    if (count = 6){
      color = color6
      console.log("color6");
    }
  }
  setInterval(selCount6, 7000);

  // MOVING BALL
  function moveBall() {
    var Xmin = 0;
    var Xmax = 550;
    var Ymin = 0;
    var Ymax = 300;



    // MOVING BALL FOR THE X AXIS
    if (reverse1 === false){
    positionX = positionX + velocity;
    ball.style.left = positionX + 'px';
    ball.style.background = color;
    console.log("positionX: " + positionX);

  }else{
    positionX = positionX - velocity;
    ball.style.left = positionX + 'px';
    
  }

  // MOVING BALL FOR THE Y AXIS
  if (reverse2 === false){
    positionY = positionY + velocity;
    ball.style.top = positionY + 'px';
    ball.style.background = color;
    console.log("positionY: " + positionY);

  }else{
    positionY = positionY - velocity;
    ball.style.top = positionY + 'px';
  }

  // MOVING BALL TO REVERSE X & Y
  if (positionX > Xmax || positionX === Xmin){
    reverse1 = !reverse1;  
    //by adding the !, //you can reverse the boolean
  }
  if (positionY > Ymax || positionY === Ymin){
    reverse2 = !reverse2;  
    //by adding the !, you can reverse the boolean
  }
}

// This call the moveBall function every 100ms
setInterval(moveBall, interval);

