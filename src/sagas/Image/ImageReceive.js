import { put, takeEvery, call, fork } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* GetPostImageKey (action) {
    const PostImageKey = yield getFirebase()
        .database()
        .ref(`posts/${action.payload}/PostImageKey`)
        .once("value")
        .then(res => {
            return res.val();
        });

    yield call(GetImage, PostImageKey)
}

export function* GetImage (PostImageKey) {
    if (PostImageKey) {
        const ExtractPostImageKey = Object.values(PostImageKey)[0];

        const Image = yield getFirebase()
            .database()
            .ref(`Images/${ExtractPostImageKey}`)
            .once("value")
            .then(res => {
                return res.val();
            });

        yield put({ type: "image/image_receive_Success", payload: Image });
    } else {
        yield put({ type: "image/image_receive_Failure" });
    }
}

export function* ImageReceive (action) {
    try {
        yield fork(GetPostImageKey, action);
    } catch (error) {
        console.log(error);
        yield put({ type: "image/image_receive_Failure", payload: error });
    }
}

export function* watchImageReceive () {
    yield takeEvery("image/image_receive_Request", ImageReceive);
}


