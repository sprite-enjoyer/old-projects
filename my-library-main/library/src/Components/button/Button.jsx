
const Button = ({onClickHandler, type='button', className=undefined, children = null}) => {
    return(
        <button className={className} onClick={onClickHandler} type={type}>{children}</button>
    )
}

export default Button;