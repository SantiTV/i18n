import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import JobsList from "./components/jobslist";
import localeEnMessages from "./locales/en";
import localeEsMessages from "./locales/es";
                
const userLocale = navigator.language || navigator.userLanguage;

const messages = userLocale.startsWith("es") ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={userLocale} messages={messages}>
    <JobsList locale={userLocale} />
  </IntlProvider>,
  document.getElementById("root")
);