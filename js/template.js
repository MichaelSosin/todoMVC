'use strict'

class ListTemplate {
    constructor() {
        this.dom = {
            list: document.getElementsByClassName('todo-list')[0],
            newTodo: document.getElementsByClassName('new-todo')[0],
            addButton: document.getElementsByClassName('add-button')[0]
        }
    }

    _getItem(item, id) {
        let completed = item.completed ? 'completed' : ''
        let inactiveButton = item.completed ? 'disabled' : ''
        

        return  `<li data-id=${id} class="list-item ${completed}">
                    <span class="title">${item.title}</span>
                    <div class="buttons-container">
                        <button class="button done-button" ${inactiveButton}>DONE</button>                    
                        <button class="button remove-button">DELETE</button>
                    </div>
                </li>`
    }

    getList(list) {
        let html = ''
        list.map( item => html += this._getItem(item, list.indexOf(item)) )
        return html
    }
}
