import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "../firebase"

export const uploadFile = async file => {
	const { name } = file
	const storageRef = ref(storage, `assignments/${name}`)
    await uploadBytes(storageRef, file)
    const fileUrl = await getDownloadURL(storageRef)
    return fileUrl
}

export const postSolutions = async (file, classId, assignmentId) => {
    const { name } = file
	const storageRef = ref(storage, `submissions/${classId}/${assignmentId}/${name}`)
	await uploadBytes(storageRef, file)
	const fileUrl = await getDownloadURL(storageRef)
	return fileUrl
}