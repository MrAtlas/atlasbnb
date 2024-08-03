'use client'
import React from 'react'
import { useAuth } from '../state/auth/auth-context'
import { Button, message } from 'antd';

export default function page() {
    const {logOut} = useAuth();


  return (
    <>
    <div>page</div>
    <Button onClick={logOut}>Logout</Button>
</>
  )
}
