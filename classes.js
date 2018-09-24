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
        this.checked = checked ? false : true;
    }
    get text() {
        return this._text;
    }
    set text(editedText) {
        this._text = editedText;
    }
};