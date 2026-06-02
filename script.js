/* =========================================================
   Federalism 101 - Landing Page Scripts
========================================================= */

const LECTURES = [
    {
        n: 1,
        title: 'الفدرالية ليست تقسيمًا: ضبط المصطلحات قبل النقاش',
        tag: 'تأسيس',
        category: 'foundations',
        axis: 'المصطلحات الأساسية',
        topics: [
            'الفدرالية، اللامركزية الإدارية، اللامركزية الموسعة',
            'الكونفدرالية، التقسيم، الحكم الذاتي، النظام المركزي',
            'الدولة المركّبة، الدولة البسيطة، السيادة، الحياد، المواطنة'
        ],
        goal: 'إزالة الالتباس اللغوي والسياسي حول المفاهيم قبل الدخول في المضمون.',
        icon: 'fa-book-open'
    },
    {
        n: 2,
        title: 'الفدرالية ليست نموذجًا واحدًا: تجارب العالم',
        tag: 'تأسيس',
        category: 'foundations',
        axis: 'الفدرالية المقارنة',
        topics: [
            'نماذج من سويسرا، ألمانيا، الولايات المتحدة، كندا',
            'تجارب بلجيكا، الإمارات، الهند',
            'كيف يصمّم كلّ بلد فدراليّته بحسب تاريخه وجغرافيته'
        ],
        goal: 'كسر فكرة أن الفدرالية شكل واحد جامد، وإثبات أنها نظام مرن قابل للتكيّف.',
        icon: 'fa-globe'
    },
    {
        n: 3,
        title: 'من المتصرفية إلى الحرب الأهلية: جذور الأزمة اللبنانية',
        tag: 'تاريخ',
        category: 'history',
        axis: 'لبنان قبل الطائف',
        topics: [
            'المتصرفية، ولادة لبنان الكبير، الميثاق الوطني',
            'النظام التوافقي، الطائفية السياسية',
            'الحرب الأهلية وأسباب فشل الصيغة المركزية'
        ],
        goal: 'فهم الخلفية التاريخية للنقاش الفدرالي، وأن أزمة النظام ليست وليدة اليوم.',
        icon: 'fa-landmark'
    },
    {
        n: 4,
        title: 'الطائف: تسوية أنهت الحرب ولم تبنِ دولة',
        tag: 'تاريخ',
        category: 'history',
        axis: 'لبنان بعد الطائف',
        topics: [
            'اتفاق الطائف وإعادة توزيع الصلاحيات',
            'وعد اللامركزية الإدارية والوصاية السورية',
            'إعادة إنتاج المركزية، المحاصصة، تعطّل المؤسسات'
        ],
        goal: 'فهم لماذا لم يحلّ الطائف الأزمة البنيوية وكيف تحوّل إلى صيغة مشلولة.',
        icon: 'fa-file-contract'
    },
    {
        n: 5,
        title: 'انهيار الدولة وعودة السؤال الفدرالي',
        tag: 'سياق',
        category: 'context',
        axis: 'لبنان اليوم',
        topics: [
            'انهيار الدولة، الشلل المؤسساتي، السلاح خارج الدولة',
            'الانهيار المالي، أزمة الخدمات، تهميش الأطراف',
            'فشل المركزية وفقدان الثقة بين الجماعات'
        ],
        goal: 'شرح لماذا عاد النقاش الفدرالي بقوة اليوم كسؤال عملي مرتبط ببقاء الدولة.',
        icon: 'fa-city'
    },
    {
        n: 6,
        title: 'ماذا طُرح فعليًا؟ المشاريع الفدرالية واللامركزية في لبنان',
        tag: 'سياق',
        category: 'context',
        axis: 'المشاريع المقترحة',
        topics: [
            'تاريخ الطروحات الفدرالية واللامركزية في لبنان',
            'أبرز المشاريع قديمًا وحديثًا والفروقات بينها',
            'موقع FederalLebanon.org ضمن الخطاب الفدرالي المعاصر'
        ],
        goal: 'تعريف المشاركين بما طُرح فعليًا، وعدم إبقاء النقاش في مستوى الشعارات.',
        icon: 'fa-list-check'
    },
    {
        n: 7,
        title: 'دولة أقوى لا دولة أضعف: الفدرالية والسيادة والحياد',
        tag: 'تطبيق',
        category: 'practice',
        axis: 'الفدرالية، السيادة، الحياد',
        topics: [
            'العلاقة بين الفدرالية وبناء دولة قوية',
            'الحياد وقرار السلم والحرب وتوزيع السلطة',
            'توحيد السيادة خارجيًا عبر إعادة التنظيم الداخلي'
        ],
        goal: 'تفكيك فكرة أن الفدرالية تضعف الدولة، وإثبات أنها أداة لإعادة بنائها.',
        icon: 'fa-shield-halved'
    },
    {
        n: 8,
        title: 'كيف نشرح الفدرالية للناس؟',
        tag: 'تطبيق',
        category: 'practice',
        axis: 'خطاب الفدرالية',
        topics: [
            'كيف نتحدث مع شخص خائف من الفدرالية',
            'مخاطبة الطلاب، العائلة، المناطق، الإعلام، والسوشال ميديا',
            'الانتقال من الخطاب الدفاعي إلى خطاب إيجابي'
        ],
        goal: 'تدريب المشاركين على التواصل السياسي الهادئ والمقنع وغير الاستفزازي.',
        icon: 'fa-bullhorn'
    },
    {
        n: 9,
        title: 'كيف نرد على الاعتراضات الشائعة؟',
        tag: 'عمل',
        category: 'action',
        axis: 'الهواجس والاعتراضات',
        topics: [
            'الفدرالية تعني التقسيم / لبنان صغير لا يحتملها',
            'الفدرالية مشروع طائفي / تضعف الدولة / تهدد العيش المشترك',
            'الردود المختصرة والعقلانية من دون انفعال أو استفزاز'
        ],
        goal: 'بناء قدرة خطابية عملية على الرد على المخاوف من دون تحويل النقاش لمعركة هوية.',
        icon: 'fa-comments'
    },
    {
        n: 10,
        title: 'تأسيس الخلايا الشبابية: من الفكرة إلى التنظيم',
        tag: 'عمل',
        category: 'action',
        axis: 'من الوعي إلى العمل',
        topics: [
            'كيف نؤسس خلية جامعية أو مناطقية',
            'توزيع المهام: بحث، محتوى، تواصل، تصميم، سوشال ميديا',
            'ربط الخلايا ضمن شبكة وطنية توعوية'
        ],
        goal: 'نقل المشاركين من مرحلة الفهم الفردي إلى العمل الجماعي المنظّم.',
        icon: 'fa-network-wired'
    }
];

/* =========================================================
   Preloader
========================================================= */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => preloader && preloader.classList.add('hidden'), 600);
    initAudioPlayer();
});

function initAudioPlayer() {
    const soundToggle = document.getElementById('soundToggle');
    const audio = document.getElementById('heroAudio');
    const soundNote = document.getElementById('soundNote');
    if (!soundToggle || !audio) return;

    audio.volume = 0.72;
    audio.muted = true;

    const setButtonState = (playing) => {
        soundToggle.classList.toggle('active', playing);
        soundToggle.innerHTML = playing
            ? '<i class="fa-solid fa-volume-high"></i>'
            : '<i class="fa-solid fa-volume-xmark"></i>';
        soundToggle.setAttribute('aria-label', playing ? 'إيقاف الصوت' : 'تشغيل الصوت');
    };

    const tryPlay = () => {
        audio.play()
            .then(() => {
                audio.muted = false;
                setButtonState(true);
                soundNote?.classList.add('hidden');
            })
            .catch(() => {
                setButtonState(false);
                soundNote?.classList.remove('hidden');
            });
    };

    soundToggle.addEventListener('click', () => {
        if (audio.paused) {
            tryPlay();
        } else {
            audio.pause();
            setButtonState(false);
            soundNote?.classList.remove('hidden');
        }
    });

    audio.addEventListener('canplaythrough', tryPlay);
    tryPlay();

    document.addEventListener('click', tryPlay, { once: true, passive: true });
    document.addEventListener('keydown', tryPlay, { once: true, passive: true });
    document.addEventListener('touchstart', tryPlay, { once: true, passive: true });
}

(function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    const cutTime = 7;
    if (!video) return;

    video.addEventListener('loadedmetadata', () => {
        if (video.currentTime > 0) {
            video.currentTime = 0;
        }
    });

    video.addEventListener('timeupdate', () => {
        if (!video.duration) return;
        if (video.currentTime >= cutTime) {
            video.currentTime = 0;
        }
    });
})();

/* =========================================================
   Particles
========================================================= */
(function makeParticles() {
    const wrap = document.getElementById('particles');
    if (!wrap) return;
    const count = window.innerWidth < 600 ? 12 : 26;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('span');
        p.className = 'p';
        const size = 4 + Math.random() * 14;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.bottom = -size + 'px';
        p.style.animationDuration = (18 + Math.random() * 22) + 's';
        p.style.animationDelay = (-Math.random() * 30) + 's';
        p.style.opacity = (0.04 + Math.random() * 0.1).toString();
        wrap.appendChild(p);
    }
})();

/* =========================================================
   Custom cursor
========================================================= */
(function initCursor() {
    if (window.innerWidth < 900) return;
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });
    (function loop() {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        requestAnimationFrame(loop);
    })();

    const hoverables = document.querySelectorAll('a, button, .feature, .lecture, .pillar, .tab');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
})();

/* =========================================================
   Scroll progress
========================================================= */
(function scrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    const update = () => {
        const h = document.documentElement;
        const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
        bar.style.width = scrolled + '%';
    };
    document.addEventListener('scroll', update, { passive: true });
    update();
})();

/* =========================================================
   Data-anim reveal (fallback to AOS via data-anim)
========================================================= */
(function reveal() {
    const els = document.querySelectorAll('[data-anim]');
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('is-visible');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
})();

/* =========================================================
   Counters
========================================================= */
(function counters() {
    const els = document.querySelectorAll('.stat-num[data-count]');
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target;
            const target = +el.dataset.count;
            const dur = 1400;
            const start = performance.now();
            const step = (t) => {
                const p = Math.min(1, (t - start) / dur);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(eased * target).toString();
                if (p < 1) requestAnimationFrame(step);
                else el.textContent = target.toString();
            };
            requestAnimationFrame(step);
            io.unobserve(el);
        });
    }, { threshold: 0.4 });
    els.forEach(el => io.observe(el));
})();

/* =========================================================
   Year
========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =========================================================
   Render lectures + tabs
========================================================= */
(function lectures() {
    const tl = document.getElementById('timeline');
    if (!tl) return;

    const render = (filter = 'all') => {
        tl.innerHTML = '';
        LECTURES.forEach((L, idx) => {
            const show = filter === 'all' || L.category === filter;
            const card = document.createElement('article');
            card.className = 'lecture' + (show ? '' : ' hidden');
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', (idx * 60).toString());
            card.innerHTML = `
                <div class="lecture-head">
                    <div class="lecture-num">${String(L.n).padStart(2, '0')}</div>
                    <div>
                        <span class="lecture-tag">${L.tag}</span>
                        <h3 class="lecture-title">${L.title}</h3>
                    </div>
                </div>
                <div class="lecture-body">
                    <div class="lecture-axis">${L.axis}</div>
                    <ul class="lecture-topics">
                        ${L.topics.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                    <div class="lecture-goal">
                        <strong>الهدف</strong>
                        ${L.goal}
                    </div>
                </div>
                <div class="lecture-foot">
                    <span><i class="fa-regular fa-clock"></i> محاضرة ${toArabicNum(L.n)}</span>
                    <span><i class="fa-solid ${L.icon}"></i></span>
                </div>
            `;
            tl.appendChild(card);
        });
        if (window.AOS) AOS.refresh();
    };

    function toArabicNum(n) {
        return n.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    }

    document.querySelectorAll('.tab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            render(btn.dataset.tab);
        });
    });

    render('all');
})();

/* =========================================================
   GSAP hero
========================================================= */
(function heroAnim() {
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // initial hero
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.1 } });
    tl.from('.hero-badge', { y: 20, opacity: 0, delay: 0.3 })
      .from('.hero-logo-wrap', { scale: 0.6, opacity: 0, duration: 1.3, ease: 'back.out(1.4)' }, '-=0.6')
      .from('.hero-title-line', { y: 40, opacity: 0 }, '-=0.7')
      .from('.hero-title-num', { scale: 0.4, opacity: 0, rotation: -20, ease: 'back.out(2)' }, '-=0.5')
      .from('.hero-subtitle', { y: 20, opacity: 0 }, '-=0.5')
      .from('.hero-desc', { y: 20, opacity: 0 }, '-=0.4')
      .from('.hero-cta .btn', { y: 20, opacity: 0, stagger: 0.12 }, '-=0.4')
      .from('.hero-stats', { y: 30, opacity: 0 }, '-=0.4')
      .from('.hero-scroll', { y: 10, opacity: 0 }, '-=0.3');

    // hero parallax
    gsap.to('.hero-logo', {
        yPercent: -25,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
    gsap.to('.hero-title', {
        yPercent: -15,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // pillars parallax
    gsap.utils.toArray('.pillar').forEach((p, i) => {
        gsap.from(p.querySelector('.pillar-icon'), {
            rotation: -180,
            scale: 0,
            duration: 1,
            ease: 'back.out(1.6)',
            scrollTrigger: {
                trigger: p,
                start: 'top 80%'
            }
        });
    });

    // section title parallax
    gsap.utils.toArray('.section-title').forEach(t => {
        gsap.from(t, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: t, start: 'top 85%' }
        });
    });
})();

/* =========================================================
   AOS init
========================================================= */
if (window.AOS) {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60
    });
}

/* =========================================================
   Form
========================================================= */
(function form() {
    const form = document.getElementById('registerForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.innerHTML;
        btn.innerHTML = '<span>تمّ الإرسال ✓</span>';
        btn.style.background = '#0aa66e';
        btn.style.boxShadow = '0 12px 28px rgba(10, 166, 110, 0.4)';
        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = '';
            btn.style.boxShadow = '';
            form.reset();
        }, 2400);
    });
})();

/* =========================================================
   Smooth scroll for anchors (Lenis-like easing)
========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id.length > 1) {
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.scrollY - 40;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    });
});
