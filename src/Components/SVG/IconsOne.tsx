import React from 'react';

interface IconProps {
  w: string | number;
  h: string | number;
  vh: string | number;
  vw: string | number;
  s?: React.CSSProperties;
  c?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  stroke?: string;
  fill?: string;
  strokeWidth?: string | number;
  className?: string;
}

export const BarIcons = {
  Hierarchy: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
      <path fillRule="evenodd" clipRule="evenodd" d="M4.375 5.25C2.92525 5.25 1.75 6.42525 1.75 7.875V14.875C1.75 16.3247 2.92525 17.5 4.375 17.5H14.875C16.3247 17.5 17.5 16.3247 17.5 14.875V7.875C17.5 6.42525 16.3247 5.25 14.875 5.25H4.375ZM23.625 8.75C22.1753 8.75 21 9.92525 21 11.375V23.625C21 25.0747 22.1753 26.25 23.625 26.25H30.625C32.0747 26.25 33.25 25.0747 33.25 23.625V11.375C33.25 9.92525 32.0747 8.75 30.625 8.75H23.625ZM6.125 21C4.67525 21 3.5 22.1753 3.5 23.625V27.125C3.5 28.5747 4.67525 29.75 6.125 29.75H16.625C18.0747 29.75 19.25 28.5747 19.25 27.125V23.625C19.25 22.1753 18.0747 21 16.625 21H6.125Z" />
    </svg>
  ),
  Employees: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
      <path d="M17.5 14C20.3995 14 22.75 11.6495 22.75 8.75C22.75 5.85051 20.3995 3.5 17.5 3.5C14.6005 3.5 12.25 5.85051 12.25 8.75C12.25 11.6495 14.6005 14 17.5 14Z" />
      <path d="M6.06405 25.3637C5.723 26.2527 6.02761 27.2492 6.77985 27.833C9.74147 30.1316 13.461 31.5 17.5002 31.5C21.5435 31.5 25.2665 30.1288 28.2296 27.826C28.9815 27.2417 29.2854 26.245 28.9438 25.3562C27.1776 20.7612 22.7223 17.5 17.5054 17.5C12.2856 17.5 7.82826 20.7648 6.06405 25.3637Z" />
    </svg>
  ),
  AccordianOpenClose: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} style={{ transition: 'enable-background:new 0 0 122.88 66.91', ...s }} width={w} height={h} onClick={onClick} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
      <path d="M11.68,1.95C8.95-0.7,4.6-0.64,1.95,2.08c-2.65,2.72-2.59,7.08,0.13,9.73l54.79,53.13l4.8-4.93l-4.8,4.95 c2.74,2.65,7.1,2.58,9.75-0.15c0.08-0.08,0.15-0.16,0.22-0.24l53.95-52.76c2.73-2.65,2.79-7.01,0.14-9.73 c-2.65-2.72-7.01-2.79-9.73-0.13L61.65,50.41L11.68,1.95L11.68,1.95z" />
    </svg>
  )
}
