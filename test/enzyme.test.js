import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import App from '../app/components/App';

describe('Enzyme Shallow', function () {
  it('App title =? `TodoApp`', function () {
    let app = shallow(<App/>);
    expect(app.find('h1').text()).to.equal('TodoApp');
  });
});

describe('Enzyme Mount', function () {
  it('Delete item', function () {
    let app = mount(<App/>);
    let todoLength = app.find('li').length;
    app.find('.delete').at(0).simulate('click');
    expect(app.find('li').length).to.equal(todoLength - 1);
  });


  it('Add item', function () {
    let app = mount(<App/>);
    let todoLength = app.find('li').length;
    let addInput = app.find('input').get(0);
    addInput.value = 'Learn react ;)';
    app.find('.add-button').simulate('click');
    expect(app.find('li').length).to.equal(todoLength + 1);
  });
});
