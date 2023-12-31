import { ipcMain, shell } from "electron";
//import { downloadYoutube } from "../utils/downloadYoutube";
import validateUrl from "../utils/validateUrl";
import downloadAudio from "../utils/downloadAudio";
import downloadVideo from "../utils/downloadVideo";

ipcMain.handle("validateUrl", (_event, data) => {
  const { url } = data;
  return validateUrl(url);
});

ipcMain.on("download-audio", async (event, data) => {
  const { videoInfos, quality, duration, thumbnail, title, totalSize } = data;
  downloadAudio(event, videoInfos, quality, duration, thumbnail, title, totalSize);
});

ipcMain.on("download-video", async (event, data) => {
  const { videoInfos, quality, duration, thumbnail, title, audioQuality, totalSize } = data;
  downloadVideo(event, videoInfos, quality, duration, thumbnail, title, audioQuality, totalSize);
});

ipcMain.handle("getFilePath", async (_event, filePath) => {
  //shell.showItemInFolder(filePath); don´t work
  // temporary solution, open file
  shell.openPath(filePath);
});
