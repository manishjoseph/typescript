//Load Parse Analyze Report
// const matches = fs.readFileSync("football.csv", {
//   encoding: "utf-8", //To give string instead of buffer
// });

import { Summary } from "./Analyzer";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

// console.log(matches);

// const newMatches = matches.split("\n");

// console.log(newMatches);

// const newMoreMatches = newMatches.map((match: string): string[] =>
//   match.split(",")
// );

// console.log(newMoreMatches);

//Find total matches won by Man United as home or away. Column 1 for name . Column 5 for who won

// //You could possibly use better named string
// const homeWin = "H";
// const awayWin = "A";
// //You could possibly use object
// const MatchResult = {
//   HomeWin: "H",
//   AwayWin: "A",
// };
//Instead of object , using enum which is essentially an object helps , other engineers to know closely related data types

//Approach 3 Create and object which satisfies data reader interface.
// const csvFileReader = new CsvFileReader("football.csv");
// // Create an instance of MatchReader and pass in something satisfying DataReader inetrface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);

// let manUnitedWins = 0;
// for (let match of matchReader.matches) {
//   if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }
