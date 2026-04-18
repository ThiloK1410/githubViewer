import "./Header.css";

type HeaderProps = {
    setUsername: (v: string) => void,
}

export const Header = ({setUsername}: HeaderProps) => {
    return (
        <div id="header-div">
            Test
        </div>
    )
}