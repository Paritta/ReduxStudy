import React from "react";
import { watchFetchData, fetchData } from "./FetchSaga";
import { takeEvery } from "redux-saga/effects";

it("handle Fetch Saga", () => {
    const gen = watchFetchData();
    expect(gen.next().value).toEqual(
        takeEvery("fetch/fetch_Request", fetchData)
    );

    expect(gen.next().value).toEqual(

    )
});
