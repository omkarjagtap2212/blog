import conf from "../conf/conf";

// import { Client, Account, ID } from "appwrite";

// export class Authservice {
//   client = new Client();
//   account;

//   constructor() {
//     this.client
//       .setEndpoint(conf.appwriteUrl)
//       .setProject(conf.appwriteProjectId);

//     this.account = new Account(this.client);
//   }

//   async createusername({ email, password, name }) {
//     try {
//       const accountuser = await this.account.create(
//         ID.unique(),
//         email,
//         password,
//         name
//       );

//       if (accountuser) {
//         //return a new method
//         return this.login({ email, password });
//       } else {
//         return accountuser;
//       }
//     } catch (error) {
//       throw error;
//     }
//   }

//   async login({ email, password }) {
//     try {
//       return await this.account.createEmailSession(email, password);
//     } catch (error) {
//       throw error;
//     }
//   }

//   async getUserCurrent() {
//     try {
//       return await this.account.get();
//     } catch (error) {
//       throw error;
//     }
        // return null
//   }

//   async logout() {
//     try {
//       return await this.account.deleteSessions();
//     } catch (error) {
//       throw error;
//     }
//   }
// }

// const authservice = new Authservice();

// export default authservice;
