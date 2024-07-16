import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
    firstWinPopup: { show: boolean, amount: number, coff: number }
    secondWinPopup: { show: boolean, amount: number, coff: number }
}

export const WinPopup: React.FC<Props> = ({ firstWinPopup, secondWinPopup }) => {
    const { t, i18n } = useTranslation()

    return (
        <div className='absolute z-[999] top-0 left-1/2 -translate-x-1/2 space-y-2'>


            <div className={clsx('w-[280px] h-[70px] border rounded-xl py-1 px-2 flex items-center justify-between border-[#472896] bg-[#271951] transition-all', {
                'opacity-1 translate-y-0': firstWinPopup.show,
                'opacity-0 -translate-y-[50px]': !firstWinPopup.show,
            })}>
                <div>
                    <p className='text-white/80 font-sans font-normal text-[12px]'>{t('almayiBasardiniz')}</p>
                    <h3 className='text-white text-[19px]'>x{firstWinPopup.coff}</h3>
                </div>
                <div className='bg-gradient-to-r from-[#592AF2] via-[#713DF0] to-[#8850ED] h-[90%] w-1/2 rounded-xl flex flex-col items-center justify-center'>
                    <h4 className='text-white text-[17px]'>{(firstWinPopup.amount * firstWinPopup.coff).toFixed(2)} {i18n.language === 'az' ? '₼' : t('currency')}</h4>
                    <p className='text-white text-[13px] font-normal font-sans'>{t('kazanciniz')}</p>
                </div>
            </div>


            <div className={clsx('w-[280px] h-[70px] border rounded-xl py-1 px-2 flex items-center justify-between border-[#472896] bg-[#271951] transition-all', {
                'opacity-1 translate-y-0': secondWinPopup.show,
                'opacity-0 -translate-y-[50px]': !secondWinPopup.show,
            })}>
                <div>
                    <p className='text-white/80 font-sans font-normal text-[12px]'>{t('almayiBasardiniz')}</p>
                    <h3 className='text-white text-[19px]'>x{secondWinPopup.coff}</h3>
                </div>
                <div className='bg-gradient-to-r from-[#592AF2] via-[#713DF0] to-[#8850ED] h-[90%] w-1/2 rounded-xl flex flex-col items-center justify-center'>
                    <h4 className='text-white text-[17px]'>{(secondWinPopup.amount * secondWinPopup.coff).toFixed(2)} {i18n.language === 'az' ? '₼' : t('currency')}</h4>
                    <p className='text-white text-[13px] font-normal font-sans'>{t('kazanciniz')}</p>
                </div>
            </div>
            {/* <div className='w-[280px] h-[70px] border rounded-xl py-1 px-2 flex items-center justify-between border-[#472896] bg-[#271951]'>
                <div>
                    <p className='text-white/80 font-sans font-normal text-[12px]'>Almayi başardiniz!</p>
                    <h3 className='text-white text-[19px]'>x1.12</h3>
                </div>
                <div className='bg-gradient-to-r from-[#592AF2] via-[#713DF0] to-[#8850ED] h-[90%] w-1/2 rounded-xl flex flex-col items-center justify-center'>
                    <h4 className='text-white text-[17px]'>15.68 ₺</h4>
                    <p className='text-white text-[13px] font-normal font-sans'>Kazanciniz</p>
                </div>
            </div> */}
        </div>
    )
}
