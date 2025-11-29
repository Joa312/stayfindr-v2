/**
 * Stayfindr Marketplace - Shared JavaScript
 * Theme, language, and translation utilities
 */

// CSS Variables for theming (reference only - actual CSS is in each HTML file)
const cssVariables = {
    light: {
        '--bg-primary': '#FFFFFF',
        '--bg-secondary': '#F9FAFB',
        '--text-primary': '#111827',
        '--text-secondary': '#6B7280',
        '--border': '#E5E7EB',
        '--accent': '#111827',
        '--accent-hover': '#374151',
        '--success': '#10B981',
        '--warning': '#F59E0B',
        '--error': '#EF4444'
    },
    dark: {
        '--bg-primary': '#111827',
        '--bg-secondary': '#1F2937',
        '--text-primary': '#F9FAFB',
        '--text-secondary': '#9CA3AF',
        '--border': '#374151',
        '--accent': '#F9FAFB',
        '--accent-hover': '#E5E7EB',
        '--success': '#10B981',
        '--warning': '#F59E0B',
        '--error': '#EF4444'
    }
};

// Translations
const translations = {
    sv: {
        // Navigation
        nav: {
            hotels: 'Hotell',
            influencers: 'Influencers',
            howItWorks: 'Hur det fungerar',
            pricing: 'Priser',
            login: 'Logga in',
            logout: 'Logga ut',
            getStarted: 'Kom igång'
        },

        // Sidebar
        sidebar: {
            overview: 'Översikt',
            findHotels: 'Hitta hotell',
            myCollabs: 'Mina samarbeten',
            contentStudio: 'Content Studio',
            myProfile: 'Min profil',
            findInfluencers: 'Hitta influencers',
            activeDeals: 'Aktiva deals',
            hotelProfile: 'Hotellprofil'
        },

        // Breadcrumb
        breadcrumb: {
            dashboard: 'Dashboard'
        },

        // Content Studio
        contentStudio: {
            title: 'Content Studio',
            subtitle: 'Skapa professionellt innehåll med AI-verktyg',
            chooseMaterial: 'Välj material',
            brandAssets: 'Hotellens Brand Assets',
            brandAssetsDesc: 'Hämta godkänt material från hotellets marknadsföringsmapp',
            selectHotel: 'Välj hotell',
            browseMaterial: 'Bläddra material',
            uploadOwn: 'Ladda upp eget',
            uploadOwnDesc: 'Använd dina egna foton och videoklipp',
            dragFiles: 'Dra filer hit eller klicka för att välja',
            createWithAI: 'Skapa med AI',
            nimDesc: 'Skapa AI-genererade videor från dina bilder',
            speelDesc: 'Automatisera innehållsskapande för sociala medier',
            superscaleDesc: 'Skala upp och förbättra bildkvalitet med AI',
            templatesDesc: 'Färdiga mallar för Instagram Stories och Reels',
            openTool: 'Öppna',
            viewTemplates: 'Visa mallar',
            badgeVideo: 'Video',
            badgeSocial: 'Social',
            badgeImages: 'Bilder',
            badgeFree: 'Gratis',
            comingSoon: 'Kommer snart',
            deliverToHotel: 'Leverera till hotell',
            deliverDesc: 'När ditt innehåll är klart, ladda upp det här för granskning',
            selectCollaboration: 'Välj samarbete',
            submitForReview: 'Skicka för granskning',
            ctaTitle: 'Skapa nytt innehåll',
            ctaDesc: 'Använd AI-verktyg i Content Studio',
            ctaButton: 'Öppna Content Studio'
        },

        // Dashboard
        dashboard: {
            title: 'Dashboard',
            subtitle: 'Välkommen tillbaka, Emma',
            browseAll: 'Bläddra alla hotell'
        },

        // Stats
        stats: {
            hotels: 'Registrerade hotell',
            influencers: 'Aktiva influencers',
            collaborations: 'Genomförda samarbeten',
            value: 'Totalt dealvärde',
            activeCollabs: 'Aktiva samarbeten',
            pendingProposals: 'Väntande förslag',
            totalEarnings: 'Total intjäning',
            thisMonth: 'denna månad',
            newResponses: 'nya svar'
        },

        // Deals
        deals: {
            title: 'Mina pågående deals',
            viewAll: 'Visa alla'
        },

        // Recommended
        recommended: {
            title: 'Rekommenderade hotell',
            viewAll: 'Visa alla'
        },

        // Table
        table: {
            hotel: 'Hotell',
            status: 'Status',
            deadline: 'Deadline',
            action: 'Åtgärd'
        },

        // Status
        status: {
            proposalSent: 'Förslag skickat',
            inProgress: 'Pågår',
            contentSubmitted: 'Content inskickat',
            completed: 'Genomförd'
        },

        // Actions
        action: {
            view: 'Visa'
        },

        // Hero
        hero: {
            badge: 'Marketplace för hotell & influencers',
            title: 'Koppla samman hotell med rätt influencers',
            subtitle: 'STAYFINDR gör det enkelt för hotell att hitta kvalificerade influencers och för influencers att hitta autentiska samarbeten.',
            hotelBtn: 'Jag är hotell',
            influencerBtn: 'Jag är influencer'
        },

        // How it works
        howItWorks: {
            title: 'Så fungerar det',
            subtitle: 'Tre enkla steg till ett lyckat samarbete',
            step1: {
                title: 'Skapa profil',
                desc: 'Registrera dig som hotell eller influencer. Fyll i din profil med relevant information och portfolio.'
            },
            step2: {
                title: 'Hitta matchningar',
                desc: 'Vår algoritm matchar hotell med influencers baserat på nisch, målgrupp och preferenser.'
            },
            step3: {
                title: 'Samarbeta',
                desc: 'Kommunicera direkt, bestäm villkor och genomför ert samarbete. Vi hanterar allt administrativt.'
            }
        },

        // For Hotels
        forHotels: {
            title: 'För hotell',
            desc: 'Nå nya gäster genom autentiska influencer-samarbeten. Hitta rätt profiler för er målgrupp.',
            feature1: 'Filtrera influencers på nisch och följare',
            feature2: 'Publicera content requests',
            feature3: 'Hantera alla samarbeten på ett ställe',
            feature4: 'Verifiera influencer-statistik',
            cta: 'Registrera hotell'
        },

        // For Influencers
        forInfluencers: {
            title: 'För influencers',
            desc: 'Hitta spännande hotellsamarbeten som passar din profil. Bygg din portfolio och tjäna pengar.',
            feature1: 'Bläddra bland hotellförfrågningar',
            feature2: 'Skicka förslag direkt till hotell',
            feature3: 'Få ranking baserat på prestationer',
            feature4: 'Säker betalningshantering',
            cta: 'Registrera dig'
        },

        // Footer
        footer: {
            rights: 'Alla rättigheter förbehållna.',
            terms: 'Villkor',
            privacy: 'Integritet',
            contact: 'Kontakt'
        },

        // Deal Flow
        dealFlow: {
            title: 'Samarbetsöversikt',
            breadcrumbCollabs: 'Mina samarbeten',
            paymentSecured: 'Betalning säkrad',
            paymentSecuredDesc: 'hålls av Stayfindr tills leverans godkänns',
            uponApproval: 'Vid godkännande',
            platformFee: 'Stayfindr avgift',
            youReceive: 'Du får',
            agreedTerms: 'Överenskommet',
            contentType: 'Content',
            price: 'Pris',
            deadline: 'Deadline',
            usageRights: 'Användning',
            bothParties: 'Båda parter fritt',
            acceptedOn: 'accepterade',
            messages: 'Meddelanden',
            writeMessage: 'Skriv meddelande...',
            sendMessage: 'Skicka',
            goToContentStudio: 'Gå till Content Studio',
            daysLeft: 'dagar kvar',
            workCanBegin: 'Arbete kan börja'
        },

        // Proposal
        proposal: {
            title: 'Skicka förslag',
            breadcrumbFindHotels: 'Hitta hotell',
            yourProposal: 'Ditt förslag',
            yourPrice: 'Pris ($)',
            hotelBudget: 'Hotellens budget',
            deliveryTime: 'Leveranstid',
            days: 'dagar',
            messageToHotel: 'Meddelande till hotellet',
            messagePlaceholder: 'Beskriv varför du är rätt för detta samarbete...',
            portfolioExamples: 'Portfolio-exempel (valfritt)',
            selectFromPortfolio: 'Välj från portfolio',
            sendProposal: 'Skicka förslag',
            noChargeUntilFunded: 'Du debiteras inte förrän hotellet accepterar och deal är funded',
            contentRequest: 'Content request'
        },

        // Review Delivery
        reviewDelivery: {
            title: 'Granska leverans',
            breadcrumbCollabs: 'Samarbeten',
            deliveredContent: 'Levererat content',
            download: 'Ladda ner',
            escrowHeld: 'hålls i escrow',
            autoApproveIn: 'Auto-godkännande om',
            approve: 'Godkänn',
            requestRevision: 'Begär revision',
            revisionFeedback: 'Ange vad som behöver ändras',
            usageRightsNote: 'Du och influencern får båda använda detta material fritt i er marknadsföring',
            deliveredOn: 'Levererat'
        },

        // Status
        dealStatus: {
            proposed: 'Förslag skickat',
            negotiating: 'Förhandling',
            accepted: 'Accepterat',
            funded: 'Funded',
            inProgress: 'Pågår',
            delivered: 'Levererat',
            revisionRequested: 'Revision begärd',
            approved: 'Godkänt',
            paid: 'Betalt',
            cancelled: 'Avbrutet',
            disputed: 'Tvist'
        },

        // Dashboard additions
        dashboardExtra: {
            waitingForReview: 'Väntar på granskning',
            approvedContent: 'Godkänt content',
            createNewContent: 'Skapa nytt innehåll',
            paymentStatus: 'Betalningsstatus',
            escrowFunded: 'Escrow på plats',
            awaitingPayment: 'Väntar på betalning',
            viewDeal: 'Visa deal',
            autoApproves: 'Auto-godkänns om'
        }
    },

    en: {
        // Navigation
        nav: {
            hotels: 'Hotels',
            influencers: 'Influencers',
            howItWorks: 'How it works',
            pricing: 'Pricing',
            login: 'Log in',
            logout: 'Log out',
            getStarted: 'Get started'
        },

        // Sidebar
        sidebar: {
            overview: 'Overview',
            findHotels: 'Find hotels',
            myCollabs: 'My collaborations',
            contentStudio: 'Content Studio',
            myProfile: 'My profile',
            findInfluencers: 'Find influencers',
            activeDeals: 'Active deals',
            hotelProfile: 'Hotel profile'
        },

        // Breadcrumb
        breadcrumb: {
            dashboard: 'Dashboard'
        },

        // Content Studio
        contentStudio: {
            title: 'Content Studio',
            subtitle: 'Create professional content with AI tools',
            chooseMaterial: 'Choose material',
            brandAssets: 'Hotel Brand Assets',
            brandAssetsDesc: "Access approved material from the hotel's marketing folder",
            selectHotel: 'Select hotel',
            browseMaterial: 'Browse material',
            uploadOwn: 'Upload your own',
            uploadOwnDesc: 'Use your own photos and video clips',
            dragFiles: 'Drag files here or click to select',
            createWithAI: 'Create with AI',
            nimDesc: 'Create AI-generated videos from your images',
            speelDesc: 'Automate content creation for social media',
            superscaleDesc: 'Upscale and enhance image quality with AI',
            templatesDesc: 'Ready-made templates for Instagram Stories and Reels',
            openTool: 'Open',
            viewTemplates: 'View templates',
            badgeVideo: 'Video',
            badgeSocial: 'Social',
            badgeImages: 'Images',
            badgeFree: 'Free',
            comingSoon: 'Coming soon',
            deliverToHotel: 'Deliver to hotel',
            deliverDesc: 'When your content is ready, upload it here for review',
            selectCollaboration: 'Select collaboration',
            submitForReview: 'Submit for review',
            ctaTitle: 'Create new content',
            ctaDesc: 'Use AI tools in Content Studio',
            ctaButton: 'Open Content Studio'
        },

        // Dashboard
        dashboard: {
            title: 'Dashboard',
            subtitle: 'Welcome back, Emma',
            browseAll: 'Browse all hotels'
        },

        // Stats
        stats: {
            hotels: 'Registered hotels',
            influencers: 'Active influencers',
            collaborations: 'Completed collaborations',
            value: 'Total deal value',
            activeCollabs: 'Active collaborations',
            pendingProposals: 'Pending proposals',
            totalEarnings: 'Total earnings',
            thisMonth: 'this month',
            newResponses: 'new responses'
        },

        // Deals
        deals: {
            title: 'My ongoing deals',
            viewAll: 'View all'
        },

        // Recommended
        recommended: {
            title: 'Recommended hotels',
            viewAll: 'View all'
        },

        // Table
        table: {
            hotel: 'Hotel',
            status: 'Status',
            deadline: 'Deadline',
            action: 'Action'
        },

        // Status
        status: {
            proposalSent: 'Proposal sent',
            inProgress: 'In progress',
            contentSubmitted: 'Content submitted',
            completed: 'Completed'
        },

        // Actions
        action: {
            view: 'View'
        },

        // Hero
        hero: {
            badge: 'Marketplace for hotels & influencers',
            title: 'Connect hotels with the right influencers',
            subtitle: 'STAYFINDR makes it easy for hotels to find qualified influencers and for influencers to find authentic collaborations.',
            hotelBtn: "I'm a hotel",
            influencerBtn: "I'm an influencer"
        },

        // How it works
        howItWorks: {
            title: 'How it works',
            subtitle: 'Three simple steps to a successful collaboration',
            step1: {
                title: 'Create profile',
                desc: 'Register as a hotel or influencer. Fill in your profile with relevant information and portfolio.'
            },
            step2: {
                title: 'Find matches',
                desc: 'Our algorithm matches hotels with influencers based on niche, audience and preferences.'
            },
            step3: {
                title: 'Collaborate',
                desc: 'Communicate directly, set terms and carry out your collaboration. We handle all administration.'
            }
        },

        // For Hotels
        forHotels: {
            title: 'For hotels',
            desc: 'Reach new guests through authentic influencer collaborations. Find the right profiles for your target audience.',
            feature1: 'Filter influencers by niche and followers',
            feature2: 'Publish content requests',
            feature3: 'Manage all collaborations in one place',
            feature4: 'Verify influencer statistics',
            cta: 'Register hotel'
        },

        // For Influencers
        forInfluencers: {
            title: 'For influencers',
            desc: 'Find exciting hotel collaborations that fit your profile. Build your portfolio and earn money.',
            feature1: 'Browse hotel requests',
            feature2: 'Send proposals directly to hotels',
            feature3: 'Get ranking based on performance',
            feature4: 'Secure payment handling',
            cta: 'Register'
        },

        // Footer
        footer: {
            rights: 'All rights reserved.',
            terms: 'Terms',
            privacy: 'Privacy',
            contact: 'Contact'
        },

        // Deal Flow
        dealFlow: {
            title: 'Collaboration overview',
            breadcrumbCollabs: 'My collaborations',
            paymentSecured: 'Payment secured',
            paymentSecuredDesc: 'held by Stayfindr until delivery is approved',
            uponApproval: 'Upon approval',
            platformFee: 'Stayfindr fee',
            youReceive: 'You receive',
            agreedTerms: 'Agreed terms',
            contentType: 'Content',
            price: 'Price',
            deadline: 'Deadline',
            usageRights: 'Usage',
            bothParties: 'Both parties freely',
            acceptedOn: 'accepted',
            messages: 'Messages',
            writeMessage: 'Write message...',
            sendMessage: 'Send',
            goToContentStudio: 'Go to Content Studio',
            daysLeft: 'days left',
            workCanBegin: 'Work can begin'
        },

        // Proposal
        proposal: {
            title: 'Send proposal',
            breadcrumbFindHotels: 'Find hotels',
            yourProposal: 'Your proposal',
            yourPrice: 'Price ($)',
            hotelBudget: 'Hotel budget',
            deliveryTime: 'Delivery time',
            days: 'days',
            messageToHotel: 'Message to hotel',
            messagePlaceholder: 'Describe why you are right for this collaboration...',
            portfolioExamples: 'Portfolio examples (optional)',
            selectFromPortfolio: 'Select from portfolio',
            sendProposal: 'Send proposal',
            noChargeUntilFunded: "You won't be charged until the hotel accepts and deal is funded",
            contentRequest: 'Content request'
        },

        // Review Delivery
        reviewDelivery: {
            title: 'Review delivery',
            breadcrumbCollabs: 'Collaborations',
            deliveredContent: 'Delivered content',
            download: 'Download',
            escrowHeld: 'held in escrow',
            autoApproveIn: 'Auto-approval in',
            approve: 'Approve',
            requestRevision: 'Request revision',
            revisionFeedback: 'Specify what needs to be changed',
            usageRightsNote: 'You and the influencer may both use this material freely in your marketing',
            deliveredOn: 'Delivered'
        },

        // Status
        dealStatus: {
            proposed: 'Proposal sent',
            negotiating: 'Negotiating',
            accepted: 'Accepted',
            funded: 'Funded',
            inProgress: 'In progress',
            delivered: 'Delivered',
            revisionRequested: 'Revision requested',
            approved: 'Approved',
            paid: 'Paid',
            cancelled: 'Cancelled',
            disputed: 'Disputed'
        },

        // Dashboard additions
        dashboardExtra: {
            waitingForReview: 'Waiting for review',
            approvedContent: 'Approved content',
            createNewContent: 'Create new content',
            paymentStatus: 'Payment status',
            escrowFunded: 'Escrow funded',
            awaitingPayment: 'Awaiting payment',
            viewDeal: 'View deal',
            autoApproves: 'Auto-approves in'
        }
    }
};

/**
 * Get nested value from object using dot notation
 * @param {Object} obj - The object to search
 * @param {string} path - Dot-notation path (e.g., 'contentStudio.title')
 * @returns {string|undefined} The value or undefined
 */
function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * Apply translations to all elements with data-i18n attribute
 * @param {string} lang - Language code ('sv' or 'en')
 */
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getNestedValue(translations[lang], key);
        if (translation) {
            el.textContent = translation;
        }
    });
}

/**
 * Initialize theme from localStorage
 */
function initTheme() {
    const saved = localStorage.getItem('stayfindr-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
}

/**
 * Update theme toggle icon
 * @param {string} theme - 'light' or 'dark'
 */
function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.textContent = theme === 'light' ? '☀️' : '🌙';
    }
}

/**
 * Toggle between light and dark theme
 */
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('stayfindr-theme', next);
    updateThemeIcon(next);
}

/**
 * Initialize language from localStorage
 */
function initLang() {
    const saved = localStorage.getItem('stayfindr-lang') || 'sv';
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = saved;
    }
    applyTranslations(saved);
}

/**
 * Change language and apply translations
 * @param {string} lang - Language code ('sv' or 'en')
 */
function changeLang(lang) {
    localStorage.setItem('stayfindr-lang', lang);
    applyTranslations(lang);
}

/**
 * Initialize all shared functionality
 * Call this on DOMContentLoaded or at end of body
 */
function initShared() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Language select
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => changeLang(e.target.value));
    }

    // Initialize
    initTheme();
    initLang();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShared);
} else {
    initShared();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        translations,
        cssVariables,
        getNestedValue,
        applyTranslations,
        initTheme,
        updateThemeIcon,
        toggleTheme,
        initLang,
        changeLang,
        initShared
    };
}
