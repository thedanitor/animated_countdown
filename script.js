const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

// call on page load
runAnimation();


function resetDOM() {
    // remove hide from counter and show from final
    counter.classList.remove("hide");
    finalMessage.classList.remove("show");
    // iterate through nums 
    nums.forEach((num) => {
        // remove all classes
        num.classList.value = "";
    });
    // add in class to first num
    nums[0].classList.add("in");
}

function runAnimation() {
  // iterate through nums
  nums.forEach((num, idx) => {
    // get second to last num
    const nextToLast = nums.length - 1;
    // listen for animation end event
    num.addEventListener("animationend", e => {
      // if the animation is goIn and the index is not nextToLast
      if (e.animationName === "goIn" && idx !== nextToLast) {
        // remove class in then add class out
        num.classList.remove("in");
        num.classList.add("out");
        // if animation is goOut and there is another sibling after
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        // add class in to next sibling
        num.nextElementSibling.classList.add("in");
        // if no more elements
      } else {
          // add hide to counter and show to final
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

// listen for click on replay button to call reset and animation functions
replay.addEventListener("click", () => {
    resetDOM();
    runAnimation();
})