var clockdesign2 = document.querySelector('.clockdesign2');
var clockdesign3 = document.querySelector('.clockdesign3');
var clockdesign4 = document.querySelector('.clockdesign4');
var element2 = document.querySelector('.element2');
var element3 = document.querySelector('.element3');
var section3 = document.querySelector('.section3');
var element4 = document.querySelector('.element4')
var tab = document.querySelector('.tab');
var part1 = document.querySelector('.part1');
//------------------------------------------------
var part2 = document.querySelector('.part2');
var clockdesign2_1 = document.querySelector('.clockdesign2_1');
var clockdesign3_1 = document.querySelector('.clockdesign3_1');
var clockdesign4_1 = document.querySelector('.clockdesign4_1');
var element2_1 = document.querySelector('.element2_1');
var element3_1 = document.querySelector('.element3_1');
var section3_1 = document.querySelector('.section3_1');


startAnimation();

function startAnimation(){
  clockdesign2.classList.remove('hidden')
  clockdesign4.classList.remove('hidden')
  element3.classList.remove('hidden')
  section3.classList.remove('hidden')
  setTimeout(function(){
    clockdesign2.classList.add('hidden')
    clockdesign3.classList.remove('hidden')
    element2.classList.remove('hidden')

      setTimeout(function(){
        // clockdesign2.classList.add('hidden')
        clockdesign3.classList.add('hidden')
        clockdesign4.classList.add('hidden')
        element2.classList.add('hidden')
        element3.classList.add('hidden')
        section3.classList.add('hidden')
        setTimeout(function(){
          startAnimation();
        },700)
      },2000)
  },1000)
}
  

startAnimation2();

function startAnimation2(){
  clockdesign2_1.classList.remove('hidden')
  clockdesign4_1.classList.remove('hidden')
  element3_1.classList.remove('hidden')
  section3_1.classList.remove('hidden')
  setTimeout(function(){
    clockdesign2_1.classList.add('hidden')
    clockdesign3_1.classList.remove('hidden')
    element2_1.classList.remove('hidden')

      setTimeout(function(){
        // clockdesign2.classList.add('hidden')
        clockdesign3_1.classList.add('hidden')
        clockdesign4_1.classList.add('hidden')
        element2_1.classList.add('hidden')
        element3_1.classList.add('hidden')
        section3_1.classList.add('hidden')
        setTimeout(function(){
          startAnimation2();
        },700)
      },2000)
  },1000)
}



var countDownTime = new Date("Sep 29, 2050 15:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var hour = new Date().getHours();
  var distance = countDownTime - now;
  // console.log(now);
 
  //calculation
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   


  if(hours < 10 ){
    hours = "0" + hours;
  }
  if(minutes < 10 ){
    minutes = "0" + minutes;
  }
  if(seconds < 10 ){
    seconds = "0" + seconds;
  }

  var numbers = {
    0: "০", 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯",
  };
  
  function replaceNumbers(input) {
    var output = [];
    for (var i = 0; i < input.length; ++i) {
      if (numbers.hasOwnProperty(input[i])) {
        output.push(numbers[input[i]]);
      } else {
        output.push(input[i]);
      }
    }
    return output.join('');
  }

    document.querySelector('.hour').innerHTML = replaceNumbers(String(hours));

    document.querySelector('.min').innerHTML = replaceNumbers(String(minutes)); 

    document.querySelector('.sec').innerHTML = replaceNumbers(String(seconds)); 
 
    var reftime = 15; 
    if(reftime == hour){
      element4.classList.add('hidden');
      tab.classList.remove('hidden');
      part1.classList.add('hidden')
      part2.classList.remove('hidden');
    } 
    if(reftime != hour){
      element4.classList.remove('hidden');
      tab.classList.add('hidden');
      part1.classList.remove('hidden')
      part2.classList.add('hidden');
    }
}, 1000);








    


