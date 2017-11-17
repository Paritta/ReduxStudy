import { watchFetchData } from "./index";
import { put } from "redux-saga/effects";

it("handle", assert => {
    const gen = watchFetchData();

    assert.deepEqual(
        gen.next().value,
        put({ type: "fetch/fetch_Success"})
    )
});
