import React from "react";

const SideLink = ({name, Icon, active, onMenuItemClick}) => {
    const isActive = active === name;
    return(
        <li className="group" onClick={() => onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className="cursor-pointer  justify-center block text-sm md:text-xl mb-3 md:mb-5 pointer-events-none">
                <div className="flex justify-start">
                    <div className={`flex items-center group-hover:bg-primary-light rounded-full pl-3  py-2 group-hover:text-primary-base
                    ${isActive ? "text-primary-base": ""}
                    `}>
                        <Icon className="w-7 h-7"/>
                        <span className="ml-4 font-bold block">{name}</span>
                    </div>
                </div>
          
            </a>
        </li>
    )
}

export default SideLink;