import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

// describe('ProfileStatus component', () => {
//   const testingText = 'testing status bla-bla-bla';
//   const component = create(<ProfileStatus status={testingText} />);
//   const root = component.root;
//   console.log(component.getInstance.state)

//   test('status from props should be in the state', () => {
//     const instance = component.getInstance();
//     expect(instance.state.status).toBe(testingText);
//   });
  // test(`after creation <span> should be displayed`, () => {
  //   const span = root.findByType('span');
  //   expect(span).not.toBeNull();
  // });
  // test(`after creation <input> shouldn't be displayed`, () => {
  //   expect(() => {
  //     root.findByType('input');
  //   }).toThrow();
  // });
  // test(`<span> should contain a correct status`, () => {
  //   const span = root.findByType('span');
  //   expect(span.children[0]).toBe(testingText);
  // });
  // test(`<input> should be displayed in edit mode instead of <span>`, () => {
  //   const span = root.findByType('span');
  //   span.props.onDoubleClick();
  //   const input = root.findByType('input');
  //   expect(input.props.value).toBe(testingText);
  // });
  // test(`callback should be called`, () => {
  //   const mockCallback = jest.fn();
  //   const component = create(<ProfileStatus status={testingText} updateUserStatus={mockCallback} />);
  //   const instance = component.getInstance();
  //   instance.deactivateEditMode();
  //   expect(mockCallback.mock.calls.length).toBe(1);
  // });
// });