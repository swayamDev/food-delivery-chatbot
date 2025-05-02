// Developed by Swayam Swarup Panda for the A.R.T.I. (Annapurna’s Restaurant Talking Interface) project.
// © 2025. All rights reserved. For educational and portfolio use only.

// Menu Items Data
const menuItems = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: "₹220",
    image: "../assets/paneer-butter-masala.jpg",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    category: "Main Course",
    price: "₹250",
    image: "../assets/chicken-biriyani.jpg",
  },
  {
    id: 3,
    name: "Masala Dosa",
    category: "South Indian",
    price: "₹100",
    image: "../assets/masala-dosa.jpg",
  },
  {
    id: 4,
    name: "Rajma Chawal",
    category: "Main Course",
    price: "₹120",
    image: "../assets/rajma-chawal.jpeg",
  },
  {
    id: 5,
    name: "Aloo Paratha",
    category: "Breakfast",
    price: "₹40",
    image: "../assets/aloo-paratha.jpg",
  },
  {
    id: 6,
    name: "Veg Pulao",
    category: "Main Course",
    price: "₹130",
    image: "../assets/veg-pulao.JPG",
  },
  {
    id: 7,
    name: "Pav Bhaji",
    category: "Snacks",
    price: "₹90",
    image: "../assets/pav-bhaji.jpg",
  },
  {
    id: 8,
    name: "Chole Bhature",
    category: "North Indian",
    price: "₹110",
    image: "../assets/chole-bhature.jpg",
  },
  {
    id: 9,
    name: "Samosa",
    category: "Snacks",
    price: "₹20",
    image: "../assets/samosa.png",
  },
  {
    id: 10,
    name: "Mango Lassi",
    category: "Beverage",
    price: "₹60",
    image: "../assets/mango-lassi.jpg",
  },
  {
    id: 11,
    name: "Masala Chai",
    category: "Beverage",
    price: "₹30",
    image: "../assets/masala-chai.jpg",
  },
  {
    id: 12,
    name: "Cold Coffee",
    category: "Beverage",
    price: "₹80",
    image: "../assets/cold-coffee.jpg",
  },
];

// DOM Elements
const menuGrid = document.querySelector(".menu-grid");
const menuFilters = document.querySelectorAll(".menu-filter");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Function to display menu items
function displayMenuItems(category = "all") {
  menuGrid.innerHTML = "";

  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  filteredItems.forEach((item) => {
    const menuItemElement = document.createElement("div");
    menuItemElement.classList.add("menu-item");
    menuItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                    <div class="menu-item-info">
                        <p class="menu-item-category">${item.category}</p>
                        <h3 class="menu-item-title">${item.name}</h3>
                        <p class="menu-item-price">${item.price}</p>
                    </div>
                `;
    menuGrid.appendChild(menuItemElement);
  });
}

// Initialize menu
displayMenuItems();

// Menu Filter Functionality
menuFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    // Remove active class from all filters
    menuFilters.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked filter
    filter.classList.add("active");

    // Filter menu items
    const category = filter.getAttribute("data-filter");
    displayMenuItems(category);
  });
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Toggle between hamburger and close icon
  const icon = mobileMenuBtn.querySelector("i");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Close mobile menu when clicking a nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Offset for fixed header
        behavior: "smooth",
      });
    }
  });
});

// Add animation on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Initialize sections with a fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  setTimeout(() => {
    sections[0].style.opacity = "1";
    sections[0].style.transform = "translateY(0)";
  }, 300);
});

// Developed by Swayam Swarup Panda for the A.R.T.I. (Annapurna’s Restaurant Talking Interface) project.
// © 2025. All rights reserved. For educational and portfolio use only.
