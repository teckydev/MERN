import { Outlet } from "react-router-dom"
import { AdminHeader } from "./header"
import { AdminSidebar } from "./sidebar"
import { useState } from "react"

export const AdminLayout=()=>{
  const [openSidebar,setOpenSidebar]=useState(false)
    return(
        <div className="flex min-h-screen w-full">
      {/*admin-sidebar*/}
      <AdminSidebar open={openSidebar} setOpen={setOpenSidebar}></AdminSidebar>
      <div className="flex flex-1 flex-col">
     {/*admin-header*/}
     <AdminHeader setOpen={setOpenSidebar}></AdminHeader>
     <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
       <Outlet></Outlet>
     </main>
      </div>
        </div>
    )
}