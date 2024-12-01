import { useRef } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { UploadCloudIcon } from "lucide-react"

export const ProductImageUpload = ({
    imageFile,
    setImageFile,
    uploadedImageUrl,
    setUploadedImageUrl
}) =>{
    const inputRef=useRef(null)
    function handleImageFileChange(event){
    const selectedFile=event.target.files?.[0];
    if(selectedFile) setImageFile(selectedFile)
    }
function handleDragOver(){

}
function handleDrop(){
    
}
  return(
    <div className="w-full max-w-md mx-auto mt-4">
    <Label className="text-lg font-semibold mb-2 block">Upload image</Label>
    <div onDragOver={handleDragOver} onDrop={handleDrop} className="border-2 border-dashed rounded-lg p-4">
        <Input id="image-upload" type="file"  ref={inputRef} className="hidden" onChange={handleImageFileChange}></Input>
        {
            !imageFile?<Label htmlFor="image-upload" className="flex flex-col items-center justify-center h-32 cursor-pointer">
                <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2"/>
                <span>Drag & drop or click to upload image</span>
            </Label>:<div></div>

        }
    </div>
    </div>
  )  
}