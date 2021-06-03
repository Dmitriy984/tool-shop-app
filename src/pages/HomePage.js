import React from "react";
import GoodGridContainer from "../goodGrid/GoodGrid";

export default function HomePage({ updateCartBlockHeader }) {
    return (
        <div>
            <GoodGridContainer updateCartBlockHeader={updateCartBlockHeader} />
        </div>
    );
}
