
import { connectDB } from "@/lib/mongodb/mongodb";
import { roadmapRepository } from "@/repositories/roadmap.repository";

async function seed() {
  try {
    await connectDB();

    const count = await roadmapRepository.count();

    if (count > 0) {
      console.log("Roadmaps already exist.");
      process.exit(0);
    }

    await roadmapRepository.createMany([
      {
        title: "Software Engineering",
        slug: "software-engineering",
        description:
          "Become a Full Stack Software Engineer capable of building scalable web applications.",
        category: "Technology",
        difficulty: "Beginner",
        estimatedDuration: "8 Months",
        thumbnail: "",
      },

      {
        title: "Artificial Intelligence",
        slug: "artificial-intelligence",
        description:
          "Learn Machine Learning, Deep Learning and Generative AI.",
        category: "Technology",
        difficulty: "Intermediate",
        estimatedDuration: "10 Months",
        thumbnail: "",
      },

      {
        title: "Data Analytics",
        slug: "data-analytics",
        description:
          "Master SQL, Excel, Power BI and Python for analytics.",
        category: "Data",
        difficulty: "Beginner",
        estimatedDuration: "6 Months",
        thumbnail: "",
      },

      {
        title: "Cybersecurity",
        slug: "cybersecurity",
        description:
          "Protect networks, applications and cloud infrastructure.",
        category: "Security",
        difficulty: "Intermediate",
        estimatedDuration: "9 Months",
        thumbnail: "",
      },

      {
        title: "Cloud Computing",
        slug: "cloud-computing",
        description:
          "Learn AWS, Azure and Google Cloud Platform fundamentals.",
        category: "Cloud",
        difficulty: "Intermediate",
        estimatedDuration: "8 Months",
        thumbnail: "",
      },

      {
        title: "DevOps",
        slug: "devops",
        description:
          "Master Docker, Kubernetes and CI/CD pipelines.",
        category: "Cloud",
        difficulty: "Advanced",
        estimatedDuration: "9 Months",
        thumbnail: "",
      },

      {
        title: "UI/UX Design",
        slug: "ui-ux-design",
        description:
          "Design intuitive and beautiful digital experiences.",
        category: "Design",
        difficulty: "Beginner",
        estimatedDuration: "5 Months",
        thumbnail: "",
      },
    ]);

    console.log("Roadmaps seeded successfully.");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();