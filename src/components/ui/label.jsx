"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className, styles , data,
  ...props
}) {
  
  function styling(styles){
    if(styles == "form_input"){
      return `text-gray-500 text-xs md:text-sm bg-white px-1 mt-3 `
    }
    else{
      return `${styles}`
    }
  }

  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        styling(styles),
        className
      )}
      {...props} >{data}</LabelPrimitive.Root>
  );
}

export { Label }
