// ข้อมูลร้านอาหาร
const restaurants = [
  {
    id: 1,
    name: "ก๋วยเตี๋ยว อ.ส.ม",
    province: "กรุงเทพฯ",
    district: "ดินแดง",
    price: 1,
    category: "ก๋วยเตี๋ยว",
    menu: "ก๋วยเตี๋ยวน้อย เล็บ ไก่",
    description: "ร้านเก่า 40 กว่าปี ก๋วยเตี๋ยวรสแซบ น้ำซุปชุ่มชื่น",
    emoji: "🍲"
  },
  {
    id: 2,
    name: "ข้าวขาหมู สตูดิโอ",
    province: "กรุงเทพฯ",
    district: "สีลม",
    price: 2,
    category: "ข้าวขา",
    menu: "ข้าวขาหมู ข้าวหมูแดง",
    description: "เนื้อหมูเด้งแน่น ข้าวเสร็จทุกวัน",
    emoji: "🍖"
  },
  {
    id: 3,
    name: "ชาววัง ต้มยำ",
    province: "กรุงเทพฯ",
    district: "ป้อม",
    price: 2,
    category: "ต้มยำ",
    menu: "ต้มยำกุ้ง ต้มยำไก่",
    description: "ต้มยำพริกเผ็ดจัด รสชาติแท้ที่สุด",
    emoji: "🔥"
  },
  {
    id: 4,
    name: "บะหมี่ขาว อู่",
    province: "กรุงเทพฯ",
    district: "ยานนวา",
    price: 1,
    category: "บะหมี่",
    menu: "บะหมี่ลูกชิ้น หมูเด้ง",
    description: "บะหมี่เปียกน้ำขาว หลวม เด้ง ได้เต่า",
    emoji: "🍜"
  },
  {
    id: 5,
    name: "ปิ้งย่างเนื้อคุณกัน",
    province: "กรุงเทพฯ",
    district: "พระโขนง",
    price: 3,
    category: "เนื้อย่าง",
    menu: "เนื้อออสเตรเลีย เสาร์อาทิตย์ซูกิยากิ",
    description: "เนื้อวากิวนำเข้า ปิ้งสดใหม่ทุกวัน",
    emoji: "🥩"
  },
  {
    id: 6,
    name: "แกงส้มปลาทูเก่า",
    province: "เชียงใหม่",
    district: "สันป่า",
    price: 1,
    category: "แกงส้ม",
    menu: "แกงส้มปลาทู ปลาช่อนฟ",
    description: "แกงส้มเครื่องรสชาติกำลังดี รสหมักเก่า",
    emoji: "🍛"
  },
  {
    id: 7,
    name: "ข้าวซอยเชียงใหม่ เสาวภา",
    province: "เชียงใหม่",
    district: "หลวงพระบาง",
    price: 1,
    category: "ข้าวซอย",
    menu: "ข้าวซอยไก่ เนื้อ",
    description: "ข้าวซอยอบเคี่ยวนาน น้ำซุปกึ่งอ่อนกึ่งจัด",
    emoji: "🍚"
  },
  {
    id: 8,
    name: "สาระแหน่ม นั่งเล่น",
    province: "เชียงใหม่",
    district: "ท่าแพ",
    price: 2,
    category: "ของหวาน",
    menu: "สาระแหน่ม บัวแน่นสังขารที่ค้าง",
    description: "หวานเมืองน้อย ของดีเก่าแก่ของเมืองเชียงใหม่",
    emoji: "🍮"
  },
  {
    id: 9,
    name: "ปูแม่พิมพ์",
    province: "ชลบุรี",
    district: "เขาตาโล",
    price: 2,
    category: "ปู",
    menu: "ปูสด นึ่ง นา โชว์",
    description: "ปูสดใหม่ทุกวัน เนื้อแน่นเต็มไข่",
    emoji: "🦀"
  },
  {
    id: 10,
    name: "ยำสมุนไพรคุณโพ",
    province: "ชลบุรี",
    district: "บ้านสว่าง",
    price: 1,
    category: "ยำ",
    menu: "ยำใบชะพลู ยำสะตอ",
    description: "ยำเครื่องสดใหม่ รสเข้มข้น",
    emoji: "🌶️"
  },
  {
    id: 11,
    name: "หมูกระทะขาดไม่ได้",
    province: "นครปฐม",
    district: "เมืองนครปฐม",
    price: 2,
    category: "หมูกระทะ",
    menu: "หมูสด ผักสดใหม่",
    description: "น้ำซุปบ้านเรือนโบราณ หมูตัดสดๆ",
    emoji: "🥘"
  },
  {
    id: 12,
    name: "จังโหลกลิมิเต็ด",
    province: "นครปฐม",
    district: "โพธิ์ชัย",
    price: 3,
    category: "ปลาค้าว",
    menu: "ปลาค้าวย่าง บัวแน่นอื่นๆ",
    description: "อาหารสมัยโบราณ ลิมิเต็ดซื้อวันละนิด",
    emoji: "🐟"
  }
];

// District mapping
const districtsByProvince = {
  "กรุงเทพฯ": ["ดินแดง", "สีลม", "ป้อม", "ยานนวา", "พระโขนง"],
  "เชียงใหม่": ["สันป่า", "หลวงพระบาง", "ท่าแพ", "อื่นๆ"],
  "ชลบุรี": ["เขาตาโล", "บ้านสว่าง", "อื่นๆ"],
  "นครปฐม": ["เมืองนครปฐม", "โพธิ์ชัย", "อื่นๆ"]
};

let filteredRestaurants = [...restaurants];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  renderCards();
});

function setupEventListeners() {
  const province = document.getElementById('province');
  const district = document.getElementById('district');
  const price = document.getElementById('price');
  const keyword = document.getElementById('keyword');

  province.addEventListener('change', (e) => {
    updateDistricts(e.target.value);
    filter();
  });

  district.addEventListener('change', filter);
  price.addEventListener('change', filter);
  keyword.addEventListener('input', filter);
}

function updateDistricts(province) {
  const districtSelect = document.getElementById('district');
  const districts = districtsByProvince[province] || [];

  districtSelect.innerHTML = '<option value="all">ทุกย่าน</option>';
  districts.forEach(d => {
    const option = document.createElement('option');
    option.value = d;
    option.textContent = d;
    districtSelect.appendChild(option);
  });
}

function filter() {
  const province = document.getElementById('province').value;
  const district = document.getElementById('district').value;
  const price = document.getElementById('price').value;
  const keyword = document.getElementById('keyword').value.toLowerCase();

  filteredRestaurants = restaurants.filter(r => {
    const matchProvince = province === 'all' || r.province === province;
    const matchDistrict = district === 'all' || r.district === district;
    const matchPrice = price === 'all' || r.price === parseInt(price);
    const matchKeyword = !keyword || 
      r.name.toLowerCase().includes(keyword) ||
      r.menu.toLowerCase().includes(keyword) ||
      r.category.toLowerCase().includes(keyword);

    return matchProvince && matchDistrict && matchPrice && matchKeyword;
  });

  renderCards();
  updateResultCount();
  renderChips();
}

function renderCards() {
  const cardsContainer = document.getElementById('cards');
  const emptyMessage = document.getElementById('empty');

  if (filteredRestaurants.length === 0) {
    cardsContainer.innerHTML = '';
    emptyMessage.removeAttribute('hidden');
    return;
  }

  emptyMessage.setAttribute('hidden', '');
  cardsContainer.innerHTML = filteredRestaurants.map(r => `
    <div class="card">
      <div class="card-image">${r.emoji}</div>
      <div class="card-content">
        <div class="card-title">${r.name}</div>
        <div class="card-meta">
          <span>📍 ${r.district}</span>
          <span>${getPriceLabel(r.price)}</span>
        </div>
        <div class="card-tags">
          <span class="tag">${r.category}</span>
        </div>
        <div class="card-desc">${r.description}</div>
        <div class="card-desc" style="font-size: 0.9rem; color: #999;">🍽️ ${r.menu}</div>
        <div class="card-footer">
          <button class="card-btn" onclick="alert('อยู่ที่: ${r.district}, ${r.province}')">📍 สถานที่</button>
          <button class="card-btn primary" onclick="alert('${r.name}\\n${r.menu}')">📞 สั่งอาหาร</button>
        </div>
      </div>
    </div>
  `).join('');
}

function getPriceLabel(price) {
  const labels = {
    1: "฿ ต่ำกว่า 100",
    2: "฿฿ 100–200",
    3: "฿฿฿ 201–400",
    4: "฿฿฿฿ 400+"
  };
  return labels[price];
}

function updateResultCount() {
  const count = filteredRestaurants.length;
  const countElement = document.getElementById('resultCount');
  if (count > 0) {
    countElement.textContent = `พบ ${count} ร้าน`;
  } else {
    countElement.textContent = '';
  }
}

function renderChips() {
  const chipsContainer = document.getElementById('chips');
  const province = document.getElementById('province').value;
  const district = document.getElementById('district').value;
  const price = document.getElementById('price').value;
  const keyword = document.getElementById('keyword').value;

  const chips = [];

  if (province !== 'all') {
    chips.push({ label: `📍 ${province}`, clear: () => {
      document.getElementById('province').value = 'all';
      updateDistricts('all');
    }});
  }

  if (district !== 'all') {
    chips.push({ label: `🏙️ ${district}`, clear: () => {
      document.getElementById('district').value = 'all';
    }});
  }

  if (price !== 'all') {
    chips.push({ label: `💸 ${getPriceLabel(parseInt(price))}`, clear: () => {
      document.getElementById('price').value = 'all';
    }});
  }

  if (keyword) {
    chips.push({ label: `🔎 "${keyword}"`, clear: () => {
      document.getElementById('keyword').value = '';
    }});
  }

  chipsContainer.innerHTML = chips.map((chip, idx) => `
    <div class="chip" onclick="this.querySelector('.chip-close').click()">
      ${chip.label}
      <span class="chip-close" onclick="event.stopPropagation(); arguments[0].parentElement.parentElement.querySelector('button').click(); filter();" data-idx="${idx}">✕</span>
    </div>
  `).join('');

  // Attach clear handlers
  document.querySelectorAll('.chip-close').forEach((el, idx) => {
    el.addEventListener('click', () => {
      chips[idx]?.clear();
      filter();
    });
  });
}
