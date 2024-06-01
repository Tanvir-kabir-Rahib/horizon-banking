import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

export default function Home() {
  const loggedIn = {firstName : 'Rahib'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext={'Access and manage your account and transactions efficiently'}
          ></HeaderBox>
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.34}
          ></TotalBalanceBox>
        </header>
      </div>
    </section>
  )
}
