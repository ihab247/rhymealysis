import React from "react";
import "./TabBar.css";


class TabBar extends React.Component<{}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return <div id="tab-bar">
            <button>Untitled</button>
            <button>➕</button>
        </div>
    }

}

export default TabBar;