import { put, takeEvery, call } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* AddAndPush(action) {
    // image 추가
    const Image = action.payload;
    const data = yield getFirebase()
        .push("Images", Image);

    // // 해당 포스트에 image key push
    yield getFirebase()
        .push("posts/"+action.payload.PostId+"/PostImageKey", data.key);
}

export function* ImageSend (action) {
    try {
        yield call(AddAndPush, action);
        yield put({ type: "image/image_send_Success" });
    } catch (error) {
        console.log(error);
        yield put({ type: "image/image_send_Failure", payload: error })
    }
}

export function* watchImageSend () {
    yield takeEvery("image/image_send_Request", ImageSend);
}


