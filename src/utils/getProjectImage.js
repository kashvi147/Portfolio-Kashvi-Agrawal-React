import ai from "../assets/project-images/ai.png";
import web from "../assets/project-images/webdevelopment.png";
import arduino from "../assets/project-images/arduino.png";
import data from "../assets/project-images/dataanalysis.png";
import mobile from "../assets/project-images/mobiledevelopment.png";
import javascript from "../assets/project-images/javascript.png";
import cyber from "../assets/project-images/cybersecurity.png";
import defaultImage from "../assets/project-images/default.png";

export default function getProjectImage(repo) {

    const text = (
        (repo.name || "") +
        " " +
        (repo.language || "")
    ).toLowerCase();

    // ---------- AI ----------
    if (
        text.includes("ai") ||
        text.includes("machine") ||
        text.includes("ml") ||
        text.includes("nlp") ||
        text.includes("python") ||
        text.includes("tensorflow") ||
        text.includes("pytorch") ||
        text.includes("scikit")
    ) {
        return ai;
    }

    // ---------- WEB ----------
    if (
        text.includes("react") ||
        text.includes("portfolio") ||
        text.includes("web") ||
        text.includes("javascript") ||
        text.includes("typescript") ||
        text.includes("html") ||
        text.includes("css") ||
        text.includes("vite") ||
        text.includes("next")
    ) {
        return web;
    }

    // ---------- ARDUINO ----------
    if (
        text.includes("arduino") ||
        text.includes("embedded") ||
        text.includes("sensor") ||
        text.includes("electronics") ||
        text.includes("ldr") ||
        text.includes("led") ||
        text.includes("iot") ||
        text.includes("c++")
    ) {
        return arduino;
    }

    // ---------- DATA ----------
    if (
        text.includes("data") ||
        text.includes("pandas") ||
        text.includes("numpy") ||
        text.includes("sql")
    ) {
        return data;
    }

    // ---------- MOBILE ----------
    if (
        text.includes("android") ||
        text.includes("flutter") ||
        text.includes("kotlin")
    ) {
        return mobile;
    }

    // ---------- JAVA ----------
    if (
    text.includes("javascript") ||
    text.includes("java")
) {
        return javascript;
    }

    // ---------- CYBER ----------
    if (
        text.includes("security") ||
        text.includes("cyber") ||
        text.includes("encrypt") ||
        text.includes("network")
    ) {
        return cyber;
    }

    return defaultImage;
}