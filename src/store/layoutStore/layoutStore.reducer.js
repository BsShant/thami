import {
 TRIGGER_SLIDER_COLLAPSE
} from "./layoutStore.Types";

const INITIAL_STATE = {
  sliderCollapse: false

};

export const layoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRIGGER_SLIDER_COLLAPSE:
      return {
        ...state,
        sliderCollapse: !state.sliderCollapse
      };
        default:
      return state;
  }
};
