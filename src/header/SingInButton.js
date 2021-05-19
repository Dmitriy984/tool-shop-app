export function SingInButton(props) {
    return (
        <button
            className="btn btn-secondary"
            onClick={props.showModalSingIn}
        > Sing In </button>
    )
}