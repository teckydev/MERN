import { ProductImageUpload } from "@/components/admin-view/image-upload";
import { AdminProductTile } from "@/components/admin-view/product-title";
import { CommonForm } from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { addNewProduct, deleteProduct, editProduct, fetchAllProducts } from "@/store/admin/products-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  saleprice: "",
  totalStock: "",
};
export const AdminProducts = () => {
  const [opencreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  console.log(opencreateProductsDialog, "sheet");
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const { productList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();
  function onSubmit(event) {
    event.preventDefault();
    currentEditedId !== null ? dispatch(editProduct ({
      id:currentEditedId,formData

    })).then((data)=>{
      console.log(data,'editdata')
      if(data?.payload?.success){
        dispatch(fetchAllProducts());
        setFormData(initialFormData)
        setOpenCreateProductsDialog(false);
        setCurrentEditedId(null);
      }
    }):
    dispatch(
      addNewProduct({
        ...formData,
        image: uploadedImageUrl,
      })
    ).then((data) => {
      console.log(data, "add");
      if (data?.payload?.success) {
        //after getting data
        dispatch(fetchAllProducts()); //get the list of products
        setOpenCreateProductsDialog(false);
        setImageFile(null);
        setFormData(initialFormData);
        toast({
          title: "Product add successfully",
        });
      }
    });
  }
  function isFormValid(){
    return Object.keys(formData).map((key)=>formData[key] !== "").every((item)=>item)
  }
  function handleDelete(getCurrentProductId){
console.log(getCurrentProductId,'id')
dispatch(deleteProduct(getCurrentProductId)).then((data)=>{
  if(data?.payload?.success){
    dispatch(fetchAllProducts());
  }
})
  }
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(productList, uploadedImageUrl, "pl");
  return (
    <>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Products
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productList && productList.length > 0
          ? productList.map((productItem) => (
              <AdminProductTile
                setCurrentEditedId={setCurrentEditedId}
                setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                setFormData={setFormData}
                product={productItem}
                handleDelete={handleDelete}
              />
            ))
          : null}
      </div>
      <Sheet
        open={opencreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
          setCurrentEditedId(null)
          setFormData(initialFormData)
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>{
              currentEditedId !==null?"Edit Product":"Add New Product"
              }</SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            currentEditedId={currentEditedId}
            isEditMode={currentEditedId !==null}
          />
          <div className="py-6">
            <CommonForm
              formData={formData}
              setFormData={setFormData}
              formControls={addProductFormElements}
              buttonText={currentEditedId !==null ? 'Edit' : 'Add'}
              onSubmit={onSubmit}
              isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
