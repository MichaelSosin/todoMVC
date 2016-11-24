'use strict'

class TodoListView {
    constructor(model) {
        this.model = model
        this.model.listChanged.subscribe(() => this.render() )
        this.template = new ListTemplate()

        this.render()
    }

    render(query) {
        this.model.get(query, list => this.template.dom.list.innerHTML = this.template.getList(list) )
    }

    addButtonHandler(handler) {
      this.template.dom.addButton.addEventListener('click', () => {
        let title = this.getValue() 
        if(title) {
          handler(title)
        }
      })
    }

    completeButtonHandler(handler) {
      this.template.dom.list.addEventListener('click', e => {
        if (e.target.classList.contains('done-button')) {
          let id = e.target.parentNode.parentNode.attributes['data-id'].value
          handler(parseInt(id))
        }
      })
    }

    removeButtonHandler(handler) {
      this.template.dom.list.addEventListener('click', e => {
        if (e.target.classList.contains('remove-button')) {
          let id = e.target.parentNode.parentNode.attributes['data-id'].value
          handler(parseInt(id))
        }
      })
    }

    getValue() {
      let value = this.template.dom.newTodo.value || ''
      if(value) {
        this.template.dom.newTodo.value = ''
        return value
      }
    }
}
