import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";




export class Authservice {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)


    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                //  call another method 
                return this.login({ email, password })


            } else {
                return userAccount
            }




        } catch (error) {
            throw error

        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error

        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service ::", error)

        }
        return null;

    }

    async logout() {
        try {
            await this.account.deleteSessions()

        } catch (error) {
            console.log("logout error", error)

        }
    }


    // async login ({email,password}){
    //     try {
    //         return await this.account.createEmailSession(email,password)
            
    //     } catch (error) {
    //         console.log("Error for::Login:",error)
            
    //     }
    // }


    // async getCurrentUser(){

    //     try {
    //         return await this.account.get()
            
    //     } catch (error) {
    //         console.log("Error for::getuserstatus:",error)

            
    //     }

    // }

    // async logout (){
    //     try {
    //         return await this.account.deleteSessions()
            
    //     } catch (error) {
    //         console.log("Error for::LogOut:",error)
    //     }
    // }


}



// const authservice =new Authservice()
// export default authservice


const authservice = new Authservice()


export default authservice
