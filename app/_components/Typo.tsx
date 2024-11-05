export default function Typo({className = '', children, ...rest}) {
    return (
        <p className={`mx-auto text-sm leading-[1.7] ${className}`}>
            {children}
        </p>
    )
}