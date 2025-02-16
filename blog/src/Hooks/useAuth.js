import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";

import React from 'react'

export const useAuth = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    function checkIsCancelled(){
        if(cancelled){
            return
        }
    }

    
}
