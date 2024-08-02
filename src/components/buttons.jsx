import { Button } from '@material-tailwind/react'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const AuthButtons = ({text}) => {
  return (
<Button
        variant="filled"
        className=" flex  justify-center items-center text-white h-14 w-36 bg-submitBgColor rounded-2xl  mt-10"
      >
        {text}
        <ArrowRightIcon/>
      </Button>  )
}

export default AuthButtons