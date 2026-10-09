import Appbar from './Appbar'

const WebLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Appbar />
            {children}
        </>
    )
}

export default WebLayout