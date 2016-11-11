'use strict';

module.exports = class ListModel {
  constructor() {
    // the todo list
    this.items = [];
  }
  // returns item by id or by title from the list, if no query is defined - returns all list
  get(query, callback) {
    let queryType = typeof query,
        response;

    if(!query) {
      response = this.items;
    } else if (queryType === 'function') {
      callback = query;
      response = this.items;
    } else if (queryType === 'number') {
      let item = this.items[query];
      response = item[0];
    } else if (queryType === 'string') {
      let item = this.items.filter((item) => {return item.title === query; });
      response = item[0];
    }
    if(callback) {
      callback(response);
    }
    return response;
  }
  // adds item to the list and assign completed to false
  add(title, callback) {
    title = title || '';

    let newItem = {
      title: title.trim(),
      completed: false
    }

    this.items.push(newItem);
    if(callback) {
      callback(newItem);
    }
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
    if(callback) {
      callback();
    }
    return quantity;
  }

  // removes item by id (number in list) and returns it
  remove(id, callback) {
    if(!id) {
      return;
    }

    this.items.splice(id, 1);
    if(callback) {
      callback();
    }
  }

  // removes all items from the list and returns empty list
  drop(callback) {
    this.items = [];
    callback.call(this, this.items);
    return this.items;
  }
}
