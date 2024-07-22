import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import FloatingButton from './FloatingButton';

import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';

function Layout({title, footermessage, menu_list}) {
    return (
        <div className={styles.layout}>
            <Header title={title} />
            <div className={styles.page}>
                <Sidebar menu_list={menu_list} styles={styles} />
                <Outlet />
                <FloatingButton styles={styles}/>
            </div>
            <Footer message={footermessage} />
        </div>
    );
}

export default Layout;
