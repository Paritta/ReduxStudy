import { put, takeEvery, call } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* HeartRemove(action) {
    // const PostId = action.payload.postid;
    // cont Email = action.payload.Email;

    // const RefData = yield getFirebase()
    //     .database()
    //     .ref(`posts/${PostId}/HeartUser`);
    //
    // for(let key in RefData) {
    //     if(Email === RefData[key]) {
    //         yield getFirebase()
    //             .database()
    //             .ref(`posts/${PostId}/HeartUser/${key}`)
    //             .remove();
    //     }
    // }
}

export function* HeartDelete (action) {
    try {
        yield call(HeartRemove, action);
        yield put({ type: "heart/heart_delete_Success" });
    } catch (error) {
        yield put({ type: "heart/heart_delete_Failure", payload: error })
    }
}

export function* watchHeartDelete () {
    yield takeEvery("heart/heart_delete_Request", HeartDelete);
}
