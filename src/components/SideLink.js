import React from "react";

const SideLink = ({name, Icon}) => {
    return(
        <li className="group">
            <a className="cursor-pointer block text-xl mb-2">
                <div className="inline-block">
                    <div className="flex items-center group-hover:bg-primary-light rounded-full pl-3 pr-8 py-3 group-hover:text-primary-base">
                        <Icon />
                        <span className="ml-4 font-bold">{name}</span>
                    </div>
                </div>
          
            </a>
        </li>
    )
}

export default SideLink;