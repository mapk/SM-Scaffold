// Shopmonkey Figma Scaffolding
// This plugin generates a scaffold for your new Figma project.

// Cover component key
const coverKey = "e6ed16c8b2cb018cae4e611ce5ed4becf7e28eb3";
// Page names
let pages = [
  "📦 Ready for Dev + 🕹️ Prototype",
  "🔍 Ready to Review + 🕹️ Prototype",
  "--------------------",
  "🐛 User Validation",
  "🚧 In Progress",
  "🖍 Fat Marker",
  "🕵️‍♂️ Exploration",
  "🦄 Future",
  "🗑 Archive"
];

let run = async () => {
  // Create cover page
  let coverPage = figma.currentPage;
  coverPage.name = "- Cover -";

  // Add library cover to cover page
  let libraryCover = await figma.importComponentByKeyAsync(coverKey)

  // Create cover frame
  let coverFrame = figma.createFrame()
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

  // Create other pager
  for (let page of pages) {
    let newPage = figma.createPage();
    newPage.name = page;
  }

  // Done!
  figma.closePlugin("Project scaffolding done. 👍");
}

run();