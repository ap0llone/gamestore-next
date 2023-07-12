import React from "react";
import { RotateLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="w-full h-[80vh] flex items-center justify-center">
            <RotateLoader color="#ffbf00" loading speedMultiplier={1} />
        </div>
    );
};

export default Loading;
