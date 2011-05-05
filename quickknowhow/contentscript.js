/**
 * 
 */
function log_search_word() {
  var engine = document.location.host;
  var query = '';
  if(engine.indexOf('google.com')){
    var parts = document.title.split('-');
    if (parts.length > 1){
      query = parts[0].trim();
    }
  }
  if(query != ''){
    chrome.extension.sendRequest({'action' : 'log_search_word', 'engine' : engine, 'query' : query});
  }
};

log_search_word();
