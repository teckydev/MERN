import { ProductImageUpload } from "@/components/admin-view/image-upload";
import { CommonForm } from "@/components/common/form";
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { addProductFormElements } from "@/config";
import { useState } from "react"
const initialFormData={
    image:null,
    title:'',
    description:'',
    category:'',
    brand:'',
    price:'',
    saleprice:'',
    totalStock:''
}
export const AdminProducts = ()=>{
    const [opencreateProductsDialog,setOpenCreateProductsDialog]=useState(false);
    const [formData,setFormData]=useState(initialFormData);
    const [imageFile,setImageFile]=useState(null)
    const[uploadedImageUrl,setUploadedImageUrl]=useState('')
    function onSubmit(){

    }
    return(
       <>
       <div className="mb-5 w-full flex justify-end">
        <Button onClick={()=>setOpenCreateProductsDialog(true)}>Add New Products</Button>
       </div>
       <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">

       </div>
       <Sheet open={opencreateProductsDialog} onOpenChange={()=>{
        setOpenCreateProductsDialog(false);
       }}>
       <SheetContent side="right" className="overflow-auto">
       <SheetHeader>
        <SheetTitle>Add new products</SheetTitle>
       </SheetHeader>
       <ProductImageUpload file={imageFile} setFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl}/>
       <div className="py-6">
       <CommonForm
       formData={formData}
       setFormData={setFormData}
       formControls={addProductFormElements}
       buttonText='Add'
       onSubmit={onSubmit}
       />
       </div>
       </SheetContent>
       </Sheet>
       </>
    )
}