(() => {
    const messageList = [
    ];

    function renderMessages(messages) {
        const messageListElement = messages.map((messageItem) => {
            if(messageItem.role === "assistant") {
                return `
                    <div class="flex items-start gap-3">
                        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
                        AI
                        </div>
                        <div class="max-w-[80%] rounded-2xl rounded-tl-md bg-neutral-100 px-4 py-3 text-sm leading-6 text-neutral-700">
                        ${messageItem.message}
                        </div>
                    </div>
                `;
            }
            else if(messageItem.role === "loading") {
                return `
                    <div class="flex items-start gap-3">
                        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
                        AI
                        </div>
                        <div class="flex items-center gap-1 rounded-2xl rounded-tl-md bg-neutral-100 px-4 py-4 text-neutral-500">
                            <span class="h-2 w-2 animate-pulse rounded-full bg-neutral-400"></span>
                            <span class="h-2 w-2 animate-pulse rounded-full bg-neutral-400 [animation-delay:150ms]"></span>
                            <span class="h-2 w-2 animate-pulse rounded-full bg-neutral-400 [animation-delay:300ms]"></span>
                        </div>
                    </div>
                `;
            }
            else if(messageItem.role === "user") {
                return `
                    <div class="flex justify-end">
                        <div class="max-w-[80%] rounded-2xl rounded-br-md bg-neutral-900 px-4 py-3 text-sm leading-6 text-white">
                        ${messageItem.message}
                        </div>
                    </div>
                `;
            }
        });

        const messageContainer = document.querySelector("#chat_message_container");
        messageContainer.innerHTML = messageListElement.join("");
        messageContainer.scrollTop = messageContainer.scrollHeight;
        
    }

    renderMessages(messageList);

    document.querySelector("button[type='submit']").addEventListener("click", async(event) => {
        event.preventDefault();
        const message = document.querySelector("input[type='text']").value;
        messageList.push({
            role: "user",
            message: message
        });

        renderMessages(messageList);
        document.querySelector("input[type='text']").value = "";

        await askAI(message);
    });

    async function askAI(message) {
         messageList.push({
            role: "loading"
        });
        renderMessages(messageList);

         const response = await fetch("https://api.deepseek.com/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + "sk-5ca33d7809c74f639e49cfe79a0ed2b4"
            },
            body: JSON.stringify({
                "model": "deepseek-chat",
                 "messages": [
                        {"role": "system", "content": "You are a funny assistant who loves to make jokes."},
                        {"role": "user", "content": message}
                ]
            })
        });
        const data = await response.json();
        messageList.pop();
        const assistantMessage = data.choices[0].message.content;
        messageList.push({
            role: "assistant",
            message: assistantMessage
        });
        renderMessages(messageList);
    }


})()
