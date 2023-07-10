import React, {memo} from "react";

interface IProps {
    name : string;
}

const FunctionalPureComponent :React.FC<IProps> = ({name} : any) => {
    console.log("Func memo")
    return (
        <div>
            {name}
        </div>
    )
}

export  default memo(FunctionalPureComponent);