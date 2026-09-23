export type UserRole = 'visitor' | 'student' | 'admin';

export interface AuthSession {
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    phone?: string;
    avatarUrl?: string;
  } | null;
  isAuthenticated: boolean;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  address?: string;
  emergencyContact?: string;
  createdAt: string;
}

export interface Centre {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  whatsapp: string;
  email: string;
  timings: string;
  mapEmbedUrl?: string;
}

export interface Batch {
  id: string;
  name: string;
  centreId: string;
  centreName: string;
  days: string[]; // e.g. ["Mon", "Wed", "Fri"]
  startTime: string; // e.g. "07:00 AM"
  endTime: string; // e.g. "08:15 AM"
  instructor: string;
  capacity: number;
  enrolledCount: number;
  feeAmount: number;
}

export type StudentStatus = 'active' | 'inactive' | 'pending';

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  batchId: string;
  batchName: string;
  status: StudentStatus;
  joinedDate: string;
  feeDueDate: string;
  pendingAmount: number;
}

export interface FeePlan {
  id: string;
  name: string;
  amount: number;
  frequency: 'monthly' | 'quarterly' | 'annually';
  description: string;
}

export type PaymentMode = 'cash' | 'upi' | 'cheque' | 'card' | 'online';
export type PaymentStatus = 'completed' | 'pending' | 'failed';

export interface Payment {
  id: string;
  receiptNo: string;
  studentId: string;
  studentName: string;
  amount: number;
  paymentMode: PaymentMode;
  date: string;
  status: PaymentStatus;
  notes?: string;
}

export interface Lesson {
  id: string;
  title: string;
  durationMinutes: number;
  videoUrl?: string;
  pdfUrl?: string;
  pdfTitle?: string;
  order: number;
  isCompleted?: boolean;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Pranayama' | 'Asana' | 'Meditation' | 'Therapeutic' | 'Holistic';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  price: number;
  instructor: string;
  instructorBio: string;
  thumbnailUrl: string;
  published: boolean;
  lessonsCount: number;
  totalDurationHours: number;
  syllabus: {
    sectionTitle: string;
    lessons: Lesson[];
  }[];
  whatYouWillLearn: string[];
}

export interface CourseAccess {
  courseId: string;
  studentId: string;
  progressPercent: number;
  completedLessonIds: string[];
  purchasedAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  target: 'all' | 'specific_batch';
  targetBatchId?: string;
  targetBatchName?: string;
  author: string;
}

export interface Attendance {
  id: string;
  studentId: string;
  batchId: string;
  date: string;
  status: 'present' | 'absent' | 'excused';
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'converted';
}
