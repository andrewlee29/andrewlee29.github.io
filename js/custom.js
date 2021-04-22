document.addEventListener('DOMContentLoaded', function() {
  var typewriter = document.getElementById('typewriter');
  
  var typewriter = new Typewriter(typewriter, {
      loop: true
  });
  typewriter.typeString('Chilling?')
      .pauseFor(1500)
      .typeString('Nah')
      .pauseFor(1500)
      .deleteAll()
      .typeString('Learning ,Creating, Designing, Solving problem...')
      .pauseFor(2500)
      .typeString('<strong>I can do this All day</strong>')
      .pauseFor(2500)
      .start();
  });
