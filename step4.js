var botRandom = new function () {

    function getRandomInt(x) {
        return Math.floor(Math.random() * x);
    }

    function getRandomItemIndex() {
        max = document.querySelectorAll("ul.todo-list > li").length
        if (max === 0) {
            console.log("zero items available for test");
            return 0;
        } else {
            x = getRandomInt(max);
            return x;
        }
    }

    this.selectRandItemX = function () {
        indexRand = getRandomItemIndex();
        if (indexRand > 0) {
            console.log("selecting item " + indexRand);
            autoObject.selectItemX(indexRand);
        }
    }

    this.deleteRandItemX = function () {
        indexRand = getRandomItemIndex();
        if (indexRand > 0) {
            console.log("deleteing item " + indexRand);
            autoObject.deleteItemX(indexRand);
        }
    }

    this.toggleAll = function () {
        console.log("Toggling all todos ");
        autoObject.toggleAll();
    }

    this.addToDoItem = function () {
        console.log("adding item " + Date.now());
        autoObject.addToDoItem("to do " + Date.now());
    }

    this.ammendToDoItem = function () {
        indexRand = getRandomItemIndex()
        if (indexRand > 0) {
            console.log("ammending item " + indexRand);
            autoObject.ammendToDoItem("to do " + Date.now(), indexRand);
        }
    }

}
