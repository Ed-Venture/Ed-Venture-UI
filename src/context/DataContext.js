import { addDoc, collection, doc, documentId, getDoc, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore"
import { db } from "../firebase"

export const fetchUsers = async () => {
	const ref = collection(db, "users")
	const users = await getDocs(ref)
	const result = []
	users.forEach(doc => result.push({ id: doc.id, ...doc.data() }))
	return result
}
export const fetchUserByEmail = async emailId => {
	const ref = query(collection(db, "users"), where("emailId", "==", emailId))
	const users = await getDocs(ref)
	const result = []
	users.forEach(user => result.push({ ...user.data(), id: user.id }))
	return result[0]
}
export const fetchUser = async id => {
	const ref = doc(db, "users", id)
	const user = await getDoc(ref)
	let result = null
	if (user.exists()) result = { ...user.data(), id: user.id }
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
	const result = []
	if (!classesEnrolled.length) {
		return result
	}
	const ref = query(collection(db, "classes"), where(documentId(), "in", classesEnrolled))
	const classes = await getDocs(ref)
	classes.forEach(doc => result.push({ id: doc.id, ...doc.data() }))
	return result
}

export const fetchClass = async id => {
	const ref = doc(db, "classes", id)
	const class_ = await getDoc(ref)
	let result = null
	if (class_.exists()) result = { ...class_.data(), id: class_.id }
	return result
}

export const createUser = async data => {
	const { emailId, name } = data
	const exists = await userExists(emailId)
	if (exists) {
		return
	}
	const docRef = await addDoc(collection(db, "users"), {
		classesEnrolled: [],
		emailId,
		name,
		quizesParticipated: [],
	})
	return docRef.id
}

const userExists = async emailId => {
	const ref = query(collection(db, "users"), where("emailId", "==", emailId))
	const users = await getDocs(ref)
	const result = []
	users.forEach(user => result.push(user))
	return result.length > 0
}

export const createClass = async data => {
	const { createdBy, name, section, subject } = data
	const docRef = await addDoc(collection(db, "classes"), {
		createdBy,
		faculties: [],
		name,
		section,
		subject,
		students: {},
	})
	return docRef.id
}

export const joinClass = async (userId, classId, rollNo) => {
	const class_ = doc(db, "classes", classId)
	const user = doc(db, "users", userId)

	const userData = await fetchUser(userId)
	const classData = await fetchClass(classId)
	if (!classData) {
		return
	}
	if (userId === classData.createdBy) {
		// can't join own classRoom
		return
	}
	if (rollNo in classData.students) {
		// can't join with duplicate roll no
		return -1
	}
	// Converted to set to avoid duplicacy
	const classesEnrolled = new Set([...userData.classesEnrolled, classId])
	// Add Student to class
	await updateDoc(class_, { students: { ...classData.students, [rollNo]: userId } })
	// Add ClassId in User
	await updateDoc(user, { classesEnrolled: [...classesEnrolled] })
	return true
}

export const createAnnouncement = async data => {
	const { userId, classId, text, userName } = data
	const docRef = await addDoc(collection(db, "announcements"), {
		classId,
		createdBy: userId,
		postedOn: serverTimestamp(),
		text,
		userName,
	})
	return docRef.id
}

export const fetchAnnouncements = async classId => {
	const ref = query(collection(db, "announcements"), where("classId", "==", classId))
	const assignments = await getDocs(ref)
	const result = []
	assignments.forEach(doc => result.push({ id: doc.id, ...doc.data() }))
	return result
}
export const deleteAnnouncement = async assignmentId => await deleteDoc(doc(db, "assignments", assignmentId))

export const fetchAssignments = async classId => {
	const ref = query(collection(db, "assignments"), where("classId", "==", classId))
	const assignments = await getDocs(ref)
	const result = []
	assignments.forEach(doc => result.push({ id: doc.id, ...doc.data() }))
	return result
}

export const createAssignment = async data => {
	const { classId, userId, fileUrl, userName } = data
	const docRef = await addDoc(collection(db, "assignments"), {
		classId,
		createdBy: userId,
		fileUrl,
		postedOn: serverTimestamp(),
		userName,
	})
	return docRef.id
}

export const submitResponse = async data => {
	const { assignmentId, fileUrl } = data

	const ref = doc(db, "assignments", assignmentId)
	const assignment = await getDoc(ref)
	let result = { ...assignment.data() }
	await updateDoc(ref, {
		responses: [...result.responses, fileUrl],
	})
}
