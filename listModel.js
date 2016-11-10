'use strict';

module.exports = class ListModel {
  constructor() {
    // the todo list
    this.items = [];
  }
  // returns item by id or by title from the list, if no query is defined - returns all list
  get(query, callback) {
    let queryType = typeof query;
    callback = callback || function () {};

    if(!query) {
      callback.call(this, this.items);
      return this.items;
    } else if (queryType === 'function') {
      callback = query;
      callback.call(this, this.items);
      return this.items;
    } else if (queryType === 'number') {
      let item = this.items[query];
      callback.call(this, item[0]);
      return item[0];
    } else if (queryType === 'string') {
      let item = this.items.filter((item) => {return item.title === query; });
      callback.call(this, item[0]);
      return item[0];
    }
  }
  // adds item to the list and assign completed to false
  add(title, callback) {
    title = title || '';
    callback = callback || function () {};

    let newItem = {
      title: title.trim(),
      completed: false
    }

    this.items.push(newItem);
    callback.call(this, newItem);
  }
  // counts completed, active and total items in list
  getCount(callback) {
    let quantity = {
      active: 0,
      completed: 0,
      total: 0
    }

    this.items.forEach((item) => {
      if(item.completed) {
        quantity.completed++;
      } else {
        quantity.active++;
      }
      quantity.total++;
    });
    callback.call(this, quantity);
  }

  // removes item by id (number in list) and returns it
  remove(id, callback) {
    id = id || '';
    callback = callback || function () {};
    let deletedItem = [];

    if(!id) {
      return;
    }
    deletedItem = this.items.splice(id, 1);
    callback.call(this, deletedItem[0]);
    return deletedItem[0];
  }

  // removes all items from the list and returns empty list
  drop(callback) {
    this.items = [];
    callback.call(this, this.items);
    return this.items;
  }
}
