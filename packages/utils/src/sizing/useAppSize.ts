import { createContext, useContext } from "react";
import { AppSize, DEFAULT_APP_SIZE } from "./useAppSizeMedia";

/**
 * @private
 */
export const AppSizeContext = createContext<
  AppSize & { __initialized: boolean }
>({
  ...DEFAULT_APP_SIZE,
  __initialized: false,
});

/**
 * Gets the current app size.
 *
 * @return the current AppSize
 */
export default function useAppSize(): AppSize {
  const { __initialized, ...context } = useContext(AppSizeContext);
  if (!__initialized) {
    throw new Error(
      "Unable to get the current `AppSize` from `react-md` because the `AppSizeListener` " +
        "could not be found when using the `useAppSize` hook. To fix this error, either " +
        "initialize the `AppSizeListener` component from `@react-md/utils` or the " +
        "`Configuration` component from `@react-md/layout` near the root of your app.\n\n" +
        "Note: this error could also occur if there are multiple versions of `@react-md/utils` " +
        "installed in your app."
    );
  }

  return context;
}
