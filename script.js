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
        // --- APLIKASI YANG SUDAH ADA ---
        "CapCut Pro": {
            img: "https://th.bing.com/th/id/OSAAS.9309E57AEB6FAE9D260C0BB567E36678?w=72&h=72&c=1&rs=1&o=6&dpr=1.3&pid=TechQna",
            packages: [ 
                { type: "Promo", name: "1 Bulan (private)", price: 20000, oldPrice: 28000 }, 
                { type: "Harga normal", name: "1 bulan (Private)", price: 28000 }, 
            ],
            stock: 12,
            soldToday: 27,
            category: "Editing"
        },
        "Canva Pro": {
            img: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2c/ef/18/2cef18d1-4a3b-b801-392f-98b091bf44b7/icon.png/434x0w.webp",
            packages: [ 
                { type: "Promo", name: "1 bulan", price: 6000, oldPrice: 10000 },
                { type: "Promo", name: "2 bulan", price: 10000, oldPrice: 13000 },
                { type: "Promo", name: "Seumur hidup", price: 16000, oldPrice: 20000 },
                { type: "Harga normal", name: "3 bulan", price: 15000 } 
            ],
            stock: 10,
            soldToday: 23,
            category: "Editing"
        },
        "Viu": {
            img: "https://play-lh.googleusercontent.com/b09h7aIfYMfBtlFRVul6j7jV3pE-gFIHEvR6MmD7jnKxmrBshFNK8-HZwNpvaiI6kR4=s96-rw",
            packages: [ 
                { type: "Promo", name: "1 tahun", price: 18000, oldPrice: 25000 },
                { type: "Harga normal", name: "1 tahun", price: 25000 }
            ],
            stock: 35,
            soldToday: 22,
            category: "Film & Hiburan"
        },
        "Netflix Premium": {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/2048px-Netflix_2015_N_logo.svg.png",
            packages: [ 
                { type: "1p1u", name: "7 hari (sharing)", price: 15000 },
                { type: "1p1u", name: "1 bulan (Sharing)", price: 30000 },
                { type: "1p1u", name: "2 bulan (sharing)", price: 55000 },
                { type: "Promo", name: "1 bulan", price: 20000, oldPrice: 25000 },
                { type: "1p2u", name: "7 hari (sharing)", price: 13500 },
                { type: "1p2u", name: "2 bulan (sharing)", price: 45000 },
                { type: "Semi private", name: "1 bulan", price: 42000 },
                { type: "Semi private", name: "2 bulan", price: 80000 },
                { type: "Private", name: "1 bulan", price: 55000 },
                { type: "Private", name: "2 bulan", price: 100000 }
            ],
            stock: 7,
            soldToday: 31,
            category: "Film & Hiburan"
        },
        "Disney+ Premium": {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png",
            packages: [ 
                { type: "Harga", name: "7 hari (sharing)", price: 15000 }, 
                { type: "Harga", name: "1 bulan (antilimit)", price: 26000 }
            ],
            stock: 14,
            soldToday: 6,
            category: "Film & Hiburan"
        },
        "Get Contact Premium": {
            img: "https://play-lh.googleusercontent.com/HFxPZSWLMQDwl57wPs_iB7G0kia5Oi2zugYpd_SHGRuygChUd-zp9PqkD2_nNtVKzwY=s96-rw",
            packages: [ 
                { type: "Promo", name: "1 bulan", price: 15000, oldPrice: 20000 },
                { type: "Harga normal", name: "1 bulan", price: 20000 } 
            ],
            stock: 30,
            soldToday: 7,
            category: "Lainnya"
        },
        "Spotify Premium": {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
            packages: [ 
                { type: "Promo", name: "1 bulan", price: 18000, oldPrice: 30000 },
                { type: "Famplan", name: "2 bulan", price: 40000 },
                { type: "Indplan", name: "1 bulan", price: 26000, oldPrice: 35000 }
            ],
            stock: 25,
            soldToday: 29,
            category: "Musik"
        },

        // --- 12 APLIKASI BARU ---
        "Drakor id": {
            img: "https://tse2.mm.bing.net/th/id/OIP.zg8cD_8lY2whNi6Sua0BIwAAAA?pid=ImgDet&w=207&h=207&c=7&dpr=1,3&o=7&rm=3",
            packages: [ 
                { type: "Harga", name: "1 bulan (sharing)", price: 12000 },
                { type: "Harga", name: "1 tahun (sharing)", price: 20000 }
            ],
            stock: 40, soldToday: 18, category: "Film & Hiburan"
        },
        "Vidio": {
            img: "https://thumbor.prod.vidiocdn.com/jwb8oTlMReuATpmgjkjlashb3fg=/filters:quality(70)/vidio-media-production/uploads/image/source/81/edf05a.png",
            packages: [ 
                { type: "Platinum all device", name: "1 bulan (sharing)", price: 24000 },
                { type: "Platinum all device", name: "1 bulan (private)", price: 40000 },
                { type: "Platinum mobile", name: "1 bulan (sharing)", price: 20000 },
                { type: "Platinum mobile", name: "1 bulan (private)", price: 30000 },
                { type: "Platinum only tv", name: "1 bulan (sharing)", price: 15000 },
                { type: "Platinum only tv", name: "1 bulan (private)", price: 23000 }
            ],
            stock: 28, soldToday: 10, category: "Film & Hiburan"
        },
        "Loklok": {
            img: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxppzhBxX7Tn73EXbykilsnwtEpBoNWrI0eEFfZ7pNTtoEEpGjkZibYAyjWw0AtKzu_tZu3HDk7PnYzWFLN55BG0-&format=source&h=307",
            packages: [ 
                { type: "Akun biasa", name: "1 bulan (sharing)", price: 15000 },
                { type: "Khusus tv", name: "1 bulan (sharing)", price: 25000 },
                { type: "Private", name: "1 bulan", price: 27000 }
            ],
            stock: 32, soldToday: 13, category: "Film & Hiburan"
        },
        "Bstation": {
            img: "https://bstation.net/wp-content/uploads/2025/01/bstation-fav.png",
            packages: [ 
                { type: "Harga", name: "1 bulan (sharing)", price: 15000 },
                { type: "Harga", name: "3 bulan (sharing)", price: 20000 },
                { type: "Harga", name: "12 bulan (sharing)", price: 25000 }
            ],
            stock: 25, soldToday: 6, category: "Film & Hiburan"
        },
        "Picsart": {
            img: "https://cdn-1.webcatalog.io/catalog/picsart/picsart-icon-filled-256.png?v=1720518771427",
            packages: [ 
                { type: "Harga", name: "1 bulan (sharing)", price: 8000 },
                { type: "Harga", name: "2 bulan (sharing)", price: 11000 },
                { type: "Harga", name: "1 bulan (private)", price: 15000 }
            ],
            stock: 44, soldToday: 19, category: "Editing"
        },
        "VSCO": {
            img: "https://play-lh.googleusercontent.com/RdCklOFg3SLN5QF8OR7cU-5bs1ESYo_pqGYrK2ena3XZDcrLOpjf7vLtNQELOR7Uo4MH=s96-rw",
            packages: [ 
                { type: "Harga", name: "1 bulan", price: 18000 },
                { type: "Harga", name: "1 tahun", price: 22000 }
            ],
            stock: 60, soldToday: 8, category: "Editing"
        },
        "Wattpad": {
            img: "https://www.wattpad.com/wp-web-assets/images/wattpad-logo.svg",
            packages: [ 
                { type: "Harga", name: "1 bulan (sharing)", price: 10000 }
            ],
            stock: 55, soldToday: 12, category: "Lainnya"
        },
        "WeTV": {
            img: "https://play-lh.googleusercontent.com/v7drBmcnQjsBqtEj2hRENvcW8adwGgBy2DAc1mYt8_2cbQb7K5DYRSP9_1KdlFrf2Vo=w480-h960-rw",
            packages: [ 
                { type: "Harga", name: "1 bulan (Sharing 3 user)", price: 23000 },
                { type: "Harga", name: "1 bulan (sharing 6 user)", price: 16000 },
                { type: "Harga", name: "1 bulan (private)", price: 40000 }
            ],
            stock: 21, soldToday: 8, category: "Film & Hiburan"
        },
        "Wibuku": {
            img: "https://play-lh.googleusercontent.com/EAVnwk0BS5chgGbygHiIYu2w5OLx54GdXDZQBsdLM4rU_xZ86fPjBmLAljN9wARvmvxA=w480-h960-rw",
            packages: [ 
                { type: "Harga", name: "1 bulan (sharing)", price: 10000 }
            ],
            stock: 30, soldToday: 9, category: "Film & Hiburan"
        },
        "Wink": {
            img: "https://wink.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.cde512b6.png&w=1080&q=75",
            packages: [ 
                { type: "Harga", name: "1 bulan (sharing ios)", price: 15000 }
            ],
            stock: 25, soldToday: 17, category: "Editing"
        },
        "Youku": {
            img: "https://play-lh.googleusercontent.com/ryHEj03ZIHqjQGGOyWcnKxXg86sZGOfYKx8b8ptsZQ-sZhHOt2C1gLZrfZS-83lSrqgm=w480-h960-rw",
            packages: [ 
                { type: "Harga", name: "1 bulan (sharing)", price: 16000 },
                { type: "Harga", name: "3 bulan (sharing)", price: 20000 }
            ],
            stock: 19, soldToday: 6, category: "Film & Hiburan"
        },
        "HBO Go": {
            img: "https://www.hbomax.com/img/hbomax/logo_nav_bar.png",
            packages: [ 
                { type: "Harga", name: "1 bulan (sharing)", price: 20000 },
                { type: "Harga", name: "3 bulan (sharing)", price: 42000 }
            ],
            stock: 22, soldToday: 5, category: "Film & Hiburan"
        }
    };
    
    function populateUI() {
        let swiperWrapperHTML = '';
        const allAppNames = Object.keys(appData);
        
        const discountedAppNames = allAppNames.filter(appName => 
            appData[appName].packages.some(pkg => pkg.type === "Promo")
        );

        const categories = allAppNames.reduce((acc, appName) => {
            const app = appData[appName];
            (acc[app.category] = acc[app.category] || []).push(appName);
            return acc;
        }, {});

        discountedAppNames.forEach(appName => {
            const app = appData[appName];
            if (app) {
                const promoPackage = app.packages.find(p => p.type === "Promo" && p.oldPrice);
                let discountPercentage = 0;
                if (promoPackage) {
                    discountPercentage = Math.round(((promoPackage.oldPrice - promoPackage.price) / promoPackage.oldPrice) * 100);
                }

                const featuredCardHTML = `
                    <div class="swiper-slide">
                        <div class="product-card featured-card cursor-pointer js-open-modal" data-app-name="${appName}">
                            <div class="discount-badge">-${discountPercentage}%</div>
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

        // --- URUTAN KATEGORI YANG DIINGINKAN ---
        const categoryOrder = ["Editing", "Musik", "Film & Hiburan", "Lainnya"];
        let categoriesHTML = '';
        
        categoryOrder.forEach(categoryName => {
            const appsInCategory = categories[categoryName];
            if (appsInCategory && appsInCategory.length > 0) {
                 categoriesHTML += `
                    <div class="category-section">
                        <h3 class="category-title">${categoryName}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6 mt-8">
                            ${appsInCategory.map(appName => {
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
        });
        
        categoriesContainer.innerHTML = categoriesHTML;

        const popularAppNames = allAppNames
            .sort((a, b) => appData[b].soldToday - appData[a].soldToday)
            .slice(0, 4);

        let popularListHTML = '';
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
                let priceHTML = `<p class="text-base text-gray-400">Rp ${pkg.price.toLocaleString('id-ID')}</p>`;
                if (pkg.oldPrice) {
                    priceHTML = `
                        <div>
                            <p class="text-sm text-red-500 line-through">Rp ${pkg.oldPrice.toLocaleString('id-ID')}</p>
                            <p class="text-base text-green-400 font-bold">Rp ${pkg.price.toLocaleString('id-ID')}</p>
                        </div>
                    `;
                }
                
                htmlContent += `
                    <div class="modal-package-item flex items-center justify-between border border-gray-700 p-4 rounded-lg">
                        <div>
                            <p class="text-lg font-medium text-gray-200">${pkg.name}</p>
                            ${priceHTML}
                        </div>
                        <a href="#" class="buy-btn gradient-button text-white font-semibold py-2 px-5 rounded-lg text-sm" data-app-name="${appName}" data-package-type="${type}" data-package-name="${pkg.name}" data-price="${pkg.price.toLocaleString('id-ID')}">Order</a>
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
                const message = `Halo Kaki Shop, saya ingin memesan:\n\nAplikasi: ${appName}\nPaket: ${packageType} (${packageName})\nHarga: Rp ${price}\n\nTerima kasih!`;
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