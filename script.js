alert("This is working");

function loadRepo(url, callback) {
 const gitHubRequest = new XMLHttpRequest();
    // Finish your request here
    // Don't forget the callback()
}

gitHubRequest("https://api.github.com/users/Ikenna-Oguadimma/repos");


function loadRepoCallback(gitHubRequest) {
//   Callback function needs to parse the JSON
//   Using the DOM get the element ID from your <ul> in your HTML
//   You will need a forEach to loop through the parsed object
//   Using the DOM create new list elements
//   Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
//   Append the new list items to the element you retrieved from HTML
}

$.ajax({
url: "https://api.github.com/users/Ikenna-Oguadimma/repos",
 jsonp: true,
  method: "get",
  datatype: "json",
  success: function() {
    console.log()
}

$(document).ready(function(){
    $('#searchUsers').on('keyup', function(e){
        let userName = e.target.value;

        // request to git hub
        $.ajax({
            url: 'https://api.github.com/users/' + userName,
            data:{
                client_id: '1b5c24c3915d16f3ecb2',
                client_secret: 'c63e039522d8ccae274f72dffbc8fbf2d5fc1c1e'
            }
        }).done(function(user){
            $.ajax({
                url: 'https://api.github.com/users/' + userName+'/repos',
                  data: {
                      client_id: '1b5c24c3915d16f3ecb2',
                      client_secret: 'c63e039522d8ccae274f72dffbc8fbf2d5fc1c1e',
                      sort: 'created: asc',
                      per_page: 5
                  }
            }).done(function(repos){
               $.each(repos, function(index, repo){
                   $('#repos').append(`
                    <ul>
                        <li><strong>${repo.name}</strong></li>
                    </ul>
                       
                   `);
               });
            });
        
            $('#profile').html(`
               ${user.name}
               <img src="${user.avatar_url}"/>
               <a target="_blank" class="btn btn-primary btn block" href="${user.html_url}">View Profile</a>
               ${user.public_repos}
               
               <br>
               <br>
               <br>
               <h3>Current Repos</h3>
               <br>
               <br>
               <div id="repos"></div>

            `)
        });
    });
});

$(document).ready(function(){
    $(".icon").hover(function(){
        $(this).css("font-size", "xx-large");
    }, function(){
        $(this).css("font-size", "medium");
    });
    });


'https://api.github.com/users/' + userName


function loadRepo() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            
            results = JSON.parse(this.responseText);
            for(var i = 0; i < results.length; i++){
                console.log(results[i].name);

	var ul = document.getElementById(“repoList”);
	var li = document.createElement(“li”);
	li.appendChild(document.createTextNode(results[i].name));
	ul.appendChild(li);
            }
 }
};
    xhttp.open("GET","https://api.github.com/users/Ikenna-Oguadimma/repos", true)
    xhttp.send();
console.log(xhttp);
   
    }
	
	
	function loadRepo(url, callback) {
 let output = "";
 const xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function(){
   if (this.readyState == 4 && this.status ==200){
     JSON.parse(this.responseText).map( repo => output += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);
     document.getElementById("newsletter").innerHTML = output;
	 
}
};
 xhttp.open("GET", "https://api.github.com/users/Ikenna-Oguadimma/repos");
 xhttp.send();
}

