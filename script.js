document.addEventListener('DOMContentLoaded', () => {
    const appDetailModal = document.getElementById('app-detail-modal');
    const modalBox = document.querySelector('.modal-content-box');
    const closeAppDetailModalBtn = document.getElementById('close-app-detail-modal');
    const modalContent = document.getElementById('modal-content');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const swiperWrapper = document.querySelector('.featured-swiper .swiper-wrapper');
    const categoriesContainer = document.getElementById('product-categories-container');
    const popularListContainer = document.getElementById('popular-list-container');


    const appData = {
        "CapCut Pro": {
            img: "https://play-lh.googleusercontent.com/wovt3eI1o8U2gA_T_3t450zCK_o9h_052h0v3wXoP9lBGJ9sWAiL53FvnA-qAFErOFg=w240-h480-rw",
            packages: [ 
                { type: "Promo", name: "7 hari", price: "Rp 18.000" }, 
                { type: "Private", name: "1 bulan", price: "Rp 28.000" }, 
                { type: "Sharing", name: "1 bulan", price: "Rp 18.000" }, 
                { type: "Sharing", name: "2 bulan", price: "Rp 28.000" },
                { type: "Sharing", name: "3 bulan", price: "Rp 38.000" },
                { type: "Sharing", name: "4 bulan", price: "Rp 48.000" },
                { type: "Sharing", name: "5 bulan", price: "Rp 58.000" },
                { type: "Sharing", name: "6 bulan", price: "Rp 68.000" }
            ],
            discount: "15%",
            stock: 12,
            soldToday: 20,
            category: "Editing"
        },
        "Spotify Premium": {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
            packages: [ { type: "Sharing", name: "1 bulan", price: "Rp 25.000" },
                        { type: "Sharing", name: "3 bulan", price: "Rp 70.000" },
                        { type: "Sharing", name: "1 bulan", price: "Rp 25.000" },
                        { type: "Sharing", name: "1 bulan", price: "Rp 25.000" },
                        { type: "Sharing", name: "1 bulan", price: "Rp 25.000" },
                        { type: "Sharing", name: "1 bulan", price: "Rp 25.000" },
                        { type: "Sharing", name: "1 bulan", price: "Rp 25.000" } 
                    ],
            discount: "20%",
            stock: 25,
            soldToday: 58,
            category: "Musik"
        },
        "Canva Pro": {
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Canva_logo_no_text.svg/2048px-Canva_logo_no_text.svg.png",
            packages: [ { type: "Private", name: "1 bulan", price: "Rp 30.000" }, { type: "Sharing", name: "1 bulan", price: "Rp 20.000" } ],
            discount: "10%",
            stock: 18,
            soldToday: 45,
            category: "Editing"
        },
        "Netflix Premium": {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/2048px-Netflix_2015_N_logo.svg.png",
            packages: [ { type: "Private", name: "1 bulan", price: "Rp 45.000" }, { type: "Sharing", name: "1 bulan", price: "Rp 35.000" } ],
            discount: "12%",
            stock: 7,
            soldToday: 72,
            category: "Film & Hiburan"
        },
        "Disney+ Premium": {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png",
            packages: [ { type: "Private", name: "1 bulan", price: "Rp 40.000" }, { type: "Sharing", name: "1 bulan", price: "Rp 30.000" }],
            discount: "18%",
            stock: 14,
            category: "Film & Hiburan"
        },
        "Get Contact Premium": {
            img: "https://play-lh.googleusercontent.com/4f2tCa21s50csM_A-1sgjB304Am0jHPU6aQFAC0xKufq8dl5a-w4o_T935kymSc-Wq4=w240-h480-rw",
            packages: [ { type: "Private", name: "1 bulan", price: "Rp 15.000" }, { type: "Private", name: "1 tahun", price: "Rp 150.000" } ],
            discount: "25%",
            stock: 30,
            soldToday: 15,
            category: "Lainnya"
        }
    };
    
    function populateUI() {
        let swiperWrapperHTML = '';
        const allAppNames = Object.keys(appData);
        
        // --- UBAH DI SINI UNTUK MEMILIH PRODUK DISKON ---
        const discountedAppNames = ["Canva Pro", "CapCut Pro", "Spotify Premium", "Netflix Premium", "Get Contact Premium"];

        // Group apps by category
        const categories = allAppNames.reduce((acc, appName) => {
            const app = appData[appName];
            (acc[app.category] = acc[app.category] || []).push(appName);
            return acc;
        }, {});

        // Populate Featured Slider based on the discountedAppNames list
        discountedAppNames.forEach(appName => {
            const app = appData[appName];
            if (app) {
                const featuredCardHTML = `
                    <div class="swiper-slide">
                        <div class="product-card featured-card cursor-pointer js-open-modal" data-app-name="${appName}">
                            <div class="discount-badge">-${app.discount}</div>
                            <img src="${app.img}" alt="${appName}" class="product-image">
                            <div class="w-full">
                                <h3 class="product-title">${appName}</h3>
                                <div class="stock-label">Tersisa: ${app.stock}</div>
                            </div>
                        </div>
                    </div>`;
                swiperWrapperHTML += featuredCardHTML;
            }
        });
        
        swiperWrapper.innerHTML = swiperWrapperHTML;

        // Populate Product Categories
        let categoriesHTML = '';
        for (const categoryName in categories) {
            categoriesHTML += `
                <div class="category-section">
                    <h3 class="category-title">${categoryName}</h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6 mt-8">
                        ${categories[categoryName].map(appName => {
                            const app = appData[appName];
                            return `
                                <div class="product-card cursor-pointer js-open-modal" data-app-name="${appName}">
                                    <img src="${app.img}" alt="${appName}" class="product-image">
                                    <h3 class="product-title">${appName}</h3>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }
        categoriesContainer.innerHTML = categoriesHTML;

        // Populate Popular Products List
        let popularListHTML = '';
        const popularAppNames = ["Netflix Premium", "Spotify Premium", "Canva Pro", "CapCut Pro"];
         popularAppNames.forEach((appName, index) => {
            const app = appData[appName];
            if (app) {
                popularListHTML += `
                   <div class="bg-surface border border-border rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-gradient-end hover:shadow-lg">
                        <div class="flex items-center gap-4 w-full sm:w-auto">
                            <span class="text-3xl font-extrabold gradient-text w-12 text-center">#${index + 1}</span>
                            <img src="${app.img}" alt="${appName}" class="w-16 h-16 object-contain rounded-lg bg-white/5 p-1">
                        </div>
                        <div class="flex-grow text-center sm:text-left">
                            <h3 class="text-xl font-semibold text-text-primary">${appName}</h3>
                            <p class="text-sm text-text-secondary flex items-center justify-center sm:justify-start gap-2 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-red-500">
                                    <path fill-rule="evenodd" d="M15.312 5.25a.75.75 0 01.75.75v3.188c0 .442-.358.75-.75.75a.75.75 0 01-.75-.75V8.162l-4.22 4.22a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 00-1.06 0l-3.25 3.25a.75.75 0 11-1.06-1.06l3.75-3.75a.75.75 0 011.06 0l2.25 2.25a.75.75 0 001.06 0l4.72-4.72h-2.062a.75.75 0 010-1.5h3.188a.75.75 0 01.75.75z" clip-rule="evenodd" />
                                </svg>
                                <span>Terjual ${app.soldToday} hari ini</span>
                            </p>
                        </div>
                        <div class="w-full sm:w-auto pt-2 sm:pt-0">
                            <button class="gradient-button w-full text-sm font-bold py-2 px-5 rounded-full js-open-modal" data-app-name="${appName}">
                                Lihat Opsi
                            </button>
                        </div>
                    </div>
                `;
            }
        });
        popularListContainer.innerHTML = popularListHTML;

    }

    function initializeSwiper() {
        new Swiper('.featured-swiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            coverflowEffect: {
                rotate: 0,
                stretch: 80,
                depth: 200,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
             breakpoints: {
                640: {
                   slidesPerView: 2,
                },
                1024: {
                   slidesPerView: 3,
                },
            },
        });
    }

    function openAppModal(appName) {
        const app = appData[appName];
        if (!app) return;

        let htmlContent = `<h3 class="text-3xl font-bold mb-6"><span class="gradient-text">${appName}</span></h3>`;
        const groupedPackages = app.packages.reduce((acc, pkg) => {
            (acc[pkg.type] = acc[pkg.type] || []).push(pkg);
            return acc;
        }, {});

        for (const type in groupedPackages) {
            htmlContent += `<div class="mb-5 text-left"><h4 class="text-xl font-semibold text-gray-300 mb-3">${type}</h4><div class="space-y-3">`;
            groupedPackages[type].forEach(pkg => {
                htmlContent += `
                    <div class="modal-package-item flex items-center justify-between border border-gray-700 p-4 rounded-lg">
                        <div>
                            <p class="text-lg font-medium text-gray-200">${pkg.name}</p>
                            <p class="text-base text-gray-400">${pkg.price}</p>
                        </div>
                        <a href="#" class="buy-btn gradient-button text-white font-semibold py-2 px-5 rounded-lg text-sm" data-app-name="${appName}" data-package-type="${type}" data-package-name="${pkg.name}" data-price="${pkg.price}">Order</a>
                    </div>`;
            });
            htmlContent += `</div></div>`;
        }

        modalContent.innerHTML = htmlContent;
        showModal();
    }

    function setupEventListeners() {
        document.body.addEventListener('click', (e) => {
            const modalTrigger = e.target.closest('.js-open-modal');
            if (modalTrigger) {
                e.stopPropagation();
                const appName = modalTrigger.getAttribute('data-app-name');
                openAppModal(appName);
                return;
            }

            const buyButton = e.target.closest('.buy-btn');
            if(buyButton) {
                e.preventDefault();
                const appName = buyButton.getAttribute('data-app-name');
                const packageType = buyButton.getAttribute('data-package-type');
                const packageName = buyButton.getAttribute('data-package-name');
                const price = buyButton.getAttribute('data-price');
                const phoneNumber = '6282246039066';
                const message = `Halo Kaki Shop, saya ingin memesan:\n\nAplikasi: ${appName}\nPaket: ${packageType} (${packageName})\nHarga: ${price}\n\nTerima kasih!`;
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                
                window.open(whatsappUrl, '_blank');
                hideModal();
                return;
            }
        });

        closeAppDetailModalBtn.addEventListener('click', hideModal);
        appDetailModal.addEventListener('click', (e) => { if (e.target === appDetailModal) hideModal(); });
        mobileMenuButton.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
        document.querySelectorAll('.mobile-nav-link').forEach(link => { link.addEventListener('click', () => { mobileMenu.classList.add('hidden'); }); });
        
        let lastScrollTop = 0;
        const header = document.querySelector('.header');
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Downscroll
                header.style.transform = 'translateY(-100%)';
            } else {
                // Upscroll
                header.style.transform = 'translateY(0)';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
        });
    }

    function showModal() {
        appDetailModal.classList.remove('opacity-0', 'pointer-events-none');
        modalBox.classList.remove('scale-95');
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        appDetailModal.classList.add('opacity-0', 'pointer-events-none');
        modalBox.classList.add('scale-95');
        document.body.style.overflow = 'auto';
    }

    // --- Main Execution ---
    populateUI();
    initializeSwiper();
    setupEventListeners();
});