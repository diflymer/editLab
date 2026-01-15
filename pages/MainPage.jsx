import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonReg } from '../components/ButtonReg';
import { FeaturesBlock } from '../components/FeaturesBlock';
import { SignUpForm } from '../components/SignUpForm';
import { HeroSection } from '../components/HeroSection';
import { ProgramBlock } from '../components/ProgramBlock';
import { TestimonialsBlock } from '../components/TestimonialsBlock';
import { CTABlock } from '../components/CTABlock';
import { TeacherBlock } from '../components/TeacherBlock';
import { CountdownTimer } from '../components/CountdownTimer';
import { yandexMetrika } from '../utils/yandexMetrika'

const MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
`;

const FooterSection = styled.footer`
    margin-top: 100px;
    padding: 40px 20px;
    color: #718096;
    font-size: 14px;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const ScrollIndicator = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    z-index: 100;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(99, 102, 241, 0.4);
    }
`;


export default function MainPage() {
    const [clickNumber, setClickNumber] = useState(0);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const [variants, setVariants] = useState({
        with_photo: false,
        with_timer: false
    });

    useEffect(() => {
        // Функция для запроса флагов у Вариокуба
        const fetchVariants = () => {
            // Убедитесь, что функция ymab загружена (скрипт Вариокуба)
            if (typeof window !== 'undefined' && window.ymab) {
                // Замените XXXXXXXX на ID вашего счетчика Яндекс.Метрики
                window.ymab('metrika.106270317', 'getFlags', function (flags) {
                    // flags - это объект с флагами для текущего посетителя
                    console.log('Получены флаги из Вариокуба:', flags);

                    // Пример: если в интерфейсе Вариокуба вы создали флаг 'show_photo'
                    // со значением 'true' для одного из вариантов, то в объекте flags
                    // будет ключ 'show_photo' со значением ['true']
                    const newVariants = {
                        with_photo: flags?.with_photo?.[0] === 'true' || false,
                        with_timer: flags?.with_timer?.[0] === 'true' || false,
                    };
                    setVariants(newVariants);
                });
            } else {
                // Если Вариокуб не загружен, можно установить значения по умолчанию
                console.warn('Функция ymab (Вариокуб) не найдена. Использую флаги по умолчанию.');
            }
        };

        // Запрашиваем флаги при монтировании компонента
        fetchVariants();

        // Если сайт SPA, может потребоваться повторно запрашивать флаги при изменении URL
        // const handleRouteChange = () => { fetchVariants(); };
        // router.events.on('routeChangeComplete', handleRouteChange);
        // return () => { router.events.off('routeChangeComplete', handleRouteChange); };
    }, []); // Зависимости: пустой массив, чтобы эффект сработал один раз при монтировании

    const handleSubmit = (e) => {

        //Достижение цели нажатия на кнопку
        yandexMetrika.reachGoal('button_click');

        //Достижение цели отправки формы
        yandexMetrika.reachGoal('form_submit');

        e?.preventDefault?.();
        setSubmitted(true);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCTAClick = () => {

        //Достижение цели нажатия на кнопку
        yandexMetrika.reachGoal('button_click');

        const formElement = document.getElementById('signup-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <MainPageContainer>
            <HeroSection clickNumber={clickNumber} />

            {/* Таймер показывается только если with_timer = true */}
            {siteVariant.with_timer && (
                <CountdownTimer targetDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)} />
            )}

            <ButtonReg
                clickNumber={clickNumber}
                setClickNumber={setClickNumber}
            />

            <FeaturesBlock clickNumber={clickNumber} />

            {/* Блок с фото показывается только если with_photo = true */}
            {siteVariant.with_photo && <TeacherBlock />}

            <ProgramBlock />

            <TestimonialsBlock />

            <CTABlock onClick={handleCTAClick} />

            <SignUpForm
                handleSubmit={handleSubmit}
                submitted={submitted}
                email={email}
                setEmail={setEmail}
            />

            <FooterSection>
                <p>© 2025 EditLab — курс по видеомонтажу</p>
                <p style={{ marginTop: '8px', fontSize: '12px', opacity: 0.7 }}>
                    Все права защищены
                </p>
            </FooterSection>

            <ScrollIndicator onClick={scrollToTop} title="Наверх">
                ↑
            </ScrollIndicator>
        </MainPageContainer>
    );
}
