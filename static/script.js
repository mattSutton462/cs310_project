(function(){
  "use strict";

  const mysql = require('mysql');

  const db = mysql.createConnection({
    host: "localhost",
    user: "wait to insert user, I do not know the name",
    password: "Woodstock#3"
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

    window.addEventListener('load', init);

    function init(){
      $('#navbar').load('navbar.html', ()=> {
        id('logo').addEventListener('click', goHome);
      });
      $('#foot').load('footer.html');
      

    }

    function goHome(){
      window.location.href="index.html";
    }


    /* ------------------------------ Helper Functions ------------------------------ */
  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})()