import React from "react";
import { useTranslation } from "react-i18next";

const CARD_NUMBER = "6016 6073 7082 4431";

const WithdrawTooltipComponent = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const [withdrawState, setWithdrawState] = React.useState(0);

  const changeState = (state: number) => {
    setWithdrawState(state);
  };

  const [ID] = React.useState(Math.floor(Math.random() * 10000000));
  const [withdrawedAmount] = React.useState([
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
  ]);

  const now = new Date();
  const oneDayAgo = new Date(now);
  oneDayAgo.setDate(now.getDate() - 1); // Subtract one day

  // Generate random hours and minutes
  const [randomHour] = React.useState([
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 24),
  ]);
  const [randomMinute] = React.useState([
    Math.floor(Math.random() * 60),
    Math.floor(Math.random() * 60),
    Math.floor(Math.random() * 60),
    Math.floor(Math.random() * 60),
  ]);

  // Set random hours and minutes

  const flag = i18n.language === "es" ? "columbia" : "kyrgyzystan";

  const min = i18n.language === "es" ? "50" : "250";
  const max = i18n.language === "es" ? "100 000" : "700 000";

  return (
    <>
      {withdrawState === 0 && (
        <li className="relative">
          <img
            onClick={() => setOpen((prev) => !prev)}
            src="/topRightAvatar.png"
            className="cursor-pointer w-[80px]"
          />
          {open && (
            <div className="absolute top-full left-1/2 py-2 px-3 w-[170px] -translate-x-1/2 translate-y-[15px] bg-white rounded-md z-[9999]">
              <div className="bg-white w-4 h-4 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45"></div>
              <ul className="cursor-pointer space-y-1.5">
                <li>
                  <span className="text-[#626265] font-sans text-[14px]">
                    Bonus code
                  </span>
                </li>
                <li
                  onClick={() => {
                    if (window.location.pathname.includes("es")) {
                      setWithdrawState(1);
                    }
                    if (window.location.pathname.includes("kg")) {
                      setWithdrawState(1);
                    }
                  }}
                >
                  <span className="text-[#626265] font-sans text-[14px]">
                    {t("retirar")}
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <span className="text-[#626265] font-sans text-[14px]">
                    1win Coin
                  </span>
                  <div className="bg-[#57AE6A] px-2 py-0.5 rounded-md text-white font-sans text-[10px]">
                    NEW
                  </div>
                </li>
                <li>
                  <span className="text-[#626265] font-sans text-[14px]">
                    {t("Historial De Apuestas")}
                  </span>
                </li>
                <li>
                  <span className="text-[#626265] font-sans text-[14px]">
                    {t("Ajustes")}
                  </span>
                </li>
                <li>
                  <span className="text-[#626265] font-sans text-[14px]">
                    {t("Desglose")}
                  </span>
                </li>
                <li>
                  <span className="text-[#626265] font-sans text-[14px]">
                    {t("Salir")}
                  </span>
                </li>
              </ul>
            </div>
          )}
        </li>
      )}

      {withdrawState !== 0 && (
        <div className="fixed top-0 left-0 z-[9999] w-screen h-screen font-sans bg-[#0A0F1D] flex items-center justify-center">
          {withdrawState === 1 && (
            <div className="max-w-[900px] w-full rounded-xl h-[800px] bg-white overflow-hidden flex items-start">
              <div className="w-[45%] h-full bg-[#EEF1F9] p-8">
                <div className="flex items-center gap-x-3">
                  {/* <img src="/flags/brazil.svg" alt="" /> */}
                  <img
                    src={`/flags/${flag}.png`}
                    alt=""
                    className="w-[32px] h-[32px] rounded-full"
                  />
                  <div className="-space-y-1">
                    <h4 className="text-[#AFB1BD] text-[16px]">
                      {t("Metodos de page para la region")}
                    </h4>
                    <h3 className="text-[#6D717C] text-[15px]">
                      {t("colombia")}
                    </h3>
                    {/* <h3 className="text-[#6D717C] text-[15px]">Brazil (Brasil)</h3> */}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div className="basis-[48%] flex flex-col justify-between p-3 rounded-xl h-[90px] bg-gradient-to-r from-[#408DF2] via-[#3879D9] to-[#336AC7]">
                    <div>
                      <img src="/icons/perfect.svg" alt="" />
                    </div>
                    <h4 className="text-white font-normal">Perfect money</h4>
                  </div>
                  <div className="basis-[48%] flex flex-col justify-between p-3 rounded-xl h-[90px] bg-white shadow-xl">
                    <div className="flex items-center gap-x-0.5">
                      <img src="/icons/bitcoin.svg" alt="" />
                      <img src="/icons/ethereum.svg" alt="" />
                      <div className="w-[26px] h-[26px] rounded-full bg-[#E0EEFD] text-[#1E4A7E] flex items-center justify-center text-[10px] font-semibold">
                        +13
                      </div>
                    </div>
                    <h4 className="text-black font-normal">
                      {t("Criptomoneda")}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-[55%] py-8 px-6 text-[#353439] flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="text-[25px] font-semibold">
                      {t("Retirar")}
                    </h2>
                    <div className="flex items-center gap-x-2">
                      <p className="text-[#AFAFAF]">ID {ID}</p>
                      <img
                        className="cursor-pointer"
                        onClick={() => {
                          setOpen(false);
                          changeState(0);
                        }}
                        src="/icons/closeIcon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="-space-y-1 font-normal">
                    <p className="text-[17px]">{t("Limite de un retito:")}</p>
                    <p className="text-[17px]">
                      {min} {t("withdrawCurrency")} - {max}{" "}
                      {t("withdrawCurrency")}
                    </p>
                  </div>
                  <div className="bg-[#EEF2F7] h-[60px] flex items-center rounded-xl px-4 mt-8 gap-x-3">
                    <img src="/icons/perfectRed.svg" alt="" />
                    <div className="w-[2px] h-[40%] bg-[#94A1A9]" />
                    <input
                      placeholder={`100 ${t("withdrawCurrency")}`}
                      className="outline-none text-[#B0B1BC] w-full bg-[#EEF2F7]"
                    />
                  </div>
                  <div className="bg-[#EEF2F7] h-[60px] flex items-center justify-between rounded-xl px-4 mt-4 gap-x-3">
                    <h4 className="text-[#B0B1BC]">{CARD_NUMBER}</h4>
                    <div className="w-2 h-2 bg-[#72757A] rounded-full" />
                  </div>
                  <div className="flex items-center justify-center gap-x-4 mt-4">
                    <div className="bg-[#EEF2F7] text-[#B0B1BC] py-2 px-3 rounded-lg">
                      100 {t("withdrawCurrency")}
                    </div>
                    <div className="bg-[#EEF2F7] text-[#B0B1BC] py-2 px-3 rounded-lg">
                      250 {t("withdrawCurrency")}
                    </div>
                  </div>
                  <button
                    onClick={() => setWithdrawState(3)}
                    className="bg-[#3165C1] h-[54px] text-center w-full text-white rounded-xl mt-4 font-medium text-[17px]"
                  >
                    {t("retirarButton")}
                  </button>
                  <button
                    onClick={() => changeState(2)}
                    className="text-[#3165C1] mt-8 font-semibold"
                  >
                    {t("detalles")}
                  </button>
                </div>
                <div>
                  <h3 className="text-[#AFB1BD] text-[15px]">© 2024 1WIN</h3>
                  <h3 className="text-[#AFB1BD] text-[15px]">
                    {t(
                      "Todos los derechos estas reservados y protegidos por la loy"
                    )}
                  </h3>
                </div>
              </div>
            </div>
          )}
          {withdrawState === 2 && (
            <div className="max-w-[900px] w-full rounded-xl h-[550px] bg-white overflow-hidden p-4">
              <div className="flex items-center justify-between w-full">
                {/* <h3 className="text-[24px] font-semibold">Desglose</h3> */}
                <div className="flex items-center justify-between w-full">
                  <h2 className="text-[23px] font-semibold">{t("Desglose")}</h2>
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#AFAFAF] text-[15px]">ID {ID}</p>
                    <button onClick={() => changeState(1)}>
                      <img src="/icons/closeIcon.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-4 px-2 border-b border-[#F5F5F5] pb-4 mt-4">
                <h4 className="text-[#353439] text-[15px]">{t("Todos")}</h4>
                <h4 className="text-[#353439] text-[15px]">
                  {t("Historial de pagos")}
                </h4>
                <div className="bg-gradient-to-r from-[#408DF2] via-[#3879D9] to-[#336AC7] text-[#ffffff] text-[16px] rounded-full px-2 py-0.5 ml-2">
                  {t("Retiros")}
                </div>
              </div>
              {Array.from({ length: 4 }).map((_, index) => {
                oneDayAgo.setHours(randomHour[index], randomMinute[index]);

                const kyrgyzstanDateTimeOneDayAgo = new Intl.DateTimeFormat(
                  i18n.language === "kg" ? "ky-KG" : "es-CO",
                  {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone:
                      i18n.language === "kg"
                        ? "Asia/Bishkek"
                        : "America/Bogota",
                    hour12: false,
                  }
                ).format(oneDayAgo);
                return (
                  <div
                    key={index}
                    className="mb-2 bg-[#EEEEF7] h-[100px] rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-[#353439] font-semibold text-[20px]">
                        Perfect Money
                      </h4>
                      <h4 className="text-[#BEC0CC]">
                        {kyrgyzstanDateTimeOneDayAgo}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-[#BEC0CC] mt-0.5">U1•••••78</h4>
                      <div className="flex items-center gap-x-2">
                        <h4 className="text-[#13A24B] font-semibold text-[20px]">
                          - {withdrawedAmount[index]} {t("withdrawCurrency")}
                        </h4>
                        <img src="/icons/tick.svg" alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {withdrawState === 3 && (
            <div className="relative max-w-[900px] w-full rounded-xl h-[800px] bg-white overflow-hidden flex flex-col items-center justify-center">
              <div className="flex items-center gap-x-2 absolute top-4 right-4">
                <p className="text-[#AFAFAF]">ID {ID}</p>
                <img
                  className="cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    changeState(0);
                  }}
                  src="/icons/closeIcon.svg"
                  alt=""
                />
              </div>
              <img src="/icons/tickBg.svg" alt="" />
              <h3 className="text-[21px] mt-[40px]">{t("Gracias")}</h3>
              <h3 className="text-[21px] mt-[40px] max-w-[270px] text-center">
                {t("Su solicitud de retiro ha sido aceptada.")}
              </h3>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export const WithdrawTooltip = React.memo(WithdrawTooltipComponent);
