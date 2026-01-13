const express = require('express');
const { exec } = require('child_process'); // The dangerous function
const app = express();

fix gemini
    // VULNERABILITY: User input is directly concatenated into a shell command.
    // An attacker can use characters like ";" or "&&" to run their own commands.
    const command = `ping -c 3 ${target}`;

    console.log(`Executing: ${command}`);

    exec(command, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(`Error: ${stderr}`);
            return;
        }
        res.send(`<pre>${stdout}</pre>`);
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
