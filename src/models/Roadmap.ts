import mongoose, { Schema } from "mongoose";

const RoadmapSchema = new Schema(
{
  title: String,
  slug: String,
  description: String,

  category: String,

  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },

  estimatedDuration: String,

  thumbnail: String,

  phases: [
    {
      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        default: "",
      },

      skills: [
        {
          type: String,
        },
      ],

      projects: [
        {
          type: String,
        },
      ],
    },
  ],

  isPublished: {
    type: Boolean,
    default: true,
  },
},
{
  timestamps: true,
});

const Roadmap = mongoose.models.Roadmap || mongoose.model("Roadmap", RoadmapSchema);

export default Roadmap;