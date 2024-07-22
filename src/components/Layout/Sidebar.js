import { NavLink } from "react-router-dom";

function getNavLinkClassName({ isActive, styles }) {
    if(isActive) {
        return [styles.sidebarLink, styles.sidebarLinkActive].join(' ');
    }
    return styles.sidebarLink;
}

function Sidebar({ menu_list, styles}) {
    return (
        <div>
            <nav className={styles.sideNavbar}>
                {menu_list.map((menu) => (
                    <div key={menu.menu_id} className={styles.sidebarItem}>
                        <NavLink to={menu.url} className={({ isActive }) => getNavLinkClassName({isActive,styles})}>
                            <span>{menu.title}</span>
                        </NavLink>
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;