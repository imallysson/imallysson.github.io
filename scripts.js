function copyEmailToClipboard() {
  navigator.clipboard.writeText("allysson.lp@gmail.com").then(() => {
    showToast("Email copied to clipboard!");
  });
}

function downloadResume() {
  window.open('./Profile.pdf');

  showToast('Opening resume...');
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.classList.add("show");
  toast.innerHTML = message;

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);

  toast.offsetHeight;
}

const email = document.getElementById("email");
const resume = document.getElementById("resume");

email.addEventListener('click', copyEmailToClipboard);
resume.addEventListener('click', downloadResume)
