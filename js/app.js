console.log('The script is working!');




/*----- constants -----*/
const commands = [
  up = {name:'up', image:'../images/arrow-commands/arrow-up.png'},
  upLeft = { name:'up-left', image:'../images/arrow-commands/arrow-up-left.png'},
  leftUp = {name: 'left-up', image: '../images/arrow-commands/arrow-left-up.png'},
  down = {name: 'down', image: '../images/arrow-commands/arrow-down.png'},
  upRight = {name: 'up-right', image: '../images/arrow-commands/arrow-up-right.png'},
  rightUp = {name: 'right-up', image: '../images/arrow-commands/arrow-right-up.png'},
  left = {name: 'left', image: '../images/arrow-commands/arrow-left.png'},
  downLeft = {name: 'down-left', image: '../images/arrow-commands/arrow-down-left.png'},
  leftDown = {name: 'down-left', image: '../images/arrow-commands/arrow-left-down.png'},
  right = {name: 'right', image: '../images/arrow-commands/arrow-right.png'},
  downRight = {name: 'down-right', image: '../images/arrow-commands/arrow-down-right.png'},
  rightDown = {name: 'right-down', image: '../images/arrow-commands/arrow-right-down.png'},
]



var programArray =[];
var scoreBoard = 0;

const ansArray = ['right', 'down', 'right', 'down', 'left']
const bestAnsArray = ["right", "right-down", "down", "down-right", "right", "right-down", "down", "down-left", "left"]

var valuation;


var pathWaySegment = 144;


/*----- app's state (variables) -----*/


/*----- cached element references -----*/

init();

/*----- event listeners -----*/
//detecting which button was clicked
//Up
$('#btnUp').on('click', () => {
  console.log('btnUp was clicked');
  programArray.push(commands[0]);
  render();
});

//upLeft
$('#btnUpLeft').on('click', () => {
  console.log('btnUpLeft was clicked');
  programArray.push(commands[1]);
  render();
});

//leftUp
$('#btnLeftUp').on('click', () => {
  console.log('btnLeftUp was clicked');
  programArray.push(commands[2]);
  render();
});

//Down
$('#btnDown').on('click', () => {
  console.log('btnDown was clicked');
  programArray.push(commands[3]);
  render();
});

//upRight
$('#btnUpRight').on('click', () => {
  console.log('btnUpRight was clicked');
  programArray.push(commands[4]);
  render();
});

//rightUp
$('#btnRightUp').on('click', () => {
  console.log('btnRightUp was clicked');
  programArray.push(commands[5]);
  render();
});

//Left
$('#btnLeft').on('click', () => {
  console.log('btnLeft was clicked');
  programArray.push(commands[6]);
  render();
});

//downLeft
$('#btnDownLeft').on('click', () => {
  console.log('btnDownLeft was clicked');
  programArray.push(commands[7]);
  render();
});

//leftDown
$('#btnLeftDown').on('click', () => {
  console.log('btnLeftDown was clicked');
  programArray.push(commands[8]);
  render();
});

//Right
$('#btnRight').on('click', () => {
  console.log('btnRight was clicked');
  programArray.push(commands[9]);
  render();
});

//downRight
$('#btnDownRight').on('click', () => {
  console.log('btnDownRight was clicked');
  programArray.push(commands[10]);
  render();
});

//right Down
$('#btnRightDown').on('click', () => {
  console.log('btnRightDown was clicked');
  programArray.push(commands[11]);
  render();
});

//CLEAR
$('#btnClear').on('click', () => {
  console.log('Clear clicked');
  programArray = [""];
  render();
})

//BACKSPACE
$('#btnBackSpace').on('click', () => {
  console.log('Back Space clicked');
  programArray.pop();
  render();
})


//RUN
$('#btnRun').on('click', () => {
  console.log('Run Clicked');
  console.log('program array >>>', programArray);
  console.log('answer array >>>', ansArray);

  checkAnswer();
});




/*----- functions -----*/

function init() {
  console.log($('.canvas').position().top);
  //redering the Dog

  $('#dog').html(`<style>#dog {position: absolute; top: 0px; left: 0px;}</style>`);
  $('#endPoint').html(`<style>#endPoint {position: absolute; top: 308px; left: 84px;}</style>`);


  console.log('dog position>>>' , $('#dog').position());
  //rendering the command buttons inside of the commandBox

}

function render () {

    $('#programList').empty();


    for (var i = 0; i < programArray.length; i++) {
    $('#programList').append(`<img src="${programArray[i].image}" alt="">`)
    }

  // $('#programList').append(`<img src="${programArray[programArray.length-1].image}" alt="">`)

};


function checkAnswer () {
  for (var i = 0; i < programArray.length; i++) {
    if (programArray[i].name == bestAnsArray[i]) {
      valuation = true;
      console.log('valuation = true');
    }
    else {
      valuation = false;
      console.log('valuation = false');
    }
  }
  console.log('valuation = ', valuation);

  if (valuation === true) {
    $('#dog').html(`<style>#dog {position: absolute; top: 260px; left: 120px;}</style>`);
    printScore(3);
    alert('Your program is awesome! You got the BEST answer!')
    programArray = [];
    render();
  }
  else {
    for (var i = 0; i < programArray.length; i++) {
      if (programArray[i].name == ansArray[i]) {
        valuation = true;
        console.log('valuation = true');
      }
      else {
        valuation = false;
        console.log('valuation = false');
      }
    }
    if (valuation === true) {
      printScore(2);
      $('#dog').html(`<style>#dog {position: absolute; top: 260px; left: 120px;}</style>`);
      programArray = [];
      render();
      alert('Your answer is right, but there is a gest way to do it! Keep trying!')
    }
    else {
      alert('Your answer is NOT correct! Try it again!')
    }
  }
}

function printScore (score){
  scoreBoard += score;
  $('#scoreBoard').html(`<h3 id="scoreBoard">Score: ${scoreBoard}</h3>`)
}

//(9)>   OU  (3)V
function randomPathWay () {
  const pathArray = []
  //1 é 3 V
  //2 é 9 >
  let num1 = Math.floor(Math.random() * (3 - 1) +1 );

  if (num1 === 1) {
    pathArray.push(commands[3].name)
    //1 é 6 >^
    //2 é 12>v
    let num2 = Math.floor(Math.random() * (3 - 1) +1 );
    if (num2 === 1) {
      pathArray.push(commands[6].name)
    }else if (num2 === 2) {
      pathArray.push(commands[12].name)
    }
  }else if (num1 === 2) {
    pathArray.push(commands[9].name)
    //1 é 11 v>
    //2 é 8 <V
    let num3 = Math.floor(Math.random() * (3 - 1) +1 );
    if (num3 === 1) {
      pathArray.push(commands[11].name);
    }else if (num3 === 2) {
      pathArray.push(commands[8].name);
    }
  }
  console.log(pathArray);
}

randomPathWay();
