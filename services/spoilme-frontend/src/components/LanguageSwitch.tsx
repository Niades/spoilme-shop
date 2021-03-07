import { useCallback, useContext, useState } from "react";
import { useIntl } from "react-intl";
import styled from "@emotion/styled";
import { Context as I18nContext } from "../i18n/context";


const LANGUAGES = [
  { code: "en", label: "🇺🇸", },
  { code: "ru", label: "🇷🇺" }
];

type LanguageClickCallback = (lang: ILanguageOption) => void;

interface ILanguageOption {
  code: string,
  label: string,
};

interface LanguageOptionsProps {
  lang: ILanguageOption,
  onClick: LanguageClickCallback, 
};

const SwitchContainer = styled.div`
  position: relative;
  align-self: center;
`;

const CurrentLangContainer = styled.div`
  position: relative;
  cursor: pointer;
  background-color: #DEE2FF;
  padding: 3px 5px;
  border-radius: 9px;
  z-index: 3;
`;

const OptionsContainer = styled.div`
  position: absolute;
  background-color: #FFF;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  width: 100%;
  padding-top: 5px;
  top: 18px;
  z-index: 2;
`;

const OptionContainer = styled.div`
  cursor: pointer;
  padding: 3px 5px;
  text-align: center;
`;

const LanguageOption = (props: LanguageOptionsProps) => {
  const { lang, onClick } = props;
  return (
    <OptionContainer onClick={() => onClick(lang)}>
      {lang.label}
    </OptionContainer>
  )
};

const LanguageSwitch = () => {
  const { selectLanguage } = useContext(I18nContext);
  const { locale } = useIntl();
  const langSelected = LANGUAGES.find((lng) => lng.code === locale);
  const [isOpen, setIsOpen] = useState(false);
  const onOptionClick = useCallback<LanguageClickCallback>(
    (lang: ILanguageOption) => {
      setIsOpen(false);
      selectLanguage(lang.code);
    },
    [selectLanguage, setIsOpen]
  );
  return (
    <SwitchContainer>
      <CurrentLangContainer onClick={() => setIsOpen(!isOpen)}>
        {langSelected?.label} ▼
      </CurrentLangContainer>
      {isOpen && (
          <OptionsContainer>
            {
              LANGUAGES
                .filter((lng) => lng !== langSelected)
                .map((lng) => <LanguageOption key={lng.code} lang={lng} onClick={onOptionClick} />)
            }
          </OptionsContainer>
        )
      }
    </SwitchContainer>
  );
};

export {
  LanguageSwitch,
};