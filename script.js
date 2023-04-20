// nav menu script

const openMenuIcon = document.querySelector("#hamburger-icon-img")
const closeMenuIcon = document.querySelector("#close-menu-icon")
const navMenuOverlay = document.querySelector("#opened-mobile-nav")

openMenuIcon.addEventListener('click',()=>{
    navMenuOverlay.style.display = "block"
    navMenuOverlay.style.animation = "showNavMenu 0.5s"
    openMenuIcon.style.display = "none"
})

closeMenuIcon.addEventListener('click',()=>{
    navMenuOverlay.style.animation = "hideNavMenu 0.5s"
    
    setTimeout(() => {
        navMenuOverlay.style.display = "none"
    }, 499);
    
    openMenuIcon.style.display = "block"
})



// features boxes onclick

const featuresListElements = document.querySelectorAll(".features-list-element")
const featuresBoxes = document.querySelectorAll(".features-box")

for(let i=0; i<featuresListElements.length; i++)
{
    featuresListElements[i].addEventListener('click',()=>{
        for(let j=0; j<featuresListElements.length; j++)
        {
            if(featuresListElements[j].classList.contains("active"))
            {
                featuresListElements[j].classList.remove("active")
            }

            if(featuresBoxes[j].classList.contains("active"))
            {
                featuresBoxes[j].classList.remove("active")
            }
        }

        featuresBoxes[i].classList.add("active")
        featuresListElements[i].classList.add("active")

    })   
}


// question boxes onclick

const questionBoxes = document.querySelectorAll('.question-area');
const answerBoxes = document.querySelectorAll('.answer-area');
const svgArrows = document.querySelectorAll('.arrow-icon')
const svgArrowsPath = document.querySelectorAll('.arrow-icon-path')
let boxStatus = []

for (let k=0; k<questionBoxes.length; k++)
{
    boxStatus[k] = false;

    questionBoxes[k].addEventListener('click',()=>{
        if (answerBoxes[k].classList.contains('active'))
        {
            answerBoxes[k].classList.remove('active')
            svgArrows[k].style.rotate = "0deg"
            svgArrowsPath[k].style.stroke = "#5267DF"
        }
        else
        {
            answerBoxes[k].classList.add('active')
            svgArrows[k].style.rotate = "180deg"
            svgArrowsPath[k].style.stroke = "var(--SoftRed)"
        }
    })
}

// email input validation

const errorBackground = document.querySelector("#error-section")
const errorIcon = document.querySelector("#error-icon")

const contactButton = document.querySelector("#contact-us-button")

const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
let validation = true

contactButton.addEventListener('click',()=>{

    let emailInputValue = document.querySelector("#email-field").value
    
    if(emailInputValue.match(emailRegex))
    {
        console.log("validation correct")
        errorIcon.style.display = "none"
        errorBackground.style.display = "none"
    }
    else
    {
        validation = false
        errorIcon.style.display = "block"
        errorBackground.style.display = "flex"
    }
})