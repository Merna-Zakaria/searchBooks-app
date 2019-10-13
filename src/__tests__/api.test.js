import api from "../store/apis/api";
import React from "react";
import App from '../App';
import { Provider } from "react-redux";
// import axios from "axios";
import mockAxios from 'axios';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../store/reducers/index";
import { mount } from "enzyme";
import {setupTests} from '../../src/setupTests';


import configureMockStore from 'redux-mock-store';






// describe("api", () => {
//   it("search value should not be empty and api return", done => {
//     var mock = new MockAdapter(axios);
//     const data = { key: 'merna' };
//     const searchValue = "react";
//     mock.onGet(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`).reply(200, data);

//     api.fetchSearchResult(searchValue).then(response => {
//       console.log(response);
//       expect(response.data).toEqual(data);
//       done();
//     });
//   });
// });

it("should call a fetchData function", done => {
  const searchValue = "react";
  const spy = jest.spyOn(api, "fetchSearchResult");
  const data = { key: 'merna' };
  const hhh = api.fetchSearchResult(searchValue).then(res => {
    console.log(res);
    expect(res.data).toEqual(data);
  });
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(1);
  
  done();
});






it("search value should be found, api return with state 200", () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducers, applyMiddleware(sagaMiddleware));

   
    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const form = component.find("form")
    const input = form.find("input");
    console.log(input) 
    const wrapper = component.find("SearchBar");
    wrapper.setState({ searchBox: "merna" });
    expect(wrapper.instance().state.searchBox).toBe("merna")

    const hhh =input.simulate('change', { target: { value: 'Hello' } })
    const item = input.instance().value
    expect(item).toBe("Hello");

    const spy = jest.spyOn(api, "fetchSearchResult");
    expect(spy).toHaveBeenCalledTimes(1)
  
  });


  it("fetches results from google books api", () => {
     api.fetchSearchResult().then(response => {
        expect(response).toEqual( {"data": {}});
      });
      // expect(mockAxios.get).toHaveBeenCalledTimes(2)
      const searchValue = "react";
      expect(mockAxios.get).toHaveBeenCalledWith(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`,
      
      );
    });


