// Shopmonkey Figma Scaffolding
// This plugin generates a scaffold for your new Figma project.

// Cover component key
const coverKey = "e6ed16c8b2cb018cae4e611ce5ed4becf7e28eb3";
// Page names
let pages = [
  "đĻ Ready for Dev + đšī¸ Prototype",
  "đ Ready to Review + đšī¸ Prototype",
  "--------------------",
  "đ User Validation",
  "đ§ In Progress",
  "đ Fat Marker",
  "đĩī¸ââī¸ Exploration",
  "đĻ Future",
  "đ Archive"
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
  figma.closePlugin("Project scaffolding done. đ");
}

run();