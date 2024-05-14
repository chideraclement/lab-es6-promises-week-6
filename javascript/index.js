// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    // We're calling the same function with changes to receive the next step
    // Callback step - 2
    getInstruction(
      "mashedPotatoes",
      1,
      //  () => {} // callback
      (step) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step}</li>`;
        // We're calling the same function with changes to receive the next step
        // Callback step - 3
        getInstruction(
          "mashedPotatoes",
          2,
          //  () => {} // callback
          (step) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step}</li>`;
            // We're calling the same function with changes to receive the next step
            // Callback step - 4
            getInstruction(
              "mashedPotatoes",
              3,
              //  () => {} // callback
              (step) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step}</li>`;
                // We're calling the same function with changes to receive the next step
                // Callback step - 5
                getInstruction(
                  "mashedPotatoes",
                  4,
                  //  () => {} // callback
                  (step) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step}</li>`;
                    // We're calling the same function with changes to receive the next step
                    // Callback step - 4
                    getInstruction(
                      "mashedPotatoes",
                      5,
                      //  () => {} // callback
                      (step) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>${step}</li>`;
                        // Logic to remove the "HIDDEN" attribute from the img element containing the image
                        document
                          .querySelector("#mashedPotatoesImg")
                          .removeAttribute("hidden");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
    }, 1000);
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
// ...
const makeBroccoliTryCatch = async () => {
  try {
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 6)}</li>`;
    setTimeout(() => {
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>Broccoli is ready</li>`;
      document.querySelector("#broccoliImg").removeAttribute("hidden");
    }, 1000);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
makeBroccoliTryCatch();
// Bonus 2 - Promise all
// ...
// Bonus 2 - Using async/await + try/catch
let step0 = obtainInstruction("brusselsSprouts", 0);
let step1 = obtainInstruction("brusselsSprouts", 1);
let step2 = obtainInstruction("brusselsSprouts", 2);
let step3 = obtainInstruction("brusselsSprouts", 3);
let step4 = obtainInstruction("brusselsSprouts", 4);
let step5 = obtainInstruction("brusselsSprouts", 5);
let step6 = obtainInstruction("brusselsSprouts", 6);
let step7 = obtainInstruction("brusselsSprouts", 7);

const brusselsSproutsPromiseAll = () => {
  Promise.all([step0, step1, step2, step3, step4, step5, step6, step7])
  .then((arrayOfSteps) => {
    arrayOfSteps.forEach((individualStep) => {
      console.log(individualStep);
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${individualStep}</li>`;
    });

    setTimeout(() => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    }, 1000);
  });
document.querySelector(
  "#brusselsSprouts"
).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
};
brusselsSproutsPromiseAll();