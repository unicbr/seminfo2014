$(function() {

  $('#agenda .w-tab-link').click(function() {
    var year = $.fullCalendar.moment('2014-11-' + $(this).attr('data-w-tab'));
    $('#agenda .w-tab-pane').fullCalendar('gotoDate', year);
  });

  $('#agenda .w-tab-pane').each(function(index, item) {
    $(item)
    .fullCalendar({
      header: false,
      lang: 'pt-br',
      eventSources: [
          'data/palestras.json',
          'data/minicursos.json'
      ]
    })
    .fullCalendar('changeView', 'agendaDay');
  });

  var year = $.fullCalendar.moment('2014-11-03');
  $('#agenda .w-tab-pane').fullCalendar('gotoDate', year);

});
