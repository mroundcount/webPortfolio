
$( function() {
$( "#draggable" ).draggable();
} );


$( function() {
$( "#datepicker" ).datepicker();
} );


$( function() {
function runEffect() {
  var selectedEffect = $( "#effectTypes" ).val();
  var options = {};
  if ( selectedEffect === "scale" ) {
    options = { percent: 50 };
  } else if ( selectedEffect === "size" ) {
    options = { to: { width: 200, height: 60 } };
  }
  $("#toggler").css("min-height", $("#toggler").height());
  $( "#effect" ).hide( selectedEffect, options, 1000, callback );
};

function callback() {
  setTimeout(function() {
    $( "#effect" ).fadeIn();
  }, 1000 );
};

$( "#button" ).on( "click", function() {
  var t0 = performance.now();
  runEffect();
  var t1 = performance.now();
  document.getElementById("demo").innerHTML = ("It took " + ((t1 - t0)).toFixed(2) + "ms to hide the text.");
});

});












