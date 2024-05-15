import { Outlet } from "react-router-dom"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent/HeaderComponent"




const RootComponent = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    )
}


export default RootComponent