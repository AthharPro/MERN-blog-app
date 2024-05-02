import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFaliure } from '../redux/user/userSlice';
import OAuth from '../components/Oauth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  //const [errorMessage, setErrorMessage] = useState(null);
  //const [loading, setLoading] = useState(false);
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value.trim() }); //trim() - to remove sapces
    }
    //console.log(formData);
    const handleSubmit =  async (e) => {    // async has a wait()
      e.preventDefault();  // prevents form refreshing the page
      if( !formData.email || !formData.password){
        //return setErrorMessage('Please Fill out all fields.');
        return dispatch(signInFaliure('Please fill all the fields'));
      }
      try {
        dispatch(signInStart());
        const res = await fetch('/api/auth/signin', {
          method : 'POST',
          headers : {'Content-Type': 'application/json'},
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          //return setErrorMessage(data.message);
          return dispatch(signInFaliure(data.message));
        }
        //setLoading(false);
        if(res.ok){
          dispatch(signInSuccess(data));
          navigate('/');
        }
      } catch (error) {
        dispatch(signInFaliure(error.message));
      }
    }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to="/" className=' text-4xl
           font-bold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r
           from-blue-500 to-green-400 rounded-lg text-white'>Athhar's</span>
          Blog
          </Link>
          <p className='text-sm mt-5'>
            This is the Sign in page. You can sign up using your email and password
            or with Google.
          </p>
        </div>

        {/* Right */}
        <div className='flex-1'>

          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            <div>
              <Label value='Your Email'></Label>
              <TextInput type='email' placeholder='test@test.com' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your Password'></Label>
              <TextInput type='password' placeholder='***********' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner className='sm'/>
                  <span className='pl-3'>Loading...</span>
                  </>

                ) : ('Sign In')
              }
            </Button>
            <OAuth/>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Dont have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>Sign Up</Link>
          </div>
          {errorMessage && (
          <Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
        )}
        </div>
        
      </div>  
    
    </div>
  )
}

