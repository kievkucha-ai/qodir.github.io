/* ============================
   Central Asia Harvest — App
   ============================ */
const { useState, useEffect, useMemo, useRef } = React;

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-marquee">
          <span><i className="dot"></i> Доставка в 28 стран мира</span>
          <span><i className="dot"></i> Сертификаты GlobalG.A.P. · HACCP · Halal</span>
          <span><i className="dot"></i> Прямые контракты с фермерами</span>
        </div>
        <div className="topbar-right">
          <span>+998 71 200 84 84</span>
          <div className="lang">
            <button className="active">RU</button>
            <button>EN</button>
            <button>UZ</button>
            <button>ZH</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ cartCount, onScrollTo }) {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="header-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="mark"><LogoMark color="#0A3223" accent="#C9A961" /></div>
          <div className="word">
            Central Asia<br/>Harvest
            <small>Tashkent · Uzbekistan</small>
          </div>
        </a>
        <nav className="nav">
          <a href="#catalog" onClick={(e)=>{e.preventDefault(); onScrollTo('catalog')}}>Каталог</a>
          <a href="#story" onClick={(e)=>{e.preventDefault(); onScrollTo('story')}}>О компании</a>
          <a href="#process" onClick={(e)=>{e.preventDefault(); onScrollTo('process')}}>Экспорт</a>
          <a href="#why" onClick={(e)=>{e.preventDefault(); onScrollTo('why')}}>Преимущества</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault(); onScrollTo('contact')}}>Контакты</a>
        </nav>
        <div className="header-actions">
          <button className="icon-btn" aria-label="Поиск"><Icon.Search /></button>
          <button className="icon-btn" aria-label="Корзина">
            <Icon.Cart />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
          <a href="#contact" className="btn-primary" onClick={(e)=>{e.preventDefault(); onScrollTo('contact')}}>
            Запросить прайс <span className="arrow"><Icon.Arrow /></span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-ornament-l"><OrnamentColumn /></div>
      <div className="hero-ornament-r"><OrnamentColumn /></div>
      <div className="wrap hero-inner">
        <div>
          <div className="eyebrow">С Великого Шёлкового Пути</div>
          <h1>
            Урожай из <em>сердца</em><br/>
            Центральной Азии
          </h1>
          <p className="lead">
            Свежие фрукты, овощи, бобовые, сухофрукты и бахчевые с фермерских хозяйств
            Ферганской долины, Самарканда и Хорезма — собранные на пике зрелости и
            доставленные напрямую вашему дистрибьютору.
          </p>
          <div className="hero-actions">
            <a href="#catalog" className="btn-primary" onClick={(e)=>{e.preventDefault(); document.getElementById('catalog')?.scrollIntoView({behavior:'smooth', block:'start'})}}>
              Открыть каталог <span className="arrow"><Icon.Arrow /></span>
            </a>
            <a href="#contact" className="btn-ghost" onClick={(e)=>{e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth', block:'start'})}}>
              Получить B2B-прайс
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="num">28</div><div className="lbl">стран импорта</div></div>
            <div className="hero-stat"><div className="num">340+</div><div className="lbl">партнёров-фермеров</div></div>
            <div className="hero-stat"><div className="num">12 000 т</div><div className="lbl">отгружено в 2025</div></div>
            <div className="hero-stat"><div className="num">14</div><div className="lbl">лет на рынке</div></div>
          </div>
        </div>
        <div className="hero-arch">
          <ArchFrame />
          <div className="arch-inner">
            <div className="arch-star"><Star8 stroke="#C9A961" /></div>
            <div className="arch-label">Caravan Selection</div>
            <div className="arch-title">Сезон<br/>2026</div>
            <div className="arch-divider"></div>
            <div className="arch-meta">
              Гранат · Курага<br/>
              Виноград Хусайни<br/>
              Дыня Мирзачульская
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: <Icon.Sun />, h: 'Урожай 240 солнечных дней', p: 'Континентальный климат и древние ирригационные традиции дают плоды беспрецедентной сладости.' },
    { icon: <Icon.Shield />, h: 'Сертификаты экспорта', p: 'GlobalG.A.P., HACCP, ISO 22000, Halal, фитосанитарные сертификаты ЕС и стран Залива.' },
    { icon: <Icon.Truck />, h: 'Логистика «от поля до порта»', p: 'Рефрижераторы, авиа и ж/д контейнеры. Доставка по Incoterms FOB, CIF, DAP.' },
    { icon: <Icon.Phyto />, h: 'Полная прослеживаемость', p: 'Каждая партия маркируется QR-кодом с историей фермы, сбора и контроля качества.' },
  ];
  return (
    <section className="trust">
      <div className="wrap">
        <div className="trust-inner">
          {items.map((it, i) => (
            <div className="trust-item" key={i}>
              <div className="icon">{it.icon}</div>
              <div>
                <h4>{it.h}</h4>
                <p>{it.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories({ onPick }) {
  const cats = [
    { id: 'fruits',  ru: 'Свежие фрукты',  en: 'Fresh Fruits',     count: 8,  bg: 'bg-fruits' },
    { id: 'veg',     ru: 'Овощи',          en: 'Vegetables',       count: 6,  bg: 'bg-veg' },
    { id: 'legumes', ru: 'Бобовые',        en: 'Legumes',          count: 4,  bg: 'bg-legumes' },
    { id: 'dried',   ru: 'Сухофрукты',     en: 'Dried & Nuts',     count: 6,  bg: 'bg-dried' },
    { id: 'melons',  ru: 'Бахчевые',       en: 'Melons',           count: 4,  bg: 'bg-melons' },
  ];
  return (
    <section className="section" style={{ paddingBottom: 48 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Каталог</div>
          <h2>Что мы экспортируем <em>из Узбекистана</em></h2>
          <div className="sub">Пять направлений, каждое — со своим сезоном, фермерами и характером.</div>
        </div>
        <div className="cats">
          {cats.map((c) => (
            <button key={c.id} className="cat-card" onClick={() => onPick(c.id)}>
              <div className={`bg ${c.bg}`}></div>
              <div className="overlay"></div>
              <div className="star"><Star8 stroke="#C9A961" sw={0.9} /></div>
              <div className="count">{c.count} позиций</div>
              <div className="label">
                <div className="ru">{c.ru}</div>
                <div className="en">{c.en}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catalog({ filter, setFilter, onAdd, fav, toggleFav }) {
  const visible = useMemo(() => {
    if (filter === 'all') return window.PRODUCTS;
    return window.PRODUCTS.filter(p => p.cat === filter);
  }, [filter]);

  const counts = useMemo(() => {
    const c = { all: window.PRODUCTS.length };
    window.PRODUCTS.forEach(p => { c[p.cat] = (c[p.cat]||0)+1; });
    return c;
  }, []);

  return (
    <section className="section" id="catalog" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Свежий урожай</div>
          <h2>Хиты <em>сезона</em></h2>
          <div className="sub">Цены указаны как EXW Tashkent для контейнерных партий. Финальная стоимость зависит от сорта, упаковки и Incoterms.</div>
        </div>

        <div className="filter-bar">
          {window.CATEGORIES.map(c => (
            <button
              key={c.id}
              className={`chip ${filter === c.id ? 'active' : ''}`}
              onClick={() => setFilter(c.id)}
            >
              {c.ru}<span className="num">{counts[c.id] || 0}</span>
            </button>
          ))}
        </div>

        <div className="products">
          {visible.map((p) => (
            <article className="prod" key={p.id}>
              <div className="prod-img">
                <div className="pattern"></div>
                <div className="silhouette"><ProdShape shape={p.shape} color={p.color} /></div>
                {p.tag && <span className={`prod-tag ${p.tagKind || ''}`}>{p.tag}</span>}
                <button
                  className={`prod-fav ${fav[p.id] ? 'on' : ''}`}
                  onClick={() => toggleFav(p.id)}
                  aria-label="В избранное"
                >
                  <Icon.Heart filled={!!fav[p.id]} />
                </button>
              </div>
              <div className="prod-body">
                <div className="prod-cat">
                  {window.CATEGORIES.find(c => c.id === p.cat)?.ru}
                </div>
                <div className="prod-name">{p.name}</div>
                <div className="prod-variety">{p.variety}</div>
                <div className="prod-meta">
                  <span><Icon.Sun /> {p.season}</span>
                  <span><Icon.Container /> {p.moq}</span>
                </div>
                <div className="prod-foot">
                  <div className="prod-price">
                    <span className="from">от</span>
                    <span className="val">${p.price.toFixed(2)} <small>/{p.unit}</small></span>
                  </div>
                  <button className="prod-cta" onClick={() => onAdd(p)}>
                    Запросить <Icon.Arrow />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="section story" id="story">
      <div className="wrap story-inner">
        <div>
          <div className="eyebrow" style={{color:'#E6C988'}}>Наша история</div>
          <h2>Дары земли, <em>гостеприимство</em> Востока</h2>
          <p>
            Central Asia Harvest — экспортный дом из Ташкента, объединяющий более 340 фермерских
            хозяйств Ферганской долины, Самаркандской и Хорезмской областей. Мы выросли из
            семейного дела трёх поколений и сегодня поставляем урожай в Европу, страны Залива,
            Юго-Восточную Азию и Китай.
          </p>
          <p>
            На наших полях работают агрономы старой школы и инженеры точного земледелия —
            древние традиции орошения «арык» встречаются с дронной аналитикой и контролем влаги
            в реальном времени.
          </p>
          <ul className="story-points">
            <li><span><strong>340+ фермеров</strong> — наши прямые партнёры, без посредников.</span></li>
            <li><span><strong>5 регионов</strong> — Фергана, Самарканд, Бухара, Хорезм, Кашкадарья.</span></li>
            <li><span><strong>14 лет опыта</strong> в экспортной логистике и таможенном оформлении.</span></li>
            <li><span><strong>Свой склад в порту Бандар-Аббас</strong> для перевалки на Залив.</span></li>
          </ul>
        </div>
        <div className="story-art">
          <div className="story-art-inner">
            <Medallion />
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: 1, t: 'Запрос и расчёт', d: 'Согласуем сорт, объём, упаковку, Incoterms. Присылаем коммерческое предложение в течение 24 часов.' },
    { n: 2, t: 'Сбор урожая', d: 'Урожай собирается на пике зрелости агрономами наших фермерских кооперативов под контролем QC.' },
    { n: 3, t: 'Сортировка и упаковка', d: 'Калибровка, мойка, упаковка в крафт-боксы, ящики или мешки с вашим брендингом по запросу.' },
    { n: 4, t: 'Экспортная отгрузка', d: 'Рефрижераторы DAF, ж/д контейнеры или авиа. Доставка в порты и до двери получателя.' },
  ];
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Как мы работаем</div>
          <h2>От поля <em>до вашего порта</em></h2>
          <div className="sub">Каждая партия проходит четыре контрольные точки качества — от агронома на ферме до экспедитора в порту назначения.</div>
        </div>
        <div className="process-grid">
          {steps.map((s) => (
            <div className="process-step" key={s.n}>
              <div className="dot">{String(s.n).padStart(2,'0')}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const cards = [
    { n: '01', ic: <Icon.Leaf />,   h: 'Прямой контракт с фермерами', p: 'Никаких перекупщиков. Вы получаете цену от хозяйства плюс прозрачную экспортную наценку.' },
    { n: '02', ic: <Icon.Shield />, h: 'Контроль качества на каждом этапе', p: 'Лаборатория Tashkent QA проверяет каждую партию на остатки пестицидов и патогены.' },
    { n: '03', ic: <Icon.Globe />,  h: '28 стран экспорта', p: 'Опыт работы с регулирующими органами ЕС, EAEU, GCC, ASEAN — таможня без сюрпризов.' },
    { n: '04', ic: <Icon.Truck />,  h: 'Своя рефрижераторная логистика', p: 'Парк из 40 машин и доступ к ж/д контейнерам через ТЛК «Ангрен» и «Навои Free Zone».' },
  ];
  return (
    <section className="section why" id="why">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Почему мы</div>
          <h2>Четыре причины <em>работать с нами</em></h2>
        </div>
        <div className="why-grid">
          {cards.map((c) => (
            <div className="why-card" key={c.n}>
              <div className="num">{c.n}</div>
              <div className="ic">{c.ic}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', country: '', category: 'all', volume: '' });
  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <div className="cta-inner">
          <div>
            <div className="eyebrow" style={{color:'#E6C988'}}>Запросить B2B-прайс</div>
            <h2>Готовы отгрузить <em>ваш контейнер</em>?</h2>
            <p>
              Заполните форму — менеджер-экспортёр свяжется в течение рабочего дня
              с расчётом по Incoterms, образцами и графиком отгрузок.
            </p>
            <div style={{marginTop: 32, display:'flex', gap:24, flexWrap:'wrap', fontSize:13, opacity:0.8}}>
              <span><strong style={{color:'#E6C988'}}>+998 71 200 84 84</strong><br/>отдел экспорта</span>
              <span><strong style={{color:'#E6C988'}}>export@cah.uz</strong><br/>заявки и спецификации</span>
            </div>
          </div>
          <form className="cta-form" onSubmit={(e) => { e.preventDefault(); onSubmit(form); setForm({name:'',email:'',country:'',category:'all',volume:''}); }}>
            <input
              required
              placeholder="Имя и компания"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required type="email"
              placeholder="E-mail для контракта"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              required
              placeholder="Страна и порт назначения"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            />
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="all">Категория — любая</option>
              <option value="fruits">Свежие фрукты</option>
              <option value="veg">Овощи</option>
              <option value="legumes">Бобовые</option>
              <option value="dried">Сухофрукты и орехи</option>
              <option value="melons">Бахчевые</option>
            </select>
            <input
              placeholder="Объём заказа, тонн"
              value={form.volume}
              onChange={(e) => setForm({ ...form, volume: e.target.value })}
            />
            <button type="submit">Получить прайс</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-line">
              <div className="mark"><LogoMark color="#E6C988" accent="#E6C988" /></div>
              <div className="name">Central Asia<br/>Harvest</div>
            </div>
            <p>
              Экспортный дом фруктов, овощей, бобовых, сухофруктов и бахчевых из
              Узбекистана. Прямые контракты с фермерами Ферганы, Самарканда и Хорезма.
            </p>
          </div>
          <div className="footer-col">
            <h5>Каталог</h5>
            <ul>
              <li><a href="#">Свежие фрукты</a></li>
              <li><a href="#">Овощи</a></li>
              <li><a href="#">Бобовые</a></li>
              <li><a href="#">Сухофрукты и орехи</a></li>
              <li><a href="#">Бахчевые</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Компания</h5>
            <ul>
              <li><a href="#story">О нас</a></li>
              <li><a href="#process">Экспорт и логистика</a></li>
              <li><a href="#why">Сертификаты</a></li>
              <li><a href="#">Карьера</a></li>
              <li><a href="#">Пресс-релизы</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Контакты</h5>
            <address>
              ул. Амира Темура 108<br/>
              Ташкент 100084<br/>
              Узбекистан<br/><br/>
              +998 71 200 84 84<br/>
              export@cah.uz
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Central Asia Harvest LLC · ИНН 304218765</span>
          <span>Halal · GlobalG.A.P. · HACCP · ISO 22000</span>
        </div>
      </div>
    </footer>
  );
}

function Toast({ msg, show }) {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <Icon.Check />
      <span>{msg}</span>
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState({});
  const [toast, setToast] = useState({ msg: '', show: false });
  const timerRef = useRef(null);

  function notify(msg) {
    setToast({ msg, show: true });
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 2400);
  }

  function onAdd(p) {
    setCart(c => [...c, p.id]);
    notify(`«${p.name}» добавлен в запрос`);
  }
  function toggleFav(id) {
    setFav(f => {
      const next = { ...f, [id]: !f[id] };
      return next;
    });
  }
  function onScrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function onSubmit(form) {
    notify(`Спасибо, ${form.name.split(' ')[0] || 'партнёр'}! Прайс отправлен на ${form.email}`);
  }
  function pickCat(id) {
    setFilter(id);
    setTimeout(() => onScrollTo('catalog'), 60);
  }

  return (
    <>
      <TopBar />
      <Header cartCount={cart.length} onScrollTo={onScrollTo} />
      <Hero />
      <div className="ornament-strip"></div>
      <Trust />
      <Categories onPick={pickCat} />
      <Catalog
        filter={filter}
        setFilter={setFilter}
        onAdd={onAdd}
        fav={fav}
        toggleFav={toggleFav}
      />
      <div className="ornament-strip alt"></div>
      <Story />
      <Process />
      <Why />
      <CTA onSubmit={onSubmit} />
      <Footer />
      <Toast msg={toast.msg} show={toast.show} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
