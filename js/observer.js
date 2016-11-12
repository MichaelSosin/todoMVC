'use strict';

// module.exports =
class Observer {
    constructor() {
        this.listeners = [];
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notify(args) {
        this.listeners.map((listener) => {
            listener(args);
        });
    }
}