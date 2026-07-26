import Roadmap from "@/models/Roadmap";

export class RoadmapRepository {
  async findPublished() {
    return Roadmap.find({ isPublished: true })
      .sort({ title: 1 })
      .lean();
  }

  async findBySlug(slug: string) {
    return Roadmap.findOne({
      slug,
      isPublished: true,
    }).lean();
  }

  async createMany(roadmaps: object[]) {
  return Roadmap.insertMany(roadmaps, {
    ordered: false,
  });
  }
  
  async deleteAll() {
    return Roadmap.deleteMany({});
  }

  async count() {
    return Roadmap.countDocuments();
  }
}

export const roadmapRepository = new RoadmapRepository();