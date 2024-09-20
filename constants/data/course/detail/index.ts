import { ChapterWithLessons, CourseDetailProps } from "@/server/course.type";
import { pythonDetail, roadmapPythonDetail } from "./foundation/python";
import { cBeginnerDetail, roadmapCBeginnerDetail } from "./foundation/c";
import {
  cppBeginnerDetail,
  roadmapCppBeginnerDetail,
} from "./foundation/cplusplus";
import { csharpDetail, roadmapCsharpDetail } from "./foundation/csharp";
import { dsaDetail, roadmapDsaDetail } from "./foundation/dsa";
import { javaDetail, roadmapJavaDetail } from "./foundation/java";
import {
  competitiveProgrammingDetail,
  roadmapCompetitiveProgrammingDetail,
} from "./competive-courses/cpp-competitive";
import { aiDetail, roadmapAIDetail } from "./data/ai";
import { dataAnalysisDetail, roadmapDataAnalysisDetail } from "./data/da";
import { dataEngineeringDetail, roadmapDataEngineeringDetail } from "./data/de";
import { dataScienceDetail, roadmapDataScienceDetail } from "./data/ds";
import { roadmapUnity2DGameDetail, unity2DGameDetail } from "./game/game-2d";
import { roadmapUnity3DGameDetail, unity3DGameDetail } from "./game/game-3d";
import { djangoDRFDetail, roadmapDjangoDRFDetail } from "./web/django";
import { nextJsDetail, roadmapNextJsDetail } from "./web/nextjs";
import {
  nodeReactDetail,
  roadmapNodeReactDetail,
} from "./web/react_and_nodejs";
import { aspReactDetail, roadmapAspReactDetail } from "./web/asp-react";
import { roadmapSpringReactDetail, springReactDetail } from "./web/react-java";

export const courseDetailData = {
  "1": pythonDetail,
  "2": djangoDRFDetail,
  "3": nextJsDetail,
  "6": cppBeginnerDetail,
  "7": csharpDetail,
  "11": dsaDetail,
  "14": javaDetail,
  "17": nodeReactDetail,
  "21": cBeginnerDetail,
  "22": competitiveProgrammingDetail,
  "23": aiDetail,
  "24": dataAnalysisDetail,
  "25": dataEngineeringDetail,
  "26": dataScienceDetail,
  "27": unity2DGameDetail,
  "28": unity3DGameDetail,
  "29": aspReactDetail,
  "30": springReactDetail,
} as {
  [key: string]: CourseDetailProps["content"];
};

export const roadmapDetailData = {
  "1": roadmapPythonDetail,
  "2": roadmapDjangoDRFDetail,
  "3": roadmapNextJsDetail,
  "6": roadmapCppBeginnerDetail,
  "7": roadmapCsharpDetail,
  "11": roadmapDsaDetail,
  "14": roadmapJavaDetail,
  "17": roadmapNodeReactDetail,
  "21": roadmapCBeginnerDetail,
  "22": roadmapCompetitiveProgrammingDetail,
  "23": roadmapAIDetail,
  "24": roadmapDataAnalysisDetail,
  "25": roadmapDataEngineeringDetail,
  "26": roadmapDataScienceDetail,
  "27": roadmapUnity2DGameDetail,
  "28": roadmapUnity3DGameDetail,
  "29": roadmapAspReactDetail,
  "30": roadmapSpringReactDetail,
} as {
  [key: string]: any;
};
