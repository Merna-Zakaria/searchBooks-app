import React from "react";
import SearchBar, { mapStateToProps } from "../sharedComponents/searchBar";
import { create } from "react-test-renderer";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../store/sagas/saga";
import reducers from "../store/reducers/index";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "../App";
import mockAxios from "axios";
import api from "../store/apis/api";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// const countProps = {
//   counter:10
// }

// const component = shallow(<Counter {...countProps} />)

describe("test form", () => {
  //     beforeEach( () => {
  //     const sagaMiddleware = createSagaMiddleware();

  //     const store = createStore(reducers, applyMiddleware(sagaMiddleware));

  //     const component = mount(
  //       <Provider store={store}>
  //         <App />
  //       </Provider>
  //     );
  //   })
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
      <Provider store={store}>
        <App />
      </Provider>
    );
    // const wrapper = mount(<SearchBar />);
    const wrapper = component.find("SearchBar");
    console.log(wrapper.debug());
    expect(wrapper.instance().state.searchBox).toBe("");
  });
});

// describe("<searchBar/>", () => {
//   it("serchbar input should be found and have empty value", () => {
//     const sagaMiddleware = createSagaMiddleware();

//     const store = createStore(reducers, applyMiddleware(sagaMiddleware));

//     const component = mount(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//     // console.log(wrapper.debug());
//     expect(component.find("#searchInput")).toHaveLength(1);
//   });
// });

export default {
  get: jest.fn(() => Promise.resolve({ data: {} }))
};

it("should call a fetchData function", done => {
  // api
  //   .fetchSearchResult(
  //     `/https://www.googleapis.com/books/v1/volumes?q=${searchValue}`,
  //     {}
  //   )
  const searchValue = "react";
  const spy = jest.spyOn(api, "fetchSearchResult");
  const hhh = api.fetchSearchResult(searchValue).then(res => {
    expect(res).toEqual({
      data: {}
    });
  });
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(1);
  // expect(hhh).toBe(true);
  // api.mockRestore();
  // const hhh = api.fetchSearchResult(searchValue).then(response => {
  //   expect(response).toEqual({
  //     data: {}
  //   });
  // });
  // expect(mockAxios.get).toHaveBeenCalledWith({
  //   method: "get",
  //   url: `/https://www.googleapis.com/books/v1/volumes?q=${searchValue}`
  // });
  // expect(consoleErrorSpy).not.toHaveBeenCalled();
  done();
});
