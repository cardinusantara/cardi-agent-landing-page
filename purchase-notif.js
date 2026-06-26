(function () {
    // 1. INJECT STYLES
    const styles = `
        .purchase-notif-box {
            position: fixed;
            top: -150px;
            left: 20px;
            width: 380px;
            max-width: calc(100vw - 40px);
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: flex-start;
            padding: 16px 36px 16px 16px;
            z-index: 999999;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 1px solid rgba(0, 0, 0, 0.05);
            opacity: 0;
            pointer-events: none;
        }
        .purchase-notif-box.show {
            top: 20px;
            opacity: 1;
            pointer-events: auto;
        }
        .purchase-notif-close {
            position: absolute;
            top: 8px;
            right: 12px;
            background: none;
            border: none;
            font-size: 18px;
            color: #999;
            cursor: pointer;
            line-height: 1;
            padding: 4px;
            transition: color 0.2s;
        }
        .purchase-notif-close:hover {
            color: #333;
        }
        .purchase-notif-left-stripe {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 5px;
            background: #0091FF;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
        }
        .purchase-notif-icon-container {
            margin-right: 14px;
            margin-top: 2px;
            flex-shrink: 0;
            background: rgba(0, 145, 255, 0.08);
            padding: 10px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .purchase-notif-bell {
            width: 20px;
            height: 20px;
        }
        .purchase-notif-content {
            flex-grow: 1;
            text-align: left;
        }
        .purchase-notif-buyer {
            font-size: 13px;
            color: #555;
            margin-bottom: 3px;
            line-height: 1.2;
        }
        .purchase-notif-buyer .buyer-name {
            font-weight: 700;
            color: #222;
        }
        .purchase-notif-buyer .buyer-email {
            color: #666;
            margin-left: 2px;
        }
        .purchase-notif-buyer .time-ago {
            color: #888;
            margin-left: 4px;
        }
        .purchase-notif-product {
            font-size: 13.5px;
            color: #333;
            line-height: 1.4;
            margin-bottom: 2px;
        }
        .purchase-notif-product .product-name {
            font-weight: 700;
            color: #111;
        }
        .purchase-notif-price {
            font-size: 13.5px;
            color: #333;
            margin-bottom: 6px;
            line-height: 1.2;
        }
        .purchase-notif-price .price-val {
            font-weight: 700;
            color: #111;
        }
        .purchase-notif-verified {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 11px;
            color: #0091FF;
            border-top: 1px solid #f0f0f0;
            padding-top: 6px;
            margin-top: 4px;
            line-height: 1;
        }
        .verified-icon {
            width: 12px;
            height: 12px;
        }
        .verified-provider {
            font-weight: 700;
        }
    `;

    const styleEl = document.createElement('style');
    styleEl.innerHTML = styles;
    document.head.appendChild(styleEl);

    // 2. CREATE NOTIFICATION ELEMENT
    const notifContainer = document.createElement('div');
    notifContainer.id = 'purchase-notification';
    notifContainer.className = 'purchase-notif-box';
    notifContainer.innerHTML = `
        <button class="purchase-notif-close" id="purchaseNotifCloseBtn">&times;</button>
        <div class="purchase-notif-left-stripe"></div>
        <div class="purchase-notif-icon-container">
            <svg class="purchase-notif-bell" viewBox="0 0 24 24" fill="none" stroke="#0091FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
        </div>
        <div class="purchase-notif-content">
            <div class="purchase-notif-buyer">
                <span class="buyer-name" id="notifBuyerName">Mua***</span>
                <span class="buyer-email" id="notifBuyerEmail">(mua***@gmail.com)</span>
                <span class="time-ago" id="notifTimeAgo">baru saja</span>
            </div>
            <div class="purchase-notif-product">
                membeli <span class="product-name" id="notifProductName">Produk WAMAPS Full Tools + Bonus Lengkap</span>,
            </div>
            <div class="purchase-notif-price">
                senilai <span class="price-val" id="notifPriceVal">Rp 228.540</span>
            </div>
            <div class="purchase-notif-verified">
                <svg class="verified-icon" viewBox="0 0 24 24" fill="none" stroke="#0091FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Transaction Verified by <strong class="verified-provider">Mayar.ID</strong></span>
            </div>
        </div>
    `;
    document.body.appendChild(notifContainer);

    // 3. VARIATIONS DATA
    const buyers = [
        { name: "Mua***", email: "mua***@gmail.com" },
        { name: "And***", email: "and***@gmail.com" },
        { name: "Sya***", email: "sya***@gmail.com" },
        { name: "Bud***", email: "bud***@yahoo.com" },
        { name: "Sit***", email: "sit***@hotmail.com" },
        { name: "Riz***", email: "riz***@gmail.com" },
        { name: "Dew***", email: "dew***@gmail.com" },
        { name: "Hen***", email: "hen***@outlook.com" },
        { name: "Val***", email: "val***@gmail.com" },
        { name: "Jok***", email: "jok***@gmail.com" },
        { name: "Meg***", email: "meg***@gmail.com" },
        { name: "Ad***", email: "ad***@yahoo.co.id" },
        { name: "Lia***", email: "lia***@gmail.com" },
        { name: "Yus***", email: "yus***@gmail.com" },
        { name: "Ria***", email: "ria***@gmail.com" },
        { name: "Put***", email: "put***@gmail.com" },
        { name: "Agu***", email: "agu***@gmail.com" },
        { name: "Eko***", email: "eko***@gmail.com" },
        { name: "Dwi***", email: "dwi***@gmail.com" },
        { name: "Tri***", email: "tri***@gmail.com" },
        { name: "Nur***", email: "nur***@gmail.com" },
        { name: "Ahm***", email: "ahm***@gmail.com" },
        { name: "Fit***", email: "fit***@yahoo.com" },
        { name: "Ira***", email: "ira***@gmail.com" },
        { name: "Dim***", email: "dim***@gmail.com" }
    ];

    const products = [
        { name: "Paket Starter Cardiagent AI", price: "Rp 999.000" },
        { name: "Paket Starter Cardiagent AI (Bulanan)", price: "Rp 1.499.000" },
        { name: "Lisensi Penuh OptimaSEO Pro", price: "Rp 99.000" },
        { name: "Paket Starter Cardiagent AI (1 Tahun)", price: "Rp 11.988.000" },
        { name: "Bundle OptimaSEO + Cardiagent Pro", price: "Rp 1.098.000" },
        { name: "OptimaSEO Pro - Unlimited License", price: "Rp 99.000" }
    ];

    const timeAgos = ["baru saja", "1 menit yang lalu", "2 menit yang lalu", "3 menit yang lalu", "baru saja"];

    // Elements
    const buyerNameEl = document.getElementById('notifBuyerName');
    const buyerEmailEl = document.getElementById('notifBuyerEmail');
    const productNameEl = document.getElementById('notifProductName');
    const priceValEl = document.getElementById('notifPriceVal');
    const timeAgoEl = document.getElementById('notifTimeAgo');
    const closeBtn = document.getElementById('purchaseNotifCloseBtn');

    let notifTimeout = null;
    let nextNotifInterval = null;

    function hideNotification() {
        notifContainer.classList.remove('show');
    }

    function showRandomNotification() {
        // Pick random indices
        const buyerIndex = Math.floor(Math.random() * buyers.length);
        const productIndex = Math.floor(Math.random() * products.length);
        const timeIndex = Math.floor(Math.random() * timeAgos.length);

        const buyer = buyers[buyerIndex];
        const product = products[productIndex];
        const timeAgo = timeAgos[timeIndex];

        // Update elements
        buyerNameEl.textContent = buyer.name;
        buyerEmailEl.textContent = `(${buyer.email})`;
        productNameEl.textContent = product.name;
        priceValEl.textContent = product.price;
        timeAgoEl.textContent = timeAgo;

        // Show box
        notifContainer.classList.add('show');

        // Hide after 6 seconds
        if (notifTimeout) clearTimeout(notifTimeout);
        notifTimeout = setTimeout(hideNotification, 6000);
    }

    // Set close button behavior
    closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        hideNotification();
        // Pause notifications for 45 seconds if closed manually
        if (nextNotifInterval) clearInterval(nextNotifInterval);
        setTimeout(startNotificationCycle, 45000);
    });

    function startNotificationCycle() {
        if (nextNotifInterval) clearInterval(nextNotifInterval);

        // Show first notification after 4 seconds
        setTimeout(showRandomNotification, 4000);

        // Show subsequent notifications every 12 to 20 seconds
        nextNotifInterval = setInterval(function () {
            // Randomize interval slightly to make it look organic
            const shouldShow = Math.random() > 0.3; // 70% chance to show on each interval tick
            if (shouldShow) {
                showRandomNotification();
            }
        }, 15000);
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startNotificationCycle);
    } else {
        startNotificationCycle();
    }
})();
