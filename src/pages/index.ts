import {CertificationTraining} from "./certification-training"
import {CompositionCC} from "./composition-cc"
import {Contacts} from "./contacts"
import {EducationalPrograms} from "./educational-and-professional-programs"
import {HistoryCC} from "./history-cc"
import {Home} from "./home"
import {MaterialBase} from "./material-and-technical-base-cc"
import {MethodologicalKP} from "./methodological-recommendations-for-KP"
import {OurAchievements} from "./our-achievements"
import {OurGraduates} from "./our-graduates"
import {OurStakeholders} from "./our-stakeholders"
import {Practices} from "./practices"
import {QualificationWorkDp} from "./qualification-work-dp"
import {ScientificWork} from "./scientific-work"
import {Specialty} from "./specialty"
import {StudentLeisure} from "./student-leisure-time"
import {Syllabuses} from "./syllabuses"

export const pages = [
  {
    path: "/",
    Component: Home,
    title: "Головна",
  },
  {
    path: "/certification-training",
    Component: CertificationTraining,
    title: "Наші",
  },
  {
    path: "/composition-cc",
    Component: CompositionCC,
    title: "Наші досягнення",
  },
  {
    path: "/contacts",
    Component: Contacts,
    title: "Наші",
  },
  {
    path: "/educational-and-professional-programs",
    Component: EducationalPrograms,
    title: "Наші",
  },
  {
    path: "/history-cc",
    Component: HistoryCC,
    title: "Історія ЦК",
  },
  {
    path: "/material-and-technical-base-cc",
    Component: MaterialBase,
    title: "Наші",
  },
  {
    path: "/qualification-work-dp",
    Component: QualificationWorkDp,
    title: "Наші",
  },
  {
    path: "/methodological-recommendations-for-KP",
    Component: MethodologicalKP,
    title: "Наші",
  },
  {
    path: "/our-achievements",
    Component: OurAchievements,
    title: "Наші",
  },
  {
    path: "/our-graduates",
    Component: OurGraduates,
    title: "Наші",
  },
  {
    path: "/our-stakeholders",
    Component: OurStakeholders,
    title: "Наші",
  },
  {
    path: "/practices",
    Component: Practices,
    title: "Наші",
  },
  {
    path: "/scientific-work",
    Component: ScientificWork,
    title: "Наші",
  },
  {
    path: "/specialty",
    Component: Specialty,
    title: "Наші",
  },
  {
    path: "/student-leisure-time",
    Component: StudentLeisure,
    title: "Наші",
  },
  {
    path: "/syllabuses",
    Component: Syllabuses,
    title: "Наші",
  },
]
