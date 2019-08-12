/**
 * # Context logic for custom inline modals
 *
 * I wanted a greater level of granular control over how modals work, so this
 * implementation has been created to fulfil that need.
 *
 * Basically, it provides three states (opening, visible and closing).
 *
 * 1. The component mounts. The state can be switched to **opening**. At this
 *    point, and setup logic can be run. This can include fading in a backdrop/
 *    blurring underliying elements etc, or running some fetch logic.
 * 2. Once this is completed, switch to **visible**. The modal dialog itself
 *    can now be displayed.
 * 3. Once a control to dismiss the dialog is triggered, then the state swtiches
 *    to **closing**. This allows any cleanup logic to execute _before_ the
 *    component is unmounted (for example, simply fading the backdrop out).
 */

import React from "react";

type Action = "load_modal" | "show_modal" | "close_modal";
enum State {
  Opening = "opening",
  Visible = "visible",
  Closing = "closing",
}
type Dispatch = (action: Action) => void;
type ModalProviderProps = { children: React.ReactNode };

const ModalStateContext = React.createContext<State | undefined>(undefined);
const ModalDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function modalReducer(_state: State, action: Action): State {
  switch (action) {
    case "load_modal":
      return State.Opening;
    case "show_modal":
      return State.Visible;
    case "close_modal":
      return State.Closing;
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}

function ModalProvider({ children }: ModalProviderProps) {
  const [state, dispatch] = React.useReducer(modalReducer, State.Opening);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

function useModalState() {
  const context = React.useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error("useModalState must be used within a ModalProvider");
  }
  return context;
}

function useModalDispatch() {
  const context = React.useContext(ModalDispatchContext);
  if (context === undefined) {
    throw new Error("useModalDispatch must be used within a ModalProvider");
  }
  return context;
}

export { ModalProvider, useModalState, useModalDispatch };
