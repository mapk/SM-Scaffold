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
// Cover component key
const coverKey = "e6ed16c8b2cb018cae4e611ce5ed4becf7e28eb3";
// Page names
let pages = [
    "📦   Ready for Dev",
    "🕹️   User Validation",
    "🚧   In Progress",
    "🖍️   Fat Marker",
    "🕵️   Exploration        👈"
];

let run = () => __awaiter(this, void 0, void 0, function* () {
    let bg = Object.assign({}, figma.currentPage.backgrounds[0]);
    bg.color = {r:0.90, g:0.90, b:0.936}; //#E5E5EF
    
    // Create cover page & set background color
    let coverPage = figma.currentPage;
    coverPage.name = "        Cover";
    coverPage.backgrounds = [bg];
    // Add library cover to cover page
    let libraryCover = yield figma.importComponentByKeyAsync(coverKey);
    // Create cover frame
    let coverFrame = figma.createFrame();
    // Name cover frame
    coverFrame.name = "Cover";
    // Add cover frame to cover page
    coverPage.appendChild(coverFrame);
    // Add library cover to cover frame
    coverFrame.appendChild(libraryCover.createInstance());
    // Resize cover frame to match library cover
    coverFrame.resize(libraryCover.width, libraryCover.height);
    // Set cover frame as file thumbnail
    figma.setFileThumbnailNodeAsync(coverFrame);
    // Create other pages
    for (let page of pages) {
        let newPage = figma.createPage();
        newPage.name = page;
        newPage.backgrounds = figma.currentPage.backgrounds;
    }
    // Done!
    figma.closePlugin("Project scaffolding done. 👍");
});
run();
