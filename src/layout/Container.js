import React from "react";

const Container = ({ children }) => {
    return (
        <div className="min-h-screen  mx-auto w-1265 flex">
            {children}
        </div>
    )
}
export default Container;