export default store => next => action => {
    console.log("store ::: ", store)
    typeof action == 'function'
        ? action(store.dispatch, store.getState)
        : next(action);
}