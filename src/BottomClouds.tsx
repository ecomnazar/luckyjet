import clsx from "clsx";
import React from "react";

interface Props {
    className?: string;
    isMobile?: boolean
}

export const BottomClouds: React.FC<Props> = ({ isMobile = false }) => {
    return (
        <div className='flex items-center clouds'>
            {Array.from({ length: 10 }).map((_, index) => {
                return <img key={index} src='/clouds-bg.svg' className={clsx('', {
                    "w-[300px]": isMobile
                })} />
            })}
        </div>
    )
}
// 