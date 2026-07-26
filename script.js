"use strict";

const menuButton = document.querySelector("#menu-button");
const primaryNavigation = document.querySelector("#primary-navigation");
const navigationLinks = document.querySelectorAll(".navigation-link");
const faqQuestions = document.querySelectorAll(".faq-question");
const currentYearElement = document.querySelector("#current-year");
const backToTopButton = document.querySelector("#back-to-top");

/**
 * Inserts the current year into the footer.
 */
function displayCurrentYear() {
    if (!currentYearElement) {
        return;
    }

    currentYearElement.textContent = new Date().getFullYear();
}

/**
 * Opens the mobile navigation menu.
 */
function openMobileMenu() {
    if (!menuButton || !primaryNavigation) {
        return;
    }

    menuButton.classList.add("open");
    primaryNavigation.classList.add("open");
    document.body.classList.add("menu-open");

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation menu");
}

/**
 * Closes the mobile navigation menu.
 */
function closeMobileMenu() {
    if (!menuButton || !primaryNavigation) {
        return;
    }

    menuButton.classList.remove("open");
    primaryNavigation.classList.remove("open");
    document.body.classList.remove("menu-open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
}

/**
 * Opens or closes the mobile navigation menu.
 */
function toggleMobileMenu() {
    if (!menuButton) {
        return;
    }

    const menuIsOpen =
        menuButton.getAttribute("aria-expanded") === "true";

    if (menuIsOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

/**
 * Sets up the mobile navigation interactions.
 */
function setupMobileNavigation() {
    if (!menuButton || !primaryNavigation) {
        return;
    }

    menuButton.addEventListener("click", toggleMobileMenu);

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMobileMenu();
            menuButton.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1000) {
            closeMobileMenu();
        }
    });
}

/**
 * Opens or closes an FAQ item.
 *
 * @param {HTMLButtonElement} selectedQuestion
 */
function toggleFaqItem(selectedQuestion) {
    const answer = selectedQuestion
        .closest(".faq-item")
        ?.querySelector(".faq-answer");

    if (!answer) {
        return;
    }

    const isExpanded =
        selectedQuestion.getAttribute("aria-expanded") === "true";

    faqQuestions.forEach((question) => {
        const questionAnswer = question
            .closest(".faq-item")
            ?.querySelector(".faq-answer");

        question.setAttribute("aria-expanded", "false");

        if (questionAnswer) {
            questionAnswer.hidden = true;
        }
    });

    if (!isExpanded) {
        selectedQuestion.setAttribute("aria-expanded", "true");
        answer.hidden = false;
    }
}

/**
 * Sets up FAQ accordion interactions.
 */
function setupFaqAccordion() {
    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            toggleFaqItem(question);
        });
    });
}

/**
 * Displays or hides the back-to-top button.
 */
function updateBackToTopButton() {
    if (!backToTopButton) {
        return;
    }

    backToTopButton.hidden = window.scrollY < 600;
}

/**
 * Scrolls the page back to the top.
 */
function scrollToTop() {
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
    });
}

/**
 * Sets up the back-to-top button.
 */
function setupBackToTopButton() {
    if (!backToTopButton) {
        return;
    }

    window.addEventListener("scroll", updateBackToTopButton);

    backToTopButton.addEventListener("click", scrollToTop);

    updateBackToTopButton();
}

/**
 * Adds smooth scrolling to valid same-page anchor links.
 */
function setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (!targetElement) {
                return;
            }

            event.preventDefault();

            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            targetElement.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
                block: "start"
            });

            history.pushState(null, "", targetId);
        });
    });
}

/**
 * Starts all home-page functionality.
 */
function initializeWebsite() {
    displayCurrentYear();
    setupMobileNavigation();
    setupFaqAccordion();
    setupBackToTopButton();
    setupSmoothScrolling();
}

document.addEventListener("DOMContentLoaded", initializeWebsite);
"use strict";

const menuButton = document.querySelector("#menu-button");
const primaryNavigation = document.querySelector("#primary-navigation");
const navigationLinks = document.querySelectorAll(".navigation-link");
const faqQuestions = document.querySelectorAll(".faq-question");
const currentYearElement = document.querySelector("#current-year");
const backToTopButton = document.querySelector("#back-to-top");

/**
 * Inserts the current year into the footer.
 */
function displayCurrentYear() {
    if (!currentYearElement) {
        return;
    }

    currentYearElement.textContent = new Date().getFullYear();
}

/**
 * Opens the mobile navigation menu.
 */
function openMobileMenu() {
    if (!menuButton || !primaryNavigation) {
        return;
    }

    menuButton.classList.add("open");
    primaryNavigation.classList.add("open");
    document.body.classList.add("menu-open");

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation menu");
}

/**
 * Closes the mobile navigation menu.
 */
function closeMobileMenu() {
    if (!menuButton || !primaryNavigation) {
        return;
    }

    menuButton.classList.remove("open");
    primaryNavigation.classList.remove("open");
    document.body.classList.remove("menu-open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
}

/**
 * Opens or closes the mobile navigation menu.
 */
function toggleMobileMenu() {
    if (!menuButton) {
        return;
    }

    const menuIsOpen =
        menuButton.getAttribute("aria-expanded") === "true";

    if (menuIsOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

/**
 * Sets up the mobile navigation interactions.
 */
function setupMobileNavigation() {
    if (!menuButton || !primaryNavigation) {
        return;
    }

    menuButton.addEventListener("click", toggleMobileMenu);

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMobileMenu();
            menuButton.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1000) {
            closeMobileMenu();
        }
    });
}

/**
 * Opens or closes an FAQ item.
 *
 * @param {HTMLButtonElement} selectedQuestion
 */
function toggleFaqItem(selectedQuestion) {
    const answer = selectedQuestion
        .closest(".faq-item")
        ?.querySelector(".faq-answer");

    if (!answer) {
        return;
    }

    const isExpanded =
        selectedQuestion.getAttribute("aria-expanded") === "true";

    faqQuestions.forEach((question) => {
        const questionAnswer = question
            .closest(".faq-item")
            ?.querySelector(".faq-answer");

        question.setAttribute("aria-expanded", "false");

        if (questionAnswer) {
            questionAnswer.hidden = true;
        }
    });

    if (!isExpanded) {
        selectedQuestion.setAttribute("aria-expanded", "true");
        answer.hidden = false;
    }
}

/**
 * Sets up FAQ accordion interactions.
 */
function setupFaqAccordion() {
    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            toggleFaqItem(question);
        });
    });
}

/**
 * Displays or hides the back-to-top button.
 */
function updateBackToTopButton() {
    if (!backToTopButton) {
        return;
    }

    backToTopButton.hidden = window.scrollY < 600;
}

/**
 * Scrolls the page back to the top.
 */
function scrollToTop() {
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
    });
}

/**
 * Sets up the back-to-top button.
 */
function setupBackToTopButton() {
    if (!backToTopButton) {
        return;
    }

    window.addEventListener("scroll", updateBackToTopButton);

    backToTopButton.addEventListener("click", scrollToTop);

    updateBackToTopButton();
}

/**
 * Adds smooth scrolling to valid same-page anchor links.
 */
function setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (!targetElement) {
                return;
            }

            event.preventDefault();

            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            targetElement.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
                block: "start"
            });

            history.pushState(null, "", targetId);
        });
    });
}

/**
 * Starts all home-page functionality.
 */
function initializeWebsite() {
    displayCurrentYear();
    setupMobileNavigation();
    setupFaqAccordion();
    setupBackToTopButton();
    setupSmoothScrolling();
}

document.addEventListener("DOMContentLoaded", initializeWebsite);