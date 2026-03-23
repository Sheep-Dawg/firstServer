const awesomeFunction = (req, res) => {
  res.send("Hello World!");
};
const ttech =
  ("/ttech",
  (req, res) => {
    res.send("Tooele Tech is Awesome!");
  });
module.exports = { ttech, awesomeFunction };
