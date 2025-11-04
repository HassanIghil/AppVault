const apps = [
            {
                id: 1,
                name: 'Pokémon GO',
                category: 'games',
                type: 'Modded',
                version: 'v0.385.2 MOD',
                size: '205 MB',
                features: ['Joystick', 'Teleport', 'Auto Walk'],
                badges: ['MOD', 'No Root'],
                image: 'https://assets-prd.ignimgs.com/2021/12/06/pokemongo-logo-1638824992018.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80',
                link: 'https://apkmody.com/games/pokemon-go/download'
            },
            {
                id: 2,
                name: 'Clash of Clans',
                category: 'games',
                type: 'Modded',
                version: 'v16.0.11 MOD',
                size: '256 MB',
                features: ['Unlimited Gems', 'Unlimited Gold', 'All Troops Unlocked'],
                badges: ['MOD', 'Private Server'],
                image: 'https://wallpapers.com/images/featured-full/clash-of-clans-f88iyeweabo3r6kz.jpg',
                link: 'https://votre-lien-cpa-2.com'
            },
            {
                id: 3,
                name: 'Spotify Premium',
                category: 'premium',
                type: 'Cracked',
                version: 'v8.9.12 Premium',
                size: '89 MB',
                features: ['Ad-Free', 'Unlimited Skips', 'Download Music'],
                badges: ['Premium', 'No Ads'],
                image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=200&fit=crop',
                link: 'https://votre-lien-cpa-3.com'
            },
            {
                id: 4,
                name: 'Netflix Premium',
                category: 'premium',
                type: 'Cracked',
                version: 'v8.101.0 Premium',
                size: '67 MB',
                features: ['4K Streaming', 'All Content Unlocked', 'Ad-Free'],
                badges: ['Premium', '4K'],
                image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=200&fit=crop',
                link: 'https://votre-lien-cpa-4.com'
            },
            {
                id: 5,
                name: 'PUBG Mobile',
                category: 'games',
                type: 'Modded',
                version: 'v3.0.0 VIP',
                size: '732 MB',
                features: ['Aimbot', 'ESP', 'No Recoil'],
                badges: ['VIP', 'Anti-Ban'],
                image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=200&fit=crop',
                link: 'https://votre-lien-cpa-5.com'
            },
            {
                id: 6,
                name: 'Instagram++',
                category: 'mod',
                type: 'Modded',
                version: 'v312.0 Plus',
                size: '124 MB',
                features: ['Download Media', 'Ghost Mode', 'No Ads'],
                badges: ['Plus', 'Privacy'],
                image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop',
                link: 'https://votre-lien-cpa-6.com'
            },
            {
                id: 7,
                name: 'WhatsApp Plus',
                category: 'mod',
                type: 'Modded',
                version: 'v18.40 Plus',
                size: '77.55 MB',
                features: ['Custom Themes', 'Hide Online', 'Anti-Delete'],
                badges: ['Plus', 'Privacy'],
                image: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
                link: 'https://inlivku.online/url/_1j8poSSbMvo'
            },
            {
                id: 8,
                name: 'Minecraft PE',
                category: 'games',
                type: 'Cracked',
                version: 'v1.21.120.4 Full',
                size: '853 MB',
                features: ['All Skins Unlocked', 'All Maps', 'Texture Packs'],
                badges: ['Full', 'Unlocked'],
                image: 'https://hogsaddle.com/wp-content/uploads/2020/02/Minecraft-Pocket-Edition-APK.jpg',
                link: 'https://modsfire.com/d/204GZ0P9n1qLrjG'
            },
            {
                id: 9,
                name: 'YouTube Vanced',
                category: 'mod',
                type: 'Modded',
                version: 'v20.14.43',
                size: '160 MB',
                features: ['No Ads', 'Background Play', 'Dark Mode'],
                badges: ['MOD', 'No Ads'],
                image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
                link: 'https://github.com/vancedapps/vanced.to/releases/download/2025-44/vanced.to_vanced_youtube_v20.14.43_cli5.0.2.2_p5.45.0.6.apk'
            },
            {
                id: 10,
                name: 'Free Fire MAX',
                category: 'games',
                type: 'Modded',
                version: 'v2.118.1 VIP',
                size: '322 MB',
                features: ['Aimbot', 'Wallhack', 'Unlimited Diamonds'],
                badges: ['VIP', 'Anti-Ban'],
                image: 'https://cdn.aptoide.com/imgs/c/3/9/c392496046117cd6930c2b9bdab9372c_icon.png',
                link: 'https://files.5modapk.com/ROOT/All%20Documents%20File/Folder%2015/Garena%20Free%20Fire%20MAX/Free-Fire-MAX-v2.115.1-MOD-OTR-(Getmodsapk.com).xapk'
            },
            {
                id: 11,
                name: 'TikTok++',
                category: 'mod',
                type: 'Modded',
                version: 'v32.5.4 Plus',
                size: '187 MB',
                features: ['Download Videos', 'No Watermark', 'Ghost Mode'],
                badges: ['Plus', 'No Watermark'],
                image: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
                link: 'https://votre-lien-cpa-11.com'
            },
            {
                id: 12,
                name: 'Adobe Photoshop',
                category: 'cracked',
                type: 'Cracked',
                version: 'v17.7.12 Full',
                size: '3.4 GB',
                features: ['All Tools Unlocked', 'AI Features', 'Cloud Storage'],
                badges: ['Premium', 'Full'],
                image: 'https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2023/06/Photoshop.webp&width=160',
                link: 'https://cdn902.onehost.io/2023/Photoshop_Express_17.7.12_1754191665_latestmodapks.com.xapk'
            },
            {
                id: 13,
                name: 'GTA San Andreas',
                category: 'games',
                type: 'Modded',
                version: 'v2.10 MOD',
                size: '2.4 GB',
                features: ['Unlimited Money', 'All Weapons', 'No Ads'],
                badges: ['MOD', 'Full'],
                image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=200&fit=crop',
                link: 'https://votre-lien-cpa-13.com'
            },
            {
                id: 14,
                name: 'Call of Duty Mobile',
                category: 'games',
                type: 'Modded',
                version: 'v1.8.52 VIP',
                size: '1.87 GB',
                features: ['Aimbot', 'Wallhack', 'Unlimited CP'],
                badges: ['VIP', 'Anti-Ban'],
                image: 'https://4kwallpapers.com/images/walls/thumbs_3t/22670.jpg',
                link: 'https://www.4sync.com/web/directDownload/2gxYWiDo/nSxqp12o.72854b348f1528a7d4c84350e4ae236c'
            },
            {
                id: 15,
                name: 'Roblox',
                category: 'games',
                type: 'Modded',
                version: 'v2.614.523 MOD',
                size: '187 MB',
                features: ['Unlimited Robux', 'Speed Hack', 'Fly Mode'],
                badges: ['MOD', 'Premium'],
                image: 'https://t4.ftcdn.net/jpg/04/21/24/77/360_F_421247758_st0YftYSez6gg3x3jP96ih6tIEctyFxg.jpg',
                link: 'https://votre-lien-cpa-15.com'
            },
            {
                id: 16,
                name: 'Genshin Impact',
                category: 'games',
                type: 'Modded',
                version: 'v4.8.0 VIP',
                size: '3.2 GB',
                features: ['Unlimited Primogems', 'God Mode', 'Auto Farm'],
                badges: ['VIP', 'Anti-Ban'],
                image: 'https://play-lh.googleusercontent.com/7qCzAjEpuRo9m6300Kj2LIDHwMPU0F_GxmAbb5QGHLj5CCAHyP3GKxXiPXwUF0v2D5K5Lre2655wrBoxpWY7=w1052-h592-rw',
                link: 'https://votre-lien-cpa-16.com'
            }
        ];

        let currentApp = null;
        let progress = 0;
        let progressInterval = null;
        let currentCategory = 'all';

        function renderApps(appsToRender) {
            const grid = document.getElementById('appsGrid');
            grid.innerHTML = appsToRender.map(app => `
                <div class="rounded-xl overflow-hidden shadow-2xl transition-all hover:shadow-green-500/50 hover-scale bg-gray-800 border border-gray-700">
                    <div class="relative h-40 overflow-hidden">
                        <img src="${app.image}" alt="${app.name}" class="w-full h-full object-cover"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                        <div class="absolute top-3 right-3 flex gap-2">
                            ${app.badges.map(badge => `
                                <span class="px-2 py-1 bg-green-500/90 backdrop-blur-sm text-black text-xs font-bold rounded-full shadow-lg">
                                    ${badge}
                                </span>
                            `).join('')}
                        </div>
                        <div class="absolute bottom-3 left-3">
                            <h4 class="text-xl font-bold text-white drop-shadow-lg">${app.name}</h4>
                            <p class="text-xs text-gray-300">${app.version}</p>
                        </div>
                    </div>
                    
                    <div class="p-5">
                        <div class="mb-4 space-y-2">
                            ${app.features.slice(0, 3).map(feature => `
                                <div class="flex items-center gap-2 text-sm text-gray-300">
                                    <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span>${feature}</span>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="flex items-center justify-between mb-4 text-xs text-gray-400">
                            <span>📦 ${app.size}</span>
                            <span>⭐ ${app.type}</span>
                        </div>
                        
                        <button onclick="openModal(${app.id})" class="w-full py-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-bold rounded-lg hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                            </svg>
                            Download Free
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function filterCategory(category, clickedButton = null) {
            currentCategory = category;
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-green-600', 'text-white');
                btn.classList.add('bg-gray-800', 'text-gray-300');
            });
            
            // Update button styles if a button was clicked
            if (clickedButton) {
                clickedButton.classList.add('active', 'bg-green-600', 'text-white');
                clickedButton.classList.remove('bg-gray-800', 'text-gray-300');
            }
            
            if (category === 'all') {
                renderApps(apps);
            } else {
                const filtered = apps.filter(app => app.category === category);
                renderApps(filtered);
            }
        }

        function openModal(appId) {
            currentApp = apps.find(a => a.id === appId);
            document.getElementById('modal').classList.remove('hidden');
            document.getElementById('modalTitle').textContent = currentApp.name;
            document.getElementById('modalVersion').textContent = currentApp.version;
            document.getElementById('fileSize').textContent = currentApp.size;
            document.getElementById('extraSteps').textContent = `Enjoy: ${currentApp.features.join(', ')}`;
            
            const badgesHTML = currentApp.badges.map(badge => 
                `<span class="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold">${badge}</span>`
            ).join('');
            document.getElementById('modalBadges').innerHTML = badgesHTML;
            
            document.getElementById('progressSection').classList.remove('hidden');
            document.getElementById('instructionsSection').classList.add('hidden');
            
            startProgress();
        }

        function startProgress() {
            progress = 0;
            progressInterval = setInterval(() => {
                progress += 2;
                updateProgress();
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    showInstructions();
                }
            }, 50);
        }

        function updateProgress() {
            const circumference = 2 * Math.PI * 56;
            const offset = circumference * (1 - progress / 100);
            document.getElementById('progressCircle').style.strokeDashoffset = offset;
            document.getElementById('progressText').textContent = progress + '%';
            
            let message = "Preparing download...";
            if (progress >= 33 && progress < 66) message = "Verifying file integrity...";
            if (progress >= 66 && progress < 100) message = "Almost ready...";
            document.getElementById('progressMessage').textContent = message;
        }

        function showInstructions() {
            document.getElementById('progressSection').classList.add('hidden');
            document.getElementById('instructionsSection').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('modal').classList.add('hidden');
            if (progressInterval) {
                clearInterval(progressInterval);
            }
            progress = 0;
            currentApp = null;
        }

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = apps.filter(app =>
                app.name.toLowerCase().includes(searchTerm) ||
                app.type.toLowerCase().includes(searchTerm) ||
                app.features.some(f => f.toLowerCase().includes(searchTerm))
            );
            
            if (currentCategory !== 'all') {
                const categoryFiltered = filtered.filter(app => app.category === currentCategory);
                renderApps(categoryFiltered);
            } else {
                renderApps(filtered);
            }
        });

        // Modal controls
        document.getElementById('closeModal').addEventListener('click', closeModal);
        document.getElementById('downloadBtn').addEventListener('click', () => {
            if (currentApp) {
                window.open(currentApp.link, '_blank');
            }
        });

        // Close modal when clicking outside
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                closeModal();
            }
        });

        // Initialize - Render all apps immediately
        renderApps(apps);
