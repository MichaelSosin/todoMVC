'use strict';

// const template = require('template.js');

// module.exports =
class TodoListView {
    constructor(model) {
        this.model = model;
        this.model.listChanged.subscribe(() => { this.render(); });

        this.template = new ListTemplate();

        this.dom = {
            list: document.querySelector('.todo-list'),
            newTodo: document.querySelector('.new-todo'),
            addButton: document.querySelector('.add-button')
        };

        this.render();
    }

    render() {
        this.dom.list.innerHTML = this.template.getList(this.model.get());
    }

    addButtonHandler(handler) {
      this.dom.addButton.addEventListener('click', () => {
        let title = this.getValue(); 
        if(title) {
          handler(title);
        }
      });
    }

    completeButtonHandler(handler) {
      this.dom.list.addEventListener('click', (e) => {
        if (e.target.classList.contains('done-button')) {
          let id = e.target.parentNode.parentNode.attributes['data-id'].value;
          handler(parseInt(id));
        }
      });
    }

    removeButtonHandler(handler) {
      this.dom.list.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-button')) {
          let id = e.target.parentNode.parentNode.attributes['data-id'].value;
          handler(parseInt(id));
        }
      });
    }

    getValue() {
      let value = this.dom.newTodo.value || '';
      if(value) {
        this.dom.newTodo.value = '';
        return value;
      }
    }
}
