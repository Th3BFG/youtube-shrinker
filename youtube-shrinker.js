// ==UserScript==
// @name         YouTube Player Shrinker
// @namespace    http://erbapps.com/
// @version      1.0
// @description  Shrink YT player to watch Future House videos at work.
// @author       Th3BFG
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Create local members
    var player = document.getElementById('player-api');
    var holder = document.getElementById('placeholder-player');
    var holderChild = holder.childNodes[1];
    var sidebar = document.getElementsByClassName("watch-sidebar-section");
    var sidebarHolder = document.getElementById('watch7-sidebar');
    
    // Shrink the player
    player.classList.remove("player-height");
    player.style.height = "40px";
    
    // Shrink the placeholder-player's nested style
    holderChild.classList.remove("player-height");
    holderChild.style.height = "40px";
    
    // Remove sidebar elements
    var i;
    for(i = 0; i < sidebar.length; i++)
    {
        sidebar[i].style.display = "none";
    }
    
    // Remove the sidebar placeholder
    sidebarHolder.classList.remove('watch-sidebar');
    sidebarHolder.style.display = "none";
})();