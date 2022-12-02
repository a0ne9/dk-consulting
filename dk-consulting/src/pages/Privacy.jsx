import React from "react";
import {Helmet} from "react-helmet";

import Header from "../components/Header&Footer/Header";
import Footer from "../components/Header&Footer/Footer";
import { HeaderBurger } from "../components/Header&Footer/HeaderBurger";


export const Privacy = () => {

    const [defaultPageWidth, setDefaultPageWidth] = React.useState(window.innerWidth);
    const bp = 767;
    React.useEffect(() => {
        const windowResizer = () => setDefaultPageWidth(window.innerWidth);
        window.addEventListener("resize", windowResizer);
        return () => {
            window.removeEventListener("resize", windowResizer);
        };
    }, []);

    return (
        <div>
            <Helmet>
                <title>Политика конфиденциальности | DK-CONSULTING</title>
                <meta name="description" content="Политика конфиденциальности и сбора данных компании" />
            </Helmet>
            {defaultPageWidth > bp
                ? <Header />
                : <HeaderBurger/>
            }
            <main className="mt-[70px] lg:mt-[87px] md:mt-[87px] sm:mt-[64px] xs:mt-[64px]">
                <div className="max-w-[1290px] py-10 lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px] mx-auto">
                    <h1>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1>
                    <br />
                    Настоящая Политика конфиденциальности определяет, каким образом DK-СONSULTING (<a href="/">https://dk-consult.ru</a>, далее&nbsp;&mdash; Оператор) собирает, использует, хранит и&nbsp;раскрывает информацию, полученную от&nbsp;пользователей. Данная Политика конфиденциальности относится и&nbsp;к&nbsp;сайту, всем поддоменам сайта, всем продуктам и&nbsp;услугам, предлагаемым Оператором.Настоящая Политика конфиденциальности распространяется непосредственно на&nbsp;этот сайт и&nbsp;на&nbsp;информацию, получаемую с&nbsp;его помощью. Она не&nbsp;распространяется ни&nbsp;на&nbsp;какие другие сайты и&nbsp;не&nbsp;применима к&nbsp;веб-сайтам третьих лиц, которые могут содержать упоминание о&nbsp;нашем сайте и&nbsp;с&nbsp;которых могут делаться ссылки на&nbsp;сайт, а&nbsp;также ссылки с&nbsp;этого сайта на&nbsp;другие сайты сети Интернет.
                    <br /><br />
                    <h1>ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</h1>
                    <br />
                    Персональные данные пользователя&nbsp;&mdash; фамилия, имя, отчество, название компании, номер телефона, адрес электронной почты, логины Skype и&nbsp;прочих коммуникационных программ, IP-адрес,&mdash; обрабатываются со&nbsp;следующей целью: предоставление и&nbsp;реклама услуг, обеспечение доступа к&nbsp;информационным продуктам, рассылка новостей компании, для внутреннего отчета, для предоставления информации и&nbsp;услуг, которые запрашивает пользователь, для ответа на&nbsp;запросы пользователя, для улучшения качества продуктов сайта, для улучшения качества предоставления услуг, для мониторинга работы сайта, для отправки различной электронной корреспонденции, для проведения опросов, для формирования статистических данных. 
                    Оператор имеет право направлять Пользователю уведомления о&nbsp;новых продуктах и&nbsp;услугах, специальных предложениях и&nbsp;различных событиях. Пользователь всегда может отказаться от&nbsp;получения информационных сообщений, направив Оператору письмо на&nbsp;адрес info@dk-consult.ruОбезличенные данные Пользователей, собираемые с&nbsp;помощью сервисов интернет-статистики, служат для сбора информации о&nbsp;действиях Пользователей на&nbsp;сайте, улучшения качества сайта и&nbsp;его содержания.
                    <br /><br />
                    <h1>ПЕРСОНАЛЬНЫЕ ДАННЫЕ ПОЛЬЗОВАТЕЛЯ</h1>
                    <br />
                    Вводя личные данные в&nbsp;формах обратной связи на&nbsp;сайте, нажимая кнопку &laquo;Отправить&raquo;, Пользователь принимает решение о&nbsp;предоставлении своих персональных данных и&nbsp;дает согласие на&nbsp;их&nbsp;обработку своей волей и&nbsp;в&nbsp;своем интересе, при этом такое согласие Пользователя является однозначным и&nbsp;сознательным.
                    Оператор не&nbsp;проверяет достоверность персональной информации, предоставляемой Пользователями, и&nbsp;не&nbsp;осуществляет проверку их&nbsp;дееспособности. При этом Оператор исходит из&nbsp;того, что информация, переданная им&nbsp;от&nbsp;пользователей, является достоверной. Пользователь несет ответственность за&nbsp;предоставление персональных данных третьего лица.
                    <br />
                    В&nbsp;отношении персональной информации Пользователя сохраняется ее&nbsp;конфиденциальность. Ни&nbsp;при каких условиях Оператор не&nbsp;передает персональную информацию Пользователя третьим лицам за&nbsp;исключением случаев, прямо предусмотренных действующим законодательством Российской Федерации.
                    <br />
                    Пользователь соглашается с&nbsp;тем, что Оператор вправе использовать персональные данные Пользователя для осуществления электронной новостной или рекламной рассылки, в&nbsp;том числе посредством email-писем и&nbsp;SMS-сообщений. 
                    <br /><br />
                    <h1>ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ ПОЛЬЗОВАТЕЛЕЙ</h1>
                    <br />
                    Принятие условий настоящей Политики в&nbsp;части положений об&nbsp;обработке персональных данных осуществляется путем проставления Пользователем соответствующей отметки при заполнении любой формы обратной связи, в&nbsp;том числе формы регистрации и&nbsp;является выраженным осознанным согласием Пользователя на&nbsp;обработку персональных данных.
                    Пользователь соглашается с&nbsp;тем, что Оператор имеет право на&nbsp;хранение и&nbsp;обработку, в&nbsp;том числе и&nbsp;автоматизированную, любой информации, относящейся к&nbsp;персональным данным Пользователя в&nbsp;соответствии с&nbsp;Федеральным законом от&nbsp;27.07.2006 &#8470;&nbsp;152-ФЗ &laquo;О&nbsp;персональных данных&raquo;, включая сбор, систематизацию, накопление, хранение, уточнение, использование, распространение (в&nbsp;том числе передачу), обезличивание, блокирование, уничтожение персональных данных, предоставленных Пользователем при заполнении формы обратной связи или регистрации на&nbsp;сайте.
                    Согласие на&nbsp;обработку персональных данных может быть в&nbsp;любой момент отозвано Пользователем путем письменного обращения в&nbsp;адрес Оператора info@dk-consult.ru. В&nbsp;случае отзыва Пользователем согласия на&nbsp;обработку персональных данных, Оператор удаляет персональные данные Пользователя и&nbsp;не&nbsp;вправе использовать их&nbsp;в&nbsp;будущем.
                    <br /><br />
                    <h1>ДОСТУП К&nbsp;ЛИЧНОЙ ИНФОРМАЦИИ</h1>
                    <br />
                    Мы&nbsp;не&nbsp;продаем, не&nbsp;обмениваем и&nbsp;не&nbsp;даем в&nbsp;аренду личную информацию пользователей. Мы&nbsp;можем предоставлять общие агрегированные демографические данные, не&nbsp;связанные с&nbsp;личной информацией, нашими партнерами и&nbsp;рекламодателями для целей, описанных выше. Мы&nbsp;можем использовать сторонних поставщиков услуг, чтобы помочь нам управлять нашим бизнесом и&nbsp;сайтом или управлять деятельностью от&nbsp;нашего имени, например, проведение рассылки или статистических и&nbsp;иных исследований. Мы&nbsp;можем делиться этой информацией с&nbsp;этими третьими лицами для ограниченных целей при условии, что вы&nbsp;дали нам соответствующие разрешения.
                    <br /><br />
                    <h1>ЗАЩИТА ВАШЕЙ ИНФОРМАЦИИ</h1>
                    <br />
                    Оператор обеспечивается конфиденциальность и&nbsp;безопасность при обработке персональных данных. Мы&nbsp;принимаем соответствующие меры безопасности по&nbsp;сбору, хранению и&nbsp;обработке любых собранных данных для защиты их&nbsp;от&nbsp;несанкционированного доступа, изменения, раскрытия или уничтожения вашей личной информации (имя пользователя, пароль, информация транзакции и&nbsp;данные, хранящиеся на&nbsp;нашем сайте).
                    <br /><br />
                    <h1>ВАШЕ СОГЛАСИЕ С&nbsp;ЭТИМИ УСЛОВИЯМИ</h1>
                    <br />
                    Используя наш сайт, Вы&nbsp;выражаете свое конкретное и&nbsp;осознанное согласие с&nbsp;этой Политикой. Если Вы&nbsp;не&nbsp;согласны с&nbsp;этой Политикой, пожалуйста, не&nbsp;используйте наш сайт. Ваше дальнейшее использование сайта в&nbsp;случае внесения изменений в&nbsp;настоящую политику будет рассматриваться как ваше согласие с&nbsp;этими изменениями.
                    <br /><br />
                    <h1>КАК С&nbsp;НАМИ СВЯЗАТЬСЯ</h1>
                    <br />
                    Если у&nbsp;вас есть какие-либо вопросы по&nbsp;Политике конфиденциальности, использованию сайта или иным вопросам, пожалуйста, напишите нам на&nbsp;info@dk-consult.ru.
                </div>
            </main>
            <Footer />
        </div>
    )
}