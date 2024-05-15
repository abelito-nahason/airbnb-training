

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const SearchBarInput = (props:InputProps) => {
    
    return (
        <input {...props} className={`outline-none bg-transparent ${props.className}`} />
    )
}

export default SearchBarInput