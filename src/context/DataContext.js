import { addDoc, collection, doc, documentId, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../firebase"

export const fetchUsers = async () => {
	const ref = collection(db, "users")
	const users = await getDocs(ref)
	const result = []
	users.forEach(doc => result.push({ id: doc.id, ...doc.data() }))
	return result
}

export const fetchUser = async id => {
	const ref = doc(db, "users", id)
	const user = await getDoc(ref)
	let result = {}
	if (user.exists()) result = user.data()
	return result
}

export const fetchClassesByUser = async id => {
	const ref = query(collection(db, "classes"), where("createdBy", "==", id))
	const classes = await getDocs(ref)
	const result = []
	classes.forEach(doc => result.push({ id: doc.id, ...doc.data() }))
	return result
}

export const fetchClassesEnrolled = async id => {
	const { classesEnrolled } = await fetchUser(id)
	const ref = query(collection(db, "classes"), where(documentId(), "in", classesEnrolled))
	const classes = await getDocs(ref)
	const result = []
	classes.forEach(doc => result.push({ id: doc.id, ...doc.data() }))
	return result
}

export const createClass = async data => {
	const { createdBy, name, section } = data
	const docRef = await addDoc(collection(db, "classes"), {
		createdBy,
		faculties: [],
		name,
		section,
		students: [],
	})
	return docRef.id
}
