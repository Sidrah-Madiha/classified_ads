function toggleAll() // use toggle all button
{
    document.querySelector("#toggle-all").click()
}

function selectItemX(x) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click()
}

function deleteItemX(x) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") button.destroy").click()
}

function selectAllFilter() {
    location.hash = '/'
}

function selectActiveFilter() {
    location.hash = '/active'
}

function selectCompletedFilter() {
    location.hash = '/completed'
}

function addToDoItem(valuetodo) {
    document.querySelector("input.new-todo").value = valuetodo;
    document.querySelector("input.new-todo").dispatchEvent(new Event('change', {
        'bubbles': true
    }));
}

function ammendToDoItem(valuetodo, x) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") label").dispatchEvent(new Event('dblclick', {
        'bubbles': true
    }));
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").value = valuetodo;
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").dispatchEvent(new Event('blur'));
}

function toggleAllItem() {
    toggles = document.querySelectorAll("ul.todo-list input.toggle")
    for (let i = 0; i < toggles.length; i++) {
        document.querySelectorAll("ul.todo-list input.toggle")[i].click();
    }
}