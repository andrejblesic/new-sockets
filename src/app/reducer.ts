import { Action } from "@ngrx/store";

export function reducer(state:object = {}, action: Action) {
  console.log(action.type, state);

  switch(action.type) {
    case "PRICES":
      state = action.message;
      console.log(state);
      return state;
  }
}
