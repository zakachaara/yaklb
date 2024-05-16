// let value = document.getElementById("msg").values
function envoyer(str) {
    let parent = document.getElementsByClassName("messages")[0]
    const para = document.createElement("div");
    para.id = "msg-sent"
    var currentdate = new Date();
    var min = currentdate.getMinutes()
    if (min.toString().length == 1) {
        min = "0"+ currentdate.getMinutes()
    }
    var datetime = currentdate.getHours() + ":" 
    + min;
    const hour = document.createElement("p")
    hour.id = "hour"
    const node_hour = document.createTextNode(datetime);
    hour.appendChild(node_hour)
    const node = document.createTextNode(str);
    para.appendChild(node);
    para.appendChild(hour);
    parent.appendChild(para);
    var topPos = para.offsetTop;
    document.getElementsByClassName("messages")[0].scrollTop = topPos;


}
function clicker() {
    const value = document.getElementById("msg").value
    envoyer(value)
    document.getElementById("msg").value = ""
}