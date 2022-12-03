import {NavLink} from "react-router-dom";
import Button from "../UI/Button";
import Register from "../UI/Register";
import Login from "../UI/Login";
import {useState, useEffect} from "react";

export const InfoPromo = () => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [regVisible, setRegVisible] = useState(false);
    const [account, setAccount] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(()=>{
        const jwt = localStorage.getItem('jwt');
      if (jwt) {
        setAccount(true);
        const localEmail = localStorage.getItem("email");
        setEmail(localEmail);
      } else {
        console.log("net tokena");
      }
    }, [account])

    const logout = () => {
        localStorage.clear();
        setAccount(false);
    }

    return (
        <div className="h-[910px] lg:h-[685px] sm:h-[256px] xs:h-[328px] bg-no-repeat bg-bottom bg-infopromo bg-cover xs:bg-top">
            <div className="bg-gradient-to-r from-[#090A20] via-[#06082BE8] to-[#07093E14] h-full xs:bg-gradient-to-t xs:from-[#090A20] xs:to-[#07093E14] relative">
            <div className="w-full absolute">
                    <div className="max-w-[1290px] mx-auto flex items-end lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px]">
                        <div className="flex absolute z-10 text-white font-extralight text-[16px] leading-[22px] top-[16px] right-[75px] sm:text-[10px] sm:leading-[12px] sm:right-[60px] xs:text-[10px] xs:leading-[12px] xs:right-[calc(50%-61px)] ">
                            {
                                account ?  <div>
                                    <p className="hover:text-blue inline sm:text-[10px] xs:text-[10px]">{email} </p>
                                    <button className="hover:text-blue sm:text-[10px] xs:text-[10px]" onClick={logout}>/ Выйти</button>
                                    </div> :  <div>
                                    <button className="hover:text-[#27699E] sm:text-[10px] xs:text-[10px]" onClick={() => {setRegVisible(true)}}>Регистрация / </button>
                                    <button className="hover:text-[#27699E] sm:text-[10px] xs:text-[10px]" onClick={() => {setLoginVisible(true)}}>Авторизация</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                
                <div className="w-[calc(50%-90px)] bg-[#090A20] h-full relative lg:w-[calc(50%-20px)]  md:w-[calc(50%+45px)] sm:w-[50%] xs:bg-transparent xs:w-full xs:mx-auto xs:relative">
                    <div className="absolute top-[321px] right-[24px] lg:top-[112px]  md:top-[152px] sm:top-[26px] xs:top-[150px] xs:mx-auto xs:right-[calc(50%-117.5px)]">
                        <div className="max-w-[526px] flex flex-col items-start  lg:max-w-[306px]  md:max-w-[306px] sm:max-w-[180px] xs:max-w-[235px] xs:w-full">
                            <h1 className="par text-white mb-[61px] lg:text-[18px] lg:leading-[24px] lg:mb-[50px] md:text-[18px] md:leading-[24px] md:mb-[50px] sm:mb-[18px] sm:text-[12px] sm:leading-[16px] sm:text-center xs:mb-[18px] xs:text-[12px] xs:leading-[16px] xs:text-center">Разработанный нами материал полезен для изучения руководителям любого уровня, а также для проведения обучающих семинаров с целью повышения личной и командной эффективности сотрудников компании.</h1>
                            <NavLink to="/mainform" className="xs:absolute xs:top-[115px] xs:mx-auto xs:right-[calc(50%-90px)]">
                                <Button bluebtn={false} buttonText="начать сотрудничество"/>
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Register isVisible={regVisible} setVisible={setRegVisible} setLoginVisible={setLoginVisible}/>
            <Login isVisible={loginVisible} setVisible={setLoginVisible} setAccount={setAccount} regVisible={setRegVisible}/>
        </div>
    )
}
