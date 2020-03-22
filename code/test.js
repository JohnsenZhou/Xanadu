class Upload {
  constructor(type) {
    this.uploadType = type;
  }
  delFile() {
    this.dom.parentNode.removeChild(this.dom);
  }
}

const uploadFactory = (function() {
  const createdUploadObj = {};
  return {
    create(uploadType) {
      if (createdUploadObj[uploadType]) {
        return createdUploadObj[uploadType];
      }
      return (createdUploadObj[uploadType] = new Upload(uploadType));
    }
  };
})();

const uploadManager = (function() {
  const uploadDatabase = {};
  return {
    add: (id, uploadType, fileName) => {
      const flyweightObj = UploadFactory.create(uploadType);
      const dom = document.createElement("div");
      dom.innerHTML =
        "＜span>文件名称：" +
        fileName +
        "</span>" +
        '＜button class="delFile">删除＜／button>';
      dom.querySelector(".delFile").onclick = function() {
        flyweightObj.delFile(id);
      };
      document.body.appendChild(dom);
      uploadDatabase[id] = {
        fileName,
        dom
      };
      return flyweightObj;
    }
  };
})();

window.startUpload = (uploadType, files) => {
  for (let i = 0; i < files.length; i++) {
    const uploadObj = uploadManager.add(++id, uploadType, file.fileName);
  }
};

startUpload("iframe", [
  { fileName: "1.txt" },
  { fileName: "2.txt" },
  { fileName: "3.txt" }
]);

startUpload("form", [
  { fileName: "4.txt" },
  { fileName: "5.txt" },
  { fileName: "6.txt" }
]);
