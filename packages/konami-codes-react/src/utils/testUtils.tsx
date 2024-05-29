import React, { PropsWithChildren } from "react";
import { RenderOptions, RenderResult, render } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

interface CustomRenderOptions extends RenderOptions {
  AdditionalWrapper?: ({ children }: React.PropsWithChildren) => JSX.Element;
  text?: Text;
}

export interface CustomRenderResult extends RenderResult {
  user: UserEvent;
}

const customRender = (
  ui: JSX.Element,
  options: CustomRenderOptions
): CustomRenderResult => {
  return {
    ...render(ui, { wrapper: AllTheProviders, ...options }),
    user: userEvent.setup(),
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
