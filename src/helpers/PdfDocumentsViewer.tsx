// import React from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { GrClose } from 'react-icons/gr';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export const PdfDocumentsViewer = ({
    fileUrl,
    updateUrl
}: {
    fileUrl: string;
    updateUrl?: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const isPdf = fileUrl.toLowerCase().endsWith('.pdf');

    return (
        <div className='w-[80%] h-[90%] relative '>
            <div className=' w-full h-8 absolute -mt-8 flex items-center justify-end'>
                <GrClose
                    size={30}
                    className=' bg-white rounded-lg p-1 cursor-pointer'
                    onClick={() => updateUrl && updateUrl('')}
                />
            </div>
            {isPdf ? (
                <Worker
                    workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                >
                    <Viewer
                        fileUrl={fileUrl}
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </Worker>
            ) : (
                <img
                    src={fileUrl}
                    alt='Document Preview'
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        margin: 'auto'
                    }}
                />
            )}
        </div>
    );
};
