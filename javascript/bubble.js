const bubblebtn = document.querySelector(".bubbleSort");
bubblebtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableArraySizeSlider();
  disableNewArrayBtn();
  await bubbleSort();
  enableSortingBtn();
  enableArraySizeSlider();
  enableNewArrayBtn();
});

async function bubbleSort() {
  const ele = document.querySelectorAll(".bar");
  console.log(ele.length);
  for (let i = 0; i < ele.length - 1; i++) {
    console.log("i th loop");
    for (let j = 0; j < ele.length - i - 1; j++) {
      console.log("in for loop");
      ele[j].style.background = "blue";
      ele[j + 1].style.background = "blue";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await waitFor(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "cyan";
      ele[j + 1].style.background = "cyan";
    }
    ele[ele.length - 1 - i].style.background = "green";
  }
  ele[0].style.background = "green";
}
