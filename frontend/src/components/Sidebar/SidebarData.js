import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Add Photo',
        path: '/upload',
        icon: <FaIcons.FaPlus />,
        className: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <IoIcons.IoIosLogOut />,
        className: 'nav-text'
    }
]