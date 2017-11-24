import { put, takeEvery, call } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* GetFireBase(action) {
    // image 추가
    // console.log(action.payload);
    const Image = action.payload;
    const data = yield getFirebase()
        .push("Images", Image);

    return data;
}

export function* PushFireBase(action, data) {
    // // 해당 포스트에 image key push
    yield getFirebase()
        .push("posts/"+action.payload.PostId+"/PostImageKey", data.key);
}

export function* ImageSend (action) {
    try {
        const data = yield call(GetFireBase, action);

        const arg = [action, data];
        yield call(PushFireBase, ...arg);
        yield put({ type: "image/image_receive_Success" });
    } catch (error) {
        yield put({ type: "image/image_receive_Failure", payload: error })
    }
}

export function* watchImageSend () {
    yield takeEvery("image/image_receive_Request", ImageSend);
}


