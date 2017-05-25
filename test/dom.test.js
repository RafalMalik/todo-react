import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import App from '../app/components/App';
import {findDOMNode} from 'react-dom';
import jsdom from 'jsdom';

describe('DOM Rendering', function () {
  it('Click the delete button, item should be deleted', function () {
    const app = TestUtils.renderIntoDocument(<App/>);
    let todoItems = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
    let todoLength = todoItems.length;
    let deleteButton = todoItems[0].querySelector('.delete');
    TestUtils.Simulate.click(deleteButton);
    let todoItemsAfterClick = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
    expect(todoItemsAfterClick.length).to.equal(todoLength - 1);
  });

    it('Add an new item, when click the new todo button', function () {
        const app = TestUtils.renderIntoDocument(<App/>);
        const appDOM = findDOMNode(app);
        let todoItemsLength = appDOM.querySelectorAll('.todo-name').length;
        let addInput = appDOM.querySelector('input');
        addInput.value = 'Learn react :D';
        let addButton = appDOM.querySelector('.add-todo button');
        TestUtils.Simulate.click(addButton);
        expect(appDOM.querySelectorAll('.todo-name').length).to.be.equal(todoItemsLength + 1);
    });
});




