import MainNavigation from "../components/MainNavigation"
import { Outlet, useNavigation } from "react-router-dom"
const Root = () => {

    // const  navigation = useNavigation()

    return (
        <>
            <MainNavigation></MainNavigation>
            {/* {navigation.state === 'loading' && <p>Loading...</p>}  */}
            <main><Outlet/></main>
        </>
    )
}

export default Root