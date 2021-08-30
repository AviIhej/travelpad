import { useEffect, useState } from 'react'
import Head from 'next/head';
import Header from '../components/Header';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../../features/userSlice';
// import { login } from '../features/users'
// import { useDispatch } from 'react-redux';
// import { auth } from '../auth';

export default function Home() {

  // const [ email, setEmail ] = useState('')
  // const [ password, setPassword ] = useState('')
  // const user = useSelector(selectUser)
  // const dispatch = useDispatch()

  // const register = async () => {
  //   try {
  //     auth.signInWithEmailAndPassword(email: email,password: password)
  //     .then(authUser => {
  //       authUser.user.updateProfile({
  //         displayName: name,
  //         photoUrl, profilePic
  //       })
  //       .then(() => {
  //         dispatch(login(
  //           email: authUser.email,
  //           password: authUser.password,
  //           uuid: authUser.uuid,
  //           displayName: diaplayName
  //         ))
  //       })
  //     })
  //   } catch(err){
  //     console.log(err)
  //   }
  // }

  // const fetchUserData = async () => {
  //    fetch('/data/names')
  //    .then((response) => resposne.json())
  //    .then(data => {
  //      dispatch(login(
  //         data. //dispatch user data to the store and access via the provider
  //      ))
  //    })
  // }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Travel Pad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
  
      <Header />
    </div>
  )
}
