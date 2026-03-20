const inviteCode = 'euPJ2KZhan'; 

fetch(`https://discord.com/api/v9/invites/${inviteCode}?with_counts=true`)
  .then(response => response.json())
  .then(data => {
    const online = data.approximate_presence_count;
    const total = data.approximate_member_count;

    document.getElementById('online-count').innerText = online.toLocaleString();
    document.getElementById('total-count').innerText = `• ${total.toLocaleString()} Members`;
  })
  .catch(err => console.error("Discord API Error:", err));