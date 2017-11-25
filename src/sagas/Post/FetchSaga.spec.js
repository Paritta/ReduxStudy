import React from "react";
import { watchFetchData, fetchData, GetFirebase } from "./FetchSaga";
import { takeEvery, call, put } from "redux-saga/effects";

it("handle Fetch Saga", () => {
    const gen = watchFetchData();
    expect(gen.next().value).toEqual(
        takeEvery("fetch/fetch_Request", fetchData)
    );

    const genFetchData = fetchData();
    expect(genFetchData.next().value).toEqual(
         call(GetFirebase)
    );

    expect(genFetchData.next().value).toEqual(
         put({ type: "fetch/fetch_Success", payload: [] })
    );

    // expect(genFetchData.error("error").value).toEqual(
    //     put({ type: "fetch/fetch_Success", payload: [] })
    // );
});
