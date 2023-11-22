(function(){
    "use strict";
    
    const BASE_URL = "https://www.dnd5eapi.co/api/";

    window.addEventListener('load', init);

    function init(){
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
      
      
        id("class_btn").addEventListener('click', ()=>{
            classSelect(id('classSelect').value);
        });
      
        id("race_btn").addEventListener('click', ()=>{
            raceSelect(id('raceSelect').value);
        });
      
        id("background_btn").addEventListener('click', ()=>{
            backgroundSelect(id('backgroundSelect').value);
        });
    }



    

})();