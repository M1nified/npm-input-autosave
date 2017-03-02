var InputAutosaveNamespace;
(function (InputAutosaveNamespace) {
    class InputChecked {
        constructor(selector) {
            if (typeof selector === 'string') {
                this.element = document.querySelector(selector);
            }
            else if (selector instanceof HTMLInputElement) {
                this.element = selector;
            }
        }
        load() {
            if (typeof Storage === 'undefined')
                return false;
            this.element.checked = localStorage.getItem(this.element.id) === 'true' ? true : false;
        }
        autosaveEnable() {
            if (typeof Storage === 'undefined')
                return false;
            this.element.addEventListener('change', () => {
                localStorage.setItem(this.element.id, this.element.checked.toString());
            });
        }
    }
    InputAutosaveNamespace.InputChecked = InputChecked;
})(InputAutosaveNamespace || (InputAutosaveNamespace = {}));
var InputAutosaveNamespace;
(function (InputAutosaveNamespace) {
    class InputValue {
        constructor(selector) {
            if (typeof selector === 'string') {
                this.element = document.querySelector(selector);
            }
            else if (selector instanceof HTMLInputElement) {
                this.element = selector;
            }
        }
        load() {
            if (typeof Storage === 'undefined' || typeof localStorage.getItem(this.element.id) === 'undefined')
                return false;
            this.element.value = localStorage.getItem(this.element.id);
        }
        autosaveEnable() {
            if (typeof Storage === 'undefined')
                return false;
            let change = () => {
                localStorage.setItem(this.element.id, this.element.value);
            };
            this.element.addEventListener('keypress', change);
            this.element.addEventListener('change', change);
        }
    }
    InputAutosaveNamespace.InputValue = InputValue;
})(InputAutosaveNamespace || (InputAutosaveNamespace = {}));
var InputAutosaveNamespace;
(function (InputAutosaveNamespace) {
    class ASTextarea {
        constructor(selector) {
            if (typeof selector === 'string') {
                this.element = document.querySelector(selector);
            }
            else if (selector instanceof HTMLTextAreaElement) {
                this.element = selector;
            }
        }
        load() {
            if (typeof Storage === 'undefined')
                return false;
            this.element.value = this.element.value = localStorage.getItem(this.element.id);
        }
        autosaveEnable() {
            if (typeof Storage === 'undefined')
                return false;
            let change = () => {
                localStorage.setItem(this.element.id, this.element.value);
            };
            this.element.addEventListener('keypress', change);
            this.element.addEventListener('change', change);
        }
    }
    InputAutosaveNamespace.ASTextarea = ASTextarea;
})(InputAutosaveNamespace || (InputAutosaveNamespace = {}));
var InputAutosaveNamespace;
(function (InputAutosaveNamespace) {
    class ASContentEditable {
        constructor(selector) {
            if (typeof selector === 'string') {
                this.element = document.querySelector(selector);
            }
            else if (selector instanceof HTMLElement) {
                this.element = selector;
            }
        }
        load() {
            if (typeof Storage === 'undefined')
                return false;
            this.element.innerHTML = this.element.innerHTML = localStorage.getItem(this.element.id);
        }
        autosaveEnable() {
            if (typeof Storage === 'undefined')
                return false;
            let change = () => {
                localStorage.setItem(this.element.id, this.element.innerHTML);
            };
            this.element.addEventListener('keypress', change);
            this.element.addEventListener('change', change);
        }
    }
    InputAutosaveNamespace.ASContentEditable = ASContentEditable;
})(InputAutosaveNamespace || (InputAutosaveNamespace = {}));
var InputAutosaveNamespace;
(function (InputAutosaveNamespace) {
    class InputAutosave {
        constructor(elements) {
            this.elements = elements;
            this.getFields();
            this.loadSettings();
            this.autosaveEnable();
        }
        getFields() {
            this.fields = [];
            this.elements.forEach(element => {
                if (element.nodeName === 'INPUT' || element.nodeName === 'input') {
                    switch (element.type) {
                        case 'checkbox':
                            this.fields.push(new InputAutosaveNamespace.InputChecked(element));
                            break;
                        case 'color':
                        case 'date':
                        case 'datetime-local':
                        case 'email':
                        case 'hidden':
                        case 'image':
                        case 'month':
                        case 'number':
                        case 'password':
                        case 'range':
                        case 'search':
                        case 'tel':
                        case 'text':
                        case 'time':
                        case 'url':
                        case 'week':
                            this.fields.push(new InputAutosaveNamespace.InputValue(element));
                            break;
                        default:
                            break;
                    }
                }
                else if (element.nodeName === 'TEXTAREA' || element.nodeName === 'textarea') {
                    this.fields.push(new InputAutosaveNamespace.ASTextarea(element));
                }
                else if (element.contentEditable === true || element.contentEditable == 'true') {
                    this.fields.push(new InputAutosaveNamespace.ASContentEditable(element));
                }
            });
        }
        loadSettings() {
            if (typeof Storage === 'undefined')
                return false;
            this.fields.forEach(field => {
                field.load();
            });
        }
        autosaveEnable() {
            if (typeof Storage === 'undefined')
                return false;
            this.fields.forEach(field => {
                field.autosaveEnable();
            });
        }
    }
    InputAutosaveNamespace.InputAutosave = InputAutosave;
})(InputAutosaveNamespace || (InputAutosaveNamespace = {}));
var InputAutosave = InputAutosaveNamespace.InputAutosave;
//# sourceMappingURL=index.js.map