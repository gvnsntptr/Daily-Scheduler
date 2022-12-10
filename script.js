$(document).ready(function () {
    
    $('.saveBtn').on('click', function () {

      var val = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
   
      localStore.setItem(time, val);
  

      $('.notification').addClass('show');

      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 5000);
    });
  
    function hourUpdater() {

      var currentHr = moment().hours();
  

      $('.time-block').each(function () {
        var blockHr = parseInt($(this).attr('id').split('-')[1]);
  
  
        if (blockHr < currentHr) {
          $(this).addClass('past');
        } else if (blockHr === currentHr) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hourUpdater();
  
    var setInterval = setInterval(hourUpdater, 15000);
  
    $('#hr-9 .description').val(localStore.getItem('hr-9'));
    $('#hr-10 .description').val(localStore.getItem('hr-10'));
    $('#hr-11 .description').val(localStore.getItem('hr-11'));
    $('#hr-12 .description').val(localStore.getItem('hr-12'));
    $('#hr-13 .description').val(localStore.getItem('hr-13'));
    $('#hr-14 .description').val(localStore.getItem('hr-14'));
    $('#hr-15 .description').val(localStore.getItem('hr-15'));
    $('#hr-16 .description').val(localStore.getItem('hr-16'));
    $('#hr-17 .description').val(localStore.getItem('hr-17'));
  

    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });