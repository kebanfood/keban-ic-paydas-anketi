
    // ======================================================================
    // ⚙️ KEBAN FOOD - İÇ PAYDAŞ ANKETİ YÖNETİCİ (ADMIN) AYARLARI ⚙️
    // Bu bölümü Notepad veya SharePoint Metin Düzenleyici ile kolayca düzenleyebilirsiniz.
    // ======================================================================
    const ANKET_AYARLARI = {
      // 🔑 YÖNETİCİ PANELİ PIN KODU
      // Sonuç Simülasyon Paneli'ni görmek için sayfa adresinin sonuna ?mode=admin yazın (örn: ...aspx?mode=admin)
      // Karşınıza çıkan kutuya bu şifreyi girerek yönetici modunu açabilirsiniz.
      ADMIN_PIN: "1973",

      // 🔗 MICROSOFT POWER AUTOMATE HTTP POST URL'NİZ
      FLOW_URL: "https://default208b4126267e4c92aaad5dac1d7530.77.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/50d245dd3848422aae85aa1b1ee89fc4/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YKCr9q4l4htQgjMDyfB2-fmUvBgAD0aQ7bv-LsMELp0",

      // 📋 DEPARTMANLAR VE HİZMET ALMA-VERME ETKİ AĞIRLIKLARI MATRİSİ
      // Ağırlık yüzdeleri (%) aşağıdadır. İlgili satır ve sütundaki değerleri istediğiniz gibi değiştirebilirsiniz.
            MATRIX: {
        "İK Direktörlüğü": {
          "Kalite ve Süreç Yönetimi Direktörlüğü": 15,
          "Mali İşler Direktörlüğü": 15,
          "Marka Direktörlüğü": 25,
          "Mimari Operasyon Müdürlüğü": 10,
          "Tedarik Zinciri Direktörlüğü": 15,
          "Üretim ve Tesis Yönetimi Direktörlüğü": 10,
          "Yatırımcı İlişkileri Direktörlüğü": 10
        },
        "Kalite ve Süreç Yönetimi Direktörlüğü": {
          "İK Direktörlüğü": 15,
          "Mali İşler Direktörlüğü": 5,
          "Marka Direktörlüğü": 40,
          "Mimari Operasyon Müdürlüğü": 5,
          "Tedarik Zinciri Direktörlüğü": 10,
          "Üretim ve Tesis Yönetimi Direktörlüğü": 15,
          "Yatırımcı İlişkileri Direktörlüğü": 10
        },
        "Mali İşler Direktörlüğü": {
          "İK Direktörlüğü": 10,
          "Kalite ve Süreç Yönetimi Direktörlüğü": 5,
          "Marka Direktörlüğü": 20,
          "Mimari Operasyon Müdürlüğü": 15,
          "Tedarik Zinciri Direktörlüğü": 15,
          "Üretim ve Tesis Yönetimi Direktörlüğü": 15,
          "Yatırımcı İlişkileri Direktörlüğü": 20
        },
        "Marka Direktörlüğü": {
          "İK Direktörlüğü": 15,
          "Kalite ve Süreç Yönetimi Direktörlüğü": 10,
          "Mali İşler Direktörlüğü": 15,
          "Mimari Operasyon Müdürlüğü": 15,
          "Tedarik Zinciri Direktörlüğü": 15,
          "Üretim ve Tesis Yönetimi Direktörlüğü": 15,
          "Yatırımcı İlişkileri Direktörlüğü": 15
        },
        "Mimari Operasyon Müdürlüğü": {
          "İK Direktörlüğü": 10,
          "Kalite ve Süreç Yönetimi Direktörlüğü": 5,
          "Mali İşler Direktörlüğü": 20,
          "Marka Direktörlüğü": 30,
          "Tedarik Zinciri Direktörlüğü": 15,
          "Üretim ve Tesis Yönetimi Direktörlüğü": 10,
          "Yatırımcı İlişkileri Direktörlüğü": 10
        },
        "Tedarik Zinciri Direktörlüğü": {
          "İK Direktörlüğü": 10,
          "Kalite ve Süreç Yönetimi Direktörlüğü": 5,
          "Mali İşler Direktörlüğü": 20,
          "Marka Direktörlüğü": 25,
          "Mimari Operasyon Müdürlüğü": 15,
          "Üretim ve Tesis Yönetimi Direktörlüğü": 20,
          "Yatırımcı İlişkileri Direktörlüğü": 5
        },
        "Üretim ve Tesis Yönetimi Direktörlüğü": {
          "İK Direktörlüğü": 10,
          "Kalite ve Süreç Yönetimi Direktörlüğü": 10,
          "Mali İşler Direktörlüğü": 20,
          "Marka Direktörlüğü": 25,
          "Mimari Operasyon Müdürlüğü": 5,
          "Tedarik Zinciri Direktörlüğü": 25,
          "Yatırımcı İlişkileri Direktörlüğü": 5
        },
        "Yatırımcı İlişkileri Direktörlüğü": {
          "İK Direktörlüğü": 5,
          "Kalite ve Süreç Yönetimi Direktörlüğü": 5,
          "Mali İşler Direktörlüğü": 25,
          "Marka Direktörlüğü": 35,
          "Mimari Operasyon Müdürlüğü": 20,
          "Tedarik Zinciri Direktörlüğü": 5,
          "Üretim ve Tesis Yönetimi Direktörlüğü": 5
        }
      },

      // ❓ DEĞERLENDİRME SORULARI (7 BOYUT VE 14 SORU)
      // Soru metinlerini, kategorilerini veya ağırlık açıklamalarını buradan düzenleyebilirsiniz.
      QUESTIONS: [
        { id: "q1", category: "İletişim", weight: "15%", text: "Bu departmana kolayca ulaşabilirim." },
        { id: "q2", category: "İletişim", weight: "15%", text: "İletişimleri açık ve anlaşılırdır." },
        { id: "q3", category: "İletişim", weight: "15%", text: "İletişimleri saygılı ve tutarlıdır." },
        { id: "q4", category: "Hız", weight: "15%", text: "Taleplerimize zamanında geri dönüş yapılır." },
        { id: "q5", category: "Hız", weight: "15%", text: "İşler planlanan sürede tamamlanır." },
        { id: "q6", category: "Hız", weight: "15%", text: "Verdiği bilgi doğru ve kullanılabilirdir." },
        { id: "q7", category: "Çözüm", weight: "20%", text: "Sorunları sahiplenirler." },
        { id: "q8", category: "Çözüm", weight: "20%", text: "Kalıcı çözümler üretirler." },
        { id: "q9", category: "Çözüm", weight: "20%", text: "Sorunları çözüm odaklı ele alırlar." },
        { id: "q10", category: "İş Birliği", weight: "15%", text: "İş birliğine açıktırlar." },
        { id: "q11", category: "İş Birliği", weight: "15%", text: "İş yapmayı kolaylaştırırlar." },
        { id: "q12", category: "İş Birliği", weight: "15%", text: "Takım ruhu ve ekip bilinci ile hareket ederler." },
        { id: "q13", category: "Uzmanlık", weight: "15%", text: "Alanlarında yetkindirler." },
        { id: "q14", category: "Uzmanlık", weight: "15%", text: "Doğru yönlendirme yaparlar." },
        { id: "q15", category: "Uzmanlık", weight: "15%", text: "Kendi fonksiyonel uzmanlığını süreçlere değer katacak şekilde kullanırlar." },
        { id: "q16", category: "Süreç", weight: "10%", text: "Süreçleri net ve düzenlidir." },
        { id: "q17", category: "Süreç", weight: "10%", text: "Planlı çalışırlar." },
        { id: "q18", category: "Süreç", weight: "10%", text: "Süreçlerde gecikme, hata veya tekrar iş olmaz." },
        { id: "q19", category: "Proaktiflik", weight: "10%", text: "Sorunları önceden öngörürler." },
        { id: "q20", category: "Proaktiflik", weight: "10%", text: "İyileştirme önerirler." },
        { id: "q21", category: "Proaktiflik", weight: "10%", text: "İşlerin şirket hedeflerine etkisini dikkate alırlar." }
      ]
    };

    // Referans değişkenler (mevcut kodun bozulmaması için)
    const matrix = ANKET_AYARLARI.MATRIX;
    const questions = ANKET_AYARLARI.QUESTIONS;

    // State management
    let activeUserDept = "";
    let activeTargetDept = "";
    let currentSurveyStartTime = null;
    let evaluations = {}; // { targetDept: { q1: score, q2: score, ... nps: score } }
    let currentNPS = null;

    // Simulation State
    const simBaseScores = {
      "İK Direktörlüğü": 4.2,
      "Kalite ve Süreç Yönetimi Direktörlüğü": 3.8,
      "Mali İşler Direktörlüğü": 4.5,
      "Marka Direktörlüğü": 4.0,
      "Mimari Operasyon Müdürlüğü": 3.5,
      "Tedarik Zinciri Direktörlüğü": 3.9,
      "Üretim ve Tesis Yönetimi Direktörlüğü": 4.1,
      "Yatırımcı İlişkileri Direktörlüğü": 4.3
    };

    // Initialize
    // Admin yetki durumu takip değişkeni
    let isAdminActive = false;

    window.onload = function() {
      // Yönetici Modu PIN Kontrolü (?mode=admin)
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('mode') === 'admin') {
        const pin = prompt("Yönetici Panelini açmak için lütfen PIN kodunu giriniz:");
        if (pin === ANKET_AYARLARI.ADMIN_PIN) {
          isAdminActive = true;
          alert("Giriş başarılı! Yönetici sekmeleri aktif edildi.");
          document.getElementById("tab-matrix").style.display = "inline-block";
          // document.getElementById("tab-dashboard").style.display = "inline-block";
          document.getElementById("tab-live-dashboard").style.display = "inline-block";
          document.getElementById("finished-dashboard-btn").style.display = "inline-block";
          // Otomatik canlı sonuçları yükle
          setTimeout(loadLiveResults, 500);
        } else {
          alert("Hatalı PIN kodu! Sayfa kullanıcı modunda açılıyor.");
        }
      }

      renderDimensionsForm();
      renderMatrixTable();
      renderSimulationDashboard();
      updateSidebarHeader();

      // Otomatik Departman Seçimi ve Kilitleme (?dept=slug)
      const deptSlug = urlParams.get('dept');
      let validDeptSelected = false;

      if (deptSlug) {
        // Mükerrer doldurma kontrolü (Kullanıcı bu cihazdan daha önce doldurmuş mu?)
        try {
          if (localStorage.getItem('anket_tamamlandi_' + deptSlug) === 'true' && !isAdminActive) {
            document.getElementById("app-container").innerHTML = `
              <div style="text-align: center; padding: 60px 20px;">
                <div style="background-color: var(--success); color: white; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto;">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h2 style="color: var(--primary); font-size: 28px; margin-bottom: 15px;">Anketi Zaten Doldurdunuz</h2>
                <p style="color: var(--text-light); font-size: 18px;">Katılımınız için teşekkür ederiz.<br>Bu cihazdan (tarayıcıdan) aynı departman bağlantısı ile yalnızca bir kez anket doldurulabilmektedir.</p>
              </div>
            `;
            return; // Sayfanın geri kalanının yüklenmesini durdur
          }
        } catch(e) {
          console.warn("LocalStorage kullanılamıyor.", e);
        }

        const slugMap = {
          'ik': 'İK Direktörlüğü',
          'kalite': 'Kalite ve Süreç Yönetimi Direktörlüğü',
          'mali': 'Mali İşler Direktörlüğü',
          'marka': 'Marka Direktörlüğü',
          'mimari': 'Mimari Operasyon Müdürlüğü',
          'tedarik': 'Tedarik Zinciri Direktörlüğü',
          'uretim': 'Üretim ve Tesis Yönetimi Direktörlüğü',
          'yatirimci': 'Yatırımcı İlişkileri Direktörlüğü'
        };
        
        const mappedDept = slugMap[deptSlug.toLowerCase()];
        if (mappedDept) {
          const select = document.getElementById('user-dept-select');
          select.value = mappedDept;
          select.disabled = true;
          select.style.backgroundColor = "#e2e8f0"; // kilitli görünümü
          select.style.cursor = "not-allowed";
          
          // Seçimi anında sisteme işlet
          onUserDeptChange();
          validDeptSelected = true;
        }
      }

      // Eğer geçerli bir link kullanılmadıysa ve yönetici değilse sistemi kilitle
      if (!validDeptSelected && !isAdminActive) {
        const select = document.getElementById('user-dept-select');
        select.disabled = true;
        select.style.backgroundColor = "#fee2e2";
        select.style.cursor = "not-allowed";
        select.innerHTML = '<option value="" disabled selected>Geçersiz Bağlantı (Erişim Reddedildi)</option>';
        
        document.getElementById("evaluable-list").innerHTML = '<div style="text-align: center; color: var(--primary); padding: 20px; font-size: 14px; font-weight:bold;">Güvenlik Uyarısı: Eksik veya hatalı anket bağlantısı ile giriş yaptınız. Lütfen e-postanıza gönderilen özel departman linkini kullanarak tekrar deneyin.</div>';
      }
    };

    function switchTab(tabId, element) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
      
      document.getElementById(tabId).classList.add('active');
      if (element) {
        element.classList.add('active');
      } else {
        // if programmatically triggered, find the corresponding button
        const btns = document.querySelectorAll('.tab-btn');
        if (tabId === 'dashboard-tab') btns[2].classList.add('active');
      }
    }

    function onUserDeptChange() {
      const select = document.getElementById("user-dept-select");
      activeUserDept = select.value;
      
      document.getElementById("active-participant").innerText = activeUserDept;
      
      // Load evaluable departments from matrix
      const evaluableContainer = document.getElementById("evaluable-list");
      evaluableContainer.innerHTML = "";

      const userMatrix = matrix[activeUserDept];
      let evaluableDeptsCount = 0;

      Object.keys(matrix).forEach(deptName => {
        if (deptName === activeUserDept) return; // cannot evaluate self

        const weight = userMatrix[deptName];
        if (weight !== undefined && weight > 0) {
          evaluableDeptsCount++;
          
          const isDone = evaluations[deptName] !== undefined;
          const statusClass = isDone ? "completed" : (activeTargetDept === deptName ? "active" : "");

          const deptItem = document.createElement("button");
          deptItem.className = `dept-item ${statusClass}`;
          deptItem.type = "button";
          deptItem.onclick = () => selectTargetDept(deptName);
          deptItem.innerHTML = `
            <div class="dept-info">
              <span class="dept-name">${deptName}</span>
              <span class="dept-weight">Etki Ağırlığı: %${weight}</span>
            </div>
            <div class="status-dot"></div>
          `;
          evaluableContainer.appendChild(deptItem);
        }
      });

      document.getElementById("dept-count").innerText = evaluableDeptsCount;
      
      // Reset main view
      document.getElementById("welcome-view").style.display = "block";
      document.getElementById("survey-form-view").style.display = "none";
      document.getElementById("finished-view").style.display = "none";
      activeTargetDept = "";
    }

    function selectTargetDept(deptName) {
      currentSurveyStartTime = Date.now();
      activeTargetDept = deptName;
      
      // Update UI selection classes
      const items = document.querySelectorAll(".dept-item");
      items.forEach(item => {
        const nameText = item.querySelector(".dept-name").innerText;
        item.classList.remove("active");
        if (nameText === deptName) {
          item.classList.add("active");
        }
      });

      // Show form
      document.getElementById("welcome-view").style.display = "none";
      document.getElementById("finished-view").style.display = "none";
      document.getElementById("survey-form-view").style.display = "block";
      document.getElementById("target-dept-title").innerText = deptName;

      // Load existing responses if any
      const existing = evaluations[deptName];
      document.getElementById("survey-inner-form").reset();
      currentNPS = null;
      document.querySelectorAll(".nps-btn").forEach(btn => btn.classList.remove("active"));
      document.getElementById("nps-value").value = "";

      if (existing) {
        // Pre-fill answers
        Object.keys(existing).forEach(key => {
          if (key.startsWith("q")) {
            const rad = document.querySelector(`input[name="${key}"][value="${existing[key]}"]`);
            if (rad) rad.checked = true;
          } else if (key === "nps") {
            selectNPS(existing[key]);
          } else if (key === "feedback") {
            document.getElementById("feedback-text").value = existing[key];
          }
        });
      }

      updateProgress();
    }

    function renderDimensionsForm() {
      const container = document.getElementById("dimensions-container");
      container.innerHTML = "";

      // Group questions by dimension
      const groups = {};
      questions.forEach(q => {
        if (!groups[q.category]) {
          groups[q.category] = {
            weight: q.weight,
            items: []
          };
        }
        groups[q.category].items.push(q);
      });

      let count = 1;
      Object.keys(groups).forEach(cat => {
        const group = groups[cat];
        
        const section = document.createElement("div");
        section.className = "dimension-section";
        section.innerHTML = `
          <div class="dimension-header">
            <div class="dimension-title">
              <span class="dimension-badge">${count}. Boyut</span>
              <span class="dimension-name">${cat}</span>
            </div>
            <span class="dimension-weight">Ağırlık: ${group.weight}</span>
          </div>
          <div class="question-list">
            ${group.items.map(item => `
              <div class="question-item">
                <span class="question-text">${item.text}</span>
                <div class="likert-group">
                  <div class="likert-option">
                    <input type="radio" name="${item.id}" value="1" onchange="updateProgress(); toggleExplanation('${item.id}', this.value)" required>
                    <div class="likert-label" data-val="1">Beklentinin Altında</div>
                  </div>
                  <div class="likert-option">
                    <input type="radio" name="${item.id}" value="2" onchange="updateProgress(); toggleExplanation('${item.id}', this.value)" required>
                    <div class="likert-label" data-val="2">Gelişime Açık</div>
                  </div>
                  <div class="likert-option">
                    <input type="radio" name="${item.id}" value="3" onchange="updateProgress(); toggleExplanation('${item.id}', this.value)" required>
                    <div class="likert-label" data-val="3">Beklenen</div>
                  </div>
                  <div class="likert-option">
                    <input type="radio" name="${item.id}" value="4" onchange="updateProgress(); toggleExplanation('${item.id}', this.value)" required>
                    <div class="likert-label" data-val="4">Beklenen Üstü</div>
                  </div>
                </div>
                <!-- Açıklama kutusu -->
                <div id="explanation-container-${item.id}" style="display: none; margin-top: 10px;">
                   <textarea id="explanation-${item.id}" name="${item.id}_comment" class="feedback-textarea" style="height: 60px; font-size: 13px;" minlength="5" placeholder="Lütfen nedenini açıklayın (En az 5 karakter)..."></textarea>
                </div>
              </div>
            `).join('')}
          </div>
        `;
        container.appendChild(section);
        count++;
      });
    }

    function toggleExplanation(qId, val) {
      const container = document.getElementById('explanation-container-' + qId);
      const textarea = document.getElementById('explanation-' + qId);
      if (val === '1') {
        container.style.display = 'block';
        textarea.setAttribute('required', 'required');
        textarea.setAttribute('placeholder', 'Lütfen beklentinizin altında kalma nedenini açıklayın (En az 5 karakter)...');
      } else if (val === '4') {
        container.style.display = 'block';
        textarea.setAttribute('required', 'required');
        textarea.setAttribute('placeholder', 'Lütfen beklenen üstü olma nedenini açıklayın (En az 5 karakter)...');
      } else {
        container.style.display = 'none';
        textarea.removeAttribute('required');
        textarea.value = ''; // Seçim değişirse açıklamayı temizle
      }
    }

    function selectNPS(score) {
      currentNPS = score;
      document.getElementById("nps-value").value = score;
      
      document.querySelectorAll(".nps-btn").forEach(btn => {
        btn.classList.remove("active");
        if (Number(btn.getAttribute("data-score")) === score) {
          btn.classList.add("active");
        }
      });
      updateProgress();
    }

    function updateProgress() {
      let answeredCount = 0;
      const totalQuestions = questions.length + 1; // 14 Likert questions + 1 NPS

      questions.forEach(q => {
        const selected = document.querySelector(`input[name="${q.id}"]:checked`);
        if (selected) answeredCount++;
      });

      if (currentNPS !== null) {
        answeredCount++;
      }

      const percent = Math.round((answeredCount / totalQuestions) * 100);
      document.getElementById("progress-percent").innerText = `${percent}%`;
      document.getElementById("progress-fill-bar").style.width = `${percent}%`;
      document.getElementById("progress-fraction").innerText = `${answeredCount}/${totalQuestions}`;
    }

    async function submitSingleSurvey(event) {
      event.preventDefault();
      
      if (currentNPS === null) {
        alert("Lütfen 8. soru altındaki Net Tavsiye Skorunu (NPS) seçiniz.");
        return;
      }

      const form = document.getElementById("survey-inner-form");
      const fd = new FormData(form);
      
      const requiredTextareas = form.querySelectorAll("textarea[required]");
      for (const ta of requiredTextareas) {
        if (ta.value.trim().length < 5) {
          alert("Lütfen açıklama alanlarına geçerli bir metin giriniz (En az 5 karakter, sadece boşluk bırakılamaz).");
          ta.focus();
          return;
        }
      }
      
      const durationSeconds = currentSurveyStartTime ? Math.floor((Date.now() - currentSurveyStartTime) / 1000) : 0;
      const durationMinutes = Math.floor(durationSeconds / 60);
      const secondsRemainder = durationSeconds % 60;
      const anketCevaplamaSuresi = durationMinutes > 0 ? `${durationMinutes} Dk ${secondsRemainder} Sn` : `${durationSeconds} Sn`;

      let totalPoints = 0;
      let questionCount = 0;
      questions.forEach(q => {
        const val = Number(fd.get(q.id));
        if(!isNaN(val) && val > 0) {
            totalPoints += val;
            questionCount++;
        }
      });
      const ortalamaPuan = questionCount > 0 ? Number((totalPoints / questionCount).toFixed(2)) : 0;
      
      let npsKategorisi = "";
      if (currentNPS !== null) {
          if (currentNPS >= 9) npsKategorisi = "Destekleyici";
          else if (currentNPS >= 7) npsKategorisi = "Pasif";
          else npsKategorisi = "Kötüleyen";
      }

      const localScores = {};
      const surveyData = {
        "ID": crypto.randomUUID ? crypto.randomUUID() : "id-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        "Değerlendiren Departman": activeUserDept,
        "Değerlendirilen Departman": activeTargetDept,
        "Zaman Damgası": new Date().toLocaleString('tr-TR'),
        "Anket Cevaplama Süresi": anketCevaplamaSuresi,
        "Ortalama Puan": ortalamaPuan,
        "NPS (0-10)": currentNPS,
        "NPS Kategorisi": npsKategorisi,
        "Açık Uçlu Geri Bildirim": fd.get("feedback") || ""
      };

      questions.forEach(q => {
        const score = Number(fd.get(q.id));
        localScores[q.id] = score;
        
        const qNum = q.id.replace(/\D/g, '');
        surveyData[`S${qNum} Puan`] = score;
        const comment = fd.get(q.id + "_comment") || "";
        surveyData[`S${qNum} Altında`] = (score === 1) ? comment : "";
        surveyData[`S${qNum} Üstünde`] = (score === 4) ? comment : "";
      });

      // Güvenli Yönetici Ayarlarından Çekilen URL
      const FLOW_URL = ANKET_AYARLARI.FLOW_URL; 

      const submitBtn = event.target.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerText;

      if (!FLOW_URL) {
        // Simulation mode
        alert(`🔔 SİMÜLASYON MODU:\n\n${activeTargetDept} departmanı değerlendirme verisi tarayıcı belleğine kaydedildi.\n\nGerçek veri akışı için lütfen HTML kodundaki 'FLOW_URL' değişkenine Power Automate HTTP POST URL'inizi yapıştırın!`);
        
        evaluations[activeTargetDept] = localScores;
        evaluations[activeTargetDept]["nps"] = currentNPS;
        evaluations[activeTargetDept]["feedback"] = fd.get("feedback") || "";

        // Reset list item state in sidebar to green
        onUserDeptChange();
        checkAndAdvance();
        return;
      }

      // Live mode - Power Automate POST
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-right: 8px; display: inline-block; vertical-align: middle;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25" stroke="currentColor"></circle>
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.0434 16.4528" stroke="currentColor" stroke-linecap="round"></path>
        </svg> Gönderiliyor...
      `;

      try {
        const response = await fetch(FLOW_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(surveyData)
        });

        if (response.ok || response.status === 202) {
          alert(`✅ ${activeTargetDept} değerlendirme verileri Microsoft bulutuna başarıyla kaydedildi!`);
          
          evaluations[activeTargetDept] = localScores;
          evaluations[activeTargetDept]["nps"] = currentNPS;
          evaluations[activeTargetDept]["feedback"] = fd.get("feedback") || "";

          onUserDeptChange();
          checkAndAdvance();
        } else {
          throw new Error(`Bağlantı hatası: HTTP ${response.status}`);
        }
      } catch (err) {
        console.error("Gönderim Hatası:", err);
        alert(`❌ HATA: Değerlendirme kaydedilemedi.\n\nAçıklama: ${err.message}\n\nLütfen internet bağlantınızı ve Power Automate akışınızın durumunu kontrol edin.`);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
      }
    }

    function checkAndAdvance() {
      // Check if all department evaluations are completed
      const userMatrix = matrix[activeUserDept];
      let remainingCount = 0;
      Object.keys(matrix).forEach(deptName => {
        if (deptName === activeUserDept) return;
        const weight = userMatrix[deptName];
        if (weight !== undefined && weight > 0) {
          if (!evaluations[deptName]) {
            remainingCount++;
          }
        }
      });

      if (remainingCount === 0) {
        // Tüm değerlendirmeler bitti! LocalStorage'a "dolduruldu" bayrağını as (Sadece departman parametresi varsa)
        try {
          const urlParams = new URLSearchParams(window.location.search);
          const deptSlug = urlParams.get('dept');
          if (deptSlug && !isAdminActive) {
            localStorage.setItem('anket_tamamlandi_' + deptSlug, 'true');
          }
        } catch(e) {
          console.warn("LocalStorage kullanılamıyor.", e);
        }

        // All evaluations done!
        document.getElementById("survey-form-view").style.display = "none";
        document.getElementById("finished-view").style.display = "block";
      }
    }

    function resetCurrentSurvey() {
      if (confirm("Bu departman için verdiğiniz cevapları sıfırlamak istediğinize emin misiniz?")) {
        document.getElementById("survey-inner-form").reset();
        currentNPS = null;
        document.querySelectorAll(".nps-btn").forEach(btn => btn.classList.remove("active"));
        document.getElementById("nps-value").value = "";
        updateProgress();
      }
    }

    function resetAllProcess() {
      evaluations = {};
      document.getElementById("user-dept-select").value = "";
      onUserDeptChange();
    }

    // Hizmet Verme Matrisi
    function renderMatrixTable() {
      const table = document.getElementById("matrix-render-table");
      table.innerHTML = "";

      const depts = Object.keys(matrix);
      
      // Header row
      let headerHTML = `<tr><th>Hizmet Veren (Satır) ⬇️ / Hizmet Alan (Sütun) ➡️</th>`;
      depts.forEach(d => {
        headerHTML += `<th>${d}</th>`;
      });
      headerHTML += `<th>Toplam (%)</th></tr>`;
      table.innerHTML += headerHTML;

      // Table body
      depts.forEach(rowDept => {
        let rowHTML = `<tr><td class="dept-header">${rowDept}</td>`;
        let rowTotal = 0;

        depts.forEach(colDept => {
          if (rowDept === colDept) {
            rowHTML += `<td class="empty-cell"></td>`; // Diagonal cell
          } else {
            const weight = matrix[rowDept][colDept];
            if (weight !== undefined && weight > 0) {
              rowHTML += `<td class="weight-cell">%${weight}</td>`;
              rowTotal += weight;
            } else {
              rowHTML += `<td>-</td>`;
            }
          }
        });

        rowHTML += `<td style="font-weight: bold; background-color: var(--gray-50); text-align: center;">%${rowTotal}</td></tr>`;
        table.innerHTML += rowHTML;
      });
    }

    // Simulation Dashboard
    function renderSimulationDashboard() {
      const slidersContainer = document.getElementById("sim-sliders");
      slidersContainer.innerHTML = "";

      const depts = Object.keys(matrix);
      
      depts.forEach(dept => {
        const val = simBaseScores[dept];
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexDirection = "column";
        row.style.gap = "4px";
        row.innerHTML = `
          <div style="display: flex; justify-content: space-between; font-size: 12.5px; font-weight: 600;">
            <span>${dept}</span>
            <span id="slider-val-${dept}" style="color: var(--primary); font-weight: bold;">${val.toFixed(1)} Puan</span>
          </div>
          <input type="range" min="1.0" max="4.0" step="0.1" value="${val}" style="width: 100%; cursor: pointer;" oninput="onSliderInput('${dept}', this.value)">
        `;
        slidersContainer.appendChild(row);
      });

      calculateSimulationScores();
    }

    function onSliderInput(dept, val) {
      const score = Number(val);
      simBaseScores[dept] = score;
      document.getElementById(`slider-val-${dept}`).innerText = `${score.toFixed(1)} Puan`;
      calculateSimulationScores();
    }

    function calculateSimulationScores() {
      const depts = Object.keys(matrix);
      const resultsContainer = document.getElementById("sim-results");
      resultsContainer.innerHTML = "";

      // For each department, calculate its weighted score received from others
      depts.forEach(targetDept => {
        let weightedSum = 0;
        let weightTotal = 0;

        depts.forEach(evaluatingDept => {
          if (evaluatingDept === targetDept) return;

          // How much weight does evaluatingDept give to targetDept when evaluating?
          // Wait! In the matrix:
          // matrix[rowDept][colDept]
          // rowDept is the evaluator (satır)
          // colDept is the evaluated department (sütun)
          // So weight is matrix[evaluatingDept][targetDept]
          const weight = matrix[evaluatingDept][targetDept];
          if (weight !== undefined && weight > 0) {
            // Get the score evaluatingDept gave to targetDept
            const score = simBaseScores[targetDept]; // In real case, this is average score evaluatingDept gave to targetDept
            weightedSum += score * (weight / 100);
            weightTotal += weight;
          }
        });

        // Calculate weighted average (1.0 - 4.0)
        const finalScore = weightTotal > 0 ? (weightedSum * (100 / weightTotal)) : 0;
        
        // Convert to percentage (out of 4.0)
        const percentage = (finalScore / 4.0) * 100;

        let colorClass = "green";
        if (finalScore < 2.5) colorClass = "red";
        else if (finalScore < 3.2) colorClass = "orange";

        const scoreRow = document.createElement("div");
        scoreRow.className = "score-item";
        scoreRow.innerHTML = `
          <span>${targetDept}</span>
          <span class="score-value ${colorClass}">%${percentage.toFixed(0)} (${finalScore.toFixed(2)} / 4.00)</span>
        `;
        resultsContainer.appendChild(scoreRow);
      });
    }

    // =========================================================
    // CANLI SONUÇ PANELI (results.json OKUMA VE HESAPLAMA)
    // =========================================================
    async function loadLiveResults() {
      const resultsContainer = document.getElementById("live-results");
      const feedbacksContainer = document.getElementById("live-feedbacks");
      const lastUpdateSpan = document.getElementById("live-last-update");
      
      try {
        resultsContainer.innerHTML = '<div style="text-align: center; color: var(--gray-500); padding: 20px;">GitHub üzerinden results.json okunuyor...</div>';
        
        const response = await fetch('results.json?t=' + new Date().getTime());
        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }
        
        const data = await response.json();
        
        lastUpdateSpan.innerText = "Son Güncelleme: " + new Date().toLocaleTimeString('tr-TR');
        
        // Katılan tekil departman sayısını bulalım
        const uniqueDepts = new Set(data.map(r => r["Değerlendiren Departman"]).filter(d => d));
        document.getElementById("live-total-responses").innerHTML = `Katılan Departman: ${uniqueDepts.size} <br><span style="font-size: 11px; color: var(--gray-500);">Toplam Değerlendirme: ${data.length} Adet</span>`;

        const groupedScores = {};
        const npsData = {}; // NPS hesaplaması için: { "Mali": { sum: 0, total: 0 } }
        let feedbacks = []; // Array of feedback objects { date: ..., text: ... }

        data.forEach(row => {
          const evalBy = row["Değerlendiren Departman"];
          const evalTarget = row["Değerlendirilen Departman"];
          const score = Number(row["Ortalama Puan"]);
          const npsScore = Number(row["NPS (0-10)"]);
          const fb = row["Açık Uçlu Geri Bildirim"];
          const dateStr = row["Zaman Damgası"] || "";

          if (evalBy && evalTarget) {
            // Puan hesaplamaları için
            if (!isNaN(score)) {
              if (!groupedScores[evalTarget]) groupedScores[evalTarget] = {};
              if (!groupedScores[evalTarget][evalBy]) groupedScores[evalTarget][evalBy] = [];
              groupedScores[evalTarget][evalBy].push(score);
            }

                        // NPS Hesaplamaları için (Geleneksel NPS)
            if (!isNaN(npsScore)) {
              if (!npsData[evalTarget]) npsData[evalTarget] = { promoters: 0, passives: 0, detractors: 0, total: 0 };
              npsData[evalTarget].total += 1;
              if (npsScore >= 9) npsData[evalTarget].promoters += 1;
              else if (npsScore >= 7) npsData[evalTarget].passives += 1;
              else npsData[evalTarget].detractors += 1;
            }

            // Geribildirimler için
            if (fb && fb.trim().length > 0) {
              feedbacks.push({
                dateStr: dateStr,
                html: `<div style="display:flex; justify-content: space-between; margin-bottom: 4px;">
                         <span style="font-size:11px; color:var(--gray-500);">${dateStr}</span>
                         <span style="font-size:11px; background:var(--gray-100); padding:2px 6px; border-radius:4px;"><strong>${evalBy}</strong> ➔ <strong>${evalTarget}</strong></span>
                       </div>
                       <div style="font-size:13.5px; color:var(--gray-800);">"${fb}"</div>`
              });
            }
          }
        });

        const depts = Object.keys(matrix);
        resultsContainer.innerHTML = "";
        
        depts.forEach(targetDept => {
          let weightedSum = 0;
          let weightTotal = 0;

          depts.forEach(evaluatingDept => {
            if (evaluatingDept === targetDept) return;

            const weight = matrix[evaluatingDept][targetDept];
            if (weight !== undefined && weight > 0) {
              const scoresArr = (groupedScores[targetDept] && groupedScores[targetDept][evaluatingDept]) ? groupedScores[targetDept][evaluatingDept] : [];
              
              let avgScore = 0;
              if (scoresArr.length > 0) {
                avgScore = scoresArr.reduce((a,b)=>a+b, 0) / scoresArr.length;
                weightedSum += avgScore * (weight / 100);
                weightTotal += weight; // SADECE oy kullanıldıysa ağırlığı toplama dahil et (Adil ortalama için)
              }
            }
          });

          let finalScore = weightedSum;
          if (weightTotal > 0 && weightTotal !== 100) {
            finalScore = (weightedSum / (weightTotal / 100));
          }
          
          if (weightTotal === 0) finalScore = 0;

          // Puanı 5 üzerinden 4'e çevirelim mi? Puanlar 1-4 arası veriliyor anketlerde. Yani max 4.00
          // "Ortalama Puan" Excel'de genelde 1-4 üzerinden.
          const percentage = (finalScore / 4) * 100;
          let colorClass = "red";
          if (finalScore >= 3.2) colorClass = "green";
          else if (finalScore >= 2.5) colorClass = "yellow";

          // NPS Skoru Hesaplama (Geleneksel NPS)
          let npsDisplay = `<div style="display:flex; flex-direction:column; margin-left:15px; border-left:1px solid var(--gray-200); padding-left:15px;">
                              <span style="font-size: 12px; color: var(--gray-400);">NPS: Veri Yok</span>
                            </div>`;
          if (npsData[targetDept] && npsData[targetDept].total > 0) {
            const data = npsData[targetDept];
            const pPromoters = (data.promoters / data.total) * 100;
            const pDetractors = (data.detractors / data.total) * 100;
            const npsFinal = Math.round(pPromoters - pDetractors);
            
            let npsColor = "#16a34a"; // green
            if (npsFinal < 0) npsColor = "#ef4444"; // red
            else if (npsFinal < 30) npsColor = "#f59e0b"; // yellow
            
            npsDisplay = `
            <div style="display:flex; flex-direction:column; margin-left:15px; border-left:1px solid var(--gray-200); padding-left:15px;" title="Geleneksel NPS = % Destekçiler (9-10 Puan) - % Kötüleyenler (0-6 Puan)">
                <span style="font-size: 13px; font-weight: 700; color: ${npsColor};">NPS: ${npsFinal}</span>
                <span style="font-size: 10px; color: var(--gray-500); margin-top:2px;">(-100 ile +100 Arası)</span>
            </div>`;
          }

          const scoreRow = document.createElement("div");
          scoreRow.className = "score-item";
          scoreRow.innerHTML = `
            <span>${targetDept}</span>
            <div style="display:flex; align-items:center;">
              <span class="score-value ${colorClass}">%${percentage.toFixed(0)} (${finalScore.toFixed(2)} / 4.00)</span>
              ${npsDisplay}
            </div>
          `;
          resultsContainer.appendChild(scoreRow);
        });

        // 3. Feedbacks render (Son 10 tanesi ters sıra)
        feedbacksContainer.innerHTML = "";
        
        // Sadece son 10'u göstermek için önce verileri tersine çevirelim (en yeni en üstte)
        feedbacks.reverse();
        const latestFeedbacks = feedbacks.slice(0, 10);

        if (latestFeedbacks.length === 0) {
          feedbacksContainer.innerHTML = '<div style="color:var(--gray-500); font-style:italic;">Henüz geri bildirim bulunmuyor.</div>';
        } else {
          latestFeedbacks.forEach(f => {
            const div = document.createElement("div");
            div.style.padding = "12px";
            div.style.backgroundColor = "white";
            div.style.border = "1px solid var(--gray-200)";
            div.style.borderRadius = "6px";
            div.innerHTML = f.html;
            feedbacksContainer.appendChild(div);
          });
        }

      } catch (err) {
        console.error("Live Data Error:", err);
        resultsContainer.innerHTML = `<div style="text-align: center; color: var(--danger); padding: 20px;">Hata: results.json okunamadı.<br><small>${err.message}</small><br><br>Henüz anket verisi Power Automate tarafından oluşturulmamış olabilir.</div>`;
        feedbacksContainer.innerHTML = "";
      }
    }

    function updateSidebarHeader() {
      // Setup active user dept if any
      document.getElementById("login-btn").disabled = false;
    }
  