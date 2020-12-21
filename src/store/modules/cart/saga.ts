import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchProducts() {
  const json = yield fetch('http://localhost:3001/products')
        .then(response => response.json(), );    
  yield put({ type: "PRODUCTS_RECEIVED", json: json.products, });
}
function* actionWatcher() {
     yield takeLatest('GET_PRODUCTS', fetchProducts)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}