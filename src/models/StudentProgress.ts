import mongoose, {
  Document,
  Model,
  Schema,
} from "mongoose";

export interface IStudentProgress extends Document {
  userId: mongoose.Types.ObjectId;

  roadmap: string;

  completedPhases: number[];

  completedSkills: string[];

  completedProjects: string[];

  lastCompletedPhase: number;

  progress: number;
}

const StudentProgressSchema =
  new Schema<IStudentProgress>(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },

      roadmap: {
        type: String,
        required: true,
      },

      completedPhases: {
        type: [Number],
        default: [],
      },

      completedSkills: {
        type: [String],
        default: [],
      },

      completedProjects: {
        type: [String],
        default: [],
      },

      lastCompletedPhase: {
        type: Number,
        default: -1,
      },

      progress: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );

const StudentProgress: Model<IStudentProgress> =
  mongoose.models.StudentProgress ||
  mongoose.model<IStudentProgress>(
    "StudentProgress",
    StudentProgressSchema
  );

export default StudentProgress;