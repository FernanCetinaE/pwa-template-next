import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import * as appService from './api/appService';
import Cookies from 'universal-cookie';

export default function Login(){
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      password: ''
    }
  });

  const loginValidation = async(data:any) => {
    const credentials = {username: data.name,password: data.password};
    console.log(data);
    
    setLoading(true);
    // await appService.postLogin(credentials).then((res:any) => {
    //     localStorage.setItem('security-token',res.access_token);
    //     window.location.href='/';
    //     setLoading(false);
    //   }
    // ).catch((err:any) => {
    //   setLoading(false);
    // })
    setTimeout(() => {
        setLoading(false);
        }
        , 2000);
  }
  
  const onSubmit = (data:any) => {
    loginValidation(data);
  };
  

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-6">

      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" style={{marginTop:'20px'}} className='position-relative top-0 start-50 translate-middle-x'>
        <path d="M11.3 40q-1.4 0-2.35-.95Q8 38.1 8 36.7q0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Zm0-12.7q-1.4 0-2.35-.95Q8 25.4 8 24q0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Zm0-12.7q-1.4 0-2.35-.95Q8 12.7 8 11.3q0-1.4.95-2.35Q9.9 8 11.3 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95ZM24 27.3q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35Zm0-12.7q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35Q22.6 8 24 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95ZM22 40v-3.25L34.15 24.6l3.25 3.25L25.25 40Zm14.7-25.4q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35Q35.3 8 36.7 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Zm2 11.95-3.25-3.25 1.25-1.25q.4-.4 1-.425.6-.025 1 .375l1.3 1.3q.4.4.375 1-.025.6-.425 1Z"/>
      </svg>

        <form onSubmit={handleSubmit(onSubmit)}>

          <h1 className='text-center' style={{marginTop:'20px'}}>Inicio de sesión</h1>
          
          <div style={{marginTop:'20pt'}}>
            <h3> Nombre de usuario </h3>
            <input {...register("name", { required: true })} autoComplete='off' className="form-control"/>

            <h3> Contraseña </h3>
            <input {...register("password", { required: true })} autoComplete='off' type={'password'} className="form-control"/>

            <br/>
            <div style={{textAlign:'center'}}>
              <input id='submit' type="submit" value="INGRESAR" className="btn btn-primary"/>
            </div>

            
            {/* <div style={{paddingTop:'8pt'}}>
              <a href="/register">O regístrate</a> 🎉
            </div> */}

            {loading && <div>loading...</div>}
          </div>
          
        </form>
      </div>
    </div>
  );
}
