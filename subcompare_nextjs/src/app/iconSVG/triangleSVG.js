export default function TriangleIcon(props) {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" className={props.className}>
            <path
                d="M12.5 2 L2 23 L23 23 Z"
                fill="#F8F0E5"
                stroke="#000000"
                strokeWidth="1"
                transform="translate(12.5, 12.5) rotate(90) translate(-12.5, -12.5)"
            />
        </svg>
    )
}