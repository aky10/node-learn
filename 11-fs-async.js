const { readFile, writeFile } = require("fs");

//callback hell
readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = res;

    readFile("./content/second.txt", "utf-8", (err, res) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = res;

        writeFile(
          "./content/result-async.txt",
          `Here is the result: ${first}, ${second}`,
          (err, res) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log(res);
            }
          }
        );
      }
    });
  }
});
