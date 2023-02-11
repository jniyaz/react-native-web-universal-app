import Appbar from './Appbar'

const WebLayout = ({ children }) => {
    return (
        <>
            <Appbar />
            {children}
        </>
    )
}

export default WebLayout