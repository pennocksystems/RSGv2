// assets/js/agent.js
document.addEventListener("DOMContentLoaded", () => {
  const messages = document.getElementById("agent-messages");
  const input = document.getElementById("agent-input");
  const sendBtn = document.querySelector("#agent-panel button.bg-sky-500");

  if (!messages || !input || !sendBtn) {
    console.warn("[agent.js] Missing one or more chat elements.");
    return;
  }

  // === Helper Functions ===
  function addUserBubble(text) {
    const el = document.createElement("div");
    el.className =
      "bg-sky-500/20 border border-sky-400 rounded-lg p-2 my-2 text-sm text-gray-100 max-w-[85%] ml-auto";
    el.textContent = text;
    messages.appendChild(el);
  }

  function addBotBubble(text) {
    const el = document.createElement("div");
    el.className =
      "bg-slate-800/70 border border-slate-700 rounded-lg p-2 my-2 text-sm text-gray-300 max-w-[85%]";
    el.textContent = text;
    messages.appendChild(el);
  }

  function addBotTyping() {
    const el = document.createElement("div");
    el.className =
      "bot-typing bg-slate-800/70 border border-slate-700 rounded-lg p-2 my-2 text-sm text-gray-300 max-w-[85%]";
    el.innerHTML = `<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>`;
    messages.appendChild(el);
    return el;
  }

  function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
  }

  // === Rule-based response system ===
  function respondToQuestion(question) {
    const q = question.toLowerCase();
    let response = "";

    if (q.includes("pennock")) {
      response =
        "Pennock Systems is a technology and automation firm within RSG that designs custom websites, AI-powered chat systems, and intelligent business tools. We focus on building efficient, scalable solutions that help small businesses modernize their digital presence and leverage AI for growth.";
    } else if (q.includes("campus") || q.includes("insight")) {
      response =
        "Campus Insight partners with colleges and universities to enhance operational efficiency, student engagement, and institutional success. We work with leadership teams to streamline processes, analyze data, and create stronger student-centered strategies for the future of higher education.";
    } else if (q.includes("5-star") || q.includes("five star")) {
      response =
        "5-Star Media is RSG’s creative and branding studio. We specialize in photo editing, custom graphics, and brand storytelling for universities, athletic programs, and professional athletes—helping every client look their absolute best across digital and print platforms.";
    } else {
      response =
        "I’m not sure about that one yet, but I can connect you with an RSG advisor for more details.";
    }

    // Remove typing indicator and show response
    const typingBubble = document.querySelector(".bot-typing");
    if (typingBubble) typingBubble.remove();
    addBotBubble(response);
    scrollToBottom();
  }

  // === Send message ===
  function handleSend() {
    const text = input.value.trim();
    if (!text) return;

    addUserBubble(text);
    input.value = "";
    scrollToBottom();

    const typingEl = addBotTyping();

    // Simulate response delay
    setTimeout(() => {
      respondToQuestion(text);
    }, 1200);
  }

  // === Events ===
  sendBtn.addEventListener("click", handleSend);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  // === Suggested question click (no input fill) ===
  messages.addEventListener("click", (e) => {
    const pill = e.target.closest(".suggestion");
    if (!pill) return;

    const question = pill.textContent.trim();
    addUserBubble(question);
    scrollToBottom();

    const typingEl = addBotTyping();
    scrollToBottom();

    setTimeout(() => {
      respondToQuestion(question);
    }, 1200);
  });
});
