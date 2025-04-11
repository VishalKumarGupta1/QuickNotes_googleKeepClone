
// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

// const Navlist = () => {

//     const navList = [
//         { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
//         { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
//         { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },
//     ]

//     return (
//         <>
//             <List>
//                 {
//                     navList.map((list, index) => (
//                         <ListItem button key={list.id} >
//                             <Link to={list.route} style={{textDecoration:'none',display:'flex',color:'inherit'}}>
//                                 <ListItemIcon style={{alignItems:'center' }}>
//                                     {list.icon}
//                                 </ListItemIcon>

//                                 <ListItemText primary={list.name} />
//                             </Link>

//                         </ListItem>
//                     ))}
//             </List>
//         </>
//     )
// }

// export default Navlist
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete, Margin } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Navlist = () => {

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },
    ];

    const linkStyle = {
        textDecoration: 'none',
        display: 'flex',
        color: 'inherit',
        padding: '8px 16px', // Adding some padding for better spacing
        borderRadius: '75px', // Optional for rounded corners
        transition: 'all 0.3s ease',
        paddingRight: '50px' // Smooth transition for background

    };

    const activeStyle = {
        backgroundColor: '#fcdea7', // Active background color
    };

    return (
        <List>
            {navList.map((list) => (
                <ListItem button key={list.id}>
                    <NavLink
                        to={list.route}
                        style={({ isActive }) => ({
                            ...linkStyle,
                            ...(isActive ? activeStyle : {}) // Apply active styles conditionally
                        })}
                    >
                        <ListItemIcon style={{ alignItems: 'center' }}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                    </NavLink>


                </ListItem>
            ))}
        </List>
    );
}

export default Navlist;
