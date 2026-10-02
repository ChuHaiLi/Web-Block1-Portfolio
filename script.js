"use strict";

// ===== MEMBER DATA =====
// Chỉ cần sửa dữ liệu trong mảng này để thay thông tin các thành viên.
const members = [
  {
    name: "Lưu Chí Hải",
    initials: "LCH",
    avatar: "images/roblox1.jpg",
    avatarClass: "avatar-red",
    role: "Frontend Developer",
    studentId: "Not public",
    description: "Xây dựng giao diện, triển khai các thành phần tương tác và hỗ trợ hoàn thiện nội dung website.",
    introduction: "Phụ trách phát triển phần giao diện và các tương tác chính để website rõ ràng, responsive và dễ sử dụng.",
    skills: ["HTML", "CSS", "JavaScript", "Python", "C++"],
    responsibilities: ["Xây dựng giao diện", "Triển khai các thành phần tương tác", "Hỗ trợ hoàn thiện nội dung website"],
    projects: ["Team Portfolio Website"],
    email: "Not public",
    github: "Not public",
    social: "Not public"
  },
  {
    name: "Trần Minh Triết",
    initials: "TMT",
    avatar: "images/roblox2.jpg",
    avatarClass: "avatar-yellow",
    role: "UI/UX & Content",
    studentId: "Not public",
    description: "Hỗ trợ thiết kế giao diện, bố cục nội dung và kiểm tra trải nghiệm người dùng.",
    introduction: "Tập trung vào bố cục, tính trực quan của giao diện và cách trình bày nội dung để website dễ theo dõi.",
    skills: ["HTML", "CSS", "UI Design", "Teamwork"],
    responsibilities: ["Hỗ trợ thiết kế giao diện", "Xây dựng bố cục nội dung", "Kiểm tra trải nghiệm người dùng"],
    projects: ["Team Portfolio Website"],
    email: "Not public",
    github: "Not public",
    social: "Not public"
  },
  {
    name: "Phan Quang Tiến",
    initials: "PQT",
    avatar: "images/roblox3.jpg",
    avatarClass: "avatar-blue",
    role: "Developer & Tester",
    studentId: "Not public",
    description: "Hỗ trợ phát triển website, kiểm thử chức năng và kiểm tra giao diện trên nhiều kích thước màn hình.",
    introduction: "Hỗ trợ phát triển các phần của website và kiểm tra để các chức năng, bố cục hiển thị ổn định trên nhiều màn hình.",
    skills: ["HTML", "CSS", "JavaScript", "Testing"],
    responsibilities: ["Hỗ trợ phát triển website", "Kiểm thử chức năng", "Kiểm tra giao diện trên nhiều kích thước màn hình"],
    projects: ["Team Portfolio Website"],
    email: "Not public",
    github: "Not public",
    social: "Not public"
  }
];

const membersGrid = document.getElementById("members-grid");
const profileModal = document.getElementById("profile-modal");
const profileContent = document.getElementById("profile-content");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");
const scrollProgressBar = document.getElementById("scroll-progress-bar");
let lastFocusedElement = null;

// ===== RENDER MEMBERS =====
function renderMembers() {
  membersGrid.innerHTML = members.map((member, index) => `
    <article class="member-card reveal">
      <div class="member-avatar ${member.avatarClass}">
        <img src="${member.avatar}" alt="Ảnh đại diện của ${member.name}" />
      </div>
      <p class="member-role">${member.role}</p>
      <h3>${member.name}</h3>
      <p class="member-description">${member.description}</p>
      <ul class="skill-list" aria-label="Kỹ năng của ${member.name}">
        ${member.skills.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
      <button class="profile-button" type="button" data-member-index="${index}">
        View Profile <span aria-hidden="true">→</span>
      </button>
    </article>
  `).join("");
}

// Render a link only when contact information is public.
function renderProfileContact(label, value, type) {
  if (value === "Not public") {
    return `<span>${label}: Not public</span>`;
  }

  if (type === "email") {
    return `<span>${label}: <a href="mailto:${value}">${value}</a></span>`;
  }

  const url = value.startsWith("http") ? value : `https://${value}`;
  return `<span>${label}: <a href="${url}" target="_blank" rel="noreferrer">${value} ↗</a></span>`;
}

// ===== OPEN MEMBER PROFILE =====
function openMemberProfile(memberIndex) {
  const member = members[memberIndex];
  if (!member) return;

  lastFocusedElement = document.activeElement;
  profileContent.innerHTML = `
    <div class="profile-content">
      <header class="profile-hero">
        <div class="profile-avatar ${member.avatarClass}">
          <img src="${member.avatar}" alt="Ảnh đại diện của ${member.name}" />
        </div>
        <div>
          <p class="profile-role">${member.role}</p>
          <h2 id="profile-name">${member.name}</h2>
          <p class="student-id">MSSV: ${member.studentId}</p>
        </div>
      </header>

      <div class="profile-body">
        <section class="profile-section profile-wide">
          <h3>Giới thiệu ngắn</h3>
          <p>${member.introduction}</p>
        </section>
        <section class="profile-section">
          <h3>Skills</h3>
          <div class="profile-skills">
            ${member.skills.map((skill) => `<span>${skill}</span>`).join("")}
          </div>
        </section>
        <section class="profile-section">
          <h3>Trách nhiệm trong nhóm</h3>
          <ul>${member.responsibilities.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="profile-section">
          <h3>Dự án tham gia</h3>
          <ul>${member.projects.map((project) => `<li>${project}</li>`).join("")}</ul>
        </section>
        <section class="profile-section">
          <h3>Liên hệ</h3>
          <div class="profile-contact">
            ${renderProfileContact("Email", member.email, "email")}
            ${renderProfileContact("GitHub", member.github, "link")}
            ${renderProfileContact("Social", member.social, "link")}
          </div>
        </section>
      </div>

      <button class="button back-button" type="button" data-close-modal>← Back to Team</button>
    </div>
  `;

  profileModal.classList.add("is-open");
  profileModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".modal-close").focus();
}

// ===== CLOSE MEMBER PROFILE =====
function closeMemberProfile() {
  if (!profileModal.classList.contains("is-open")) return;

  profileModal.classList.remove("is-open");
  profileModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

// Member-card click handler
membersGrid.addEventListener("click", (event) => {
  const profileButton = event.target.closest("[data-member-index]");
  if (!profileButton) return;
  openMemberProfile(Number(profileButton.dataset.memberIndex));
});

// Close profile by X, Back to Team, or clicking the backdrop
profileModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) closeMemberProfile();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMemberProfile();
});

// ===== MOBILE NAVIGATION =====
function closeMobileMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Mở menu");
  navLinks.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Mở menu" : "Đóng menu");
  navLinks.classList.toggle("is-open", !isOpen);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeMobileMenu();
});

// ===== SCROLL PROGRESS =====
function updateScrollProgress() {
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pageHeight > 0 ? Math.min(window.scrollY / pageHeight, 1) : 0;
  scrollProgressBar.style.transform = `scaleX(${progress})`;
}

if (scrollProgressBar && typeof window.addEventListener === "function") {
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();
}

// ===== SIMPLE SECTION REVEAL =====
function setupRevealAnimation() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
}

renderMembers();
setupRevealAnimation();
document.getElementById("current-year").textContent = new Date().getFullYear();
