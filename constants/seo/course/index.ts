import competitiveProgrammingCourse from "./competitive/cpp-competitive"
import courseAI from "./data/ai"
import courseDataAnalysis from "./data/da"
import courseDataEngineering from "./data/de"
import courseDataScience from "./data/ds"
import courseCBeginner from "./foundation/c"
import courseCppBeginner from "./foundation/cpp"
import courseCSharpBeginner from "./foundation/csharp"
import courseDataStructuresAlgorithms from "./foundation/dsa"
import courseJavaBeginner from "./foundation/java"
import coursePythonFoundation from "./foundation/python"
import courseMobileFletPython from "./mobile/flet"
import courseASPReact from "./web/asp-react"
import courseDjangoDRF_BE from "./web/django"
import courseNextJs from "./web/nextjs"
import courseSpringReact from "./web/react-java"
import courseNodeReact from "./web/react-nodejs"



// const allSlug = [
//     //^ Application
//     //* Web
//     courseNextJs.slug,
//     courseDjangoDRF_BE.slug,
//     courseASPReact.slug,
//     courseSpringReact.slug,
//     courseNodeReact.slug,
//     //^ Foundation
//     coursePythonFoundation.slug,
//     courseCBeginner.slug,
//     courseCSharpBeginner.slug,
//     courseDataStructuresAlgorithms.slug,
//     courseCppBeginner.slug,
//     courseJavaBeginner.slug,

// ]

const allCourses = [
    //^ Foundation
    coursePythonFoundation,
    courseCBeginner,
    courseDataStructuresAlgorithms,
    courseCppBeginner,
    competitiveProgrammingCourse,
    courseCSharpBeginner,
    courseJavaBeginner,
    //^ Web
    courseNextJs,
    courseDjangoDRF_BE,
    courseASPReact,
    courseSpringReact,
    courseNodeReact,
    //^ Data
    courseAI,
    courseDataAnalysis,
    courseDataEngineering,
    courseDataScience,
    //^ Mobile
    courseMobileFletPython,
]

const allSlug = allCourses.map(course => course.slug)

export {
    allSlug,
    allCourses
}




