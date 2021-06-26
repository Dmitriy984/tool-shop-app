import { createContext } from "react";

const { Provider: ToolShopApiProvider, Consumer: ToolShopApiConsumer } =
  createContext();

export { ToolShopApiProvider, ToolShopApiConsumer };
