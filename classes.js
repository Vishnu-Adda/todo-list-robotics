'use strict';

class Todo {
    constructor(text) {
        this._text = text;
        this._checked = false;
    }
    toggleCheck() {
        this._checked = this._checked ? false : true;
    }
    get check() {
        return this._checked;
    }
    get text() {
        return this._text;
    }
    set text(editedText) {
        this._text = editedText;
    }
};