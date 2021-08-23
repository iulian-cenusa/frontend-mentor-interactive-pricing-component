let pageViews = document.querySelector("#pageviews-value")
let perMonthValue = document.querySelector('#permonth-value')
let sliderRange = document.querySelector('#slider-range')
let yearlyValue = document.querySelector('#switch-check')

sliderRange.addEventListener("input", sliderChange)
yearlyValue.addEventListener("change", sliderChange)

function sliderChange(){

    switch (sliderRange.value){
        case "1":
            pageViews.innerHTML = "10K"
            perMonthValue.innerHTML = "$8.00"
            if ( yearlyValue.checked ){
                perMonthValue.innerHTML = `$${ 8 - 8*0.25}.00`
            }
            sliderRange.style.background = "hsl(224, 65%, 95%)"
            break
        case "2":
            pageViews.innerHTML = "50K"
            perMonthValue.innerHTML = "$12.00"
            if ( yearlyValue.checked ){
                perMonthValue.innerHTML = `$${ 12 - 12*0.25}.00`
            }
            sliderRange.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 25% , hsl(224, 65%, 95%) 25%)"
            break
        case "3":
            pageViews.innerHTML = "100K"
            perMonthValue.innerHTML = "$16.00"
            if ( yearlyValue.checked ){
                perMonthValue.innerHTML = `$${ 16 - 16*0.25}.00`
            }
            sliderRange.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 50% , hsl(224, 65%, 95%) 50%)"
            break
        case "4":
            pageViews.innerHTML = "500K"
            perMonthValue.innerHTML = "$24.00"
            if ( yearlyValue.checked ){
                perMonthValue.innerHTML = `$${ 24 - 24*0.25}.00`
            }
            sliderRange.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 75% , hsl(224, 65%, 95%) 75%)"
            break
        case "5":
            pageViews.innerHTML = "1M"
            perMonthValue.innerHTML = "$36.00"
            if ( yearlyValue.checked ){
                perMonthValue.innerHTML = `$${ 36 - 36*0.25}.00`
            }
            sliderRange.style.background = "hsl(174, 77%, 80%)"
            break
    }

}
