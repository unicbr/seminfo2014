$(function() {

  function getEvents(file) {
    $.getJSON('../data/' + file, function(response) {

      return response;
    });
  }

  $('#agenda .w-tab-link').click(function() {
    $('#agenda .w-tab-link').each(function(index, item) {
      var obj = $(item);
      if(obj.hasClass('w--current')) {
        obj.removeClass('w--current');
      }
    });

    !$(this).hasClass('w--current') && $(this).addClass('w--current');

    var year = $.fullCalendar.moment('2014-11-' + $(this).attr('data-day'));
    $('#agenda .w-tab-pane').fullCalendar('gotoDate', year);
  });

  $('#agenda .w-tab-pane')
    .fullCalendar({
      header: false,
      allDaySlot: false,
      lang: 'pt-br',
      defaultView: 'agendaDay',
      eventSources: [
        {
            events: function(start, end, timezone, callback) {
              $.ajax({
                url: '../data/palestras.json',
                dataType: 'json',
                success: function(doc) {
                    callback(doc);
                }
              });
            },
            color: '#003759',     // an option!
            textColor: 'white' // an option!
        },
        {
          events: function(start, end, timezone, callback) {
            $.ajax({
              url: '../data/minicursos.json',
              dataType: 'json',
              success: function(doc) {
                  callback(doc);
              }
            });
          },
          color: '#00569f',     // an option!
          textColor: 'white' // an option!
        }

    ]
    });

  var year = $.fullCalendar.moment('2014-11-03T08:00:00-04:00');
  $('#agenda .w-tab-pane').fullCalendar('gotoDate', year);

});
