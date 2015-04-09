$('#load-source').click(function() {
  var url = '/source/' + $(this).attr('data-url');

  $.getJSON(url, function(data) {
    console.log(data.source);
  });
});
