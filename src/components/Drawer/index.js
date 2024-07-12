function Drawer({ isOpen }){

    return <div className={`drawer_container ${isOpen ? 'drawer_container--isOpen': ''}`}>
        <div className="drawercontents__container">
            Hi! I am the drawer contents
        </div>
    </div>
}

export default Drawer;