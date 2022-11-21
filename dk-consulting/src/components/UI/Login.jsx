import Header from "../Header&Footer/Header";
import Footer from "../Header&Footer/Footer";
import {NavLink} from "react-router-dom";
import Button from "./Button";

export default function Login(props) {
    return(
        <section className={props.isVisible ? "bg-[rgba(0,0,0,0.5)] block fixed z-[500] top-0 w-full" : "hidden"}>
                <div className="mx-auto  h-[100vh] flex flex-col items-center justify-center ">
                    <div className="w-[860px] h-[max-content] bg-[#0A0B22] flex flex-col items-center relative py-[50px] lg:w-[680px] md:w-[680px] md:py-30px sm:w-[410px] sm:py-5 xs:w-[290px] xs:py-5">

                        <button  className="absolute right-[22px] top-[30px] sm:top-4 sm:right-4" onClick={() => {props.setVisible(false)}}>
                            <svg className="sm:w-4 xs:w-4" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.45508 1.22253L26.4551 26.2225M26.4551 1.22253L1.45508 26.2225" stroke="#E8E9EF" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        
                        <svg className="sm:w-11 xs:w-11" width="77" height="60" viewBox="0 0 77 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_356_1291" fill="white">
                            <path d="M44.8849 4.72511C45.9224 4.72511 46.7635 3.88405 46.7635 2.84655C46.7635 1.80825 45.9212 0.966857 44.8829 0.967985L32.0077 0.981966C30.9748 0.983087 30.1382 1.82069 30.1382 2.85354C30.1382 3.88718 30.9761 4.72511 32.0097 4.72511H44.8849ZM75.5467 34.1513L75.3315 34.2235L75.0427 34.3208C74.7996 34.4013 74.5622 34.4846 74.3178 34.5596C73.9012 34.6985 73.4678 34.829 73.0374 34.9582L72.7263 35.0568L71.9847 35.2845C71.5543 35.4123 71.1252 35.5317 70.6961 35.6511L70.2795 35.7706C70.0559 35.8358 69.8267 35.8997 69.6018 35.9636L68.7366 36.1871L68.32 36.2955L68.0131 36.3774C67.7354 36.4496 67.4577 36.5163 67.1799 36.5913C66.8453 36.6746 66.5023 36.7537 66.1593 36.8343L65.8968 36.8954L65.619 36.9593C65.3177 37.0301 65.0191 37.0981 64.7178 37.1675C64.4165 37.237 64.1054 37.3064 63.7957 37.3675L63.4318 37.4439L62.9986 37.537C62.7431 37.5883 62.4834 37.6453 62.2251 37.6981L61.2946 37.8744L60.9239 37.9439L60.567 38.0119C60.2768 38.066 59.988 38.123 59.7005 38.1716C59.3617 38.2327 59.0145 38.2882 58.6673 38.3465L58.3771 38.3924L57.9868 38.4577C57.7091 38.5063 57.4314 38.5507 57.1536 38.5965C56.788 38.6521 56.4218 38.7058 56.0552 38.7576L55.7997 38.7923L55.3511 38.8562C55.0914 38.8965 54.8276 38.9326 54.5637 38.9673C54.2415 39.0104 53.9152 39.0493 53.5917 39.0881L53.1931 39.1325L52.8737 39.1728C52.5668 39.2131 52.2599 39.2492 51.953 39.2839C51.5753 39.3228 51.2073 39.3589 50.842 39.3936L50.5754 39.4186L50.1588 39.4617C49.8741 39.4894 49.5894 39.5186 49.302 39.545C49.0145 39.5714 48.7368 39.5894 48.4549 39.6102L47.973 39.645L47.6009 39.6755C47.2732 39.7005 46.9454 39.7269 46.6177 39.7491C46.3649 39.7658 46.1067 39.7769 45.847 39.7922L45.4012 39.8172L44.8693 39.8449C44.5576 39.8662 44.3139 40.1208 44.3139 40.4333V43.9749C44.3095 44.9311 43.9277 45.847 43.2515 46.5231C42.5753 47.1993 41.6595 47.5811 40.7033 47.5855H36.2039C35.2475 47.5818 34.3312 47.2002 33.6549 46.5239C32.9786 45.8476 32.597 44.9314 32.5934 43.9749V40.4499C32.5934 40.1274 32.3417 39.8647 32.0198 39.8435L31.6032 39.8172L31.2324 39.8019C30.913 39.7852 30.5964 39.7686 30.2812 39.7477L29.4813 39.688L29.0286 39.6533L28.562 39.6172C28.2412 39.595 27.9204 39.57 27.6024 39.5436C27.2844 39.5172 27.0067 39.4853 26.7137 39.4575L26.397 39.4228L25.9943 39.3853C25.6457 39.352 25.3 39.3186 24.9528 39.2811C24.6889 39.252 24.4251 39.2187 24.1599 39.1881L23.7627 39.1409L23.2989 39.0853C22.9753 39.0437 22.6504 39.0076 22.3268 38.9645C22.0491 38.9284 21.763 38.8868 21.4783 38.8465L21.145 38.7965L20.6743 38.7298C20.3646 38.6882 20.0535 38.6438 19.7452 38.591C19.4675 38.5493 19.2078 38.5049 18.9398 38.4521L18.5523 38.3882L18.2482 38.3382C17.8941 38.2813 17.5372 38.2244 17.1859 38.1605C16.8748 38.1049 16.5721 38.0466 16.2638 37.9897L15.9986 37.9383L15.6805 37.8799C15.3403 37.8175 15.0015 37.7536 14.6668 37.6869C14.3641 37.6258 14.0669 37.5633 13.7683 37.4981L13.4781 37.4356L13.0615 37.3467C12.7657 37.2856 12.4685 37.2245 12.1741 37.1564C11.8797 37.0884 11.5478 37.0176 11.234 36.9398L10.9965 36.8829L10.6688 36.8051C10.3522 36.7315 10.0383 36.6593 9.72311 36.5829C9.4912 36.5246 9.26344 36.4663 9.03848 36.4052L8.56773 36.2816L8.28997 36.2094C7.96224 36.1261 7.63498 36.0413 7.30817 35.9552L6.61383 35.7581L6.18474 35.6358L5.92229 35.5623C5.589 35.4664 5.25707 35.3734 4.92934 35.2734C4.60161 35.1734 4.31694 35.0873 4.00865 34.9957L3.83506 34.9401L3.56985 34.8582C3.24351 34.7568 2.91577 34.6555 2.59776 34.5513C2.24225 34.4388 1.89229 34.3194 1.54234 34.1999C1.12574 34.0611 0.70914 33.9222 0.292535 33.7833C0.162725 33.7367 0.0259268 33.8329 0.0259268 33.9708V58.9616C0.027377 59.0632 0.0685674 59.1603 0.140732 59.232C0.212897 59.3036 0.310272 59.3441 0.41196 59.3448H76.5119C76.6128 59.3427 76.709 59.3014 76.78 59.2296C76.8511 59.1578 76.8913 59.0612 76.8923 58.9602V33.958C76.8923 33.8259 76.761 33.734 76.6369 33.7792C76.2675 33.9111 75.9092 34.0305 75.5467 34.1513ZM76.5022 7.96082C76.5022 7.95925 76.5009 7.95798 76.4994 7.95798H0.402255C0.300793 7.95976 0.20397 8.00086 0.132214 8.07261C0.0604583 8.14437 0.0193617 8.24117 0.0175781 8.34263V28.8927C0.0175781 29.7135 0.528772 30.4489 1.30209 30.7241C1.44096 30.7727 1.57986 30.8185 1.71873 30.8629L2.00479 30.956L2.40196 31.0948C2.77274 31.2212 3.14488 31.349 3.5226 31.4698L4.00865 31.6212L4.2864 31.7086C4.78633 31.8669 5.27929 32.0225 5.77921 32.1697C5.94586 32.2224 6.12085 32.2697 6.29026 32.3183L6.64854 32.4197L6.95265 32.5071C7.3276 32.6141 7.70397 32.7224 8.08308 32.8266C8.29971 32.8877 8.51771 32.9432 8.73712 33.0001L9.07734 33.0876L9.4023 33.1737C9.74392 33.2626 10.0828 33.3528 10.4286 33.4389C10.6313 33.4903 10.8452 33.5389 11.0562 33.5903L11.5395 33.7028L11.9644 33.8028C12.2422 33.8704 12.5231 33.9365 12.8074 34.0013C13.0851 34.0666 13.3753 34.125 13.66 34.1847L14.0391 34.2638L14.4293 34.3458C14.6932 34.4041 14.9584 34.461 15.2278 34.5152C15.5528 34.5805 15.8805 34.6401 16.2069 34.7026L16.5818 34.7735L16.897 34.8318C17.1581 34.8832 17.4178 34.9332 17.6803 34.979C18.0302 35.0401 18.3829 35.097 18.7371 35.1567L19.1634 35.2262L19.5675 35.2942L20.1744 35.3914C20.5729 35.4567 20.977 35.5123 21.3797 35.5678L21.7963 35.6261L22.1102 35.6733L22.6892 35.7525C23.1975 35.8205 23.7016 35.8789 24.2085 35.9386L24.4251 35.9636L24.7876 36.008C24.9417 36.0288 25.0959 36.0455 25.25 36.065C25.8194 36.1288 26.3957 36.1788 26.9678 36.2344L27.3524 36.2733L27.8413 36.3191C28.2662 36.358 28.6939 36.3899 29.123 36.4218L29.5466 36.451L29.9632 36.483C30.127 36.4982 30.2951 36.5093 30.4589 36.5205C30.8186 36.5441 31.1797 36.5635 31.5449 36.5802L31.9782 36.601L32.3101 36.6246C32.4616 36.6246 32.5878 36.5106 32.5878 36.359V33.482C32.5915 32.5255 32.973 31.6093 33.6494 30.933C34.3257 30.2566 35.2419 29.8751 36.1983 29.8714H40.6991C41.6552 29.8761 42.5708 30.2581 43.2469 30.9342C43.923 31.6103 44.3049 32.5259 44.3097 33.482V36.619C44.3097 36.6313 44.3196 36.6412 44.3319 36.6412L44.7832 36.6163L45.2762 36.5899C45.665 36.5704 46.0511 36.5496 46.4385 36.5232C46.5885 36.5135 46.7315 36.5038 46.8718 36.4913L47.2079 36.4649C47.8272 36.4232 48.4452 36.3774 49.0604 36.326L49.3951 36.2955L49.7658 36.2566C50.4102 36.1969 51.0323 36.1399 51.6475 36.0719L52.0349 36.0233L52.3127 35.99C52.9473 35.9164 53.5764 35.8428 54.1985 35.7622L54.5568 35.7094L54.9151 35.6581L55.165 35.6233C55.6872 35.5511 56.2066 35.4775 56.7232 35.3984L57.1647 35.3262L57.5397 35.2609L57.9563 35.1942C58.3729 35.1276 58.7895 35.0554 59.2061 34.9845C59.4075 34.9484 59.6047 34.911 59.8019 34.8735L60.1129 34.8124L60.3545 34.7693C60.7919 34.6874 61.2308 34.6068 61.6613 34.5193C61.8502 34.4832 62.0293 34.443 62.2167 34.4041L62.657 34.3111L62.9111 34.2569C63.3041 34.175 63.6971 34.0916 64.0859 34.0041C64.3637 33.943 64.6317 33.8778 64.9038 33.8125L65.1441 33.7542L65.3858 33.7C65.7468 33.6153 66.1106 33.532 66.4689 33.4431C66.7466 33.3723 67.0161 33.3043 67.2896 33.2279L67.6076 33.1459L68.0034 33.0446L68.8116 32.8293C69.1644 32.7335 69.506 32.6349 69.8601 32.5335L70.01 32.4919L70.2975 32.4086C70.5753 32.3322 70.853 32.253 71.121 32.1739C71.3891 32.0947 71.6862 32.0017 71.964 31.9142L72.3556 31.7906L72.6625 31.6948C72.9041 31.6212 73.1457 31.5475 73.3832 31.4698C73.7109 31.3656 74.0303 31.2545 74.3553 31.1476L74.6469 31.0462L74.9788 30.9365L75.6148 30.7213C75.962 30.6005 76.3092 30.4727 76.6508 30.3463C76.7841 30.298 76.8729 30.1713 76.8729 30.0295V8.33986C76.8699 8.24196 76.83 8.14882 76.7613 8.07905C76.6932 8.00993 76.6018 7.96879 76.5049 7.96366C76.5034 7.96358 76.5022 7.96233 76.5022 7.96082ZM40.7047 44.3554C40.8046 44.3519 40.8994 44.3105 40.9698 44.2395C41.0403 44.1686 41.081 44.0734 41.0838 43.9735V42.6101C41.0838 41.1684 39.8966 40.0158 38.455 40.0158C37.013 40.0158 35.8262 41.1681 35.8262 42.6101V43.9735C35.8273 44.0747 35.8681 44.1714 35.9398 44.2428C36.0114 44.3142 36.1083 44.3547 36.2095 44.3554H40.7047Z"/>
                            </mask>
                            <path d="M44.8849 4.72511C45.9224 4.72511 46.7635 3.88405 46.7635 2.84655C46.7635 1.80825 45.9212 0.966857 44.8829 0.967985L32.0077 0.981966C30.9748 0.983087 30.1382 1.82069 30.1382 2.85354C30.1382 3.88718 30.9761 4.72511 32.0097 4.72511H44.8849ZM75.5467 34.1513L75.3315 34.2235L75.0427 34.3208C74.7996 34.4013 74.5622 34.4846 74.3178 34.5596C73.9012 34.6985 73.4678 34.829 73.0374 34.9582L72.7263 35.0568L71.9847 35.2845C71.5543 35.4123 71.1252 35.5317 70.6961 35.6511L70.2795 35.7706C70.0559 35.8358 69.8267 35.8997 69.6018 35.9636L68.7366 36.1871L68.32 36.2955L68.0131 36.3774C67.7354 36.4496 67.4577 36.5163 67.1799 36.5913C66.8453 36.6746 66.5023 36.7537 66.1593 36.8343L65.8968 36.8954L65.619 36.9593C65.3177 37.0301 65.0191 37.0981 64.7178 37.1675C64.4165 37.237 64.1054 37.3064 63.7957 37.3675L63.4318 37.4439L62.9986 37.537C62.7431 37.5883 62.4834 37.6453 62.2251 37.6981L61.2946 37.8744L60.9239 37.9439L60.567 38.0119C60.2768 38.066 59.988 38.123 59.7005 38.1716C59.3617 38.2327 59.0145 38.2882 58.6673 38.3465L58.3771 38.3924L57.9868 38.4577C57.7091 38.5063 57.4314 38.5507 57.1536 38.5965C56.788 38.6521 56.4218 38.7058 56.0552 38.7576L55.7997 38.7923L55.3511 38.8562C55.0914 38.8965 54.8276 38.9326 54.5637 38.9673C54.2415 39.0104 53.9152 39.0493 53.5917 39.0881L53.1931 39.1325L52.8737 39.1728C52.5668 39.2131 52.2599 39.2492 51.953 39.2839C51.5753 39.3228 51.2073 39.3589 50.842 39.3936L50.5754 39.4186L50.1588 39.4617C49.8741 39.4894 49.5894 39.5186 49.302 39.545C49.0145 39.5714 48.7368 39.5894 48.4549 39.6102L47.973 39.645L47.6009 39.6755C47.2732 39.7005 46.9454 39.7269 46.6177 39.7491C46.3649 39.7658 46.1067 39.7769 45.847 39.7922L45.4012 39.8172L44.8693 39.8449C44.5576 39.8662 44.3139 40.1208 44.3139 40.4333V43.9749C44.3095 44.9311 43.9277 45.847 43.2515 46.5231C42.5753 47.1993 41.6595 47.5811 40.7033 47.5855H36.2039C35.2475 47.5818 34.3312 47.2002 33.6549 46.5239C32.9786 45.8476 32.597 44.9314 32.5934 43.9749V40.4499C32.5934 40.1274 32.3417 39.8647 32.0198 39.8435L31.6032 39.8172L31.2324 39.8019C30.913 39.7852 30.5964 39.7686 30.2812 39.7477L29.4813 39.688L29.0286 39.6533L28.562 39.6172C28.2412 39.595 27.9204 39.57 27.6024 39.5436C27.2844 39.5172 27.0067 39.4853 26.7137 39.4575L26.397 39.4228L25.9943 39.3853C25.6457 39.352 25.3 39.3186 24.9528 39.2811C24.6889 39.252 24.4251 39.2187 24.1599 39.1881L23.7627 39.1409L23.2989 39.0853C22.9753 39.0437 22.6504 39.0076 22.3268 38.9645C22.0491 38.9284 21.763 38.8868 21.4783 38.8465L21.145 38.7965L20.6743 38.7298C20.3646 38.6882 20.0535 38.6438 19.7452 38.591C19.4675 38.5493 19.2078 38.5049 18.9398 38.4521L18.5523 38.3882L18.2482 38.3382C17.8941 38.2813 17.5372 38.2244 17.1859 38.1605C16.8748 38.1049 16.5721 38.0466 16.2638 37.9897L15.9986 37.9383L15.6805 37.8799C15.3403 37.8175 15.0015 37.7536 14.6668 37.6869C14.3641 37.6258 14.0669 37.5633 13.7683 37.4981L13.4781 37.4356L13.0615 37.3467C12.7657 37.2856 12.4685 37.2245 12.1741 37.1564C11.8797 37.0884 11.5478 37.0176 11.234 36.9398L10.9965 36.8829L10.6688 36.8051C10.3522 36.7315 10.0383 36.6593 9.72311 36.5829C9.4912 36.5246 9.26344 36.4663 9.03848 36.4052L8.56773 36.2816L8.28997 36.2094C7.96224 36.1261 7.63498 36.0413 7.30817 35.9552L6.61383 35.7581L6.18474 35.6358L5.92229 35.5623C5.589 35.4664 5.25707 35.3734 4.92934 35.2734C4.60161 35.1734 4.31694 35.0873 4.00865 34.9957L3.83506 34.9401L3.56985 34.8582C3.24351 34.7568 2.91577 34.6555 2.59776 34.5513C2.24225 34.4388 1.89229 34.3194 1.54234 34.1999C1.12574 34.0611 0.70914 33.9222 0.292535 33.7833C0.162725 33.7367 0.0259268 33.8329 0.0259268 33.9708V58.9616C0.027377 59.0632 0.0685674 59.1603 0.140732 59.232C0.212897 59.3036 0.310272 59.3441 0.41196 59.3448H76.5119C76.6128 59.3427 76.709 59.3014 76.78 59.2296C76.8511 59.1578 76.8913 59.0612 76.8923 58.9602V33.958C76.8923 33.8259 76.761 33.734 76.6369 33.7792C76.2675 33.9111 75.9092 34.0305 75.5467 34.1513ZM76.5022 7.96082C76.5022 7.95925 76.5009 7.95798 76.4994 7.95798H0.402255C0.300793 7.95976 0.20397 8.00086 0.132214 8.07261C0.0604583 8.14437 0.0193617 8.24117 0.0175781 8.34263V28.8927C0.0175781 29.7135 0.528772 30.4489 1.30209 30.7241C1.44096 30.7727 1.57986 30.8185 1.71873 30.8629L2.00479 30.956L2.40196 31.0948C2.77274 31.2212 3.14488 31.349 3.5226 31.4698L4.00865 31.6212L4.2864 31.7086C4.78633 31.8669 5.27929 32.0225 5.77921 32.1697C5.94586 32.2224 6.12085 32.2697 6.29026 32.3183L6.64854 32.4197L6.95265 32.5071C7.3276 32.6141 7.70397 32.7224 8.08308 32.8266C8.29971 32.8877 8.51771 32.9432 8.73712 33.0001L9.07734 33.0876L9.4023 33.1737C9.74392 33.2626 10.0828 33.3528 10.4286 33.4389C10.6313 33.4903 10.8452 33.5389 11.0562 33.5903L11.5395 33.7028L11.9644 33.8028C12.2422 33.8704 12.5231 33.9365 12.8074 34.0013C13.0851 34.0666 13.3753 34.125 13.66 34.1847L14.0391 34.2638L14.4293 34.3458C14.6932 34.4041 14.9584 34.461 15.2278 34.5152C15.5528 34.5805 15.8805 34.6401 16.2069 34.7026L16.5818 34.7735L16.897 34.8318C17.1581 34.8832 17.4178 34.9332 17.6803 34.979C18.0302 35.0401 18.3829 35.097 18.7371 35.1567L19.1634 35.2262L19.5675 35.2942L20.1744 35.3914C20.5729 35.4567 20.977 35.5123 21.3797 35.5678L21.7963 35.6261L22.1102 35.6733L22.6892 35.7525C23.1975 35.8205 23.7016 35.8789 24.2085 35.9386L24.4251 35.9636L24.7876 36.008C24.9417 36.0288 25.0959 36.0455 25.25 36.065C25.8194 36.1288 26.3957 36.1788 26.9678 36.2344L27.3524 36.2733L27.8413 36.3191C28.2662 36.358 28.6939 36.3899 29.123 36.4218L29.5466 36.451L29.9632 36.483C30.127 36.4982 30.2951 36.5093 30.4589 36.5205C30.8186 36.5441 31.1797 36.5635 31.5449 36.5802L31.9782 36.601L32.3101 36.6246C32.4616 36.6246 32.5878 36.5106 32.5878 36.359V33.482C32.5915 32.5255 32.973 31.6093 33.6494 30.933C34.3257 30.2566 35.2419 29.8751 36.1983 29.8714H40.6991C41.6552 29.8761 42.5708 30.2581 43.2469 30.9342C43.923 31.6103 44.3049 32.5259 44.3097 33.482V36.619C44.3097 36.6313 44.3196 36.6412 44.3319 36.6412L44.7832 36.6163L45.2762 36.5899C45.665 36.5704 46.0511 36.5496 46.4385 36.5232C46.5885 36.5135 46.7315 36.5038 46.8718 36.4913L47.2079 36.4649C47.8272 36.4232 48.4452 36.3774 49.0604 36.326L49.3951 36.2955L49.7658 36.2566C50.4102 36.1969 51.0323 36.1399 51.6475 36.0719L52.0349 36.0233L52.3127 35.99C52.9473 35.9164 53.5764 35.8428 54.1985 35.7622L54.5568 35.7094L54.9151 35.6581L55.165 35.6233C55.6872 35.5511 56.2066 35.4775 56.7232 35.3984L57.1647 35.3262L57.5397 35.2609L57.9563 35.1942C58.3729 35.1276 58.7895 35.0554 59.2061 34.9845C59.4075 34.9484 59.6047 34.911 59.8019 34.8735L60.1129 34.8124L60.3545 34.7693C60.7919 34.6874 61.2308 34.6068 61.6613 34.5193C61.8502 34.4832 62.0293 34.443 62.2167 34.4041L62.657 34.3111L62.9111 34.2569C63.3041 34.175 63.6971 34.0916 64.0859 34.0041C64.3637 33.943 64.6317 33.8778 64.9038 33.8125L65.1441 33.7542L65.3858 33.7C65.7468 33.6153 66.1106 33.532 66.4689 33.4431C66.7466 33.3723 67.0161 33.3043 67.2896 33.2279L67.6076 33.1459L68.0034 33.0446L68.8116 32.8293C69.1644 32.7335 69.506 32.6349 69.8601 32.5335L70.01 32.4919L70.2975 32.4086C70.5753 32.3322 70.853 32.253 71.121 32.1739C71.3891 32.0947 71.6862 32.0017 71.964 31.9142L72.3556 31.7906L72.6625 31.6948C72.9041 31.6212 73.1457 31.5475 73.3832 31.4698C73.7109 31.3656 74.0303 31.2545 74.3553 31.1476L74.6469 31.0462L74.9788 30.9365L75.6148 30.7213C75.962 30.6005 76.3092 30.4727 76.6508 30.3463C76.7841 30.298 76.8729 30.1713 76.8729 30.0295V8.33986C76.8699 8.24196 76.83 8.14882 76.7613 8.07905C76.6932 8.00993 76.6018 7.96879 76.5049 7.96366C76.5034 7.96358 76.5022 7.96233 76.5022 7.96082ZM40.7047 44.3554C40.8046 44.3519 40.8994 44.3105 40.9698 44.2395C41.0403 44.1686 41.081 44.0734 41.0838 43.9735V42.6101C41.0838 41.1684 39.8966 40.0158 38.455 40.0158C37.013 40.0158 35.8262 41.1681 35.8262 42.6101V43.9735C35.8273 44.0747 35.8681 44.1714 35.9398 44.2428C36.0114 44.3142 36.1083 44.3547 36.2095 44.3554H40.7047Z" stroke="#40454E" stroke-width="6" mask="url(#path-1-inside-1_356_1291)"/>
                        </svg>
                        <h2 className="text-white text-[40px] text-center leading-[56px] font-extralight mt-[50px] lg:text-4xl md:text-4xl md:mt-[25px] sm:mt-5 sm:text-xl sm:uppercase xs:uppercase xs:text-lg  xs:mt-4">Введите логин и пароль</h2>

                        <form className="flex flex-col w-full items-center max-w-[710px] lg:max-w-[515px] md:max-w-[515px] sm:max-w-[320px]">
                            <div className="flex flex-col w-full items-center max-w-[710px]  py-4 space-y-4 lg:max-w-[515px] md:max-w-[515px] sm:max-w-[320px]">
                                <input type="name" id="name" placeholder="E-mail" className="w-[100%] bg-[#0A0B22] border-b-[1px] bo text-[#40454E] font-light text-[22px] leading-[16px] p-3 lg:text-lg md:text-lg sm:text-base xs:text-base"/>
                                <input type="name" id="name" placeholder="Пароль" className="w-[100%] bg-[#0A0B22] border-b-[1px] bo text-[#40454E] font-light text-[22px] leading-[16px] p-3 lg:text-lg md:text-lg sm:text-base xs:text-base"/>
                                <div className="flex items-center w-full border-b-[1px] p-3">
                                    <input type="checkbox" id="capcha" className="w-[25px] h-[25px] bg-[#40454E] mr-[15px] sm:w-4 sm:h-4 xs:w-4 xs:h-4"/>
                                    <label htmlFor="capcha" className="text-[16px] leading-[22px] text-white font-extralight lg:text-lg md:text-lg sm:text-base xs:text-base">Я не робот</label>
                                </div>
                            </div>
                            <Button bluebtn="true" buttonText="войти"></Button>
                        </form>
                        <NavLink to="/register" className="text-blue text-xl font-light mt-8 lg:text-lg md:text-lg sm:text-base sm:mt-4 xs:text-sm xs:mt-4">
                            Зарегистрироваться
                        </NavLink>
                    </div>

                </div>
            <Footer />
        </section>
    )
}
