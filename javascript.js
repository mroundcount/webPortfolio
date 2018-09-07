
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
  $( "#effect" ).hide( selectedEffect, options, 1000, callback );
};

function callback() {
  setTimeout(function() {
    $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
  }, 1000 );
};

$( "#button" ).on( "click", function() {
  var t0 = performance.now();
  runEffect();
  var t1 = performance.now();
  console.log("It took " + (t1 - t0) + " milliseconds to complete.");
});
});












