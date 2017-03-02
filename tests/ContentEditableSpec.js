'use strict';
describe('ContentEditable', () => {


  beforeEach(() => {
    fixture.load('/tests/Screen1Test.html');
    let autosave = new InputAutosave(document.querySelectorAll(".editable"));
    localStorage.clear();
  });

  it('should store text on keypress', () => {
    document.getElementById('contenteditable-1').innerHTML = 'value 1';
    let keypress = document.createEvent('HTMLEvents');
    keypress.initEvent("keypress", false, true);
    document.getElementById('contenteditable-1').dispatchEvent(keypress);
    expect(localStorage.getItem('contenteditable-1')).toBe('value 1')
  });

  it('should store text on change', () => {
    document.getElementById('contenteditable-1').innerHTML = 'value 2';
    let change = document.createEvent('HTMLEvents');
    change.initEvent("change", false, true);
    document.getElementById('contenteditable-1').dispatchEvent(change);
    expect(localStorage.getItem('contenteditable-1')).toBe('value 2')
  });

});
