export function setUpChatbot(chatflowid, apiHost, chatbotTheme) {
    document.documentElement.classList.add('js-enabled');

    import("https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js").then((module) => {
        const Chatbot = module.default;
        Chatbot.init({
            chatflowid: chatflowid,
            apiHost: apiHost,
            theme: chatbotTheme
        });

        // Function to apply custom styles
        function applyCustomStyles() {
            const flowiseChatbot = document.querySelector('flowise-chatbot');
            if (flowiseChatbot && flowiseChatbot.shadowRoot) {
                const botElement = flowiseChatbot.shadowRoot.querySelector('div[part="bot"]');
                if (botElement) {
                    botElement.style.right = '0';
                }
            }
        }

        // Use MutationObserver to watch for the bot element
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.matches('flowise-chatbot')) {
                        applyCustomStyles();
                        if (node.shadowRoot) {
                            const shadowObserver = new MutationObserver((shadowMutations) => {
                                shadowMutations.forEach((shadowMutation) => {
                                    shadowMutation.addedNodes.forEach(shadowNode => {
                                        if (shadowNode.nodeType === 1 && shadowNode.matches('div[part="bot"]')) {
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
