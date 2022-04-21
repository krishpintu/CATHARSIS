import React, { createContext, useState } from 'react';

export const AuthContext= createContext();

export const AuthProvider=({children})=>{

    const [user,setUser] = useState(null);
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [initializing, setInitializing] = useState(false);

    return (
        <AuthContext.Provider
            value ={{
                user,
                setUser,
                isLoggedIn,
                setIsLoggedIn,
                initializing, 
                setInitializing,
                login:(email,password)=>{
                    try{
                        //await auth().signInWithEmailAndPassword(email, password);
                        setInitializing(true);
                        setUser({"username":"krishnas.ttl","email":"krishnas.ttl@tatamotors.com","phone":"7635093503","fullname":"Krishna Singh","token":"","refreshToken":""});
                        setIsLoggedIn(true);
                        setInitializing(false);
                        console.log(user);

                    }
                    catch(e){
                        console.log(e);
                    }

                },
                signOut: async()=>{
                    try{
                        //await auth().signOut();
                        setUser(null);
                        setIsLoggedIn(false);
                    }
                    catch(e)
                    {
                        console.log(e);
                    }
                }

            }} >
            {children} 
        </AuthContext.Provider>
    );
}