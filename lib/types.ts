export type Role = "admin" | "faculty" | "student";

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  departmentId: string;
  semester: number;
  enrollmentYear: number;
  gpa: number;
  status: "active" | "inactive" | "graduated";
  avatar?: string;
  address: string;
  dateOfBirth: string;
  enrolledCourses: string[];
}

export interface Faculty {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  departmentId: string;
  designation: string;
  qualification: string;
  joinDate: string;
  status: "active" | "on-leave" | "retired";
  avatar?: string;
  assignedCourses: string[];
  specialization: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  departmentId: string;
  credits: number;
  semester: number;
  facultyId: string;
  facultyName: string;
  enrolledStudents: number;
  maxCapacity: number;
  schedule: string;
  room: string;
  status: "active" | "inactive" | "completed";
  description: string;
}

export interface Department {
  id: string;
  name: string;
  code: string;
  headOfDepartment: string;
  headId: string;
  facultyCount: number;
  studentCount: number;
  courseCount: number;
  established: number;
  description: string;
  building: string;
}

export interface Enrollment {
  id: string;
  studentId: string;
  studentName: string;
  courseId: string;
  courseName: string;
  courseCode: string;
  semester: number;
  enrollmentDate: string;
  status: "enrolled" | "dropped" | "completed";
  grade?: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  courseId: string;
  courseName: string;
  date: string;
  status: "present" | "absent" | "late";
}

export interface Grade {
  id: string;
  studentId: string;
  studentName: string;
  courseId: string;
  courseName: string;
  courseCode: string;
  midterm: number;
  final: number;
  assignment: number;
  total: number;
  grade: string;
  gpa: number;
  semester: number;
}

export interface TimetableSlot {
  id: string;
  courseId: string;
  courseName: string;
  courseCode: string;
  facultyName: string;
  room: string;
  day: string;
  startTime: string;
  endTime: string;
  department: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  category: "academic" | "administrative" | "event" | "urgent";
  priority: "high" | "medium" | "low";
  targetAudience: "all" | "students" | "faculty";
}
