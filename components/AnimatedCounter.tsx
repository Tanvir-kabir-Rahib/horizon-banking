'use client'
import React from 'react'
import CountUp from 'react-countup'

export default function AnimatedCounter({ amount }: { amount: number }) {
    return (
        <p className='w-full'>
            <CountUp
            decimal=','
            prefix='$'
            duration={1}
            decimals={2}
            end={amount}>
             </CountUp>
        </p>
    )
}
