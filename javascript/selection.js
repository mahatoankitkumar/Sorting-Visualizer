const selectionbtn = document.querySelector(".selectionSort");
selectionbtn.addEventListener("click", async function () {
  disableNewArrayBtn();
  disableSortingBtn();
  disableArraySizeSlider();
  await selectionSort();
  enableNewArrayBtn();
  enableSortingBtn();
  enableArraySizeSlider();
});

async function selectionSort() {
  const ele = document.querySelectorAll(".bar");
  console.log(ele.length);
  for (let i = 0; i < ele.length; i++) {
    ele[i].style.background = "blue";
    for (let j = i + 1; j < ele.length; j++) {
      ele[j].style.background = "blue";
      if (parseInt(ele[j].style.height) < parseInt(ele[i].style.height)) {
        await waitFor(delay);
        swap(ele[i], ele[j]);
      }
      ele[j].style.background = "cyan";
    }
    ele[i].style.background = "green";
  }
}
