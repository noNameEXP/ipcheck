const API_KEY = "YOUR_API_KEY_HERE";

// Fetch info for the visitor's own IP
async function fetchSelfIP() {
  const url = `https://vpnapi.io/api/?key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById("self").textContent =
    JSON.stringify(data, null, 4);
}

// Fetch info for a manually entered IP
async function lookupOtherIP() {
  const ip = document.getElementById("ipInput").value.trim();
  if (!ip) return;

  const url = `https://vpnapi.io/api/${ip}?key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("other").textContent =
    JSON.stringify(data, null, 4);
}

fetchSelfIP();
