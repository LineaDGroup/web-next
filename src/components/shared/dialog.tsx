import Image from "next/image";
import { forwardRef, ReactNode, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";

const Dialog =  forwardRef(({children,open}:any,ref) =>{
    const [isOpen,setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openDialog() {
      setIsOpen(true);
    },
    closeDialog() {
        setIsOpen(false);
    },
  }));

  const closeHandler = ()=>{
    setIsOpen(false)
  }
    return (
   
        <dialog open={isOpen} className={`fixed open:flex items-center justify-center w-full h-full top-0 left-0 bg-black/50`}>
            <div className={`absolute top-32 right-32 p-4`} onClick={closeHandler}>x</div>
            {children}
        </dialog>
  );
});

Dialog.displayName = "Dialog";

export default Dialog;