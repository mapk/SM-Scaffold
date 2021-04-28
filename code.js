// Shopmonkey Figma Scaffolding
// This plugin generates a scaffold for your new Figma project.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let ReadyForDev = figma.createPage();
let ReadyForReview = figma.createPage();
let Divider = figma.createPage();
let InProgress = figma.createPage();
let UserValidation = figma.createPage();
let FatMarker = figma.createPage();
let Exploration = figma.createPage();
let Future = figma.createPage();
let Archive = figma.createPage();
let Cover = figma.currentPage;
let CoverFrame = figma.createFrame();
let CoverHead = figma.createText();
let CoverDesigner = figma.createText();
let CoverPhoto = figma.createFrame();
let tagBg = figma.createFrame();
let Status = figma.createText();
figma.currentPage.name = "- Cover -";
ReadyForDev.name = "📦 Ready for Dev + 🕹️ Prototype";
ReadyForReview.name = "🔍 Ready to Review + 🕹️ Prototype";
Divider.name = "--------------------";
UserValidation.name = "🐛 User Validation";
InProgress.name = "🚧 In Progress";
FatMarker.name = "🖍 Fat Marker";
Exploration.name = "🕵️‍♂️ Exploration";
Future.name = "🦄 Future";
Archive.name = "🗑 Archive";
CoverFrame.name = "Cover";
CoverPhoto.name = "Photo";
tagBg.name = "Label";
Cover.appendChild(CoverFrame);
CoverFrame.appendChild(CoverHead);
CoverFrame.appendChild(CoverDesigner);
CoverFrame.appendChild(CoverPhoto);
CoverPhoto.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
CoverPhoto.resize(383, 290);
CoverPhoto.effects = [{ type: 'DROP_SHADOW', visible: true, blendMode: "NORMAL", radius: 12, offset: { x: 0, y: 2 }, color: { r: 0, b: 0, g: 0, a: 0.16 } }];
CoverFrame.resize(660, 330);
CoverFrame.fills = [{ type: 'SOLID', color: { r: 240 / 255, g: 242 / 255, b: 245 / 255 } }];
CoverFrame.appendChild(tagBg);
tagBg.resize(108, 32);
tagBg.fills = [{ type: 'SOLID', color: { r: 235 / 255, g: 115 / 255, b: 23 / 255 } }];
tagBg.appendChild(Status);
Status.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
//  Color Functions 
let setColor = (node, color) => {
    function clone(val) {
        return JSON.parse(JSON.stringify(val));
    }
    let txtfills = clone(node.fills);
    txtfills[0].color = color;
    node.fills = txtfills;
};
let setPosition = (node, spacex, spacey) => { node.relativeTransform = [[1, 0, spacex], [0, 1, spacey]]; };
let xCalculator = (container, element) => { return 48; };
let yCalculator = (container, element) => { return 48; };
let loadFontHead = (name) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Roboto", style: "Medium" });
    CoverHead.fontName = { family: "Roboto", style: "Medium" };
    CoverHead.characters = name;
    CoverHead.fontSize = 18;
});
let loadFontDesigner = (text) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    CoverDesigner.fontSize = 18;
    CoverDesigner.characters = text;
    layout();
});
let loadStatus = (text) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    Status.fontSize = 18;
    Status.characters = text;
    setColor(Status, { r: 1, g: 1, b: 1 });
    tagBg.cornerRadius = 4;
    layout();
});
let layout = () => {
    let descX = xCalculator(CoverFrame, CoverDesigner);
    let headX = xCalculator(CoverFrame, CoverHead);
    let headY = (yCalculator(CoverFrame, CoverHead));
    let descY = headY + CoverHead.height + 100;
    setPosition(CoverHead, headX, headY);
    setPosition(CoverDesigner, descX, descY);
    setPosition(CoverPhoto, 330, 40);
    setPosition(tagBg, descX, descY + 50);
    setPosition(Status, 8, 4);
};
let run = () => __awaiter(this, void 0, void 0, function* () {
    yield loadFontHead("Project Name");
    yield loadFontDesigner("Designer Name");
    yield loadStatus("In Progress");
    figma.notify("Project scaffolding done. 👍");
    figma.closePlugin();
});
run();
