document.addEventListener("DOMContentLoaded", () => {
  const agentPanel = document.getElementById("agent-panel");
  const toggleBtn = document.getElementById("agent-toggle");
  const closeBtn = document.getElementById("agent-close");

  // Auto-open animation on page load
  setTimeout(() => {
    agentPanel.classList.remove("hidden");
    agentPanel.classList.add("open");
  }, 800);

  // Toggle button
  toggleBtn.addEventListener("click", () => {
    if (agentPanel.classList.contains("open")) {
      agentPanel.classList.add("closing");
      setTimeout(() => {
        agentPanel.classList.remove("open", "closing");
        agentPanel.classList.add("hidden");
      }, 400);
    } else {
      agentPanel.classList.remove("hidden");
      agentPanel.classList.add("open");
    }
  });

  // Close button inside panel
  closeBtn.addEventListener("click", () => {
    agentPanel.classList.add("closing");
    setTimeout(() => {
      agentPanel.classList.remove("open", "closing");
      agentPanel.classList.add("hidden");
    }, 400);
  });
});
