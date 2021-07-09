import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// })

// unsubscribe();

store.dispatch(bugAdded("Bug 1"));

console.log(store.getState());

store.dispatch(bugResolved(1));

console.log(store.getState());

store.dispatch(bugRemoved(1));

console.log(store.getState());
