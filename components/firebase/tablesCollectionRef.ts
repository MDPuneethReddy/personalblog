import { storage } from "./firebase";
import { collection} from "@firebase/firestore";
export const usersCollectionRef=collection(storage,"users")
export const postsCollectionRef=collection(storage,"posts")