if (localStorage['blackout']) {
 if (Number(localStorage['blackout']) == 1) {
$('BODY').addClass('blackout');
 } else {
  $('BODY').removeClass('blackout');
 }
} else {
  localStorage['blackout'] = 0;
  $('BODY').removeClass('blackout');
}
$('BODY').show();
$('#boToggle').on('click', function(){
  if (Number(localStorage['blackout']) == 0) {
      localStorage['blackout'] = 1;
$('BODY').addClass('blackout');
  } else {
      localStorage['blackout'] = 0;
$('BODY').removeClass('blackout');
 }
});
