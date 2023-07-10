import React from "react";

class ClassPureComponent extends React.PureComponent<{name : string}> {
    state : any;
    constructor (props : { name : string}) {
        super (props);
        this.state = {
            name : props.name,
        };
    }

    render () {
        console.log("Class")
        return (
            <div>
              {this.state.name}
            </div>
          )
    }
}

export default ClassPureComponent;