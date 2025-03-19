 
 

export const Reducer = (state: {updateValue?: any}, action: {type: string; payload?: any; }): {updateValue?: any} => {
  switch (action.type) {
    case "UPDATE_USER": {
      return { ...state, updateValue: action.payload };
    }

    default: {
      return state;
    }
  }
};
