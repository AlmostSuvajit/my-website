var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.almostsuvajit.xyz/raven/", true);
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("commands_used").innerHTML = myObj.commands_used;
        document.getElementById("messages_seen").innerHTML = myObj.messages_seen;
        document.getElementById("free_memory").innerHTML = myObj.free_memory;
        document.getElementById("memory_usage").innerHTML = myObj.memory_usage;
        document.getElementById("commands").innerHTML = myObj.commands;
        document.getElementById("channels").innerHTML = myObj.channels;
        document.getElementById("guilds").innerHTML = myObj.guilds;
        document.getElementById("users").innerHTML = myObj.users;
        document.getElementById("uptime").innerHTML = myObj.uptime;
    }
};
xmlhttp.send();