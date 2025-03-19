export const ClearInputs = () => {
 
    document.querySelectorAll<HTMLInputElement>("input").forEach((input: any) => {    
      
        input.value = ""
    })
  
 
    document.querySelectorAll<HTMLTextAreaElement>("textarea").forEach((textarea: any) => {
    
        textarea.value = ""
    })

    document.querySelectorAll<HTMLInputElement>("input[type='checkbox']").forEach((checkbox: any) => {
    
        checkbox.checked = false 
    })
    
    document.querySelectorAll<HTMLInputElement>("input[type='radio']").forEach((radio: any) => {
    
        radio.checked = false 
    })
   
    document.querySelectorAll<HTMLSelectElement>("select").forEach((select: any) => {
    
        select.selectedIndex = 0 
    })
  

}