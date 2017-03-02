'use strict';
describe('Textarea', () => {


  beforeEach(() => {
    fixture.load('/tests/Screen1Test.html');
    let autosave = new InputAutosave(document.querySelectorAll("textarea"));
    localStorage.clear();
  });

  it('should store text on keypress', () => {
    document.getElementById('textarea-1').value = 'value 1';
    let keypress = document.createEvent('HTMLEvents');
    keypress.initEvent("keypress", false, true);
    document.getElementById('textarea-1').dispatchEvent(keypress);
    expect(localStorage.getItem('textarea-1')).toBe('value 1')
  });

  it('should store text on change', () => {
    document.getElementById('textarea-1').value = 'value 2';
    let change = document.createEvent('HTMLEvents');
    change.initEvent("change", false, true);
    document.getElementById('textarea-1').dispatchEvent(change);
    expect(localStorage.getItem('textarea-1')).toBe('value 2')
  });

});
