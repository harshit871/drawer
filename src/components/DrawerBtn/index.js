function DrawerBtn(props) {
    const { onClick } = props;

    return <button onClick={onClick}>
        Toggle Drawer
    </button>
}

export default DrawerBtn;