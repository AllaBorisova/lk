let timer;
let seconds = 0;
let minutes = 0;
const timerElement = document.getElementById('timer');
// const startBtn = document.getElementById('startBtn');
// const stopBtn = document.getElementById('stopBtn');
// const resetBtn = document.getElementById('resetBtn');

function updateTimer() {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  const formattedTime =
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds);

  timerElement.textContent = formattedTime;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
}
// startTimer();

// startBtn.addEventListener('click', function () {
//   if (!timer) {
//     timer = setInterval(updateTimer, 1000);
//   }
// });

// stopBtn.addEventListener('click', function () {
//   clearInterval(timer);
//   timer = null;
// });

// resetBtn.addEventListener('click', function () {
//   clearInterval(timer);
//   timer = null;
//   seconds = 0;
//   minutes = 0;
//   timerElement.textContent = '00:00';
// });

jQuery( document ).ready( function ( $ ) { } );

//keyboard
$(function () {
  var $write = $('#write'),
    shift = false,
    capslock = false;
  $('#write').click(function () {
    $('.container-keyboard').toggleClass('active');
  });

  $('#keyboard li').click(function () {
    var $this = $(this),
      character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

    // Shift keys
    if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
      $('.letter').toggleClass('uppercase');
      $('.symbol span').toggle();

      shift = shift === true ? false : true;
      capslock = false;
      return false;
    }

    // Caps lock
    if ($this.hasClass('capslock')) {
      $('.letter').toggleClass('uppercase');
      capslock = true;
      return false;
    }

    // Delete
    if ($this.hasClass('delete')) {
      var html = $write.val();

      $write.val(html.substr(0, html.length - 1));
      return false;
    }

    // Special characters
    if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
    if ($this.hasClass('space')) character = ' ';
    if ($this.hasClass('tab')) character = '\t';
    if ($this.hasClass('return')) character = '\n';

    // Uppercase letter
    if ($this.hasClass('uppercase')) character = character.toUpperCase();

    // Remove shift once a key is clicked.
    if (shift === true) {
      $('.symbol span').toggle();
      if (capslock === false) $('.letter').toggleClass('uppercase');

      shift = false;
    }

    // Add the character
    $write.val($write.val() + character);
  });
});
