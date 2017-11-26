import React from "react";
import { watchFetchData, fetchData, GetFirebase } from "./PostFetchSaga";
import { takeEvery, call, put } from "redux-saga/effects";

it("handle Fetch Saga", () => {
    const gen = watchFetchData();
    expect(gen.next().value).toEqual(
        takeEvery("fetch/fetch_Request", fetchData)
    );

    const action = undefined;

    const genFetchData = fetchData();
    expect(genFetchData.next().value).toEqual(
         call(GetFirebase, action)
    );

    expect(genFetchData.next().value).toEqual(
         put({ type: "fetch/fetch_Success", payload: [] })
    );
});
