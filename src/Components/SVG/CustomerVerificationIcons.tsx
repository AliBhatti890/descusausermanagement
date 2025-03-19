import React from 'react';

interface IconProps {
  w?: string | number;
  h?: string | number;
  vh?: string | number;
  vw?: string | number;
  s?: React.CSSProperties;
  c?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  stroke?: string;
  fill?: string;
  strokeWidth?: string | number;
  className?: string;
}

export const CustomerVerificationIcons = {
  KycGuard_FavIcon: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.4697 23.4282V16.2087L18.9096 46.1958L0.530273 34.1485V51.9507C0.530273 53.5254 1.40458 54.9689 2.79135 55.6821L25.6238 67.4353C26.8035 68.0427 28.1965 68.0427 29.3762 67.4353L52.2086 55.6821C53.5954 54.9689 54.4697 53.5254 54.4697 51.9507V23.4282Z" fill="#50B848"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M50.3326 0.389812H4.6656C2.38152 0.389812 0.52832 2.26506 0.52832 4.57632V21.9446L18.9076 33.8163L54.4678 9.41261V4.5742C54.4678 2.26295 52.6146 0.387695 50.3305 0.387695L50.3326 0.389812Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M49.4497 20.4419C51.1063 21.278 52.8194 21.7246 54.4697 21.9193V19.4514C53.4929 19.3159 52.4993 19.0768 51.5246 18.6958L49.4518 20.4441L49.4497 20.4419Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M42.6102 30.6097C41.602 30.017 40.6378 29.3609 39.7216 28.6455L37.8203 30.2477C38.9435 31.1578 40.1358 31.9875 41.3929 32.7262C45.8334 35.3338 50.3618 36.4111 54.4677 36.6735V34.2183C50.7237 33.9601 46.6199 32.9654 42.6081 30.6097H42.6102Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5068 43.311L12.4193 41.9417C12.2248 42.1258 12.0282 42.312 11.8316 42.4941C8.32389 45.7387 4.54847 48.6087 0.52832 51.0957V51.9508C0.52832 52.573 0.666369 53.1741 0.917367 53.7181C5.39768 51.0301 9.58934 47.8891 13.4652 44.3016C13.8166 43.9756 14.1617 43.6433 14.5068 43.311Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M54.47 41.5502V39.095C50.0169 38.8347 45.0388 37.6981 40.182 34.845C38.676 33.9603 37.2578 32.9549 35.9296 31.8438L34.043 33.4333C35.5699 34.7455 37.2118 35.9308 38.9667 36.9615C44.2544 40.0665 49.6592 41.2856 54.47 41.5481V41.5502Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0333 56.025C25.0737 54.2852 22.2562 52.2512 19.6626 49.9823C19.2003 49.578 18.5122 49.5865 18.0604 50.0013C14.7765 53.0111 11.2876 55.735 7.6084 58.1627L10.0849 59.4369C13.1555 57.3373 16.0963 55.0345 18.8928 52.5327C21.3735 54.6217 24.0341 56.5055 26.8181 58.1415C30.3237 60.2009 33.9715 61.8624 37.7491 63.126L40.8573 61.5259C36.3958 60.256 32.1142 58.4209 28.0354 56.025H28.0333Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6072 60.2603C23.5783 59.0708 21.5933 57.7417 19.7087 56.3066C19.2632 55.9659 18.642 55.9807 18.2111 56.3405C16.3767 57.875 14.4838 59.3248 12.5386 60.6985L14.9753 61.9515C16.3496 60.9503 17.7008 59.9132 19.0206 58.8338C20.7525 60.1101 22.5555 61.2974 24.3961 62.3748C26.8308 63.8055 29.3324 65.0606 31.8947 66.138L34.7728 64.6564C31.6228 63.4605 28.5648 61.9959 25.6093 60.2582L25.6072 60.2603Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1747 64.4954C22.0536 63.8329 20.9241 63.1217 19.8197 62.381C19.3909 62.091 18.8283 62.11 18.4183 62.4275C18.0795 62.6879 17.7385 62.9461 17.3955 63.2022L25.6241 67.4374C26.7054 67.994 27.9688 68.0385 29.0795 67.5728C27.0715 66.6521 25.1011 65.6277 23.1726 64.4954H23.1747Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6798 46.0456L16.5966 44.6804C16.105 45.1609 15.6051 45.6371 15.0989 46.1048C11.2252 49.6903 7.04401 52.8481 2.58252 55.5658C2.64945 55.606 2.71848 55.6462 2.78959 55.6822L5.10505 56.8738C9.22769 54.2577 13.1098 51.2671 16.7325 47.9124C17.3935 47.3007 18.044 46.6742 18.6778 46.0456H18.6798Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M54.4698 26.8443V24.3828C52.1899 24.1478 49.7762 23.4981 47.4712 22.1414C47.4649 22.1371 47.4565 22.1329 47.4502 22.1287L45.4883 23.7838C45.7393 23.9489 45.9966 24.1076 46.2559 24.26C48.9834 25.8622 51.8197 26.6009 54.4698 26.8443Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.11916 37.8122L4.00869 36.428C2.8792 37.4164 1.72042 38.3646 0.530273 39.2684V42.2993C2.46714 40.9087 4.3308 39.4144 6.11916 37.8122Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3227 43.3173C32.8588 41.8717 30.5433 40.1468 28.4056 38.189L26.5273 39.7721C28.8595 41.9416 31.3988 43.8465 34.1075 45.436C41.1208 49.5569 48.2136 51.0998 54.4697 51.3665V48.9156C48.5712 48.6489 41.9031 47.1864 35.3227 43.3195V43.3173Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.198 40.6845C10.2398 40.6464 10.2796 40.6062 10.3214 40.5681L8.2214 39.1924C5.79091 41.4126 3.22446 43.4424 0.52832 45.2774V48.2046C3.94817 45.9886 7.17558 43.4805 10.198 40.6845Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8947 47.5527C29.9287 45.8108 27.174 43.7345 24.6515 41.3555L22.7773 42.9344C25.4923 45.5272 28.4666 47.7834 31.6794 49.6692C38.4919 53.6737 45.3504 55.458 51.481 56.0548L52.2068 55.6802C53.0226 55.2611 53.6584 54.5881 54.0454 53.788C47.647 53.4705 40.2363 51.8683 32.8926 47.5506L32.8947 47.5527Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M45.043 26.3788C44.5327 26.0782 44.037 25.7565 43.5538 25.4158L41.6357 27.0328C42.3385 27.5577 43.0685 28.0487 43.8278 28.4953C47.4045 30.5949 51.0879 31.505 54.4701 31.759V29.3017C51.4539 29.052 48.1951 28.2286 45.043 26.3788Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M54.4697 16.9771V16.2109L53.7397 16.8269C53.9824 16.884 54.2271 16.9369 54.4697 16.9771Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M54.4697 46.4625V44.0031C49.2657 43.7406 43.4572 42.4347 37.7491 39.0843C35.7641 37.918 33.8942 36.5571 32.1602 35.0269L30.2798 36.6121C32.2125 38.3519 34.3041 39.8928 36.5359 41.2029C42.6749 44.8074 48.908 46.2 54.4718 46.4646L54.4697 46.4625Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M44.1245 59.8433L47.6238 58.0422C41.5643 57.0262 35.8248 54.9393 30.4618 51.7899C27.0273 49.7729 23.8188 47.3304 20.9051 44.5154L19.0352 46.0922C22.1413 49.1231 25.5695 51.7497 29.2487 53.9086C33.9465 56.6685 38.9184 58.6475 44.1266 59.8455L44.1245 59.8433Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.52832 34.1487V36.1721C0.986391 35.8017 1.44028 35.425 1.88789 35.0397L0.52832 34.1487Z" fill="#80C342"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M47.8039 0.389893H45.3546C44.5284 5.50768 45.7394 10.3842 48.4523 13.5442L50.4687 12.16C48.0528 9.53968 46.984 5.2156 47.7663 0.626945C47.7788 0.548633 47.7914 0.468204 47.8039 0.389893Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M38.0251 0.389893H35.5884C34.8416 7.38928 36.6593 14.1177 40.4263 19.0514L42.4343 17.6735C38.9329 13.1674 37.2659 6.91094 38.0272 0.389893H38.0251Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.52832 4.57638V5.58808C1.29386 4.03878 1.95273 2.50217 2.51748 1.00366C1.32524 1.7381 0.52832 3.06094 0.52832 4.57638Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.87196 0.389648H5.31597C4.18439 3.66393 2.63866 7.16045 0.530273 10.6273V15.0382C4.03379 10.1236 6.34715 5.02063 7.87405 0.389648H7.87196Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9955 0.389812H15.4771C13.4127 7.50561 9.70628 15.9294 3.06738 23.5849L5.12975 24.9162C12.1033 16.7718 15.9164 7.83579 17.9955 0.387695V0.389812Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M38.4271 20.4229C34.3944 15.0702 32.4241 7.87185 33.1562 0.389893H30.7277C30.0061 8.35654 32.125 16.0247 36.4254 21.7965L38.4271 20.4229Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4175 0.389648C8.57894 6.22917 5.54186 12.8666 0.530273 19.0469V21.9445L1.00926 22.2535C7.31768 15.0784 10.909 7.1668 12.9526 0.389648H10.4175Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M34.4172 23.1744C29.849 16.9878 27.5796 8.84334 28.297 0.389893H25.8686C25.1596 9.33014 27.5796 17.9487 32.4155 24.548L34.4172 23.1744Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0856 30.834C19.5102 31.4986 19.9536 32.1484 20.4096 32.7876L22.4113 31.414C21.6332 30.3261 20.8991 29.198 20.213 28.0318C20.0038 27.6762 19.6336 27.4518 19.2257 27.4349C18.8179 27.418 18.4309 27.6063 18.1904 27.9407C17.3056 29.1789 16.379 30.3853 15.4189 31.5643L17.4729 32.8913C18.021 32.214 18.5585 31.5304 19.0814 30.834H19.0856Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M52.5958 1.07353C51.9453 0.64176 51.1693 0.389893 50.3326 0.389893H50.2532C50.2218 0.607896 50.1862 0.823783 50.1507 1.04179C49.7616 3.31918 49.9039 5.6262 50.5481 7.53955C50.7447 8.1216 51.3325 8.45813 51.9139 8.34807C51.9704 8.33749 52.0269 8.32267 52.0834 8.30362C52.715 8.08562 53.0539 7.38928 52.8364 6.75008C52.3197 5.21983 52.213 3.34246 52.5331 1.46086C52.5561 1.33175 52.5728 1.20476 52.5937 1.07565L52.5958 1.07353Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M52.9429 10.4625L54.4698 9.41477V9.31529C53.9531 9.17348 53.3863 9.38937 53.106 9.88041C53.0014 10.0645 52.9471 10.2635 52.9429 10.4625Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M42.9072 0.389893H40.4663C39.684 6.43684 41.2004 12.2298 44.4383 16.2999L46.4442 14.922C43.4699 11.2964 42.104 5.96697 42.9072 0.389893Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.039 6.80723C21.633 14.376 24.2141 21.4918 28.412 27.2953L30.4137 25.9217C25.3122 18.9096 22.7416 9.81695 23.4402 0.389893H20.5035C18.416 8.16181 14.5067 17.6121 7.19434 26.2519L9.25461 27.5832C14.9795 20.7446 18.667 13.4426 21.0369 6.80723H21.039Z" fill="#4B5EAA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5832 21.3392C20.8758 24.459 22.501 27.3777 24.4107 30.0424L26.4145 28.6667C24.1304 25.494 22.2751 21.934 20.9385 18.0904C20.7796 17.6353 20.3717 17.3157 19.8948 17.2755C19.4179 17.2353 18.964 17.4829 18.736 17.9083C16.6026 21.843 14.1177 25.5215 11.3086 28.9101L13.3647 30.2393C15.6509 27.4539 17.73 24.4823 19.5811 21.3414L19.5832 21.3392Z" fill="#4B5EAA"/>
     </svg>
  ),
  Id_Card: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
    <path d="M46.8438 0.59375H2.15625C1.20557 0.59375 0.4375 1.36182 0.4375 2.3125V36.6875C0.4375 37.6382 1.20557 38.4062 2.15625 38.4062H46.8438C47.7944 38.4062 48.5625 37.6382 48.5625 36.6875V2.3125C48.5625 1.36182 47.7944 0.59375 46.8438 0.59375ZM44.6953 34.5391H4.30469V4.46094H44.6953V34.5391ZM29.7798 17.5664H36.4077C36.4775 17.5664 36.5312 17.373 36.5312 17.1367V14.5586C36.5312 14.3223 36.4775 14.1289 36.4077 14.1289H29.7798C29.71 14.1289 29.6562 14.3223 29.6562 14.5586V17.1367C29.6562 17.373 29.71 17.5664 29.7798 17.5664ZM30.0376 25.3008H40.0117C40.2212 25.3008 40.3931 25.1074 40.3931 24.8711V22.293C40.3931 22.0566 40.2212 21.8633 40.0117 21.8633H30.0376C29.8281 21.8633 29.6562 22.0566 29.6562 22.293V24.8711C29.6562 25.1074 29.8281 25.3008 30.0376 25.3008ZM9.03125 28.1475H11.3892C11.6147 28.1475 11.7974 27.9702 11.8135 27.7446C12.0176 25.0322 14.2842 22.8838 17.0342 22.8838C19.7842 22.8838 22.0508 25.0322 22.2549 27.7446C22.271 27.9702 22.4536 28.1475 22.6792 28.1475H25.0371C25.0954 28.1475 25.1531 28.1358 25.2067 28.1128C25.2602 28.0899 25.3086 28.0563 25.3488 28.0141C25.389 27.9719 25.4202 27.922 25.4405 27.8673C25.4608 27.8127 25.4697 27.7545 25.4668 27.6963C25.3164 24.8335 23.748 22.3413 21.46 20.9233C22.469 19.8142 23.0265 18.3676 23.0229 16.8682C23.0229 13.5435 20.3428 10.8525 17.0396 10.8525C13.7363 10.8525 11.0562 13.5435 11.0562 16.8682C11.0562 18.4312 11.647 19.8491 12.6191 20.9233C11.4543 21.6452 10.4815 22.6382 9.78374 23.8176C9.086 24.997 8.68408 26.3278 8.6123 27.6963C8.59082 27.9434 8.78418 28.1475 9.03125 28.1475ZM17.0342 14.0752C18.5649 14.0752 19.811 15.3267 19.811 16.8682C19.811 18.4097 18.5649 19.6611 17.0342 19.6611C15.5034 19.6611 14.2573 18.4097 14.2573 16.8682C14.2573 15.3267 15.5034 14.0752 17.0342 14.0752Z" fill="white"/>    
    </svg>
  ),
 
  Driving_License: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
      <path d="M29.0279 45.8333H6.11122C5.30084 45.8333 4.52364 45.5114 3.95062 44.9383C3.37759 44.3653 3.05566 43.5881 3.05566 42.7777V12.2222C3.05566 11.4118 3.37759 10.6346 3.95062 10.0616C4.52364 9.48855 5.30084 9.16663 6.11122 9.16663H48.889C49.6994 9.16663 50.4766 9.48855 51.0496 10.0616C51.6226 10.6346 51.9446 11.4118 51.9446 12.2222V28.0652C49.9092 25.473 46.9486 23.7702 43.6844 23.3145C40.4202 22.8589 37.1064 23.6858 34.439 25.6216C31.7716 27.5574 29.958 30.4515 29.3792 33.6961C28.8004 36.9407 29.5013 40.2834 31.3348 43.0222L29.914 44.7638L29.0279 45.8333ZM10.6946 18.3333V20.7777H36.6668V18.3333H10.6946ZM10.6946 26.8888H27.5001V24.4444H10.6946V26.8888ZM10.6946 37.5833H25.9723V35.1388H10.6946V37.5833Z" fill="white"/>
      <path d="M51.6846 36.0403C51.6887 34.4294 51.2928 32.8427 50.5325 31.4225C49.7722 30.0023 48.6713 28.7931 47.3285 27.9032C45.9857 27.0134 44.443 26.4708 42.8388 26.3241C41.2346 26.1774 39.619 26.4313 38.1371 27.0628C36.6552 27.6944 35.3532 28.684 34.348 29.9427C33.3428 31.2015 32.6657 32.6901 32.3776 34.2751C32.0895 35.86 32.1993 37.4916 32.6972 39.0236C33.1951 40.5557 34.0656 41.9401 35.2304 43.0528L32.2665 46.6737L33.6415 52.1889L39.2332 45.3751C41.0032 45.8984 42.8868 45.8984 44.6568 45.3751L50.2484 52.1889L51.6234 46.6737L48.6596 43.0528C49.6127 42.15 50.3724 41.0628 50.8924 39.8573C51.4124 38.6518 51.6819 37.3532 51.6846 36.0403ZM35.2762 36.0403C35.258 34.7161 35.6341 33.4164 36.3566 32.3065C37.079 31.1966 38.1153 30.3266 39.3335 29.8072C40.5518 29.2878 41.8969 29.1424 43.198 29.3896C44.4991 29.6367 45.6973 30.2653 46.6402 31.1952C47.5831 32.1252 48.2281 33.3145 48.4932 34.6121C48.7583 35.9096 48.6316 37.2567 48.1291 38.482C47.6266 39.7073 46.771 40.7555 45.6712 41.4932C44.5713 42.2309 43.277 42.6249 41.9526 42.625C40.1979 42.6292 38.5128 41.9392 37.2649 40.7056C36.017 39.472 35.3076 37.795 35.2915 36.0403H35.2762Z" fill="white"/>
    </svg>
  ),
  GreenTickIcon: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
      <circle cx="12.5" cy="12.5" r="12.5" fill="#80C342"/>
      <path d="M6 12.0909L10.5882 17L19 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  FlashThunder: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
    <path d="M9.5835 13.3333H15.0463L5.3335 29.9839V17.5833V17.0833H4.8335H0.583496V0.666664H15.1078L9.13628 12.6097L8.77448 13.3333H9.5835Z" stroke="white"/>
    </svg>
  ),
  Information: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
<path d="M17.4165 26.9167H20.5832V17.4167H17.4165V26.9167ZM18.9998 14.25C19.4484 14.25 19.8248 14.098 20.1288 13.794C20.4328 13.49 20.5842 13.1142 20.5832 12.6667C20.5821 12.2191 20.4301 11.8433 20.1272 11.5393C19.8242 11.2353 19.4484 11.0833 18.9998 11.0833C18.5512 11.0833 18.1754 11.2353 17.8725 11.5393C17.5696 11.8433 17.4176 12.2191 17.4165 12.6667C17.4154 13.1142 17.5674 13.4905 17.8725 13.7956C18.1776 14.1006 18.5533 14.2521 18.9998 14.25ZM18.9998 34.8333C16.8096 34.8333 14.7512 34.4174 12.8248 33.5857C10.8985 32.7539 9.22276 31.626 7.79776 30.2021C6.37276 28.7781 5.24489 27.1024 4.41417 25.175C3.58345 23.2476 3.16756 21.1892 3.16651 19C3.16545 16.8108 3.58134 14.7524 4.41417 12.825C5.24701 10.8976 6.37487 9.22186 7.79776 7.79791C9.22064 6.37397 10.8963 5.24611 12.8248 4.41433C14.7533 3.58255 16.8117 3.16666 18.9998 3.16666C21.188 3.16666 23.2463 3.58255 25.1748 4.41433C27.1033 5.24611 28.779 6.37397 30.2019 7.79791C31.6248 9.22186 32.7532 10.8976 33.5871 12.825C34.421 14.7524 34.8363 16.8108 34.8332 19C34.83 21.1892 34.4141 23.2476 33.5855 25.175C32.7569 27.1024 31.629 28.7781 30.2019 30.2021C28.7748 31.626 27.0991 32.7544 25.1748 33.5872C23.2506 34.4201 21.1922 34.8354 18.9998 34.8333ZM18.9998 31.6667C22.5359 31.6667 25.5311 30.4396 27.9853 27.9854C30.4394 25.5312 31.6665 22.5361 31.6665 19C31.6665 15.4639 30.4394 12.4687 27.9853 10.0146C25.5311 7.56041 22.5359 6.33333 18.9998 6.33333C15.4637 6.33333 12.4686 7.56041 10.0144 10.0146C7.56026 12.4687 6.33317 15.4639 6.33317 19C6.33317 22.5361 7.56026 25.5312 10.0144 27.9854C12.4686 30.4396 15.4637 31.6667 18.9998 31.6667Z" 
/>
</svg>
  ),
  KeyQuardText: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
  <path d="M15.3105 1.2113H10.5503L4.20016 9.01238V1.2113H0.341797V18.5592H4.20016V10.0016L10.7688 18.5592H15.5797L8.33541 9.46736L15.3105 1.2113Z" fill="white"/>
  <path d="M29.9055 1.21124L26.2427 7.5247L22.5799 1.21124H18.1348L24.2894 11.3204V18.5592H28.1731V11.1671L34.2769 1.21124H29.9055Z" fill="white"/>
  <path d="M49.2308 13.7181C48.7736 14.2267 48.2198 14.6152 47.5696 14.8862C46.9193 15.1571 46.1522 15.2926 45.2733 15.2926C44.524 15.2926 43.8407 15.1648 43.2209 14.9118C42.6012 14.6587 42.0652 14.2906 41.608 13.805C41.1508 13.3219 40.8028 12.7493 40.559 12.0848C40.3151 11.4202 40.1932 10.6815 40.1932 9.86099C40.1932 9.0405 40.3151 8.34525 40.559 7.67301C40.8028 7.00076 41.1533 6.42821 41.608 5.95278C42.0627 5.47736 42.6012 5.1144 43.2209 4.85879C43.8407 4.60574 44.524 4.47794 45.2733 4.47794C46.1192 4.47794 46.8634 4.61852 47.5086 4.89458C48.1512 5.17319 48.6923 5.55915 49.1317 6.04991L51.72 3.41973C50.9225 2.65036 49.9902 2.04457 48.9234 1.60238C47.8566 1.16018 46.6399 0.937805 45.2733 0.937805C43.9068 0.937805 42.7739 1.16274 41.6842 1.6126C40.592 2.06247 39.6369 2.6887 38.8139 3.4913C37.9909 4.2939 37.3534 5.23964 36.8962 6.32852C36.439 7.4174 36.2129 8.59319 36.2129 9.85588C36.2129 11.1186 36.4415 12.2918 36.8962 13.3832C37.3508 14.4721 37.9909 15.4281 38.8139 16.246C39.6369 17.0665 40.597 17.7004 41.6944 18.1503C42.7942 18.6001 43.9855 18.8251 45.2733 18.8251C46.6907 18.8251 47.9353 18.6078 49.0098 18.1733C50.0842 17.7387 51.0291 17.1279 51.842 16.3431L49.2282 13.713L49.2308 13.7181Z" fill="white"/>
  <path d="M63.2164 11.9978L68.1416 12.0771C68.0501 12.4273 67.9257 12.7544 67.7707 13.0561C67.3872 13.7922 66.8436 14.3545 66.1349 14.7405C65.4262 15.1265 64.5753 15.3182 63.5821 15.3182C62.589 15.3182 61.7101 15.0856 60.9455 14.6178C60.181 14.15 59.579 13.5085 59.1395 12.688C58.7001 11.87 58.4791 10.9269 58.4791 9.86098C58.4791 8.79511 58.7026 7.83403 59.1497 7.02121C59.5967 6.21094 60.2191 5.57959 61.0166 5.12973C61.8142 4.67986 62.7185 4.45493 63.7269 4.45493C64.654 4.45493 65.4973 4.63896 66.2543 5.00704C67.0112 5.37511 67.6589 5.91955 68.1949 6.64035L70.8315 3.98717C70.0339 3.03632 69.0255 2.2874 67.8037 1.73784C66.582 1.18829 65.2306 0.914795 63.7498 0.914795C62.4645 0.914795 61.263 1.14484 60.1479 1.60237C59.0328 2.0599 58.0524 2.69636 57.204 3.50663C56.3582 4.3169 55.6977 5.26009 55.2253 6.33363C54.7528 7.40717 54.5166 8.58296 54.5166 9.86098C54.5166 11.139 54.7477 12.2943 55.2126 13.3756C55.6774 14.4568 56.315 15.4076 57.1303 16.2256C57.9432 17.0461 58.9008 17.6876 60.0006 18.1554C61.1005 18.6231 62.2842 18.8557 63.5542 18.8557C65.2637 18.8557 66.7725 18.4902 68.0831 17.7617C69.3938 17.0333 70.42 15.9546 71.1592 14.5309C71.9009 13.1046 72.2692 11.3614 72.2692 9.29609V8.7312H63.2087V12.0004L63.2164 11.9978Z" fill="#50B848"/>
  <path d="M86.1555 11.9493C86.1555 12.6369 86.0158 13.235 85.7415 13.7436C85.4646 14.2523 85.0785 14.6357 84.5807 14.899C84.0828 15.1622 83.5266 15.2926 82.9068 15.2926C82.287 15.2926 81.7028 15.1622 81.1973 14.899C80.6918 14.6382 80.2905 14.2523 79.9882 13.7436C79.686 13.235 79.5361 12.6292 79.5361 11.9237V1.20874H75.6777V11.7269C75.6777 13.0867 75.9825 14.3034 76.5947 15.3769C77.2043 16.4505 78.0527 17.294 79.1348 17.9074C80.2168 18.5209 81.4742 18.8302 82.9068 18.8302C84.3394 18.8302 85.5434 18.5234 86.6178 17.9074C87.6923 17.294 88.5305 16.453 89.1325 15.3897C89.7345 14.3239 90.0368 13.1123 90.0368 11.7525V1.20874H86.153V11.9467L86.1555 11.9493Z" fill="#50B848"/>
  <path d="M99.2578 1.2113L92.4453 18.5618H96.4256L97.5712 15.4409H104.318L105.435 18.5618H109.515L102.75 1.2113H99.2578ZM98.7218 12.2944L100.98 6.13682L103.187 12.2944H98.7218Z" fill="#50B848"/>
  <path d="M122.687 10.7939C123.566 10.3671 124.249 9.77408 124.739 9.01237C125.227 8.25067 125.471 7.34583 125.471 6.29784C125.471 5.31376 125.229 4.43959 124.749 3.66766C124.269 2.89829 123.596 2.29506 122.735 1.86053C121.871 1.42601 120.863 1.20874 119.707 1.20874H112.648V18.5592H116.507V11.433H116.901L122.026 18.5592H126.593L121.099 11.3C121.673 11.1952 122.204 11.0265 122.687 10.7939ZM116.509 4.23255H119.268C120.017 4.23255 120.599 4.43703 121.013 4.846C121.427 5.25497 121.635 5.77129 121.635 6.39497C121.635 7.04932 121.424 7.57076 121 7.95672C120.576 8.34268 119.989 8.53439 119.242 8.53439H116.507V4.23511L116.509 4.23255Z" fill="#50B848"/>
  <path d="M144.987 6.37198C144.53 5.32399 143.892 4.40893 143.069 3.63189C142.246 2.85485 141.286 2.25673 140.189 1.83754C139.089 1.4209 137.89 1.2113 136.587 1.2113H129.652V18.5618H136.638C137.923 18.5618 139.117 18.3496 140.214 17.9228C141.314 17.4959 142.269 16.8953 143.084 16.1157C143.897 15.3386 144.532 14.421 144.989 13.3628C145.444 12.3071 145.673 11.1467 145.673 9.88655C145.673 8.62642 145.444 7.41996 144.989 6.37198H144.987ZM141.055 12.6982C140.631 13.4931 140.034 14.104 139.259 14.5283C138.487 14.9552 137.577 15.1674 136.536 15.1674H133.508V4.60063H136.536C137.562 4.60063 138.461 4.81023 139.233 5.22687C140.006 5.6435 140.61 6.25184 141.04 7.04422C141.471 7.83915 141.687 8.77722 141.687 9.85843C141.687 10.9396 141.476 11.9033 141.052 12.6957L141.055 12.6982Z" fill="#50B848"/>
  </svg>
  ),
  RegentBankTextAndIcon: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
      <path d="M13.2685 0.160278L4.79785 7.59156L13.2685 4.69672L21.7671 7.59382L13.2685 0.160278Z" fill="#36B247"/>
      <path d="M13.2677 6.60706L3.82812 13.3835L13.2828 10.8183L22.7419 13.3835L13.2677 6.60706Z" fill="#36B247"/>
      <path d="M13.2681 12.7558L0 20.8691L13.2293 18.0939L26.5708 20.8691L13.2681 12.7558Z" fill="#36B247"/>
      <path d="M30.2414 3.30807C31.2298 3.13194 32.6823 3.00098 34.3375 3.00098C36.3554 3.00098 37.7689 3.33065 38.7358 4.16614C39.5623 4.8684 40.0069 5.92291 40.0069 7.28678C40.0069 9.1542 38.7768 10.4503 37.6049 10.9132V10.9787C38.5545 11.3965 39.0789 12.3629 39.4221 13.7245C39.845 15.4158 40.2486 17.351 40.5119 17.9223H37.3632C37.1625 17.482 36.8194 16.2965 36.4352 14.4719C36.0511 12.6045 35.4662 12.1213 34.1951 12.0987H33.2865V17.9223H30.2393V3.30807H30.2414ZM33.2887 9.68033H34.4994C36.0338 9.68033 36.9402 8.84485 36.9402 7.54872C36.9402 6.25259 36.0921 5.50517 34.6807 5.50517C33.934 5.50517 33.511 5.54807 33.2887 5.61582V9.68033Z" fill="white"/>
      <path d="M50.2989 11.6584H45.2942V15.1742H50.8838V17.92H42.2275V3.10938H50.601V5.85518H45.2942V8.93067H50.2989V11.6584Z" fill="white"/>
      <path d="M64.3465 17.2381C63.397 17.5903 61.6014 18.0736 59.8059 18.0736C57.324 18.0736 55.5285 17.3916 54.2768 16.0955C53.0466 14.7994 52.3604 12.8665 52.3604 10.6897C52.3798 5.7671 55.6687 2.95581 60.1296 2.95581C61.8841 2.95581 63.2373 3.32839 63.9041 3.65807L63.2589 6.36097C62.5121 5.98839 61.6036 5.7242 60.1102 5.7242C57.5463 5.7242 55.5889 7.28452 55.5889 10.5136C55.5889 13.7426 57.365 15.3684 59.8879 15.3684C60.5742 15.3684 61.1396 15.2803 61.3813 15.1697V12.049H59.2836V9.4342H64.3487V17.2336L64.3465 17.2381Z" fill="white"/>
      <path d="M74.8389 11.6584H69.8343V15.1742H75.4238V17.92H66.7676V3.10938H75.1411V5.85518H69.8343V8.93067H74.8389V11.6584Z" fill="white"/>
      <path d="M77.5244 17.92V3.10938H81.1155L83.9405 8.5355C84.7476 10.0958 85.5354 11.9407 86.1612 13.6116H86.2022C86.0209 11.6561 85.9605 9.6555 85.9605 7.4155V3.10938H88.7855V17.9178H85.5569L82.6521 12.2049C81.845 10.622 80.9364 8.71163 80.2911 6.97518H80.2113C80.3127 8.95325 80.3516 11.0397 80.3516 13.4581V17.9178H77.5266L77.5244 17.92Z" fill="white"/>
      <path d="M94.0921 5.92289H90.4189V3.10934H100.873V5.92289H97.1588V17.92H94.0921V5.92289Z" fill="white"/>


  </svg>
  ),
 
  GreenTriangle: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
      <path d="M990 0L0 110H990V0Z" fill="#50B848"/>
  </svg>
  ),
  RedCrossCirle: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
      <circle cx="30" cy="30" r="30" fill="#FF0000"/>
      <path d="M20 20L42 42" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <path d="M20 42L42 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
  </svg>
  ),
  YellowFraudDetected: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className} width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
    <circle cx="7.5" cy="7.5" r="7.5" fill="#FFA800"/>
    <path d="M3 12L12 3" stroke="white" stroke-linecap="round"/>
  </svg>
  ),
  CameraReverse: ({ w, h, vh, vw, s, c, onClick, fill, className }: IconProps) => (
    <svg version="1.1" fill={fill} className={c || className}  width={w} height={h} onClick={onClick} style={s} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={`0 0 ${vh} ${vw}`} >
    <path d="M302.333,94.332l-41.874-54.176H108.095L66.22,94.332H0v234.066h368.553V94.332H302.333z M353.553,313.398H15V109.332 h58.584l41.875-54.176h137.635l41.874,54.176h58.585L353.553,313.398L353.553,313.398z"/>
    <path d="M234.729,129.109h8.918v-15h-34.521v34.522h15v-8.515c22.102,13.715,35.568,37.653,35.568,64.042c0,41.585-33.832,75.416-75.417,75.416v15c49.856,0,90.417-40.561,90.417-90.416C274.694,173.601,259.632,145.785,234.729,129.109z"/>
    <path d="M138.424,264.061c-18.509-14.109-29.564-36.009-29.564-59.903c0-41.585,33.832-75.417,75.417-75.417v-15c-49.856,0-90.417,40.561-90.417,90.417c0,28.245,12.883,54.165,34.511,71.098h-9.469v15h34.522v-34.521h-15V264.061z"/>    
    </svg>
  ),
  
}
 