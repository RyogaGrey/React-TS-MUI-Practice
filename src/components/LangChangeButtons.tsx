import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import i18n from "i18next";

export default function LanguageButtonsComponent() {
    const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);

    useEffect(() => {
        const handleLanguageChange = () => {
            setCurrentLanguage(i18n.language);
        };

        // Подписка на изменение
        i18n.on('languageChanged', handleLanguageChange);

        // Очистка слушателя при размонтировании
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const changeLanguage = (lng: string) => {
        if (lng !== currentLanguage) {
            i18n.changeLanguage(lng);
        }
    };

    return (
        <>
            {['ru', 'en'].map((lng) => (
                <Button
                    key={lng}
                    color={currentLanguage === lng ? 'primary' : 'inherit'}
                    variant={currentLanguage === lng ? 'contained' : 'outlined'}
                    onClick={() => changeLanguage(lng)}
                >
                    {lng === 'ru' ? 'Русский' : 'English'}
                </Button>
            ))}
        </>
    );
}
