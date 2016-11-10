'use strict';

const ListModel = require('./listModel');

let list = new ListModel();

list.add('Learn HTML', (newItem) => { console.log(newItem.title); });
list.add('Learn CSS', (newItem) => { console.log(newItem.title); });
list.add('Learn JS', (newItem) => { console.log(newItem.title); });

console.log(list.getAll());

list.remove(1, (item) => { console.log(item.title); });

console.log(list.getAll());
