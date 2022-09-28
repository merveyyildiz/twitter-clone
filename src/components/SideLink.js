import React from "react";

const SideLink = ({name, Icon, active, onMenuItemClick}) => {
    const isActive = active === name;
    return(
        <li className="group" onClick={() => onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className="cursor-pointer flex justify-center 2xl:block text-xl mb-1 2xl:mb-5 pointer-events-none">
                <div className="flex justify-center 2xl:justify-start">
                    <div className={`flex items-center group-hover:bg-primary-light rounded-full p-2 2xl:pl-3 2xl:pr-8 2xl:py-2 group-hover:text-primary-base
                    ${isActive ? "text-primary-base": ""}
                    `}>
                        <Icon className="w-7 h-7"/>
                        <span className="ml-4 font-bold hidden 2xl:block">{name}</span>
                    </div>
                </div>
          
            </a>
        </li>
    )
}

export default SideLink;