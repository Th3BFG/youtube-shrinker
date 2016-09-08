// ==UserScript==
// @name         YouTube Player Shrinker
// @homepage     https://github.com/Th3BFG/youtube-shrinker
// @namespace    https://github.com/Th3BFG/youtube-shrinker
// @version      1.5
// @description  Shrink YT player to watch Future House videos at work.
// @author       Th3BFG
// @match        https://www.youtube.com/*
// @updateURL    https://github.com/Th3BFG/youtube-shrinker/raw/master/youtube-shrinker.js
// @downloadURL  https://github.com/Th3BFG/youtube-shrinker/raw/master/youtube-shrinker.js
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(window).bind("load", function() { 'use strict';
    // Create local members
    var player = document.getElementById('player-api');
    var holder = document.getElementById('placeholder-player');
    var holderChild = holder.childNodes[1]; // The holder stores its style class in a nested div. Sorry for the magic number
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
