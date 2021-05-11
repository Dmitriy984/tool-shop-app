import React from "react";
import './SearchPanel.scss';

export default function SearchPanel() {
    return (
        <div className="input-group input-group-sm search-panel">
            <input
                type="text"
                className="form-control"
                placeholder="ToolShop search"
                aria-label="ToolShop search"
                aria-describedby="buttonAddon"
            />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="buttonAddon"
                >
                    Search
                </button>
            </div>
        </div>
    );
}