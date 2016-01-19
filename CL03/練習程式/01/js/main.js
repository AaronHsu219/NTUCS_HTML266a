$(function() {
  // 
  var duration = 300;

  // typo ----------------------------------------
  $('#buttons1 button:nth-child(-n+4)')
    .on('mouseover', function() {
      $(this).stop(true).animate({
        backgroundColor: "#ae5e8b",
        color: '#FFF'
      }, duration);
    })
    .on('mouseout', function() {
      $(this).stop(true).animate({
        backgroundColor: "#FFF",
        color: '#ebc000'
      }, duration);
    });

  $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
    .on('mouseover', function() {
      $(this).stop(true).animate({
        borderWidth: '15px',
        color: '#ebc000',
      }, duration, 'easeInOutQuint');
    })
    .on('mouseout', function() {
      $(this).stop(true).animate({
        borderWidth: '0px',
      }, duration, 'easeInOutQuint');
    })

  $('#buttons1 button:nth-child(n+9)')

  .on('mouseover', function() {
      $(this).find('> span').stop(true).animate({
        width: "100%",
      }, duration, 'easeInOutQuint');
    })
    .on('mouseout', function() {
      $(this).find('> span').stop(true).animate({
        width: "0%",
      }, duration, 'easeInOutQuint');
    })
});
