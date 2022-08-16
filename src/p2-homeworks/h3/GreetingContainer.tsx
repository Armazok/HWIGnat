import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const addUser = () => {
        /*if (name.trim() !== "") {
            addUserCallback(name.trim())
            setName("")
        } else {
            setError("Title is required!")
        }*/
        addUserCallback(name)
        if (name) {
            alert(`Hello ${name} !`)
            setName("")
        }
    }


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimName = e.currentTarget.value.trim()
        if(trimName) {
            setName(trimName)
            error && setError("")
        } else {
            name && setName("")
            setError("Title is required!")
        }

  /*      setName(e.currentTarget.value)
        setError('')*/
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.charCode === 13) {
          addUser()
      }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        />
    )
}

export default GreetingContainer
