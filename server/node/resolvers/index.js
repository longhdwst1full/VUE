import { GraphQLScalarType } from "graphql";
import { PubSub } from "graphql-subscriptions";
 
 
import FolderModel from "../models/Fordel.js";
import NoteModel from "../models/Note.js";
import AuthorModel from "../models/AuthorModel.js";

const pubsub = new PubSub();


export const resolvers = {
    // Date: new GraphQLScalarType({
    //     name: "Date",
    //     parseValue(value) {
    //         return new Date(value)
    //     },
    //     serialize(value) {
    //         return value.toISOString()
    //     }
    // }),
    // Query: {
        // folders: async (parent, args, context) => {
        //     const folders = await FolderModel.find({
        //         authorId: context.uid
        //     }).sort({
        //         updatedAt: 'desc'
        //     })
        //     console.log({ folders, context });
        //     return folders;
        // },
        // folder: async (parent, args) => {
        //     const folderId = args.folderId
        //     console.log(folderId, "folderId: ")
        //     const foundFolder = await FolderModel.findById(folderId);
        //     return foundFolder
        // }  ,
    //     note: async (parent, args) => {
    //         const nodeId = args.nodeId;
    //         const note = await NoteModel.findById(nodeId)
    //         return note
    //     }
    // },

    // Folder: {
    //     author: async (parent, args) => {
    //         const authorId = parent.authorId
    //         const author = await AuthorModel.findOne({ uid: authorId })
    //         return author
    //     },
    //     note: async (parent, args) => {
    //         return await NoteModel.find({
    //             folderId: parent.id,

    //         }).sort({
    //             updatedAt: "desc",

    //         })
    //     }
    // },

    Mutation: {
        // addNote: async (parent, args) => {
        //     const newNote = new NoteModel(args);
        //     await newNote.save();
        //     return newNote
        // },
        // updateNote: async (parent, args) => {
        //     const nodeId = args.id;
        //     const note = await NoteModel.findByIdAndUpdate(nodeId, args)
        //     return note
        // },
        // addFolder: async (parent, args, context) => {
        //     const newfolder = new FolderModel({ ...args, authorId: context.uid });

        //     pubsub.publish('FOLDER_CREATED', {
        //         folderCreated: {
        //             message: 'A new folder created',
        //         },
        //     });
        //     await newfolder.save();
        //     return newfolder;

        // },
        // register: async (parent, args) => {
        //     const foundUser = await AuthorModel.findOne({ uid: args.uid });

        //     if (!foundUser) {
        //         const newUser = new AuthorModel(args);
        //         await newUser.save();
        //         return newUser;
        //     }

        //     return foundUser;
        // },
        // pushNotification: async (parent, args) => {
        //     const newNotification = new NotificationModel(args);

        //     pubsub.publish('PUSH_NOTIFICATION', {
        //         notification: {
        //             message: args.content,
        //         },
        //     });

        //     await newNotification.save();
        //     return { message: 'SUCCESS' }
        // }
    },
    // Subscription: {
    //     folderCreated: {
    //         subscribe: () => pubsub.asyncIterator(['FOLDER_CREATED', 'NOTE_CREATED']),
    //     },
    //     notification: {
    //         subscribe: () => pubsub.asyncIterator(['PUSH_NOTIFICATION'])
    //     }
    // },
}