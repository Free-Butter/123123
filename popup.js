const div = document.querySelector("div")
        const input = document.querySelector("input")
        const button = document.querySelector('button')

        button.addEventListener("click", () => {
            div.innerHTML += `<p class="red">我: ${input.value}</p>`

            fetch("https://chatgpt-web-production-634c.up.railway.app/api/chat", {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: input.value, options: {} }),
            })
                .then(res => res.json())
                .then(data => {
                    div.innerHTML += `<p class="blue">ChatGpt: ${data.data.text}</p>`
                })

            input.value = ""
        })
