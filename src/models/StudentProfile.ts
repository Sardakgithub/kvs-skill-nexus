import mongoose, {
  Document,
  Model,
  Schema,
} from "mongoose";

export interface IStudentProfile
  extends Document {
  userId: mongoose.Types.ObjectId;

  phone: string;

  college: string;

  degree: string;

  specialization: string;

  graduationYear: number;

  bio: string;

  location: string;

  skills: string[];

  roadmap: string;

  progress: number;

  certificates: number;
}

const StudentProfileSchema =
  new Schema<IStudentProfile>(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },

      phone: {
        type: String,
        default: "",
      },

      college: {
        type: String,
        default: "",
      },

      degree: {
        type: String,
        default: "",
      },

      specialization: {
        type: String,
        default: "",
      },

      graduationYear: {
        type: Number,
        default: new Date().getFullYear(),
      },

      bio: {
        type: String,
        default: "",
      },

      location: {
        type: String,
        default: "",
      },

      skills: {
        type: [String],
        default: [],
      },

      roadmap: {
        type: String,
        default: "",
      },

      progress: {
        type: Number,
        default: 0,
      },

      certificates: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );

const StudentProfile: Model<IStudentProfile> =
  mongoose.models.StudentProfile ||
  mongoose.model<IStudentProfile>(
    "StudentProfile",
    StudentProfileSchema
  );

export default StudentProfile;