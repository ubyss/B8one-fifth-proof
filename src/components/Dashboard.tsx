import React from 'react'
import { useUser } from './contexts/UserContext';
import {getAll} from './../graphql/getAll'
import { useQuery } from '@apollo/client';


const Dashboard = () => {
    const { user, setUser, setUt, t , data} = useUser();

    console.log(user, t, data)

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard