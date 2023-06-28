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
const pages = [
    "📦   Ready for Dev",
    "🕹️   User Validation",
    "🚧   In Progress",
    "🖍️   Fat Marker",
    "🕵️   Exploration        👈",
];
let run = () => __awaiter(this, void 0, void 0, function* () {
    // Create cover page & set background color (#E5E5EF)
    let coverPage = figma.currentPage;
    coverPage.name = "        Cover";
    coverPage.backgrounds = [
        { type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.936 } },
    ];
    // Create cover frame
    let coverFrame = figma.createFrame();
    // Name cover frame
    coverFrame.name = "Cover";
    // Add cover frame to cover page
    coverPage.appendChild(coverFrame);
    // Add cover component to cover frame
    try {
        let coverComponent = yield figma.importComponentByKeyAsync(coverKey);
        coverFrame.appendChild(coverComponent.createInstance());
        // Resize cover frame to match cover component
        coverFrame.resize(coverComponent.width, coverComponent.height);
    }
    catch (error) {
        console.log("No library cover component available");
        coverFrame.resize(960, 480);
    }
    // Set cover frame as file thumbnail
    figma.setFileThumbnailNodeAsync(coverFrame);
    // Zoom to selection
    coverPage.selection = [coverPage.children[0]];
    figma.viewport.scrollAndZoomIntoView([coverPage.children[0]]);
    figma.viewport.zoom = 1.0;
    // Create other pager and set the background
    for (let page of pages) {
        let newPage = figma.createPage();
        newPage.name = page;
        newPage.backgrounds = coverPage.backgrounds;
    }
    // Done!
    figma.closePlugin("Scaffolding added ✨");
});
run();
