/*  Author: Olivia Haag
 *  Date: 2/12/26
 *  Class: Rize - Software Development
 *  Purpose:Assignment: Assign. 5 - SkillSwap JavaScript
 */

/*alert("JavaScript is working!");*/

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll(".card");

    //I utilized AI to assist with the card expansion and collapse functionality when a user clicks on multiple cards.
    cards.forEach(card => {
        card.addEventListener("click", function() {
            const isExpanded = this.classList.contains("expanded");
            cards.forEach(c => c.classList.remove("expanded"));
            if (!isExpanded) {
                this.classList.add("expanded");
            }
        });
    });
});