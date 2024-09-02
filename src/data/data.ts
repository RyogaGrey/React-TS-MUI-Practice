// import {faker} from "@faker-js/faker";
// import {ChartData} from "chart.js/auto";
// import {useTranslation} from "react-i18next";

// //secondNavBarData
// export const secondNavBarData = [
//     {
//         name: 'Профиль',
//         path: '/profile',
//     }
// ]

// // table data
// export const tableHead = ['Name', 'Email', 'Status', 'Rnd_Int', 'Rnd_Date']

// function getRandomDate(year: number, month: number, day: number) {
//     const startOfYear = new Date(year, month, day);
//     const today = new Date();
//     const timeDiff = today.getTime() - startOfYear.getTime();
//     const randomTime = Math.floor(Math.random() * timeDiff);
//     const randomDate = new Date(startOfYear.getTime() + randomTime);

//     const randomDay = randomDate.getDate().toString().padStart(2, '0');
//     const randomMonth = (randomDate.getMonth() + 1).toString().padStart(2, '0');
//     const randomYear = randomDate.getFullYear().toString();

//     return `${randomDay}.${randomMonth}.${randomYear}`;
// }
// for (let i = 0; i <= 5; i++) {
//     const Name = faker.person.fullName();
//     const Email = faker.internet.email();
//     const Status = Math.floor(Math.random() * 100);
//     const Rnd_Int = Math.floor(Math.random() * 100);
//     const Rnd_Date = getRandomDate(2024, 0, 1);
//     data.push({Name, Email, Status, Rnd_Int, Rnd_Date});
// }

// // AreaChartData
// export const AreaChartColors = {
//     borderColor: "rgba(255, 99, 132, 0.4)",
//     backgroundColor: "rgba(255, 99, 132, 0.2)",
// }
// export const AreaChartData: ChartData<'line'> = {
//     labels: data.map((item) => item.Name.split(" ")),
//     datasets: [
//         {
//             fill: false,
//             label: "Рандомное число",
//             data: data.map(() => faker.number.int({min: 1, max: 500})),
//             borderColor: AreaChartColors.borderColor,
//         }
//     ]
// }
// //BarChartData
// export const BarChartData: ChartData<'bar'> = {
//     labels: AreaChartData.labels,
//     datasets: [
//         {
//             label: 'Статус',
//             data: data.map((item) => item.Status),
//             borderColor: "#A5D1F5",
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//         {
//             label: 'Рандомное число',
//             data: data.map((item) => item.Rnd_Int),
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         },
//     ],
// };

// // PolarAreaChartData
// export const PolarAreaChartData = {
//     labels: AreaChartData.labels,
//     datasets: [
//         {
//             label: '# of Votes',
//             data: data.map((item) => item.Rnd_Int),
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.5)',
//                 'rgba(54, 162, 235, 0.5)',
//                 'rgba(255, 206, 86, 0.5)',
//                 'rgba(75, 192, 192, 0.5)',
//                 'rgba(153, 102, 255, 0.5)',
//                 'rgba(255, 159, 64, 0.5)',
//             ],
//             borderColor: "#A5D1F5",
//             borderWidth: 1,
//         },
//     ],
// };

// //MultipleChartData
// export const MultipleChartData = {
//     labels: AreaChartData.labels,
//     datasets: [
//         {
//             ...AreaChartData.datasets[0],
//             type: 'line' as const,
//         },
//         {
//             ...BarChartData.datasets[0],
//             type: 'bar' as const,
//         },
//         {
//             ...BarChartData.datasets[1],
//             type: 'bar' as const,
//         },
//     ],
// };

// // Charts options
// export const options = {
//     responsive: true,
// };
export {}