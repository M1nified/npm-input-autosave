'use strict';
describe('Checkbox', () => {

  beforeEach(() => {
    fixture.load('/tests/Screen1Test.html');
    let autosave = new InputAutosave(document.querySelectorAll("input"));
    localStorage.clear();
  });

  it('should store checkbox state on change', () => {
    document.getElementById('checkbox-1').checked = true;
    let change = document.createEvent('HTMLEvents');
    change.initEvent("change", false, true);
    document.getElementById('checkbox-1').dispatchEvent(change);
    expect(localStorage.getItem('checkbox-1')).toBe('true')
  });

});
