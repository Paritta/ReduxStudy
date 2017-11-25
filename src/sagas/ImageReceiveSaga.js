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

    return PostImageKey
}

export function* GetImage (PostImageKey) {
    const ExtractPostImageKey = Object.values(PostImageKey)[0];

    const Image = yield getFirebase()
        .database()
        .ref(`Images/${ExtractPostImageKey}`)
        .once("value")
        .then(res => {
            return res.val();
        });

    return Image;
}

export function* ImageReceive (action) {
    try {
        const PostImageKey = yield fork(GetPostImageKey, action);
        const Image = yield fork(GetImage, PostImageKey);

        yield put({ type: "image/image_receive_Success", payload: Image });
    } catch (error) {
        yield put({ type: "image/image_receive_Failure", payload: error })
        console.log(error);
    }
}

export function* watchImageReceive () {
    yield takeEvery("image/image_receive_Request", ImageReceive);
}


