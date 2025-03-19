import React from "react";


export const AddFrontIdForm: React.FC<{ labels: { name: string; type: string }[] }> = ({ labels }) => {

    return <div className="flex flex-col items-center">
    {
        labels.map((label: { name: string; type: string }, index: any) => (
            <div key={index} className="flex items-center gap-2 w-full">
            <label className="text-gray-700 w-1/4 text-left pt-4 pl-28">{label.name}</label>
            <input
              type={label.type}
              accept=".pdf"
              name={label.name.toLowerCase().replace(/\s+/g, '')}
              className="border border-gray-300 p-1 pt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-[0_0_31%]"
            />
          </div>
          
        ))
    }
</div>


}