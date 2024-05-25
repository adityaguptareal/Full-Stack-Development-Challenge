   
    let generate=async(item)=>{
        await random_dealy();
        let div=document.createElement("div")
        div.innerHTML=item
        div.classList.add("message"); 
        let adding=document.querySelector(".terminal-content")
        adding.append(div)
    }
    
    let random_dealy=()=>{
        return new Promise((resolve, reject) => {
            let timeout=Math.random()*(8-1)+1;
            setTimeout(() => {
                resolve()
            }, timeout*1000);
        })
    }
    
    async function main() {
        
        setInterval(() => {
            const messages = document.querySelectorAll(".terminal-content .message");
            for (const message of messages) {
                if (message.innerHTML.endsWith("...")){
                    message.innerHTML=message.innerHTML.slice(0,message.innerHTML.length-3)
                }
                else{ 
                    message.innerHTML=message.innerHTML+"."
                }
            //   blinkElement(message); // Call blink function for each message
            }
          }, 100);
    
        //   function blinkElement(element) {
        //     let isVisible = true;
        //     setInterval(() => {
        //       isVisible = !isVisible;
        //       element.style.visibility = isVisible ? "visible" : "hidden";
        //     }, 500); // Adjust blinking speed (500ms in this example)
        //   }
          
    
        // setInterval(() => {
        //     let last_element=document.body.getElementsByClassName("terminal-content")[0]
        //     last_element=last_element[last_element.length-1]
        //     if (last_element.innerHTML.endsWith("...")){
        //         last_element.innerHTML=last_element.innerHTML.slice(0,last_element.innerHTML.length-3)
        //     }
        //     else{ 
        //         last_element.innerHTML=last_element.innerHTML+"."
        //     }
        //   }, 100);
        
        const message=["Initializing hacking",
        "Reading your files",
        "Password Files Detected",
        "Sending all passwords and presonal files to serve",
        "Cleanning up"]
        
        for (const item of message) {
            await generate(item)
            
        }
    
        await random_dealy()
        
        
        
    }
    main()