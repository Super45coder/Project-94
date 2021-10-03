// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOfRF1XJ2zFdwszrXrUlkcGI38JvcZv2M",
    authDomain: "lets-chat-70eba.firebaseapp.com",
    projectId: "lets-chat-70eba",
    storageBucket: "lets-chat-70eba.appspot.com",
    messagingSenderId: "824396998025",
    appId: "1:824396998025:web:3e827d1e1ef6228824ed58"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

username = localStorage.getItem("Username");
console.log("Welcome"); 

function logout(){
    localStorage.removeItem("Username");
    window.location = "index.html";
}
function welcome(){
  username = localStorage.getItem("Username");
  document.getElementById("username").innerHTML = "Welcome #" + username + "!!!";
}
function addRoom(){
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("Room_name", room_name);
  window.location = "kwitter_page.html";
}
