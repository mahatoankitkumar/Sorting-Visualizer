const insertionbtn = document.querySelector(".insertionSort");
insertionbtn.addEventListener("click", async function () {
  disableArraySizeSlider();
  disableNewArrayBtn();
  disableSortingBtn();
  await insertionSort();
  enableArraySizeSlider();
  enableNewArrayBtn();
  enableSortingBtn();
});

async function insertionSort() {
  const ele = document.querySelectorAll(".bar");
  console.log(ele.length);
  for (let i = 1; i < ele.length; i++) {
    let temp = ele[i].style.height;
    let hole = i;
    ele[i].style.background = "blue";
    await waitFor(delay);
    while (hole > 0 && parseInt(ele[hole - 1].style.height) > parseInt(temp)) {
      ele[hole - 1].style.background = "blue";
      ele[hole].style.height = ele[hole - 1].style.height;
      hole--;
      await waitFor(delay);
      for (let j = i; j >= hole; j--) {
        ele[j].style.background = "green";
      }
    }
    ele[hole].style.height = temp;
    ele[i].style.background = "green";
  }
}
