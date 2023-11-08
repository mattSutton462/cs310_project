(function(){
  "use strict";

    window.addEventListener('load', init);

    function init(){
      $('#navbar').load('navbar.html', ()=> {
        id('logo').addEventListener('click', goHome);
      });
      $('#foot').load('footer.html');
      

      let radio = qsa("input[name = 'dice']");
      for(let i = 0; i < radio.length; i++){
      radio[i].addEventListener('click', function(){
        let clear = qs("input[name ='dice']:checked");
        clear.checked = "";
        this.checked = true;
      });    
    }

    id('roll_stats').addEventListener('click', ()=>{
      rollStats(qs("input[name='dice']:checked").value);
    });

    }

    function goHome(){
      window.location.href="index.html";
    }

    function rollStats(dice){
      id("charhome").classList.add("hidden");
      id('charsheet').classList.remove("hidden");
      let stats = id("stats");
      if(dice == "d20"){
        for(let i = 0; i<6; i++){
          let roll = document.createElement('li');
          roll.innerText = Math.floor((Math.random()*20) + 1);
          stats.appendChild(roll);
        }
      }
      else{
        for(let i = 0; i<6; i++){
          let roll = document.createElement('li');
          let lowest_roll = 0;
          let roll_total = 0;
          for(let j = 0; j<4; j++){
            let roll_val = Math.floor((Math.random()*6) + 1);
            if(lowest_roll == 0){
              lowest_roll = roll_val;
            }
            else if(roll_val < lowest_roll){
              lowest_roll = roll_val;
            }
            roll_total += roll_val;
          }
          roll_total -= lowest_roll
          roll.innerText = roll_total;

          stats.appendChild(roll);
        }
      }

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