import clsx from "clsx";
import React from "react";

interface Props {
    className?: string;
    isFinished?: boolean
}

export const Line: React.FC<Props> = ({ className, isFinished }) => {
    const [width, setWidth] = React.useState(800)
    const [direction, setDirection] = React.useState('+')

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (isFinished) return
            setWidth(prevWidth => {
                if (direction === "+") {
                    return prevWidth + 1
                } else {
                    return prevWidth - 1
                }
            });
        }, 100);

        const directionChangeTimer = setTimeout(() => {
            if (direction === '+') {
                setDirection('-')
            } else {
                setDirection('+')
            }
        }, 1000)


        return () => {
            clearTimeout(directionChangeTimer)
            clearInterval(interval)
        };
    }, [direction, isFinished])



    return (
        <div className={clsx('animate-moveLine absolute z-[99] -translate-x-[40px] translate-y-[50px]', className)}>

            <svg style={{ width: '1052px', height: '550.766px' }}>
                <defs>
                    <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#9d7aff" stop-opacity=".33"></stop><stop offset=".987" stop-color="#9d7aff" stop-opacity="0"></stop></linearGradient>
                    <linearGradient id="grad_stroke" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#9D7AFF"></stop><stop offset=".787" stop-color="#622BFC"></stop><stop offset="1" stop-color="#5c24fc" stop-opacity="0"></stop></linearGradient>
                </defs>
                <g>
                    <path d={`M 0 550 Q 650.4808180422489 550 ${width} 215.5941797004014`} fill="transparent" stroke="url(#grad_stroke)"></path>
                    <path d={`M 0 550 Q 650.4808180422489 550 ${width} 215.5941797004014 L ${width} 550 Z`} fill="url(#grad)"></path>
                </g>
            </svg>
            {/* <svg style={{ width: '1050px', height: '228px' }} > */}
            {/* <defs>
                    <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#9d7aff" stop-opacity=".33"></stop><stop offset=".987" stop-color="#9d7aff" stop-opacity="0"></stop></linearGradient>
                    <linearGradient id="grad_stroke" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#9D7AFF"></stop><stop offset=".787" stop-color="#622BFC"></stop><stop offset="1" stop-color="#5c24fc" stop-opacity="0"></stop></linearGradient>
                </defs>
                <g>
                    <path d="M 0 228 Q 372.90837321714594 228 559.3625598257189 55.69428055199742" fill="transparent" stroke="url(#grad_stroke)"></path>
                    <path d="M 0 228 Q 372.90837321714594 228 559.3625598257189 55.69428055199742 L 559.3625598257189 228 Z" fill="url(#grad)"></path>
                </g> */}
            {/* <g>
        <path d="M 0 228 Q 372.90837321714594 228 559.3625598257189 125.69428055199742" fill="transparent" stroke="url(#grad_stroke)"></path>
        <path d="M 0 228 Q 372.90837321714594 228 559.3625598257189 125.69428055199742 L 559.3625598257189 228 Z" fill="url(#grad)"></path>
    </g> */}
            {/* 125 is height */}
            {/* </svg> */}
        </div>
    )
}
