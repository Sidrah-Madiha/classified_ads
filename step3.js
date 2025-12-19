// CREATING TEST DATA:
// USING SetTimeout
for (let i = 0; i < 200; i++) {
    setTimeout(function (valuetodo) {
        document.querySelector("input.new-todo").value = valuetodo;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change', {
            'bubbles': true
        }));
    }, i * 100, "to do " + i);
}

// USING SetInterval
let toDoBotCount = 1;
let toDoBot = setInterval(
    function () {
        document.querySelector("input.new-todo").value = "to do " + toDoBotCount;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change', {
            'bubbles': true
        }));
        if (toDoBotCount >= 200) {
            clearInterval(toDoBot)
        }
        toDoBotCount++;
    })

// With user input values:
// put this code in chrome bookmark to create bookmarklet
// javascript:(function(){
// many= prompt("How many todos we need to create?");
// let toDoBotCount = 1;
// let toDoBot = setInterval(
// function() {

//         document.querySelector("input.new-todo").value = "to do "+ toDoBotCount;
//         document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
//             'bubbles': true}));
//         if ((many  && toDoBotCount >=many) || (toDoBotCount >=30)){
//             clearInterval(toDoBot)
//         }
//         toDoBotCount ++;
//         }

// , toDoBotCount*100);})()

// , toDoBotCount*100);
