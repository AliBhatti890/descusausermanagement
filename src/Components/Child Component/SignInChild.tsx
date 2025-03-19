import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const SignInChild: React.FC<{ stepNumber: number | undefined, percentage: number | undefined, showStepIcon?: boolean, setIndexNumber?: (index: number) => void, indexNumber?: number, heading: string, Paragraph: string, backgroundImage?: string; }> = ({ stepNumber, percentage, heading, Paragraph, backgroundImage }) => {

  return (
    <div className="flex bg-[#307D6F] p-[80px] flex-row-reverse  ">
      <div>
        <Banner className="absolute right-0 h-[99%] top-0" />
        <div className="">
          <div className="flex items-center justify-start">
            <div className="text-white whitespace-nowrap text-lg px-1"> Step 0{stepNumber}</div>
            <IoMdInformationCircleOutline color="#50B848" size={20} />
          </div>

          {percentage !== undefined && (
            <div className="w-full bg-white h-[11px] my-2 rounded-lg">
              <div style={{
                height: "100%", width: `${percentage}%`, backgroundColor: "#50B848",
                borderRadius: "0.5rem",
              }}
              />
            </div>
          )}
        </div>

        <div className="abosolute top-0   flex flex-col justify-start items-start w-full">
          <h2 className="   text-white text-2xl font-bold">{heading}</h2>
          <p className="  text-[10px]  text-[#E0E0E0]">{Paragraph}
          </p>
        </div>
        <div className="bg-contain bg-no-repeat bg-center h-auto   fixed"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            // backgroundImage: ${backgroundImage},
            backgroundPosition: "center",
            height: "45%",
            width: "45%",
          }}>
        </div>
      </div>
    </div>
  );
};

export default SignInChild;

const Banner = ({ className }: { className: string }) => {

  return <svg className={className} viewBox="0 0 40 985" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.6" d="M40 984.798H1.72L1.72 970.82L29.27 960.844V960.554L1.72 950.81L1.72 937.47H40V946.286L11.232 945.764V946.402L40 957.48V965.136L11.232 975.982V976.62L40 976.098V984.798ZM40 935.493L1.72 922.501L1.72 908.813L40 895.821V906.029L9.028 915.193V916.121L40 925.285L40 935.493ZM32.808 927.779H26.544V902.143H32.808V927.779ZM40 893.912H1.72L1.72 884.574H18.482C17.6313 882.679 16.568 880.92 15.292 879.296C14.016 877.672 12.624 876.241 11.116 875.004C9.608 873.728 8.06133 872.684 6.476 871.872C4.852 871.021 3.26667 870.403 1.72 870.016V859.228C3.49867 859.692 5.316 860.446 7.172 861.49C8.98933 862.534 10.7487 863.791 12.45 865.26C14.1127 866.729 15.6013 868.315 16.916 870.016C18.2307 871.679 19.2747 873.38 20.048 875.12H20.918C20.918 873.341 21.1113 871.775 21.498 870.422C21.8847 869.03 22.484 867.812 23.296 866.768C24.108 865.685 25.1327 864.757 26.37 863.984C27.5687 863.172 29.0187 862.476 30.72 861.896L40 858.59V869.204L32.402 871.35C30.7007 871.814 29.3667 872.433 28.4 873.206C27.3947 873.979 26.6793 875.004 26.254 876.28C25.79 877.556 25.558 879.199 25.558 881.21V884.574H40V893.912ZM40 856.371H1.72V846.859H40V856.371ZM40 841.712H1.72V829.59L27.414 813.176V812.48L1.72 813.06V803.954H40V814.916L12.856 832.49V833.128L40 832.606V841.712ZM40.812 783.594C40.812 786.726 40.0967 789.548 38.666 792.062C37.2353 794.575 35.0893 796.566 32.228 798.036C29.328 799.466 25.6933 800.182 21.324 800.182C18.1147 800.182 15.2533 799.776 12.74 798.964C10.2267 798.113 8.1 796.856 6.36 795.194C4.58133 793.531 3.228 791.501 2.3 789.104C1.372 786.668 0.907999 783.864 0.907999 780.694C0.907999 778.296 1.17867 776.131 1.72 774.198C2.26133 772.226 3.03467 770.524 4.04 769.094C5.04533 767.663 6.244 766.561 7.636 765.788C9.028 764.976 10.594 764.55 12.334 764.512L15.06 773.328C13.6293 773.366 12.4307 773.734 11.464 774.43C10.4973 775.126 9.76267 776.054 9.26 777.214C8.71866 778.374 8.448 779.669 8.448 781.1C8.448 783.11 8.912 784.812 9.84 786.204C10.7293 787.557 12.102 788.601 13.958 789.336C15.814 790.032 18.134 790.38 20.918 790.38C23.006 790.38 24.8427 790.186 26.428 789.8C27.9747 789.374 29.27 788.756 30.314 787.944C31.358 787.132 32.1507 786.146 32.692 784.986C33.1947 783.787 33.446 782.376 33.446 780.752C33.446 779.128 33.1947 777.736 32.692 776.576C32.1893 775.377 31.416 774.43 30.372 773.734C29.328 773.038 27.994 772.67 26.37 772.632V779.418H19.758V763.352H27.182H40V769.732L30.43 769.848V771.008C32.6727 771.665 34.5673 772.516 36.114 773.56C37.6607 774.604 38.84 775.938 39.652 777.562C40.4253 779.186 40.812 781.196 40.812 783.594ZM40 724.482H1.72V715.144H40V724.482ZM40 749.422H1.72L1.72 740.084H40V749.422ZM24.456 743.738H16.916L16.916 720.712H24.456V743.738ZM40.812 692.613C40.812 695.049 40.5607 697.214 40.058 699.109C39.594 701.003 38.898 702.647 37.97 704.039C37.042 705.431 35.9207 706.591 34.606 707.519C33.2913 708.408 31.822 709.085 30.198 709.549C28.5353 709.974 26.7373 710.187 24.804 710.187H1.72V700.791H24.514C26.37 700.791 27.8973 700.501 29.096 699.921C30.2947 699.341 31.184 698.451 31.764 697.253C32.3053 696.054 32.576 694.527 32.576 692.671C32.576 690.815 32.3053 689.287 31.764 688.089C31.184 686.89 30.2947 686.001 29.096 685.421C27.8973 684.841 26.37 684.551 24.514 684.551H1.72L1.72 675.213H24.804C29.8693 675.213 33.8133 676.663 36.636 679.563C39.42 682.424 40.812 686.774 40.812 692.613ZM40 670.318H1.72V656.34L29.27 646.364V646.074L1.72 636.33L1.72 622.99H40V631.806L11.232 631.284V631.922L40 643V650.656L11.232 661.502V662.14L40 661.618V670.318ZM40 621.013L1.72 608.021L1.72 594.333L40 581.341L40 591.549L9.028 600.713V601.641L40 610.805V621.013ZM32.808 613.299H26.544V587.663H32.808V613.299ZM40 579.432H1.72L1.72 567.31L27.414 550.896V550.2L1.72 550.78V541.674H40V552.636L12.856 570.21V570.848L40 570.326V579.432ZM40 526.496H1.72L1.72 510.198C1.72 508.071 1.894 506.138 2.242 504.398C2.55133 502.658 3.03467 501.13 3.692 499.816C4.31067 498.462 5.084 497.322 6.012 496.394C6.90133 495.466 7.94533 494.77 9.144 494.306C10.304 493.842 11.5993 493.61 13.03 493.61C14.3833 493.61 15.6013 493.822 16.684 494.248C17.7667 494.673 18.714 495.33 19.526 496.22C20.338 497.07 20.9953 498.153 21.498 499.468C22.0007 500.782 22.368 502.31 22.6 504.05H23.47C23.702 501.846 24.2047 500.144 24.978 498.946C25.7127 497.708 26.6987 496.761 27.936 496.104C29.1733 495.446 30.662 494.866 32.402 494.364L40 492.16V502.542L32.982 504.224C31.4353 504.572 30.2367 505.055 29.386 505.674C28.5353 506.254 27.9553 507.008 27.646 507.936C27.298 508.864 27.124 510.024 27.124 511.416V517.158H40V526.496ZM20.222 517.158V510.836C20.222 508.477 19.758 506.64 18.83 505.326C17.902 504.011 16.452 503.354 14.48 503.354C12.5467 503.354 11.116 503.953 10.188 505.152C9.26 506.35 8.796 508.168 8.796 510.604V517.158H20.222ZM40 489.464H1.72L1.72 480.068H40V489.464ZM40 482.678H32.46L32.46 459.072H40L40 482.678ZM24.108 482.678H17.322V462.03H24.108L24.108 482.678ZM9.202 482.678H1.72L1.72 459.246H9.202V482.678ZM40.812 440.522C40.812 442.996 40.58 445.239 40.116 447.25C39.652 449.26 38.956 451 38.028 452.47C37.0613 453.939 35.8433 455.099 34.374 455.95C32.9047 456.8 31.2033 457.303 29.27 457.458L26.544 449.28C28.168 449.164 29.5213 448.7 30.604 447.888C31.6867 447.076 32.4987 445.993 33.04 444.64C33.5427 443.248 33.794 441.701 33.794 440C33.794 438.376 33.6007 437.022 33.214 435.94C32.7887 434.818 32.2667 433.987 31.648 433.446C30.9907 432.866 30.2947 432.576 29.56 432.576C28.7093 432.576 28.0133 432.943 27.472 433.678C26.892 434.412 26.4087 435.418 26.022 436.694C25.5967 437.97 25.1907 439.458 24.804 441.16C24.34 443.093 23.8373 444.988 23.296 446.844C22.7547 448.7 22.0587 450.382 21.208 451.89C20.3187 453.398 19.1973 454.596 17.844 455.486C16.452 456.336 14.712 456.762 12.624 456.762C10.2653 456.762 8.216 456.162 6.476 454.964C4.736 453.765 3.38267 452.006 2.416 449.686C1.41067 447.366 0.907999 444.504 0.907999 441.102C0.907999 437.738 1.39133 434.876 2.358 432.518C3.32467 430.159 4.678 428.342 6.418 427.066C8.11933 425.79 10.1107 425.094 12.392 424.978L14.77 433.33C13.6487 433.33 12.6627 433.523 11.812 433.91C10.9613 434.258 10.2653 434.76 9.724 435.418C9.144 436.075 8.71867 436.887 8.448 437.854C8.13866 438.82 7.984 439.922 7.984 441.16C7.984 442.629 8.158 443.886 8.506 444.93C8.854 445.935 9.318 446.689 9.898 447.192C10.4393 447.694 11.0773 447.946 11.812 447.946C12.74 447.946 13.5133 447.559 14.132 446.786C14.712 445.974 15.2147 444.891 15.64 443.538C16.0267 442.146 16.4133 440.618 16.8 438.956C17.148 437.293 17.5927 435.572 18.134 433.794C18.6367 432.015 19.3133 430.352 20.164 428.806C21.0147 427.259 22.1747 426.022 23.644 425.094C25.0747 424.127 26.892 423.644 29.096 423.644C31.4547 423.644 33.5233 424.282 35.302 425.558C37.042 426.795 38.3953 428.67 39.362 431.184C40.3287 433.697 40.812 436.81 40.812 440.522ZM40.812 403.564C40.812 406.348 40.3867 408.861 39.536 411.104C38.6853 413.346 37.4287 415.28 35.766 416.904C34.1033 418.489 32.054 419.707 29.618 420.558C27.1433 421.408 24.282 421.834 21.034 421.834C16.4713 421.834 12.7207 421.041 9.782 419.456C6.80466 417.832 4.58133 415.608 3.112 412.786C1.64266 409.963 0.907999 406.773 0.907999 403.216C0.907999 400.47 1.33333 397.976 2.184 395.734C3.03466 393.491 4.29133 391.577 5.954 389.992C7.61667 388.368 9.70466 387.13 12.218 386.28C14.6927 385.39 17.554 384.946 20.802 384.946C24.166 384.946 27.1047 385.41 29.618 386.338C32.0927 387.227 34.1613 388.503 35.824 390.166C37.4867 391.79 38.7433 393.742 39.594 396.024C40.406 398.305 40.812 400.818 40.812 403.564ZM33.504 403.274C33.504 401.379 33.04 399.794 32.112 398.518C31.1453 397.203 29.7727 396.217 27.994 395.56C26.1767 394.864 23.9727 394.516 21.382 394.516C18.6367 394.516 16.3167 394.864 14.422 395.56C12.4887 396.256 11.0387 397.28 10.072 398.634C9.06666 399.948 8.564 401.572 8.564 403.506C8.564 405.362 9.04733 406.947 10.014 408.262C10.942 409.538 12.334 410.524 14.19 411.22C16.0073 411.916 18.25 412.264 20.918 412.264C22.9287 412.264 24.7267 412.07 26.312 411.684C27.8587 411.258 29.1733 410.678 30.256 409.944C31.3 409.209 32.112 408.281 32.692 407.16C33.2333 406 33.504 404.704 33.504 403.274ZM40.812 363.972C40.812 366.408 40.5607 368.574 40.058 370.468C39.594 372.363 38.898 374.006 37.97 375.398C37.042 376.79 35.9207 377.95 34.606 378.878C33.2913 379.768 31.822 380.444 30.198 380.908C28.5353 381.334 26.7373 381.546 24.804 381.546H1.72V372.15H24.514C26.37 372.15 27.8973 371.86 29.096 371.28C30.2947 370.7 31.184 369.811 31.764 368.612C32.3053 367.414 32.576 365.886 32.576 364.03C32.576 362.174 32.3053 360.647 31.764 359.448C31.184 358.25 30.2947 357.36 29.096 356.78C27.8973 356.2 26.37 355.91 24.514 355.91H1.72V346.572H24.804C29.8693 346.572 33.8133 348.022 36.636 350.922C39.42 353.784 40.812 358.134 40.812 363.972ZM40 341.677H1.72L1.72 325.379C1.72 323.253 1.894 321.319 2.242 319.579C2.55133 317.839 3.03467 316.312 3.692 314.997C4.31067 313.644 5.084 312.503 6.012 311.575C6.90133 310.647 7.94533 309.951 9.144 309.487C10.304 309.023 11.5993 308.791 13.03 308.791C14.3833 308.791 15.6013 309.004 16.684 309.429C17.7667 309.855 18.714 310.512 19.526 311.401C20.338 312.252 20.9953 313.335 21.498 314.649C22.0007 315.964 22.368 317.491 22.6 319.231H23.47C23.702 317.027 24.2047 315.326 24.978 314.127C25.7127 312.89 26.6987 311.943 27.936 311.285C29.1733 310.628 30.662 310.048 32.402 309.545L40 307.341V317.723L32.982 319.405C31.4353 319.753 30.2367 320.237 29.386 320.855C28.5353 321.435 27.9553 322.189 27.646 323.117C27.298 324.045 27.124 325.205 27.124 326.597V332.339H40V341.677ZM20.222 332.339V326.017C20.222 323.659 19.758 321.822 18.83 320.507C17.902 319.193 16.452 318.535 14.48 318.535C12.5467 318.535 11.116 319.135 10.188 320.333C9.26 321.532 8.796 323.349 8.796 325.785V332.339H20.222ZM40.812 286.666C40.812 289.682 40.406 292.388 39.594 294.786C38.782 297.183 37.5447 299.232 35.882 300.934C34.2193 302.596 32.1893 303.872 29.792 304.762C27.356 305.612 24.514 306.038 21.266 306.038C17.9407 306.038 15.0213 305.593 12.508 304.704C9.99466 303.814 7.868 302.538 6.128 300.876C4.388 299.174 3.09267 297.183 2.242 294.902C1.35267 292.62 0.907999 290.088 0.907999 287.304C0.907999 285.1 1.17867 283.089 1.72 281.272C2.26133 279.416 3.07333 277.811 4.156 276.458C5.2 275.104 6.476 274.06 7.984 273.326C9.45333 272.552 11.1353 272.146 13.03 272.108L15.408 280.75C13.8227 280.75 12.5273 281.098 11.522 281.794C10.5167 282.451 9.76267 283.302 9.26 284.346C8.71866 285.351 8.448 286.453 8.448 287.652C8.448 288.618 8.66066 289.624 9.086 290.668C9.47267 291.673 10.1493 292.601 11.116 293.452C12.044 294.302 13.2813 294.979 14.828 295.482C16.3747 295.984 18.308 296.236 20.628 296.236C23.644 296.236 26.08 295.81 27.936 294.96C29.792 294.109 31.1647 292.93 32.054 291.422C32.9047 289.914 33.33 288.251 33.33 286.434C33.33 284.423 32.9047 282.876 32.054 281.794C31.1647 280.672 30.0627 279.88 28.748 279.416C27.4333 278.952 26.0993 278.7 24.746 278.662L26.022 270.542C28.11 270.58 30.0627 270.89 31.88 271.47C33.6973 272.05 35.2827 272.978 36.636 274.254C37.9507 275.491 38.9753 277.134 39.71 279.184C40.4447 281.233 40.812 283.727 40.812 286.666ZM40 267.841H1.72V258.445H40V267.841ZM40 261.055H32.46V237.449H40V261.055ZM24.108 261.055H17.322V240.407H24.108V261.055ZM9.202 261.055H1.72L1.72 237.623H9.202V261.055ZM40.812 208.884C40.812 211.359 40.58 213.601 40.116 215.612C39.652 217.623 38.956 219.363 38.028 220.832C37.0613 222.301 35.8433 223.461 34.374 224.312C32.9047 225.163 31.2033 225.665 29.27 225.82L26.544 217.642C28.168 217.526 29.5213 217.062 30.604 216.25C31.6867 215.438 32.4987 214.355 33.04 213.002C33.5427 211.61 33.794 210.063 33.794 208.362C33.794 206.738 33.6007 205.385 33.214 204.302C32.7887 203.181 32.2667 202.349 31.648 201.808C30.9907 201.228 30.2947 200.938 29.56 200.938C28.7093 200.938 28.0133 201.305 27.472 202.04C26.892 202.775 26.4087 203.78 26.022 205.056C25.5967 206.332 25.1907 207.821 24.804 209.522C24.34 211.455 23.8373 213.35 23.296 215.206C22.7547 217.062 22.0587 218.744 21.208 220.252C20.3187 221.76 19.1973 222.959 17.844 223.848C16.452 224.699 14.712 225.124 12.624 225.124C10.2653 225.124 8.216 224.525 6.476 223.326C4.736 222.127 3.38267 220.368 2.416 218.048C1.41067 215.728 0.907999 212.867 0.907999 209.464C0.907999 206.1 1.39133 203.239 2.358 200.88C3.32467 198.521 4.678 196.704 6.418 195.428C8.11933 194.152 10.1107 193.456 12.392 193.34L14.77 201.692C13.6487 201.692 12.6627 201.885 11.812 202.272C10.9613 202.62 10.2653 203.123 9.724 203.78C9.144 204.437 8.71867 205.249 8.448 206.216C8.13866 207.183 7.984 208.285 7.984 209.522C7.984 210.991 8.158 212.248 8.506 213.292C8.854 214.297 9.318 215.051 9.898 215.554C10.4393 216.057 11.0773 216.308 11.812 216.308C12.74 216.308 13.5133 215.921 14.132 215.148C14.712 214.336 15.2147 213.253 15.64 211.9C16.0267 210.508 16.4133 208.981 16.8 207.318C17.148 205.655 17.5927 203.935 18.134 202.156C18.6367 200.377 19.3133 198.715 20.164 197.168C21.0147 195.621 22.1747 194.384 23.644 193.456C25.0747 192.489 26.892 192.006 29.096 192.006C31.4547 192.006 33.5233 192.644 35.302 193.92C37.042 195.157 38.3953 197.033 39.362 199.546C40.3287 202.059 40.812 205.172 40.812 208.884ZM40 188.804H1.72V179.292H40V188.804ZM40 174.146H1.72L1.72 160.168L29.27 150.192V149.902L1.72 140.158L1.72 126.818H40V135.634L11.232 135.112V135.75L40 146.828V154.484L11.232 165.33V165.968L40 165.446V174.146ZM29.502 114.807H22.31V106.281C22.31 103.768 21.788 101.892 20.744 100.655C19.7 99.4178 17.9407 98.7991 15.466 98.7991C13.3007 98.7991 11.6573 99.3791 10.536 100.539C9.41467 101.66 8.854 103.458 8.854 105.933V114.807H1.72V105.643C1.72 103.168 2.01 100.945 2.59 98.9731C3.17 96.9625 4.04 95.2418 5.2 93.8111C6.32133 92.3805 7.77133 91.2978 9.55 90.5631C11.29 89.7898 13.3393 89.4031 15.698 89.4031C18.714 89.4031 21.2467 90.0991 23.296 91.4911C25.3453 92.8445 26.892 94.8745 27.936 97.5811C28.98 100.249 29.502 103.594 29.502 107.615V114.807ZM40 121.651H1.72V112.313H40L40 121.651ZM40 86.7719H1.72V77.4339H40V86.7719ZM40 85.0899H32.17V61.8319H40V85.0899ZM40 60.1621H1.72V50.7661H40V60.1621ZM40 53.3761H32.46V29.7701H40V53.3761ZM24.108 53.3761H17.322V32.7281H24.108V53.3761ZM9.202 53.3761H1.72L1.72 29.9441H9.202L9.202 53.3761ZM26.892 24.6176L1.72 26.9956L1.72 16.4976L26.892 18.7596V24.6176ZM40.754 21.6596C40.754 23.6703 40.3287 25.1783 39.478 26.1836C38.6273 27.1503 37.3127 27.6336 35.534 27.6336C33.7167 27.6336 32.3827 27.1503 31.532 26.1836C30.6813 25.1783 30.256 23.6703 30.256 21.6596C30.256 19.6103 30.6813 18.0829 31.532 17.0776C32.3827 16.0723 33.7167 15.5696 35.534 15.5696C39.014 15.5696 40.754 17.5996 40.754 21.6596ZM26.892 9.95897L1.72 12.337V1.83897L26.892 4.10097V9.95897ZM40.754 7.00097C40.754 9.01164 40.3287 10.5196 39.478 11.525C38.6273 12.4916 37.3127 12.975 35.534 12.975C33.7167 12.975 32.3827 12.4916 31.532 11.525C30.6813 10.5196 30.256 9.01164 30.256 7.00097C30.256 4.95164 30.6813 3.4243 31.532 2.41897C32.3827 1.41364 33.7167 0.910971 35.534 0.910971C39.014 0.910971 40.754 2.94097 40.754 7.00097Z" fill="white" />
  </svg>

}

