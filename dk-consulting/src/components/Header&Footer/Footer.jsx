import {NavLink} from "react-router-dom";
import hlogo from "../../assets/Header/headlogo.svg";

export default function Footer() {
    return(
        <section className="h-[150px] bg-[#40454E] w-full lg:h-[185px] md:h-[185px] sm:h-[195px] xs:h-[185px]">
            <div className="flex flex-row justify-between items-center max-w-[1290px] mx-auto py-[17px] h-full lg:max-w-[940px] lg:justify-start md:max-w-[690px] md:justify-start sm:max-w-[420px] sm:justify-between sm:flex-start sm:flex-col sm:flex-wrap xs:max-w-[290px] xs:justify-between xs:flex-start xs:flex-col xs:flex-wrap">
                <NavLink to="/" className="mr-[80px] w-[280px] md:mr-[10px] md:w-[100px] sm:w-[50%] sm:mr-[0px] xs:w-[50%] xs:mr-[0px]">
                    <img src={hlogo} alt="logo" className=" w-[200px] h-auto md:w-[100px] sm:w-[167px] xs:w-[100px]"/>
                </NavLink>
                <div  className="flex flex-row flex-wrap justify-center items-center border-x-[1px] border-white lg:flex-col lg:items-start lg:pl-4 md:flex-col md:items-start md:pl-4 sm:flex-col sm:items-start sm:pl-0 sm:border-x-0 sm:w-[210px] xs:flex-col xs:items-start xs:pl-0 xs:border-x-0 xs:w-[50%]">
                        <a href="https://api.whatsapp.com/send?phone=79852203550" className="mr-[50px] mb-[14px] group flex items-center w-[195px] sm:mx-0 sm:my-[2px] sm:w-[130px] xs:mx-0 xs:my-[2px] xs:w-[130px]">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className="group-hover:fill-darkblue" x="0.458984" y="0.499939" width="26.9835" height="27" rx="13.4917" fill="#4D8BBE"/>
                            <path d="M18.1698 6.94344C15.5986 6.45212 12.9285 6.45212 10.3573 6.94344C9.22001 7.1891 7.78607 8.56481 7.53884 9.64572C7.09382 11.7584 7.09382 13.9202 7.53884 16.0329C7.83552 17.1138 9.26945 18.4895 10.3573 18.7352C10.4067 18.7352 10.4562 18.7843 10.4562 18.8334V21.9288C10.4562 22.0762 10.6539 22.1744 10.7528 22.027L12.2362 20.5039C12.2362 20.5039 13.4229 19.2756 13.6207 19.0791C13.6207 19.0791 13.6702 19.03 13.7196 19.03C15.203 19.0791 16.7358 18.9317 18.2192 18.686C19.3565 18.4404 20.7904 17.0647 21.0376 15.9838C21.4826 13.8711 21.4826 11.7093 21.0376 9.59658C20.741 8.56481 19.307 7.1891 18.1698 6.94344ZM18.2192 16.1803C17.972 16.6716 17.6753 17.0647 17.1808 17.3103C17.0325 17.3595 16.8842 17.4086 16.7358 17.4577C16.538 17.4086 16.3897 17.3595 16.2414 17.3103C14.6591 16.6716 13.1757 15.7872 11.989 14.5098C11.3462 13.7728 10.8023 12.9376 10.3573 12.0532C10.1595 11.611 9.9617 11.2179 9.81336 10.7758C9.66502 10.3827 9.91225 9.98964 10.1595 9.69485C10.4067 9.40005 10.7034 9.20353 11.0495 9.05613C11.2967 8.90873 11.544 9.007 11.7418 9.20353C12.1373 9.69485 12.5329 10.1862 12.8296 10.7266C13.0274 11.0706 12.9779 11.4636 12.6318 11.7093C12.5329 11.7584 12.4835 11.8075 12.3846 11.9058C12.3351 11.9549 12.2362 12.0041 12.1868 12.1023C12.0879 12.2497 12.0879 12.3971 12.1373 12.5445C12.5329 13.6746 13.2746 14.5589 14.4119 15.0503C14.6096 15.1485 14.758 15.1977 15.0052 15.1977C15.3513 15.1485 15.4997 14.7555 15.7469 14.5589C15.9941 14.3624 16.2908 14.3624 16.5875 14.5098C16.8347 14.6572 17.0819 14.8537 17.3786 15.0503C17.6258 15.2468 17.8731 15.3942 18.1203 15.5907C18.2686 15.689 18.3181 15.9346 18.2192 16.1803ZM16.1425 12.4954C16.0436 12.4954 16.093 12.4954 16.1425 12.4954C15.9447 12.4954 15.8952 12.3971 15.8458 12.2497C15.8458 12.1515 15.8458 12.0041 15.7963 11.9058C15.7469 11.7093 15.648 11.5127 15.4502 11.3653C15.3513 11.3162 15.2524 11.2671 15.1535 11.2179C15.0052 11.1688 14.9063 11.1688 14.758 11.1688C14.6096 11.1197 14.5602 11.0214 14.5602 10.874C14.5602 10.7758 14.7085 10.6775 14.8074 10.6775C15.5986 10.7266 16.1919 11.1688 16.2908 12.1023C16.2908 12.1515 16.2908 12.2497 16.2908 12.2989C16.2908 12.3971 16.2414 12.4954 16.1425 12.4954ZM15.648 10.3336C15.4008 10.2353 15.1535 10.137 14.8569 10.0879C14.758 10.0879 14.6096 10.0388 14.5107 10.0388C14.3624 10.0388 14.2635 9.94051 14.313 9.79311C14.313 9.64572 14.4119 9.54745 14.5602 9.59658C15.0547 9.64572 15.4997 9.74398 15.9447 9.94051C16.8347 10.3827 17.3292 11.1197 17.4775 12.1023C17.4775 12.1515 17.4775 12.2006 17.4775 12.2497C17.4775 12.348 17.4775 12.4463 17.4775 12.5936C17.4775 12.6428 17.4775 12.6919 17.4775 12.741C17.4281 12.9376 17.0819 12.9867 17.0325 12.741C17.0325 12.6919 16.9831 12.5936 16.9831 12.5445C16.9831 12.1023 16.8842 11.6601 16.6864 11.2671C16.3897 10.8249 16.0436 10.5301 15.648 10.3336ZM18.3181 13.2815C18.1698 13.2815 18.0709 13.1341 18.0709 12.9867C18.0709 12.6919 18.0214 12.3971 17.972 12.1023C17.7742 10.5301 16.4886 9.25266 14.9558 9.007C14.7085 8.95786 14.4613 8.95786 14.2635 8.90873C14.1152 8.90873 13.9174 8.90873 13.8679 8.7122C13.8185 8.56481 13.9668 8.41741 14.1152 8.41741C14.1646 8.41741 14.2141 8.41741 14.2141 8.41741C16.2414 8.46654 14.313 8.41741 14.2141 8.41741C16.2908 8.46654 18.0214 9.84225 18.3675 11.9058C18.417 12.2497 18.4664 12.5937 18.4664 12.9867C18.5653 13.1341 18.4664 13.2815 18.3181 13.2815Z" fill="white"/>
                            </svg>
                            <p className="text-[16px] leading-[21px] text-white ml-[10px] font-light sm:text-[10px] sm:leading-[13px] sm:ml-[5px] xs:text-[10px] xs:leading-[13px] xs:ml-[5px]">+7 495 220-35-50</p>
                        </a>
                        <a href="https://t.me/+79852203550" className="group mb-[14px] flex items-center w-[195px] sm:mx-0 sm:my-[2px] sm:w-[130px] xs:mx-0 xs:my-[2px] xs:w-[130px]">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect className="group-hover:fill-darkblue" x="0.442383" y="0.499939" width="26.9835" height="27" rx="13.4917" fill="#4D8BBE"/>
                                <path d="M19.3308 9.00642L17.3034 19.5972C17.3034 19.5972 17.0197 20.3315 16.2405 19.9793L11.5627 16.2629L11.541 16.252C12.1728 15.6641 17.0726 11.0992 17.2867 10.8923C17.6182 10.5718 17.4124 10.3811 17.0275 10.6231L9.79 15.3857L6.99778 14.4122C6.99778 14.4122 6.55837 14.2502 6.5161 13.8981C6.47327 13.5453 7.01224 13.3545 7.01224 13.3545L18.3953 8.72745C18.3953 8.72745 19.3308 8.30152 19.3308 9.00642Z" fill="white"/>
                            </svg>
                            <p className="text-[16px] leading-[21px] text-white ml-[10px] font-light sm:text-[10px] sm:leading-[13px] sm:ml-[5px] xs:text-[10px] xs:leading-[13px] xs:ml-[5px]">dk-consult</p>
                        </a>
                        <a href="skype:dk-consulting?add" className="mr-[50px] group flex items-center w-[195px] lg:mb-[14px] md:mb-[14px] sm:w-[130px] sm:mx-0 sm:my-[2px] xs:mx-0 xs:my-[2px] xs:w-[130px]">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle className="group-hover:fill-darkblue" cx="13.5" cy="13.5" r="13.5" fill="#4D8BBE"/>
                                <path d="M21.018 14.6032C21.2498 14.9311 21.4263 15.287 21.5497 15.6769C21.6724 16.0655 21.7345 16.4677 21.7345 16.8842C21.7345 17.4807 21.6138 18.0411 21.3752 18.566C21.1359 19.0896 20.8067 19.5511 20.3867 19.9519C19.9668 20.3487 19.478 20.6602 18.9163 20.8866C18.3546 21.1129 17.7635 21.224 17.135 21.224C16.2399 21.224 15.4368 21.0127 14.7244 20.5907C14.5267 20.618 14.3277 20.6377 14.1266 20.6527C13.9248 20.6664 13.725 20.6718 13.5253 20.6718C12.4796 20.6718 11.4979 20.4843 10.5796 20.1108C9.6634 19.7351 8.86103 19.2252 8.16977 18.5755C7.48056 17.9286 6.93723 17.1658 6.54593 16.2925C6.15122 15.4192 5.9542 14.486 5.9542 13.4941C5.9542 13.3018 5.96375 13.1191 5.9842 12.9501C6.00261 12.781 6.02783 12.6085 6.05373 12.436C5.5629 11.755 5.31885 11.0235 5.31885 10.2389C5.31885 9.65534 5.43951 9.10384 5.67879 8.58505C5.91739 8.06695 6.24461 7.61634 6.66455 7.2339C7.08448 6.85078 7.576 6.54946 8.13432 6.32859C8.69401 6.10771 9.28778 6 9.91632 6C10.369 6 10.7937 6.05317 11.1973 6.16157C11.6008 6.27132 11.9785 6.42403 12.3269 6.62377C12.5239 6.59582 12.7257 6.57605 12.9247 6.56037C13.1265 6.5481 13.3283 6.5406 13.5253 6.5406C14.5745 6.5406 15.5595 6.7233 16.4805 7.08665C17.3995 7.44728 18.2039 7.94697 18.8952 8.58096C19.5864 9.21768 20.1311 9.95461 20.5265 10.7931C20.9205 11.633 21.1175 12.5342 21.1175 13.4941C21.1182 13.8479 21.0855 14.218 21.018 14.6032ZM17.135 16.7861C17.4581 16.3607 17.6176 15.861 17.6176 15.287C17.6176 14.835 17.5276 14.4553 17.3504 14.1471C17.1656 13.8404 16.9052 13.5834 16.5691 13.3782C16.2603 13.1791 15.8588 13.0026 15.3673 12.8444C14.873 12.7203 14.3488 12.599 13.7946 12.4749L13.1872 12.3365C13.0242 12.3017 12.8947 12.2724 12.7972 12.2459C12.6888 12.2193 12.5886 12.1899 12.4932 12.1552C12.4032 12.1231 12.3078 12.0856 12.2123 12.0447C12.0269 11.967 11.8715 11.8614 11.7481 11.7373C11.6526 11.6303 11.6049 11.4864 11.6049 11.3078C11.6049 11.0467 11.7603 10.8136 12.0692 10.607C12.4189 10.4141 12.8463 10.3214 13.3542 10.3275C13.9411 10.3275 14.3536 10.4141 14.586 10.5879C14.8669 10.7938 15.0871 11.0474 15.2446 11.3467C15.3816 11.5662 15.5207 11.7298 15.6645 11.8375C15.8015 11.9425 15.9917 11.9991 16.231 12.0066C16.5003 12.0066 16.7232 11.9173 16.9107 11.7373C17.0941 11.5696 17.182 11.3808 17.1772 11.1681C17.1772 10.922 17.1077 10.68 16.9714 10.4468C16.8364 10.228 16.6094 9.99483 16.2965 9.74737C16.1383 9.64103 15.9645 9.54354 15.777 9.45424C15.5888 9.36425 15.3775 9.28517 15.1478 9.21836C14.9071 9.15292 14.6542 9.10247 14.3877 9.06839C14.1204 9.03498 13.8287 9.0193 13.5055 9.0193C12.6916 9.0193 12.0051 9.11883 11.4461 9.31789C10.8455 9.52514 10.3908 9.81009 10.0827 10.1796C9.77452 10.5313 9.62045 10.954 9.62045 11.4476C9.62045 11.967 9.76975 12.3897 10.0642 12.7155C10.3608 13.068 10.7623 13.3345 11.2702 13.5152C11.7528 13.7081 12.3698 13.8772 13.1265 14.0231C13.4094 14.0899 13.6569 14.1465 13.8757 14.1894C14.0911 14.2317 14.2868 14.2801 14.4579 14.3326C14.7803 14.4205 15.0421 14.5678 15.2419 14.777C15.4552 14.9584 15.5623 15.1915 15.5623 15.4792C15.5623 15.8767 15.3673 16.1984 14.9821 16.4438C14.6181 16.6954 14.1259 16.8195 13.5062 16.8106C13.0099 16.8106 12.6507 16.7533 12.423 16.6374C12.1401 16.5086 11.9315 16.345 11.7944 16.15C11.6206 15.9278 11.4815 15.681 11.3697 15.4144C11.2722 15.1615 11.1407 14.9707 10.9689 14.8418C10.8087 14.7116 10.6212 14.6468 10.401 14.6468C10.1201 14.6468 9.88837 14.7252 9.70499 14.8793C9.52161 15.0545 9.43366 15.2597 9.43775 15.4901C9.43775 15.8916 9.58637 16.2932 9.88087 16.6954C10.1733 17.1092 10.5489 17.4323 11.0064 17.6648C11.6765 18.0111 12.5184 18.1863 13.5301 18.1931C14.3556 18.1931 15.0912 18.0704 15.7313 17.8257C16.3599 17.5468 16.8289 17.2012 17.135 16.7861Z" fill="white"/>
                            </svg>
                            <p className="text-[16px] leading-[21px] text-white ml-[10px] font-light sm:text-[10px] sm:leading-[13px] sm:ml-[5px] xs:text-[10px] xs:leading-[13px] xs:ml-[5px]">dkapitonenko</p>
                        </a>
                        <a href="mailto:dkapitonenko@dk-consult.ru" className="group flex items-center w-[195px] sm:w-[130px] sm:mx-0 sm:my-[2px] xs:mx-0 xs:my-[2px] xs:w-[130px]">
                            <svg className="min-w-[max-content]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse className="group-hover:fill-darkblue" cx="13.9009" cy="13.9999" rx="13.4917" ry="13.5" fill="#4D8BBE"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.81934 10.8792C7.81934 9.93129 8.58732 9.16284 9.53467 9.16284H18.2673C19.2147 9.16284 19.9826 9.9313 19.9826 10.8792V17.1206C19.9826 18.0686 19.2147 18.837 18.2673 18.837H9.53467C8.58732 18.837 7.81934 18.0686 7.81934 17.1206V10.8792ZM9.17041 10.9058C8.95544 10.7624 8.66498 10.8206 8.52166 11.0357C8.37835 11.2508 8.43644 11.5414 8.65141 11.6848L12.9495 14.552C13.5257 14.9363 14.2763 14.9363 14.8525 14.552L19.1506 11.6848C19.3655 11.5414 19.4236 11.2508 19.2803 11.0357C19.137 10.8206 18.8465 10.7624 18.6316 10.9058L14.3335 13.773C14.0716 13.9477 13.7304 13.9477 13.4685 13.773L9.17041 10.9058Z" fill="white"/>
                            </svg>
                            <p className="text-[16px] leading-[21px] break-words text-white ml-[10px] font-light sm:text-[10px] sm:leading-[13px] sm:ml-[5px] xs:text-[10px] xs:leading-[13px] xs:ml-[5px]">dkapitonenko@dk-consult.ru</p>
                        </a>
                </div>
                <nav className="ml-[80px] w-[370px] items-start relative md:ml-4 md:w-[290px] sm:w-[40%] sm:ml-0 sm:h-full xs:w-[40%] xs:ml-0 xs:h-full sm:pl-[26px] sm:border-l-[1px] border-white xs:pl-[26px] xs:border-l-[1px]">
                    <NavLink to="/services/audit">
                        <p className="text-[14px] leading-[16px] text-white my-[10px] sm:text-[10px] sm:leading-[13px] xs:text-[10px] xs:leading-[13px]">•    Аудит</p>
                    </NavLink>
                    <NavLink to="/services/consult">
                        <p className="text-[14px] leading-[16px] text-white my-[10px] sm:text-[10px] sm:leading-[13px] xs:text-[10px] xs:leading-[13px]">•    Промышленный консалтинг</p>
                    </NavLink>
                    <NavLink to="/services/organize">
                        <p className="text-[14px] leading-[16px] text-white my-[10px] sm:text-[10px] sm:leading-[13px] xs:text-[10px] xs:leading-[13px]">•    Организация производства</p>
                    </NavLink>
                    <NavLink to="/services/teach">
                        <p className="text-[14px] leading-[16px] text-white my-[10px] sm:text-[10px] sm:leading-[13px] xs:text-[10px] xs:leading-[13px]">•    Обучение</p>
                    </NavLink>
                    <p className="text-[10px] leading-[10px] text-[#C5C5C550] absolute bottom-0 right-0 text-end">Copyright &copy;&nbsp;2022&nbsp;| DK-Consulting</p>
                    <a href="31.31.192.57:8000/admin" className="text-[10px] leading-[10px] underline text-[#C5C5C550] absolute bottom-4 lg:-bottom-4 right-0 text-end md:hidden sm:hidden xs:hidden">Вход для администратора</a>
                </nav>
            </div>
        </section>
    )
}
