import Input from '../../components/ui/Input'
import { useNavigate } from 'react-router-dom'
import img from "../../images/herobg.jpg"
import SimpleButton from '../../components/ui/SimpleButton'
import Check from '../../components/ui/Check'

function Login() {
  const navigate = useNavigate()
  return (
    <div className='w-full h-auto md:px-0 px-1 flex lg:justify-start md:justify-center max-md:justify-center '>
     <div className='w-1/2 lg:block hidden h-auto bg-center bg-cover p-5'
      style={{backgroundImage:`url(${img})`}}></div>

      <div className='lg:w-1/2 md:w-4/5 max-md:w-11/12  xl:px-16 lg:px-10 pt-10 max-sm:pt-5 pb-7'>
        <h1 className='text-3xl font-bold text-[#532b10eb] '>Login</h1>
        <p className='text-base font-normal text-[#43210aeb] pt-2'>Enter your credentials to access your account</p>
        <div className='w-full '>
          <div className='pt-5'>
            <Input lable={'Email'} placeholder={"Email Address..."} icon={'line-md:email-twotone'} />
          </div>
          <div className='pt-5'>
            <Input lable={'Password'} placeholder={"Password..."} type='password' icon={'mdi:password-outline'} />
          </div>
          <div className='pt-5 flex items-center justify-between'>
            <div className='flex items-center p-0 '>
               <Check option={"Remember me"}/>
            </div>
            <h2 className='text-sm text-[#43210aeb] font-semibold darkgreen cursor-pointer'>Forgot password?</h2>
          </div>
          <div className='pt-5'>
            <SimpleButton color={"g"} label={"Signin"} customClass={"w-full py-2.5 !text-base bg-[#532b10eb]"}/>
          </div>
          <div className='pt-6 flex justify-center gap-3 items-center'>
           <div className='w-1/3 border border-[#532b10eb]'></div>
           <h1 className='text-base max-sm:text-[13px] font-normal text-[#43210aeb]'>Or continue with</h1>
           <div className='w-1/3 border border-[#532b10eb]'></div>
          </div>
          <div className='pt-5 flex justify-center  gap-10'>
            <SimpleButton icon={'material-icon-theme:google'} label={"Google"} customClass={"text-[#43210aeb] w-1/2 py-2 text-base border-2 border-[#532b10eb]"}/>
            <SimpleButton icon={'fa7-brands:github'} label={"Github"} customClass={"text-[#43210aeb] w-1/2 py-2 text-base border-2  border-[#532b10eb]"}/>
          </div>
          <div className='pt-6 flex justify-center gap-3 items-center'>
           <h1 className='text-base font-normal text-[#43210aeb]'>Don't have an account? 
            <span className='darkgreen pl-1 cursor-pointer'
            onClick={()=>navigate('/register')}><b>Sign up</b></span>
           </h1>
          </div>
        </div>
      </div >
      
    </div>
  )
}

export default Login
