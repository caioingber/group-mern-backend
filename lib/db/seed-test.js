const Test = require("./model-test");

Test.remove({}).then(() => {
  Test.create({
    test: "hello world"
  })
    .then(test => console.log(test))
    .catch(err => console.log(err));
});
