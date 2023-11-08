import conf from "../conf/conf.js";

import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client()
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    //***********post  Releted  services-***************

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(conf.appwriteDataBaseId, conf.appwriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
                userId,
            })
        } catch (error) {
            console.log("ERROR THROWN BY ::createPost::", error)

        }

    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(conf.appwriteDataBaseId, conf.appwriteCollectionId, slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,


                })

        } catch (error) {
            console.log("ERROR THROWN BY ::updateDocumentId::", error)

        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDataBaseId, conf.appwriteCollectionId, slug,)
            return true
        } catch (error) {
            console.log("ERROR THROWN BY ::deletePost::", error)
            return false

        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDataBaseId, conf.appwriteCollectionId, slug)

        } catch (error) {
            console.log("ERROR THROWN BY ::getdocumentpost::", error)
            return false



        }
    }



    async getPosts(quaries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                quaries,)
        }
        catch (error) {
            console.log("ERROR THROWN BY ::getposts::", error)
            return false



        }

    }

    //***********file upload services**************

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,

            )

        } catch (error) {
            console.log("ERROR THROWN BY ::uploadFile::", error)
            return false

        }

    }


    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId

            )
            return true

        } catch (error) {
            console.log("ERROR THROWN BY ::deleteFilePost::", error)
            return false;


        }
    }
    ///*************not a need  promise or async function it is dirct catch and error */
    getFilePreview(fileId) {

        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId

        )



    }

}



const service = new Service()

export default service