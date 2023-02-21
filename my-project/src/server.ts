const Maizzle = require("@maizzle/framework");
import * as fs from "fs/promises";
import Mustache from "mustache";
import express from "express";
import dotenv from "dotenv";
import path from "path";

async function renderEmail(templateName: string) {
  const templatesDir = path.join(__dirname, "templates");
  const templatePath = path.join(templatesDir, templateName);
  const rawTemplate = (await fs.readFile(templatePath)).toString();

  const { html } = await Maizzle.render(rawTemplate, {
    tailwind: {
      config: require(path.join(__dirname, "tailwind.config.js")),
    },
    maizzle: require(path.join(__dirname, "config.production.js")),
  });

  return html;
}

async function onboardingEmail(name: string, url: string) {
  const html = await renderEmail("email_onboard.html");

  const view = { username: name, url };
  const customized = Mustache.render(html, view);

  return customized;
}

export default { onboardingEmail };
