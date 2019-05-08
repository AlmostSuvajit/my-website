var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.almostsuvajit.xyz/clashperks", true);
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("commands_used").innerHTML = myObj.commands_used;
        document.getElementById("messages_seen").innerHTML = myObj.messages_seen;
        document.getElementById("clans_in_db").innerHTML = myObj.clans_in_db;
        document.getElementById("memory_usage").innerHTML = myObj.memory_usage;
        document.getElementById("free_memory").innerHTML = myObj.free_memory;
        document.getElementById("channels").innerHTML = myObj.channels;
        document.getElementById("guilds").innerHTML = myObj.guilds;
        document.getElementById("users").innerHTML = myObj.users;
        document.getElementById("uptime").innerHTML = myObj.uptime;
    }
};
xmlhttp.send();