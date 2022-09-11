import {
  COLLAPSE_MENU,
  COLLAPSE_TOGGLE,
  FULL_SCREEN,
  FULL_SCREEN_EXIT,
  CHANGE_LAYOUT,
  NAV_CONTENT_LEAVE,
  NAV_COLLAPSE_LEAVE,
  SHOW_MODAL,
  EXIT_MODAL,
  GENERATE_COLOR
} from "../actions/types";
import config from "../../config";

const initialState = {
  isOpen: [], //for active default menu
  isTrigger: [], //for active default menu, set blank for horizontal
  ...config,
  isFullScreen: false,
  showModal: false,
  openedModal: "",
  colorsArray: []
  // static can't change
};

const reducer = (state = initialState, action) => {
  let trigger = [];
  let open = [];

  switch (action.type) {
    case COLLAPSE_MENU:
      return {
        ...state,
        collapseMenu: !state.collapseMenu
      };
    case COLLAPSE_TOGGLE:
      if (action.menu.type === "sub") {
        open = state.isOpen;
        trigger = state.isTrigger;

        const triggerIndex = trigger.indexOf(action.menu.id);
        if (triggerIndex > -1) {
          open = open.filter(item => item !== action.menu.id);
          trigger = trigger.filter(item => item !== action.menu.id);
        }

        if (triggerIndex === -1) {
          open = [...open, action.menu.id];
          trigger = [...trigger, action.menu.id];
        }
      } else {
        open = state.isOpen;
        const triggerIndex = state.isTrigger.indexOf(action.menu.id);
        trigger = triggerIndex === -1 ? [action.menu.id] : [];
        open = triggerIndex === -1 ? [action.menu.id] : [];
      }

      return {
        ...state,
        isOpen: open,
        isTrigger: trigger
      };
    case NAV_CONTENT_LEAVE:
      return {
        ...state,
        isOpen: open,
        isTrigger: trigger
      };
    case NAV_COLLAPSE_LEAVE:
      if (action.menu.type === "sub") {
        open = state.isOpen;
        trigger = state.isTrigger;

        const triggerIndex = trigger.indexOf(action.menu.id);
        if (triggerIndex > -1) {
          open = open.filter(item => item !== action.menu.id);
          trigger = trigger.filter(item => item !== action.menu.id);
        }
        return {
          ...state,
          isOpen: open,
          isTrigger: trigger
        };
      }
      return { ...state };
    case FULL_SCREEN:
      return {
        ...state,
        isFullScreen: !state.isFullScreen
      };
    case FULL_SCREEN_EXIT:
      return {
        ...state,
        isFullScreen: false
      };
    case CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.layout
      };
    case SHOW_MODAL:
      return { ...state, showModal: true, openedModal: action.payload };

    case EXIT_MODAL:
      return { ...state, showModal: false, openedModal: "" };

    case GENERATE_COLOR: {
      return {
        ...state,
        colorsArray: [...state.colorsArray, action.payload]
      };
    }
    default:
      return state;
  }
};

export default reducer;
