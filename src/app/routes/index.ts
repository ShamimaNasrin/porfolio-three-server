import { Router } from "express";
import { ExperienceRoutes } from "../modules/experience/experience.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { SkillRoutes } from "../modules/skill/skill.route";
import { ProjectRoutes } from "../modules/project/project.route";

const router = Router();

// set route
const moduleRoutes = [
  // {
  //   path: "/auth",
  //   route: AuthRoutes,
  // },
  {
    path: "/experiences",
    route: ExperienceRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
  {
    path: "/skills",
    route: SkillRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
