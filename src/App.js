import "./styles.css";

var password = document.getElementById("password");

function genPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}
export default function App() {
  return (
    <div className="App">
      <div className="container-context">
        <h2> OG GEN</h2>
        <input type="text" id="password" readonly></input>
        <button onClick={genPassword}> Gerar senha aleatória </button>
        <button onClick={copyPassword}> Copiar senha </button>
      </div>
    </div>
  );
}
