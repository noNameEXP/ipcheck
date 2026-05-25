// Fetch info for the visitor's own IP
async function fetchSelfIP() {
  const url = "http://ip-api.com/json/?fields=66846719"; 
  // 66846719 = all fields including proxy, isp, as, city, etc.

  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("self").textContent =
    JSON.stringify(data, null, 4);
}

// Fetch info for a manually entered IP
async function lookupOtherIP() {
  const ip = document.getElementById("ipInput").value.trim();
  if (!ip) return;

  const url = `http://ip-api.com/json/${ip}?fields=66846719`;

  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("other").textContent =
    JSON.stringify(data, null, 4);
}

fetchSelfIP();
