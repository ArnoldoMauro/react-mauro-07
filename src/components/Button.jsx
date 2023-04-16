
const Button = (props) => {
    const styleButton = {
        backgroundColor: props.color,
    }

    return (
        <button className="btn"
        onClick={props.onPress}
        disabled={props.disabled}
        // className={styles.btn}
        style={styleButton}
        >
            {props.text}
            {props.children}
            </button>
    );
}
export default Button;