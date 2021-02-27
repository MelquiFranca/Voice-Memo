import Controller from "./controller.js";
import Media from "./util/media.js";
import Recorder from "./util/recorder.js";
import View from "./view.js";

const view = new View()
const media = new Media()
const recorder = new Recorder()

Controller.initialize({
    view,
    media,
    recorder
})