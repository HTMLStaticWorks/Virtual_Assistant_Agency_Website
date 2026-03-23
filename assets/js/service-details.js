const serviceData = {
    'admin-scheduling': {
        title: 'Admin & Scheduling',
        heading: 'Admin & Scheduling Services',
        description: 'Reclaim your time by offloading your inbox, calendar, and daily administrative friction to a dedicated professional.',
        buttonText: 'Hire an Admin VA',
        features: [
            { title: 'Inbox Management', desc: 'Sorting, responding to, and archiving emails based on your rules.' },
            { title: 'Calendar Booking', desc: 'Coordinating meetings across time zones without the back-and-forth.' },
            { title: 'Travel Arrangements', desc: 'Booking flights, hotels, and preparing detailed itineraries.' },
            { title: 'Document Prep', desc: 'Formatting presentations, standardizing documents, and data organization.' }
        ],
        bgImage: 'assets/images/admin_page.png',
        howItWorks: [
            'Create an "Inbox Management" recurring task.',
            'Upload your SOPs / Guidelines securely.',
            'Chat with your VA in real-time.',
            'Track exact billable hours on your dashboard.'
        ]
    },
    'data-entry-crm': {
        title: 'Data Entry & CRM',
        heading: 'Data Entry & CRM Management',
        description: 'Ensure your business data is accurate, organized, and up-to-date with our meticulous data specialists.',
        buttonText: 'Hire a Data VA',
        features: [
            { title: 'CRM Management', desc: 'Keeping your Salesforce, HubSpot, or custom CRM clean and updated.' },
            { title: 'Lead Generation', desc: 'Scraping and verifying lead lists based on your target criteria.' },
            { title: 'Data Cleaning', desc: 'Removing duplicates, fixing formatting, and validating entries.' },
            { title: 'Spreadsheet Tasks', desc: 'Advanced Excel or Google Sheets work, including complex data entry.' }
        ],
        bgImage: 'assets/images/service-data-entry.png',
        howItWorks: [
            'Upload your data templates or access links.',
            'Define your validation rules and formatting.',
            'Receive daily or weekly progress reports.',
            'Access cleaned data directly via your dashboard.'
        ]
    },
    'customer-support': {
        title: 'Customer Support',
        heading: 'Customer Support Solutions',
        description: 'Provide world-class support to your customers around the clock without the overhead of a full-time team.',
        buttonText: 'Hire a Support VA',
        features: [
            { title: 'Helpdesk Management', desc: 'Handling tickets in Zendesk, Freshdesk, or Intercom efficiently.' },
            { title: 'Live Chat Support', desc: 'Real-time response to customer inquiries on your website.' },
            { title: 'Email Handling', desc: 'Professional responses to customer queries and support issues.' },
            { title: 'FAQ Management', desc: 'Building and maintaining your customer knowledge base.' }
        ],
        bgImage: 'assets/images/hero-about.png',
        howItWorks: [
            'Connect your helpdesk or chat tool to our system.',
            'Provide your support macros and brand voice guide.',
            'Our VAs handle tickets based on your priority levels.',
            'Monitor satisfaction scores on your dashboard.'
        ]
    },
    'bookkeeping': {
        title: 'Bookkeeping',
        heading: 'Bookkeeping & Finance Support',
        description: 'Stay on top of your finances with accurate invoicing, expense tracking, and financial organization.',
        buttonText: 'Hire a Finance VA',
        features: [
            { title: 'Invoicing', desc: 'Generating and sending professional invoices to your clients.' },
            { title: 'Expense Tracking', desc: 'Categorizing expenses and reconciling bank statements.' },
            { title: 'A/P & A/R', desc: 'Managing your accounts payable and receivable systematically.' },
            { title: 'Financial Prep', desc: 'Preparing clean books for your accountant or tax season.' }
        ],
        bgImage: 'assets/images/about-header-bg.png',
        howItWorks: [
            'Grant secure, restricted access to your accounting software.',
            'Forward receipts or link your bank feed.',
            'VAs categorize transactions weekly.',
            'View real-time cashflow summaries on your dashboard.'
        ]
    },
    'social-media': {
        title: 'Social Media Management',
        heading: 'Social Media & Engagement',
        description: 'Build your brand authority and engage your audience across all major social platforms.',
        buttonText: 'Hire a Social VA',
        features: [
            { title: 'Content Scheduling', desc: 'Planning and scheduling posts using Buffer, Hootsuite, or Later.' },
            { title: 'Community Engagement', desc: 'Responding to comments and direct messages on your behalf.' },
            { title: 'Graphic Curation', desc: 'Creating basic brand-aligned visuals using Canva or Adobe Express.' },
            { title: 'Analytics Reporting', desc: 'Tracking growth, engagement, and reach metrics monthly.' }
        ],
        bgImage: 'assets/images/hero-home-2.png',
        howItWorks: [
            'Provide your social media handles and brand assets.',
            'Approve your monthly content calendar.',
            'VAs engage with your community daily.',
            'Review performance reports on your dashboard.'
        ]
    },
    'email-marketing': {
        title: 'Email Marketing',
        heading: 'Email Marketing & Newsletters',
        description: 'Nurture your leads and engage your subscribers with professional email campaigns.',
        buttonText: 'Hire a Marketing VA',
        features: [
            { title: 'Campaign Setup', desc: 'Designing and launching newsletters in Mailchimp or Klaviyo.' },
            { title: 'List Management', desc: 'Segmenting your audience for highly targeted messaging.' },
            { title: 'Automation Flows', desc: 'Setting up welcome sequences and abandoned cart emails.' },
            { title: 'A/B Testing', desc: 'Optimizing subject lines and content for higher open rates.' }
        ],
        bgImage: 'assets/images/hero-home.png',
        howItWorks: [
            'Share your marketing goals and email platform access.',
            'Collaborate on campaign strategy and copy.',
            'VAs manage the technical setup and testing.',
            'Track conversions and ROI on your dashboard.'
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceKey = urlParams.get('service') || 'admin-scheduling';
    const data = serviceData[serviceKey];

    if (data) {
        // Update Metadata
        document.title = `${data.title} - Virtual Assistant Agency`;

        // Update Hero Section
        const hero = document.getElementById('service-hero');
        if (hero) {
            if (data.bgImage.startsWith('linear-gradient')) {
                hero.style.background = data.bgImage;
            } else {
                hero.style.background = `linear-gradient(rgba(10, 15, 29, 0.45), rgba(10, 15, 29, 0.65)), url("${data.bgImage}")`;
                hero.style.backgroundSize = 'cover';
                hero.style.backgroundPosition = 'center';
            }
        }

        // Update Text Content
        const titleEl = document.getElementById('service-title');
        const headingEl = document.getElementById('service-heading');
        const descEl = document.getElementById('service-description');
        const btnEl = document.getElementById('service-btn');

        if (titleEl) titleEl.textContent = data.title;
        if (headingEl) headingEl.textContent = data.heading;
        if (descEl) descEl.textContent = data.description;
        if (btnEl) btnEl.textContent = data.buttonText;

        // Update Features Grid
        const featuresGrid = document.getElementById('features-grid');
        if (featuresGrid) {
            featuresGrid.innerHTML = data.features.map(f => `
                <div class="card">
                    <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--primary-color);">${f.title}</h3>
                    <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">${f.desc}</p>
                </div>
            `).join('');
        }

        // Update How It Works List
        const howItWorksList = document.getElementById('how-it-works-list');
        if (howItWorksList) {
            howItWorksList.innerHTML = data.howItWorks.map((step, index) => `
                <div class="flex gap-4 items-start">
                    <div style="width: 32px; height: 32px; flex-shrink: 0; background: var(--primary-light); color: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">
                        ${index + 1}
                    </div>
                    <p style="color: var(--text-secondary); line-height: 1.6; margin: 0; padding-top: 4px;">${step}</p>
                </div>
            `).join('');
        }
    }
});
