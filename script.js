

// span architecture
function spanArch(){
    // <div class="parent">
    //     <div class="child">
    //         The text ---
    //     </div>
    // </div>
    document.querySelectorAll(".spanArch")
        .forEach(function (elem) {
            // create two span
            var parent = document.createElement("span");
            var child = document.createElement("span");

            // set classes of both the spans
            parent.classList.add("parent");
            child.classList.add("child");


            // span parent get child span and child span get the elem (i.e what ever the text is there)
            child.innerHTML = elem.innerHTML; // elem in child span
            parent.appendChild(child); // child span in parent span.


            // elem replace its value with parent span
            elem.innerHTML = ""; // select the text and clear it
            elem.appendChild(parent); // append the whole upper code.
        })
}
spanArch();


// page0

function page0(){
    var tl = gsap.timeline();

    const splitTypes = document.querySelectorAll('.foot')

        splitTypes.forEach((char,i) => {
            const text = new SplitType(char,{types:'chars'})  // select the characters of thr word.

            tl.from(text.chars, {
                y: "100%",
                stagger: 0.1,
                duration: 1,
                ease: Circ.easeInOut
            })
        })

    tl.to("#loader .parent .child", {
        y: "-100%",
        duration: 1,
        delay: 1,
        ease: Circ.easeInOut
    })

    tl.to("#loader", {
        height: 0,
        duration: 1,
        delay:-0.5,
        ease: Circ.easeInOut
    })

    gsap.to(".mid img", {
        y: "-100%",
        duration: 1,
        delay: 3.4,
        ease: Circ.easeInOut
    })


    //this will make the loading page vanish after 10.3 sec
    window.onload = function() {
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 5000); // Adjust time as needed
    };

}

page0();

function page3(){
    document.querySelectorAll('.faq-question').forEach((item) => {
        item.addEventListener('click', () => {
            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach((answer) => {
                answer.style.display = 'none';
            });
            
            // Reset all plus icons to '+'
            document.querySelectorAll('.plus-icon').forEach((icon) => {
                icon.textContent = '+';
            });
    
            // Open the clicked answer if it was closed
            const answer = item.nextElementSibling;
            const plusIcon = item.querySelector('.plus-icon');
    
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                plusIcon.textContent = '−';
            }
        });
    });
    
    
}

page3();