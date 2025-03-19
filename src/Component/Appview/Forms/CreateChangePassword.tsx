import React from "react";
import { useState } from "react";


    export const ChangePasswordForm: React.FC<{ labels: { name: string; type: string , regex:  RegExp | null}[] }> = ({ labels }) => {   
        // const [vlaidation, setVlaidation] = useState<boolean>(false);
        const [FeildText, setFeildText] = useState<string>("");
        return <div className="flex flex-col items-center">
        {
            labels.map((label: { name: string; type: string,regex : RegExp | null }, index: any) => (
                <div key={index} className="flex items-center gap-11 pt-2 pl-3 w-full max-w-lg" >
                {/* <label className="text-gray-700 w-1/4 text-right">{label.name}</label> */}
                <input
                    type={label.type}
                    accept=".pdf"
                    
                    name={label.name.toLowerCase().replace(/\s+/g, '') as string}
                    className="border border-gray-300 p-1 pl-3  focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                onChange={e => setFeildText(e.target.value as string) }
               
                />
                {
                !label.regex?.test(FeildText) &&  <div>
 Error
    
</div>
    
                }

                
            </div>
            ))
        }
    </div>


    }