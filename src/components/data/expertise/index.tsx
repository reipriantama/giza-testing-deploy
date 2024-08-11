// import { useEffect, useState } from "react";

// const [progressNumberWorks, setProgressNumberWorks] = useState(0);
// const [progressNumberExperts, setProgressNumberExperts] = useState(0);
// const [progressNumberYears, setProgressNumberYears] = useState(0);
// const [countriesEngaged, setCountriesEngaged] = useState(0);
// const [isExpertFinal, setIsExpertFinal] = useState(false);

// const worksHandledSteps = [0, 10, 20, 50, 70, 90, 109];
// const expertsGrowingSteps = [0, 10, 19, 25, 31, 45, 50, "56+"];
// const yearsOfExpertiseSteps = [0, 2, 4, 6, 8, 10, 12, "13+"];
// const countriesEngagedSteps = [0, 1, 2, 3, 4, 5];

// export const ExpertiseData = () => {

// }

// const updateProgress = (
//   steps: any[],
//   setter: React.Dispatch<React.SetStateAction<any>>,
//   setFinal?: React.Dispatch<React.SetStateAction<boolean>>,
// ) => {
//   let index = 0;
//   const interval = setInterval(() => {
//     if (index < steps.length) {
//       setter(steps[index]);
//       if (setFinal && index === steps.length - 1) {
//         setFinal(true);
//       }
//       index++;
//     } else {
//       clearInterval(interval);
//     }
//   }, 200); // Update every 200 milliseconds
// };

// useEffect(() => {
//   updateProgress(worksHandledSteps, setProgressNumberWorks);
//   updateProgress(
//     expertsGrowingSteps,
//     setProgressNumberExperts,
//     setIsExpertFinal,
//   );
//   updateProgress(
//     yearsOfExpertiseSteps,
//     setProgressNumberYears,
//     setIsExpertFinal,
//   );
//   updateProgress(countriesEngagedSteps, setCountriesEngaged);
// }, []);

// const progressData = [
//   { id: 1, value: progressNumberWorks, label: "Works handled" },
//   {
//     id: 2,
//     value: isExpertFinal ? "56+" : progressNumberExperts,
//     label: "Experts and growing",
//   },
//   {
//     id: 3,
//     value: progressNumberYears ? progressNumberYears : "13+",
//     label: "Years of expertise",
//   },
//   { id: 4, value: countriesEngaged, label: "Countries engaged" },
// ];
