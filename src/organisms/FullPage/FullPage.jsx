import React from 'react'
import HeaderText from '../../atoms/HeaderText/HeaderText'
import CountDownBox from '../../moleculs/CountDownBox/CountDownBox'
import Footer from '../../atoms/Footer/Footer'

const FullPage = () => {
  return (
    <div>
        <HeaderText/>
        <CountDownBox/>
        <Footer/>
    </div>
  )
}

export default FullPage