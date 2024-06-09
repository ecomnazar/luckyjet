import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setAccessToken } from './localstorage'

export const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const submit = () => {
        if (username === 'timetobet') {
            if (password === 'timetobet') {
                setAccessToken()
                alert('Logged in')
                navigate('/')
            } else {
                alert('Password is incorrect')
            }
        }
    }

    return (
        <div className='w-screen h-screen bg-gray-200 flex items-center justify-center flex-col space-y-4'>
            <input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='bg-gray-600 px-4 py-2 text-white' onClick={submit}>Submit</button>
        </div>
    )
}
