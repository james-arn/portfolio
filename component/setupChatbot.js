import { 
    FLOWISE_CHATBOT_ELEMENT, FLOWISE_CHAT_CONTAINER_CLASS, FLOWISE_OUTER_BUTTON_CLASS 
} from "../utils/consts.js";

export function setUpChatbot(chatflowid, apiHost, chatbotTheme) {
    document.documentElement.classList.add('js-enabled');

    import("https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js").then((module) => {
        const Chatbot = module.default;
        Chatbot.init({
            chatflowid: chatflowid,
            apiHost: apiHost,
            theme: chatbotTheme
        });

        function applyCustomStyles() {
            const flowiseChatbot = document.querySelector(FLOWISE_CHATBOT_ELEMENT);
            if (flowiseChatbot && flowiseChatbot.shadowRoot) {
                const botElement = flowiseChatbot.shadowRoot.querySelector(FLOWISE_CHAT_CONTAINER_CLASS);
                if (botElement) {
                    botElement.style.right = '0';
                }
                const buttonElement = flowiseChatbot.shadowRoot.querySelector(FLOWISE_OUTER_BUTTON_CLASS);
                if (buttonElement) {
                    buttonElement.style.boxShadow = 'none';
                    buttonElement.style.animation = 'none'
                }
                const imageElement = flowiseChatbot.shadowRoot.querySelector('img[alt="Bubble button icon"]');
                if (imageElement) {
                    imageElement.style.width = '100%';
                    imageElement.style.height = '100%';
                }
            }
        }
        

        function openChatbot() {
            const chatbotButton = document.querySelector(FLOWISE_CHATBOT_ELEMENT);
            if (chatbotButton && chatbotButton.shadowRoot) {
                const button = chatbotButton.shadowRoot.querySelector("button");
                if (button) {
                    button.click();
                }
            }
        }

        // Attach click event to the chatbot prompt
        const chatPrompt = document.querySelector(".chatbot_helperTextbox_container");
        if (chatPrompt) {
            chatPrompt.addEventListener("click", openChatbot);
        }

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.matches(FLOWISE_CHATBOT_ELEMENT)) {
                        applyCustomStyles();
                        if (node.shadowRoot) {
                            const shadowObserver = new MutationObserver((shadowMutations) => {
                                shadowMutations.forEach((shadowMutation) => {
                                    shadowMutation.addedNodes.forEach(shadowNode => {
                                        if (shadowNode.nodeType === 1 && shadowNode.matches(FLOWISE_CHAT_CONTAINER_CLASS)) {
                                            applyCustomStyles();
                                        }
                                    });
                                });
                            });
                            shadowObserver.observe(node.shadowRoot, { childList: true, subtree: true });
                        }
                    }
                });
            });
        });

        // Start observing the document body
        observer.observe(document.body, { childList: true, subtree: true });

        // Periodic check to ensure the bot element is styled
        const intervalId = setInterval(() => {
            applyCustomStyles();
            const flowiseChatbot = document.querySelector('flowise-chatbot');
            if (flowiseChatbot && flowiseChatbot.shadowRoot) {
                const botElement = flowiseChatbot.shadowRoot.querySelector('div[part="bot"]');
                if (botElement) {
                    applyCustomStyles();
                    clearInterval(intervalId); // Stop checking once the element is found and styled
                }
            }
        }, 1000); // Check every second

        // Apply styles initially if the bot is already injected
        applyCustomStyles();
    }).catch((error) => {
        console.error("Failed to load the chatbot module:", error);
    });
}
