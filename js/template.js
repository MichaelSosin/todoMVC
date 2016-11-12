'use strict';

// module.exports = 
class ListTemplate {
    constructor() {
    }

    _getItem(item, id) {
        return  `<li data-id=${id} class="list-item ${item.completed || ''}">
                    <span>${item.title}</span>
                    <button class="remove-button">-</button>
                </li>`;
    }

    getList(list) {
        let html = '';
        list.map( (item) => html += this._getItem(item, list.indexOf(item)) );
        return html;
    }
}
