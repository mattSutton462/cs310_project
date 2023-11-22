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

    function rollStats(dice){
        id("charhome").classList.add("hidden");
        id('charselect').classList.remove("hidden");
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

    function classSelect(charClass){
        // console.log(charClass);
        let url = BASE_URL + "classes/" + charClass + "/";
        id('class_info').innerHTML = "";
  
        if(charClass != ""){
          id('charsheet').classList.remove('hidden');
          fetch(url)
          .then(checkStatus)
          .then((classInfo)=>{
            console.log(classInfo);
            for(let i = 0; i < 5; i++){
              let data = document.createElement('p');
              if(i == 0){
                data.innerText = classInfo.name;
              }
              else if(i == 1){
                data.innerText = "Hit die: d" + classInfo.hit_die;
              }
              else if(i == 2){
                let prof = "Proficiencies: ";
                for (let j = 0; j<classInfo.proficiencies.length; j++){
                  if((j+1) ==  classInfo.proficiencies.length){
                    prof += classInfo.proficiencies[j].name;
                  } 
                  else {
                  prof += classInfo.proficiencies[j].name + ', ';
                  }
                }
                data.innerText = prof;
              }
              else if (i == 3){
                data.innerText = "Proficiency Choices: " + classInfo.proficiency_choices[0].desc;
              }
              else if (i == 4){
                let equip = "Starting Equipment: ";
                if(classInfo.starting_equipment.length > 0){
                  for(let j = 0; j<classInfo.starting_equipment.length; j++){
                    equip += classInfo.starting_equipment[j].equipment.name + ', ';
                  }
                }
                
                for(let j = 0; j<classInfo.starting_equipment_options.length; j++){
                  if((j+1) == classInfo.starting_equipment_options.length){
                    equip += classInfo.starting_equipment_options[j].desc;
                  }
                  else{
                    equip += classInfo.starting_equipment_options[j].desc + ', ';
                  }
                }
                data.innerText = equip;
              }
              id('class_info').appendChild(data);
            }
          });
  
          }
      }
  
      function raceSelect(charRace){
        // console.log(charRace);
        let url = BASE_URL + "races/" + charRace + "/";
        id('race_info').innerHTML = "";
  
        if(charRace != ""){
          id('charsheet').classList.remove('hidden');
          fetch(url)
          .then(checkStatus)
          .then((raceInfo)=>{
            console.log(raceInfo);
            for(let i = 0; i < 5; i++){
              let data = document.createElement('p');
              if(i == 0){
                data.innerText = raceInfo.name;
              }
              else if(i == 1){
                data.innerText = raceInfo.age;
              }
              else if(i == 2){
                data.innerText = raceInfo.size_description;
              }
              else if(i == 3){
                data.innerText = raceInfo.language_desc;
              }
              else if(i == 4){
                let traits = "Traits: ";
                for(let j = 0; j<raceInfo.traits.length; j++){
                  if((j+1) == raceInfo.traits.length){
                    traits += raceInfo.traits[j].name;
                  } 
                  else {
                    traits += raceInfo.traits[j].name + ', ';
                  }
                }
                data.innerText = traits;
              }
  
              id('race_info').appendChild(data);
            }
          });
        }
  
      }
  
      function backgroundSelect(charBackground){
        // console.log(charBackground);
        let url = BASE_URL + "backgrounds/" + charBackground + "/";
        id('background_info').innerHTML = "";
  
        if(charBackground != ""){
          id('charsheet').classList.remove('hidden');
          fetch(url)
          .then(checkStatus)
          .then((backgroundInfo)=>{
            console.log(backgroundInfo);
            for(let i = 0; i < 5; i++){
              let data = document.createElement('ol');
              
              if(i == 0){
                data.innerText = "Personality Traits:"
                for(let j = 0; j <backgroundInfo.personality_traits.from.options.length; j++){
                  let option = document.createElement('li');
                  option.innerText = backgroundInfo.personality_traits.from.options[j].string;
                  data.appendChild(option);
                }
              }
              else if(i == 1){
                data.innerText = "Flaws:"
                for(let j = 0; j <backgroundInfo.flaws.from.options.length; j++){
                  let option = document.createElement('li');
                  option.innerText = backgroundInfo.flaws.from.options[j].string;
                  data.appendChild(option);
                }
              }
              else if(i == 2){
                data.innerText = "Ideals:"
                for(let j = 0; j <backgroundInfo.ideals.from.options.length; j++){
                  let option = document.createElement('li');
                  option.innerText = backgroundInfo.ideals.from.options[j].desc;
                  data.appendChild(option);
                }
              }
              else if(i == 3){
                data.innerText = "Bonds:"
                for(let j = 0; j <backgroundInfo.bonds.from.options.length; j++){
                  let option = document.createElement('li');
                  option.innerText = backgroundInfo.bonds.from.options[j].string;
                  data.appendChild(option);
                }
              }
              else if(i == 4){
                data.innerText = "Feature: " + backgroundInfo.feature.name;
                for(let j = 0; j<backgroundInfo.feature.desc.length; j++){
                  let desc = document.createElement('li');
                  desc.innerText = backgroundInfo.feature.desc[j];
                  data.appendChild(desc);
                }
              }
              id('background_info').appendChild(data);
            }
          });
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

  function checkStatus(response) {
    if (!response.ok) {
        throw Error("Error in request: " + response.statusText);
    }
    return response.json();
}
  

})();