'use strict';

class Todo {
    constructor(text) {
        this._text = text;
        this.checked = false;
    }
    check() {
        this.checked = true;
    }
    uncheck() {
        this.checked = false;
    }
    toggleCheck() {
        this.checked = this.checked ? false : true;
    }
    getCheck() {
        return this.checked;
    }
    get check() {
        return this.checked;
    }
    get text() {
        return this._text;
    }
    set text(editedText) {
        this._text = editedText;
    }
};