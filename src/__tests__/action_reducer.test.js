import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "../sharedComponents/searchBar";
import { render, fireEvent, cleanup } from "@testing-library/react";
import reducers from "../store/reducers/reducers";
import { onFetchSearchResult } from "../store/actions";
import {
  FETCH_SEARCH_RESULT_SAGA,
  FETCH_SEARCH_RESULT
} from "../store/actions/types";
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup);

// describe('test the reducer and actions', () => {
//   it('should return the initial state', () => {
// expect(reducers.initialState).toEqual({})
//   })

//   it('should change', () => {
//     expect((reducers.initialState, onFetchSearchResult ))
//       .toEqual({ ...reducers.initialState, searchResult : onFetchSearchResult.payload })
//   })

// })

describe("actions", () => {
  it("create action to call saga", () => {
    const searchValue = "text";
    const actionCreator = { type: FETCH_SEARCH_RESULT_SAGA, searchValue };
    expect(onFetchSearchResult(searchValue)).toEqual(actionCreator);
  });
});
