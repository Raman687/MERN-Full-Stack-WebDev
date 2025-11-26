function submit() {
  let selectBatchTiming = [];

  document
    .querySelectorAll("input[name='batch']:checked")
    .forEach((element) => {
      selectBatchTiming.push(element.value);
    });

  console.log(selectBatchTiming);
}
