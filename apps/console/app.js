const tabs = document.querySelectorAll('.settings-tabs button');
const panel = document.querySelector('#panel');
const save = document.querySelector('#save');
const toast = document.querySelector('.toast');
const tabCopy = {
  General: ['General Settings', 'Organization Name', 'NizeCorp'],
  Profile: ['Profile Settings', 'Display Name', 'Aiden Kowalski'],
  Notifications: ['Notification Settings', 'Notification Email', 'admin@nizecloud.com'],
  'API Keys': ['API Key Management', 'Active Keys', '2 active keys'],
  Security: ['Security Settings', 'Session Timeout', '30 minutes'],
  Regions: ['Region Settings', 'Default Region', 'us-east-1 · N. Virginia'],
  Limits: ['Usage Limits', 'Monthly Spend Limit', '$5,000.00']
};

tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => item.classList.remove('selected'));
  tab.classList.add('selected');
  const [heading, label, value] = tabCopy[tab.dataset.tab];
  panel.querySelector('h2').textContent = heading;
  const firstLabel = panel.querySelector('.form-row label');
  const firstInput = panel.querySelector('.form-row input');
  firstLabel.textContent = label;
  firstInput.value = value;
}));

document.querySelector('.toggle').addEventListener('click', (event) => event.currentTarget.classList.toggle('on'));
save.addEventListener('click', () => {
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
});

 document.querySelector('.refresh').addEventListener('click', (event) => {
  event.currentTarget.textContent = '✓  Refreshed';
  window.setTimeout(() => { event.currentTarget.textContent = '⟳  Refresh'; }, 1400);
});
