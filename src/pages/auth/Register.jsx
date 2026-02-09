import React from 'react'
import { Icon } from '@iconify/react'
import img from "../../images/herobg.jpg"
import Input from '../../components/ui/Input'
import Button from '../../components/ui/SimpleButton'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  return (
    <div className='w-full h-auto md:px-0 px-1 flex lg:justify-start md:justify-center max-md:justify-center'>
      <div className='lg:w-1/2 md:w-4/5 max-md:w-11/12  xl:px-16 lg:px-10 pt-10 pb-5'>
        <h1 className='text-3xl font-bold text-[#43210aeb] '>Create Account</h1>
        <p className='text-base font-normal text-[#43210aeb] pt-2'>Join Starline and start your journey</p>
        <div className='w-full pt-5 '>
          <div className='w-full flex  items-center gap-8'>
            <div className='w-1/2'>
              <Input placeholder={"Name..."} icon={'iconoir:user'} inputclass={"w-full pl-2"}/>
            </div>
            <div className='w-1/2'>
              <Input placeholder={"Last Name..."} icon={'iconoir:user'} />
            </div>
          </div>
          <div className='pt-5'>
            <Input placeholder={"Email Address..."} icon={'line-md:email-twotone'} />
          </div>
          <div className='pt-5'>
            <Input placeholder={"Phone Number..."} icon={'line-md:phone-twotone'} />
          </div>
          <div className='pt-5'>
            <Input placeholder={"Password..."} type='password' icon={'mdi:password-outline'} />
          </div>
          <div className='pt-5'>
            <Input placeholder={"Confirm Password..."} type='password' icon={"hugeicons:reset-password"} />
          </div>
          <div className='pt-5'>
            <Button color={"g"} label={"Create Account"} customClass={"w-full py-2.5 text-base"}/>
          </div>
          <div className='pt-6 flex justify-center gap-3 items-center'>
           <div className='w-1/3 border border-[#43210aeb]'></div>
           <h1 className='text-base max-sm:text-[13px] font-normal text-gray-600'>Or sign up with</h1>
           <div className='w-1/3 border border-[#43210aeb]'></div>
          </div>
          <div className='pt-5 flex justify-center  gap-10'>
            <Button icon={'material-icon-theme:google'} label={"Google"} customClass={"w-1/2 py-2 text-base border-2 mainbordercolor hover:gradientcart"}/>
            <Button icon={'fa7-brands:github'} label={"Github"} customClass={"w-1/2 py-2 text-base border-2 mainbordercolor hover:gradientcart"}/>
          </div>
          <div className='pt-6 flex justify-center gap-3 items-center'>
           <h1 className='text-base font-normal text-[#43210aeb]'>Already have an account? 
            <span className='darkgreen pl-1 cursor-pointer'
            onClick={()=>navigate('/login')}><b>Sign in</b></span>
           </h1>
          </div>
        </div>
      </div >
      <div className='w-1/2 lg:block hidden h-auto bg-center bg-cover p-5'
      style={{backgroundImage:`url(${img})`}}></div>
    </div>
  )
}

export default Register
