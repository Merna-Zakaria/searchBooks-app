import React from "react";
import { mapStateToProps } from "../sharedComponents/searchBar";
import { create } from "react-test-renderer";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../store/reducers/index";
import App from "../App";
import {setupTests} from '../../src/setupTests';



describe("test form", () => {
      beforeEach( () => {
      const sagaMiddleware = createSagaMiddleware();

      const store = createStore(reducers, applyMiddleware(sagaMiddleware));

      const component = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
    })
  it("should create an entry in component state with the event value", () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducers, applyMiddleware(sagaMiddleware));

    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    //   console.log(component.debug());
    const wrapper = component.find("form");
    const input = wrapper.find("input");
    console.log(input.debug());
    //   const value=input.find(`[value]`)
    const item = input.instance().value;
    expect(input).toHaveLength(1);
    expect(item).toBe("");
  });

  it("click after search value", () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, applyMiddleware(sagaMiddleware));

    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const button = component.find("button").at(1);
    // console.log(button.debug());
    button.simulate("click");
    const wrapper = component.find("form");
    const input = wrapper.find("input");
    // console.log(input.debug());
    const item = input.instance().value;
    // console.log(item);
    expect(item).not.toBe(" ");
  });
});

describe("map state to props", () => {
  it("test state in component", () => {
    const expectedState = {
      description: "about react",
      authore: ["merna", "haidy"]
    };

    const state = {
      searchResult: expectedState
    };

    const componentState = mapStateToProps(state);
    const expectedObject = { searchResult: expectedState };
    console.log("hiiiiiiiiiiiiii", expectedObject);
    expect(componentState).toEqual(expectedObject);
  });

  it("search component snapshot", () => {
    const tree = renderer.create(<searchResult />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("test local state", () => {
  it("test input in search bar component", () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducers, applyMiddleware(sagaMiddleware));

    const component = mount(
      <Provider store={store}>expect(wrapper.instance().state.searchBox).toBe("")
        <App />
      </Provider>
    );
    // const wrapper = mount(<SearchBar />);
    const wrapper = component.find("SearchBar");
    console.log(wrapper.debug());
    expect(wrapper.instance().state.searchBox).toBe("");
  });
});



plugins: [
  ["@babel/plugin-proposal-class-properties"],
  ["@babel/transform-runtime"]
]
