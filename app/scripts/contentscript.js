'use strict';

chrome.runtime.connect( { name: 'tab' } );

chrome.runtime.sendMessage( {greeting: 'hello'}, function(){} );