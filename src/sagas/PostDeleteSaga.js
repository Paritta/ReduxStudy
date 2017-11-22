import { put, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

function* PostDelete (action) {
    try {
        yield getFirebase()
            .database()
            .ref("posts/"+action.payload)
            .remove();

        yield put({ type: "post/post_delete_Success" });
    } catch (error) {
        yield put({ type: "post/post_delete_Failure", payload: error })
    }
}

export function* watchPostDelete () {
    yield takeEvery("post/post_delete_Request", PostDelete)
}

