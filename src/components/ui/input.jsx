import * as React from "react";

import { cn } from "@/lib/utils";

function styling(styles){
  if ( styles === "text" ){
    return `border-gray-500 w-full rounded-xl text-xs px-4 py-6`
  }else{
    return `${styles}`
  }
}

function Input({ className, styles ,  type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-transparent",
        "file:text-foreground placeholder:text-muted-foreground selection:bg-transparent selection:text-primary-foreground dark:bg-transparent border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        styling(styles),
        className
      )}
      {...props}
    />
  );
}

export { Input };
