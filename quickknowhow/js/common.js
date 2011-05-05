var kns = {
    'web_root' : 'http://k.ftao.org',
    'api_url' : function(api){
        return this.web_root + '/api/v1/' + api;
    },
    'user_url' : function (username){
        return this.web_root + '/user/' + encodeURIComponent(username) + '.html';
    }
};

function show_msg(type, msg, duration){
  $('#status').removeClass('error').removeClass('success');
  $('#status').addClass(type).html(msg).fadeIn(function(){
      setTimeout( function(){ 
            $("#status").fadeOut("fast");
          }, duration
      );
  });
}

