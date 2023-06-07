const readFileName = (file) => {
  var filePath = file;
  if (filePath) {
    var startIndex =
      filePath.indexOf("\\") >= 0
        ? filePath.lastIndexOf("\\")
        : filePath.lastIndexOf("/");
    var fileName = filePath.substring(startIndex);
    if (fileName.indexOf("\\") === 0 || fileName.indexOf("/") === 0) {
      fileName = fileName.substring(1);
    }
  }
  return fileName;
};

module.exports = readFileName;
