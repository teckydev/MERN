import { Outlet } from "react-router-dom"
import { ShoppingHeader } from "./header"

export const ShoppingLayout = () =>{
    return(
        <div className="flex flex-col bg-white overflow-hidden">
        {/*common header*/}
        <ShoppingHeader></ShoppingHeader>
        <main className="flex flex-col w-full">
        <Outlet></Outlet>
        </main>
        </div>
    )
}