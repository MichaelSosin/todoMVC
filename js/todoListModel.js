'use strict'

class TodoListModel {
    constructor() {
        this.list = new TodoList()
        this.listChanged = new Observer()
    }

    get(query, callback) {
        if(callback) callback(this.list.get(query))
    }

    add(title, callback) {
        this.list.add(title)
        if(callback) {
            callback(title)
        }
        this.listChanged.notify()
    }

    complete(id) {
        let item = this.list.get(id)
        item.completed = true
        this.listChanged.notify()        
    }

    getCount() {
        return this.list.getCount()
    }

    remove(id) {
        this.list.remove(id)
        console.log(this.list)
        this.listChanged.notify()
    }
}
