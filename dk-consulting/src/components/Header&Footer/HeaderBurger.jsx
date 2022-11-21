import { NavLink } from "react-router-dom";
import { useState } from "react";

import hlogo from "../../assets/Header/headlogo.svg";

export const HeaderBurger = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-grey fixed top-0 z-100 h-[64px] w-full z-[100]">
            <div className="max-w-[420px] mx-auto h-full w-full py-[20px] relative z-[250] xs:max-w-[280px]">
                <NavLink to="/" className="">
                    <img src={hlogo} alt="logo" className="w-[135px]"/>
                </NavLink>
                <button
                    className="absolute top-[25px] right-0 lg:hidden flex flex-col items-center justify-center gap-[5px] z-[200]"
                    id="mobileButtonMenu"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <div
                        className={`w-[18px] h-[1px] bg-white rounded-full lg:group-hover:bg-white transition-all duration-300 ${
                            isOpen && "translate-y-[6px] -rotate-45 bg-white opacity-0 "
                        }`}
                    />
                    <div
                        className={`w-[18px] h-[1px] bg-white rounded-full lg:group-hover:bg-white transition-all duration-300 ${
                            isOpen && "translate-y-[-2px] rotate-45 bg-white"
                        }`}
                    />
                    <div
                        className={`w-[18px] h-[1px] bg-white rounded-full lg:group-hover:bg-white transition-all duration-300 ${
                            isOpen && "-translate-y-[8px] -rotate-45 bg-white"
                        }`}
                    />
                </button>
            </div>

            <div
                className={`w-full h-full fixed z-[150] ${
                    isOpen ? "top-0 left-0" : "hidden"
                } right-0 transition-all duration-200`}
            >
                <div className="bg-grey w-full py-[64px] z-[150] relative">
                    <nav className="flex flex-col justify-between items-center pt-[46px] border-x-[1px] border-white h-full w-full gap-[10px]">
                        <NavLink to="/about" 
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <p className="text-[12px] leading-[12px] text-white uppercase px-[8px] py-[15px] ring-white rounded-[4px] hover:ring-[1px] focus:bg-white focus:text-grey">О компании</p>
                        </NavLink>
                        <NavLink to="/services"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <p className="text-[12px] leading-[12px] text-white uppercase px-[8px] py-[15px] ring-white rounded-[4px] hover:ring-[1px] focus:bg-white focus:text-grey">услуги</p>
                        </NavLink>
                        <NavLink to="/info"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <p className="text-[12px] leading-[12px] text-white uppercase px-[8px] py-[15px] ring-white rounded-[4px] hover:ring-[1px] focus:bg-white focus:text-grey">полезная информация</p>
                        </NavLink>
                        <NavLink to="/mainform"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <p className="text-[12px] leading-[12px] text-white uppercase px-[8px] py-[15px] ring-white rounded-[4px] hover:ring-[1px] focus:bg-white focus:text-grey">запрос на сотрудничество</p>
                        </NavLink>
                    </nav>
                    <div  className="text-white flex flex-col items-center mt-[60px]">
                        <div className="flex flex-row w-[max-content] lg:mt-[10px] md:mt-[10px]">
                            <svg className="md:w-14px h-auto" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1949 11.2341L10.059 10.0974C10.2156 9.95372 10.3366 9.78701 10.4217 9.59731C10.5063 9.40813 10.5486 9.20902 10.5486 8.99998C10.5486 8.79094 10.5063 8.59183 10.4217 8.40265C10.3366 8.21295 10.2156 8.04624 10.059 7.90253L11.1949 6.76588C11.4952 7.06637 11.7237 7.4092 11.8804 7.79435C12.0371 8.18003 12.1154 8.5819 12.1154 8.99998C12.1154 9.41806 12.0371 9.81967 11.8804 10.2048C11.7237 10.5905 11.4952 10.9336 11.1949 11.2341ZM13.1143 13.1546L12.0175 12.0572C12.4223 11.6522 12.7356 11.1884 12.9576 10.6658C13.1796 10.1432 13.2905 9.5879 13.2905 8.99998C13.2905 8.41206 13.1796 7.8568 12.9576 7.3342C12.7356 6.81161 12.4223 6.3478 12.0175 5.94279L13.1143 4.84534C13.6757 5.39406 14.1066 6.02771 14.4069 6.74628C14.7072 7.46485 14.8574 8.21609 14.8574 8.99998C14.8574 9.78387 14.7072 10.5351 14.4069 11.2537C14.1066 11.9722 13.6757 12.6059 13.1143 13.1546ZM2.30316 17.6228C1.87228 17.6228 1.50355 17.4694 1.19698 17.1627C0.889877 16.8554 0.736328 16.4862 0.736328 16.055V1.94493C0.736328 1.51378 0.889877 1.14457 1.19698 0.837283C1.50355 0.530518 1.87228 0.377136 2.30316 0.377136H10.1373C10.5682 0.377136 10.9372 0.530518 11.2443 0.837283C11.5508 1.14457 11.7041 1.51378 11.7041 1.94493V5.08051H10.1373V4.29661H2.30316V13.7033H10.1373V12.9195H11.7041V16.055C11.7041 16.4862 11.5508 16.8554 11.2443 17.1627C10.9372 17.4694 10.5682 17.6228 10.1373 17.6228H2.30316ZM2.30316 15.2711V16.055H10.1373V15.2711H2.30316ZM2.30316 2.72882H10.1373V1.94493H2.30316V2.72882Z" fill="#E8E9EF"/>
                            </svg>
                            <p className="ml-[10px] text-[16px] w-full font-light lg:text-[14px] md:text-[13px] md:ml-[8px]">+7 916 285 52 93</p>
                        </div>
                        <div className="flex flex-row justify-between mt-[36px] gap-[15px]">
                            <a href="/" className="group lg:mr-[13px]">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect className="group-hover:fill-darkblue" x="0.458984" y="0.499939" width="26.9835" height="27" rx="13.4917" fill="#4D8BBE"/>
                                <path d="M18.1698 6.94344C15.5986 6.45212 12.9285 6.45212 10.3573 6.94344C9.22001 7.1891 7.78607 8.56481 7.53884 9.64572C7.09382 11.7584 7.09382 13.9202 7.53884 16.0329C7.83552 17.1138 9.26945 18.4895 10.3573 18.7352C10.4067 18.7352 10.4562 18.7843 10.4562 18.8334V21.9288C10.4562 22.0762 10.6539 22.1744 10.7528 22.027L12.2362 20.5039C12.2362 20.5039 13.4229 19.2756 13.6207 19.0791C13.6207 19.0791 13.6702 19.03 13.7196 19.03C15.203 19.0791 16.7358 18.9317 18.2192 18.686C19.3565 18.4404 20.7904 17.0647 21.0376 15.9838C21.4826 13.8711 21.4826 11.7093 21.0376 9.59658C20.741 8.56481 19.307 7.1891 18.1698 6.94344ZM18.2192 16.1803C17.972 16.6716 17.6753 17.0647 17.1808 17.3103C17.0325 17.3595 16.8842 17.4086 16.7358 17.4577C16.538 17.4086 16.3897 17.3595 16.2414 17.3103C14.6591 16.6716 13.1757 15.7872 11.989 14.5098C11.3462 13.7728 10.8023 12.9376 10.3573 12.0532C10.1595 11.611 9.9617 11.2179 9.81336 10.7758C9.66502 10.3827 9.91225 9.98964 10.1595 9.69485C10.4067 9.40005 10.7034 9.20353 11.0495 9.05613C11.2967 8.90873 11.544 9.007 11.7418 9.20353C12.1373 9.69485 12.5329 10.1862 12.8296 10.7266C13.0274 11.0706 12.9779 11.4636 12.6318 11.7093C12.5329 11.7584 12.4835 11.8075 12.3846 11.9058C12.3351 11.9549 12.2362 12.0041 12.1868 12.1023C12.0879 12.2497 12.0879 12.3971 12.1373 12.5445C12.5329 13.6746 13.2746 14.5589 14.4119 15.0503C14.6096 15.1485 14.758 15.1977 15.0052 15.1977C15.3513 15.1485 15.4997 14.7555 15.7469 14.5589C15.9941 14.3624 16.2908 14.3624 16.5875 14.5098C16.8347 14.6572 17.0819 14.8537 17.3786 15.0503C17.6258 15.2468 17.8731 15.3942 18.1203 15.5907C18.2686 15.689 18.3181 15.9346 18.2192 16.1803ZM16.1425 12.4954C16.0436 12.4954 16.093 12.4954 16.1425 12.4954C15.9447 12.4954 15.8952 12.3971 15.8458 12.2497C15.8458 12.1515 15.8458 12.0041 15.7963 11.9058C15.7469 11.7093 15.648 11.5127 15.4502 11.3653C15.3513 11.3162 15.2524 11.2671 15.1535 11.2179C15.0052 11.1688 14.9063 11.1688 14.758 11.1688C14.6096 11.1197 14.5602 11.0214 14.5602 10.874C14.5602 10.7758 14.7085 10.6775 14.8074 10.6775C15.5986 10.7266 16.1919 11.1688 16.2908 12.1023C16.2908 12.1515 16.2908 12.2497 16.2908 12.2989C16.2908 12.3971 16.2414 12.4954 16.1425 12.4954ZM15.648 10.3336C15.4008 10.2353 15.1535 10.137 14.8569 10.0879C14.758 10.0879 14.6096 10.0388 14.5107 10.0388C14.3624 10.0388 14.2635 9.94051 14.313 9.79311C14.313 9.64572 14.4119 9.54745 14.5602 9.59658C15.0547 9.64572 15.4997 9.74398 15.9447 9.94051C16.8347 10.3827 17.3292 11.1197 17.4775 12.1023C17.4775 12.1515 17.4775 12.2006 17.4775 12.2497C17.4775 12.348 17.4775 12.4463 17.4775 12.5936C17.4775 12.6428 17.4775 12.6919 17.4775 12.741C17.4281 12.9376 17.0819 12.9867 17.0325 12.741C17.0325 12.6919 16.9831 12.5936 16.9831 12.5445C16.9831 12.1023 16.8842 11.6601 16.6864 11.2671C16.3897 10.8249 16.0436 10.5301 15.648 10.3336ZM18.3181 13.2815C18.1698 13.2815 18.0709 13.1341 18.0709 12.9867C18.0709 12.6919 18.0214 12.3971 17.972 12.1023C17.7742 10.5301 16.4886 9.25266 14.9558 9.007C14.7085 8.95786 14.4613 8.95786 14.2635 8.90873C14.1152 8.90873 13.9174 8.90873 13.8679 8.7122C13.8185 8.56481 13.9668 8.41741 14.1152 8.41741C14.1646 8.41741 14.2141 8.41741 14.2141 8.41741C16.2414 8.46654 14.313 8.41741 14.2141 8.41741C16.2908 8.46654 18.0214 9.84225 18.3675 11.9058C18.417 12.2497 18.4664 12.5937 18.4664 12.9867C18.5653 13.1341 18.4664 13.2815 18.3181 13.2815Z" fill="white"/>
                                </svg>
                            </a>
                            <a href="/" className="group lg:mr-[13px]">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="group-hover:fill-darkblue" x="0.442383" y="0.499939" width="26.9835" height="27" rx="13.4917" fill="#4D8BBE"/>
                                    <path d="M19.3308 9.00642L17.3034 19.5972C17.3034 19.5972 17.0197 20.3315 16.2405 19.9793L11.5627 16.2629L11.541 16.252C12.1728 15.6641 17.0726 11.0992 17.2867 10.8923C17.6182 10.5718 17.4124 10.3811 17.0275 10.6231L9.79 15.3857L6.99778 14.4122C6.99778 14.4122 6.55837 14.2502 6.5161 13.8981C6.47327 13.5453 7.01224 13.3545 7.01224 13.3545L18.3953 8.72745C18.3953 8.72745 19.3308 8.30152 19.3308 9.00642Z" fill="white"/>
                                </svg>
                            </a>
                            <a href="/" className="group lg:mr-[13px]">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse className="group-hover:fill-darkblue" cx="13.9175" cy="13.9999" rx="13.4917" ry="13.5" fill="#4D8BBE"/>
                                    <path d="M14.2547 7.74341C13.9747 7.74341 13.7478 7.97053 13.7478 8.25069C13.7478 8.53086 13.9747 8.75798 14.2547 8.75798C15.4418 8.75798 16.6713 9.35697 17.6141 10.3003C18.5569 11.2437 19.1555 12.474 19.1555 13.6617C19.1555 13.9419 19.3825 14.169 19.6625 14.169C19.9424 14.169 20.1694 13.9419 20.1694 13.6617C20.1694 12.144 19.4161 10.6687 18.331 9.58294C17.2459 8.49717 15.7715 7.74341 14.2547 7.74341Z" fill="white"/>
                                    <path d="M11.5134 8.84853C10.7874 8.12214 9.61044 8.12214 8.88449 8.84853L8.20852 9.52491C7.85991 9.87374 7.66406 10.3468 7.66406 10.8402V12.067C7.66406 12.2856 7.70218 12.5156 7.80051 12.7372C8.0828 13.3733 8.97192 15.1354 10.8769 17.0416C12.7819 18.9478 14.543 19.8374 15.1787 20.1199C15.4001 20.2183 15.6301 20.2564 15.8485 20.2564H17.0746C17.5676 20.2564 18.0404 20.0605 18.389 19.7116L19.065 19.0353C19.7909 18.3089 19.7909 17.1312 19.065 16.4048L18.1008 15.44C17.4742 14.813 16.4925 14.7157 15.7552 15.2076L15.3023 15.5097C15.046 15.6807 14.7372 15.6908 14.5017 15.5516C14.071 15.2969 13.571 14.9657 13.2613 14.6558C12.9515 14.3458 12.6205 13.8456 12.366 13.4146C12.2269 13.179 12.237 12.87 12.4079 12.6136L12.7098 12.1603C13.2014 11.4226 13.1042 10.4403 12.4776 9.81333L11.5134 8.84853Z" fill="white"/>
                                    <path d="M14.9307 10.4489C14.6507 10.4489 14.4237 10.676 14.4237 10.9562C14.4237 11.2364 14.6507 11.4635 14.9307 11.4635C15.2728 11.4635 15.6573 11.6398 15.9664 11.949C16.2755 12.2583 16.4516 12.6431 16.4516 12.9854C16.4516 13.2655 16.6786 13.4926 16.9586 13.4926C17.2386 13.4926 17.4656 13.2655 17.4656 12.9854C17.4656 12.3131 17.1347 11.6833 16.6834 11.2316C16.232 10.78 15.6026 10.4489 14.9307 10.4489Z" fill="white"/>
                                </svg>
                            </a>
                            <a href="/" className="group">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse className="group-hover:fill-darkblue" cx="13.9009" cy="13.9999" rx="13.4917" ry="13.5" fill="#4D8BBE"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.81934 10.8792C7.81934 9.93129 8.58732 9.16284 9.53467 9.16284H18.2673C19.2147 9.16284 19.9826 9.9313 19.9826 10.8792V17.1206C19.9826 18.0686 19.2147 18.837 18.2673 18.837H9.53467C8.58732 18.837 7.81934 18.0686 7.81934 17.1206V10.8792ZM9.17041 10.9058C8.95544 10.7624 8.66498 10.8206 8.52166 11.0357C8.37835 11.2508 8.43644 11.5414 8.65141 11.6848L12.9495 14.552C13.5257 14.9363 14.2763 14.9363 14.8525 14.552L19.1506 11.6848C19.3655 11.5414 19.4236 11.2508 19.2803 11.0357C19.137 10.8206 18.8465 10.7624 18.6316 10.9058L14.3335 13.773C14.0716 13.9477 13.7304 13.9477 13.4685 13.773L9.17041 10.9058Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}