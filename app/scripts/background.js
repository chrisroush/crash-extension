'use strict';

var tab;

chrome.runtime.onConnect.addListener(function(port) {

  port.onDisconnect.addListener(function() {

    window.setTimeout( function(){

      var newTab;

      chrome.tabs.get( tab.id, function( tab ){
        newTab = tab;

        if( newTab.status === 'complete' && newTab.url === tab.url ) {
          chrome.tabs.reload( newTab.id );
        }
      });
    }, 1000 );

  });
});


chrome.runtime.onMessage.addListener(
  function( request, sender ) {
    tab = sender.tab;
});
