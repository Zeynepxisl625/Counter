let count = 0;

const decrement = () => {
    if(count > 0){
        count--;
        updateCount();
    }
}

const  increment = () => {
    count++;
    updateCount();
}

const reset = () => {
    count = 0;
    updateCount();
}

const updateCount = () => {
    const countElement = document.querySelector(".count span");
    countElement.textContent = count;
}

const decrementButton = document.querySelector(".decrement");
decrementButton.addEventListener("click", decrement);


const incrementButton = document.querySelector(".increment");
incrementButton.addEventListener("click", increment);

const resetButton = document.querySelector(".reset");   
resetButton.addEventListener("click", reset);