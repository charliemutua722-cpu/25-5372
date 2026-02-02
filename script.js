const input = document.getElementById('command-input');
const output = document.getElementById('output');

const commands = {
    help: "Available commands: about, projects, contact, clear",
    about: "Cybersecurity enthusiast and developer specialized in penetration testing and cloud infrastructure.",
    projects: "1. Cloud Hosting Platform<br>2. Crypto Mining App<br>3. Automated Trading Bot",
    contact: "Email: charliemutua722@gmail.com | GitHub:  https://charliemutua722-cpu.github.io/25-5372/",
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const fullCommand = input.value.toLowerCase().trim();
        
        // Create a new line showing what was typed
        const line = document.createElement('p');
        line.innerHTML = `<span class="prompt">user@portfolio:~$</span> ${fullCommand}`;
        output.appendChild(line);

        // Process the response
        const response = document.createElement('p');
        if (fullCommand === 'clear') {
            output.innerHTML = '';
        } else if (commands[fullCommand]) {
            response.innerHTML = commands[fullCommand];
            output.appendChild(response);
        } else {
            response.innerHTML = `Command not found: ${fullCommand}. Type 'help' for options.`;
            output.appendChild(response);
        }

        input.value = ''; // Clear input
        document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
    }
});