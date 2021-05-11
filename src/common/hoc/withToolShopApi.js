import React from "react";
import { ToolShopApiConsumer } from "../../api/toolShopApiContext";

export default function withToolShopApi() {
  return (Wrapped) => {
    return (props) => {
      return (
        <ToolShopApiConsumer>
          {(toolShopApi) => {
            return <Wrapped {...props} toolShopApi={toolShopApi} />;
          }}
        </ToolShopApiConsumer>
      );
    };
  };
}
