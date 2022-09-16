var operational = document.getElementById("operational");
var ongoing = document.getElementById("ongoing");

/**
 * Create new buttons for differents social media
 * @param {list} list 
 * @param {boolean} disabled 
 */
export function addButtons(list, disabled){
    for(let elem of list) {
        var newButton = document.createElement("button");
        newButton.innerText = elem[0];

        if(elem[1] != null)
            newButton.setAttribute("onclick", "window.location.href='" + elem[1] + "';" );
        else{
            newButton.setAttribute("onclick", "window.href='not_available.html';" ); // TODO : change the link
        }

        if(disabled){
            newButton.setAttribute("disabled", "");
            ongoing.appendChild(newButton);
        }else{
            operational.appendChild(newButton);
        }
    }
}