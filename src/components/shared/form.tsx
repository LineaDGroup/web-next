"use client"
import Image from "next/image";
import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";
import Dialog from "./dialog";
import { ReactDOM } from "react";
export default function Form({children}: {children?: ReactNode}) {

  const { executeRecaptcha } = useReCaptcha();
  const [alertOptions, setAlertOptions] = useState({open: false, text: ''});
  const [responseText, setResponseText] = useState('');
  const [formVisible, setFormVisible] = useState(true);

  const dialogRef = useRef(null);

  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    // Generate ReCaptcha token
    const token = await executeRecaptcha("contactForm");

    // Attach generated token to your API requests and validate it on the server
    const form = e.target as HTMLFormElement;
        form.querySelectorAll('input,textarea').forEach((input: Element) => {
            const required = input.getAttribute('required')
            const value = (input as any).value;
            if(required && !value) {
                console.log(input.getAttribute('name') + ' is required');
                return;
            }

        })
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        data.token = token;
        dialogRef.current && (dialogRef.current as any).openDialog();
        try {
            const response = await fetch('/api/contact',
            {
                method: 'POST',
                body: JSON.stringify(data)
            });
            const responseBody = JSON.parse(await response.text());
            setResponseText( responseBody.message);
            if(responseBody.success) {
                form.querySelectorAll('input,textarea').forEach((input: Element) => {
                    (input as any).value = "";
                    (input as any).disabled = "disabled";
                })
            }
        } catch (error) {
            console.log(error);
        } finally {
            dialogRef.current && (dialogRef.current as any).closeDialog();
        }
  }, [executeRecaptcha]);

    return (
   
        <form onSubmit={handleSubmit} id="contactForm" className={`flex flex-col`}>
            {responseText && <p className={`text-xl mb-8`}>{responseText}</p>}
            {formVisible && children}
            <Dialog ref={dialogRef}>
                <div className={``}>Enviando</div>
            </Dialog>
        </form>
  );
}