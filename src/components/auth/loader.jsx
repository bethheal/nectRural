import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
  return (
(<Triangle
        visible={true}
        height="30"
        width="30"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />)  )
}

export default Loader