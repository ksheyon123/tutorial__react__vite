import React from "react";

interface IProps {
    name : string;
}

const FunctionalPureComponent :React.FC<IProps> = ({name} : any) => {
    console.log("Func")
    return (
        <div>
            {name}
        </div>
    )
}

export  default FunctionalPureComponent;