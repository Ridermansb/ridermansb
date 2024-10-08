#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:ridermansb@gmail.com");
          console.log("\nDone, see you soon.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("        Riderman de Sousa Barbosa"),
  handle: chalk.white("@ridermansb"),
  work: `${chalk.white("Staff Engineering ")}`,
  website: chalk.white.bold("https://ridermansb.dev/"),
  blog: chalk.gray("https://medium.com/") + chalk.whiteBright("@ridermansb"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("ridermansb"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~ridermansb"),
  github: chalk.gray("https://github.com/") + chalk.green("ridermansb"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("ridermansb"),
  aboutMe: chalk.cyan("https://about.me/ridermansb"),
  npx: chalk.red("npx") + " " + chalk.white("ridermansb"),
  wakatime: chalk.gray("https://wakatime.com/") + chalk.black("@ridermansb"),

  labelWork: chalk.white.bold("       Work:"),
  labelWebsite: chalk.white.bold("    Website:"),
  labelBlog: chalk.white.bold("     Medium:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelAboutMe: chalk.white.bold("   About Me:"),
  labelCard: chalk.white.bold("       Card:"),
  labelWakatime: chalk.white.bold("   Wakatime:"),
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelWebsite}  ${data.website}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelnpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelAboutMe}  ${data.aboutMe}`,
    `${data.labelWakatime}  ${data.wakatime}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "I'm curious, enthusiastic and student most of the time."
    )}`,
    `${chalk.italic(
      "The rest of the time I write code that others can read."
    )}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
