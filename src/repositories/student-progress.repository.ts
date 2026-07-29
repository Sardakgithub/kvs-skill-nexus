import StudentProgress from "@/models/StudentProgress";

export class StudentProgressRepository {
  async findByUserId(userId: string) {
    return StudentProgress.findOne({
      userId,
    }).lean();
  }

  async create(data: object) {
    return StudentProgress.create(data);
  }

  async updateByUserId(
    userId: string,
    data: object
  ) {
    return StudentProgress.findOneAndUpdate(
      {
        userId,
      },
      data,
      {
        new: true,
      }
    ).lean();
  }
}

export const studentProgressRepository =
  new StudentProgressRepository();