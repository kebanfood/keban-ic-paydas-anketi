const fs = require('fs');
let t = fs.readFileSync('index.html', 'utf8');

// Replace the options completely
const oldOptionsPattern = /<select id="user-dept-select"[\s\S]*?<\/select>/;

const newOptions = `<select id="user-dept-select" class="select-input" onchange="onUserDeptChange()">
              <option value="" disabled selected>Kendi Biriminizi Seçin...</option>
              <option value="İK Direktörlüğü">İK Direktörlüğü</option>
              <option value="Kalite ve Süreç Yönetimi Direktörlüğü">Kalite ve Süreç Yönetimi</option>
              <option value="Mali İşler Direktörlüğü">Mali İşler Direktörlüğü</option>
              <option value="Marka Direktörlüğü">Marka Direktörlüğü</option>
              <option value="Mimari Operasyon Müdürlüğü">Mimari Operasyon Müdürlüğü</option>
              <option value="Tedarik Zinciri Direktörlüğü">Tedarik Zinciri Direktörlüğü</option>
              <option value="Üretim ve Tesis Yönetimi Direktörlüğü">Üretim ve Tesis Yönetimi</option>
              <option value="Yatırımcı İlişkileri Direktörlüğü">Yatırımcı İlişkileri</option>
            </select>`;

t = t.replace(oldOptionsPattern, newOptions);

// Also fix the slugMap and the invalid link option to make sure no corrupted characters exist there
t = t.replace(/<option value="" disabled selected>.*?<\/option>/, '<option value="" disabled selected>Geçersiz Bağlantı (Erişim Reddedildi)</option>');

fs.writeFileSync('index.html', t);

let t2 = fs.readFileSync('netlify-deploy/index.html', 'utf8');
t2 = t2.replace(oldOptionsPattern, newOptions);
t2 = t2.replace(/<option value="" disabled selected>.*?<\/option>/, '<option value="" disabled selected>Geçersiz Bağlantı (Erişim Reddedildi)</option>');
fs.writeFileSync('netlify-deploy/index.html', t2);

console.log("Fixed options");
