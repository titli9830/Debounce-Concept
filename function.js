function onPageLoad() {
    let input = document.getElementById("debounce");
    let debounce = (func, delay) => {
        let debounceTimer;
        return function () {
            let context = this;
            let args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay)
        }
    }
    input.addEventListener('keyup', debounce(function () {
        console.log(input.value)
    }, 3000));


}

onPageLoad();