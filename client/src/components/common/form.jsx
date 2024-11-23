import { SelectValue } from "@radix-ui/react-select";
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";


export const CommonForm=({formControls,formData,onSubmit,buttonText,setFormData})=>{
    function renderInputByComponentType(getControlItem){
     let element = null;
     const value=formData[getControlItem.name] || '';
     switch(getControlItem.componentType){
      case 'input':
        element=(<input name={getControlItem.name}
        placeholder={getControlItem.placeholder}
        id={getControlItem.name}
        type={getControlItem.type}
        value={value}
        onChange={event => setFormData({
            ...formData,
            [getControlItem.name]:event.target.value,
        })}
        ></input>)
      break;
      case 'select':
        element=(
            <Select onValueChange={
                (value)=>setFormData({
                    ...formData,
                    [getControlItem.name]:value
                })
            } value={value}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={getControlItem.placeholder}></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {
                       getControlItem.options && 
                       getControlItem.options.length>0?
                       getControlItem.options.map(optionItem=><SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>):null
                    }
                </SelectContent>
            </Select>
        )
      break;
      case 'textarea':
        element=(
            <Textarea name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            onChange={event => setFormData({
                ...formData,
                [getControlItem.name]:event.target.value,
            })}
            ></Textarea>
        )
      break;
      default:
        element=<input name={getControlItem.name}
        placeholder={getControlItem.placeholder}
        id={getControlItem.name}
        type={getControlItem.type}
        onChange={event => setFormData({
            ...formData,
            [getControlItem.name]:event.target.value,
        })}
        ></input>
        break;
     }
     return element;
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
               <div className="flex flex-col gap-3">
                {
                 formControls.map(controlItem => <div className="grid w-full gap-1.5" key={controlItem.name}>
                    <Label className="mb-1">{controlItem.label}</Label>
                    {
                      renderInputByComponentType(controlItem)  
                    }
                 </div>)
                }
                </div> 
               <Button type="submit" className="mt-2 w-full">{buttonText || 'Submit'}</Button>
            </form>
        </div>
    )
}