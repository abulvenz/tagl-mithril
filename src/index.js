import tagl from "tagl";

const camelToHyphen = s => s.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);

const tagl_hyperscript = m => tagl((tagName, classes, ...args) => {
  let cls = classes.map(camelToHyphen).join(".");
  let fullTagName = cls.length? [tagName, cls].join(".").replace(".$", "#"):tagName;
  return m(fullTagName, ...args);
});

module.exports = tagl_hyperscript;
