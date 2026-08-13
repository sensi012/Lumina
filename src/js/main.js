/* ==========================================================================
   LUMINA AI - INTERACTIVE MARKETING PLATFORM APPLICATION LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCampaignSimulator();
  initCopywritingPlayground();
  initRoiCalculator();
  initTestimonialsFilter();
  initPricingToggle();
  initFaqAccordion();
  initDemoModal();
  initSocialProofToasts();
  initLeadForms();
});

/* --------------------------------------------------------------------------
   1. NAVBAR SCROLL & MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });
  }
}

/* --------------------------------------------------------------------------
   2. INTERACTIVE AI CAMPAIGN SIMULATOR
   -------------------------------------------------------------------------- */
const SIMULATOR_DATA = {
  saas: {
    roas: '4.8x',
    conversions: '14.2k',
    cpa: '$12.40',
    channels: 'Google Search + LinkedIn Ads',
    headline: 'Scale SaaS Trials 3x Faster with Autonomous AI',
    status: 'High Intent Target Engine Active'
  },
  ecommerce: {
    roas: '6.2x',
    conversions: '28.9k',
    cpa: '$8.15',
    channels: 'Instagram + TikTok Dynamic Shopping',
    headline: 'Turn Abandoned Carts into Repeat Loyal Buyers',
    status: 'Omni-Channel Retargeting Live'
  },
  b2b: {
    roas: '3.9x',
    conversions: '4.8k',
    cpa: '$42.00',
    channels: 'LinkedIn ABM + Executive Email Sequence',
    headline: 'Hyper-Personalized Enterprise Lead Automation',
    status: 'Decision Maker Micro-Targeting'
  },
  mobile: {
    roas: '5.1x',
    conversions: '52.0k',
    cpa: '$3.50',
    channels: 'Meta Ads + In-App Video Banners',
    headline: 'Viral User Acquisition at Sub-$4 Cost Per Install',
    status: 'App Store Optimization & Ad Sync'
  }
};

function initCampaignSimulator() {
  const goalSelect = document.getElementById('simGoal');
  const runBtn = document.getElementById('runSimBtn');
  const outputHeaderStatus = document.getElementById('simStatusText');
  const statRoas = document.getElementById('simRoas');
  const statConv = document.getElementById('simConv');
  const statCpa = document.getElementById('simCpa');
  const headlinePreview = document.getElementById('simHeadlinePreview');
  const channelBadge = document.getElementById('simChannelBadge');

  if (!runBtn) return;

  runBtn.addEventListener('click', () => {
    const selectedKey = goalSelect ? goalSelect.value : 'saas';
    const data = SIMULATOR_DATA[selectedKey] || SIMULATOR_DATA.saas;

    // Show loading state
    runBtn.disabled = true;
    runBtn.innerHTML = '⚡ AI Optimization in Progress...';
    if (outputHeaderStatus) outputHeaderStatus.textContent = 'Analyzing Audience Segments & Bids...';

    setTimeout(() => {
      if (statRoas) statRoas.textContent = data.roas;
      if (statConv) statConv.textContent = data.conversions;
      if (statCpa) statCpa.textContent = data.cpa;
      if (headlinePreview) headlinePreview.textContent = `"${data.headline}"`;
      if (channelBadge) channelBadge.textContent = data.channels;
      if (outputHeaderStatus) outputHeaderStatus.textContent = data.status;

      runBtn.disabled = false;
      runBtn.innerHTML = '🚀 Re-Run AI Campaign Engine';
      
      showToast('✨ Campaign strategy updated with predicted +410% ROAS improvement!');
    }, 900);
  });
}

/* --------------------------------------------------------------------------
   3. AI COPYWRITING PLAYGROUND WIDGET
   -------------------------------------------------------------------------- */
const COPY_VARIATIONS = {
  persuasive: {
    headline: "Stop Wasting 60% of Your Ad Budget. Let Lumina AI Drive 4.5x ROAS.",
    body: "Traditional marketing takes weeks of guesswork. Lumina autonomous AI generates high-converting ad copy, tests 20+ audience variants per second, and scales your winning campaigns automatically.",
    ctr: "4.8% Predicted CTR (Top 1% Benchmark)"
  },
  urgent: {
    headline: "Your Competitors Are Already Using AI Marketing. Don't Get Left Behind.",
    body: "Scale customer acquisition today with Lumina. Claim your 30-day free trial and experience self-optimizing multi-channel ad campaigns in under 60 seconds.",
    ctr: "5.4% Predicted CTR (High Urgency)"
  },
  professional: {
    headline: "Enterprise Growth Intelligence Engineered for Modern Revenue Teams.",
    body: "Unify your marketing data, automate cross-channel execution, and leverage predictive CLTV models to maximize return on ad spend with zero operational friction.",
    ctr: "3.9% Predicted CTR (Enterprise Target)"
  },
  casual: {
    headline: "Marketing on autopilot? Yeah, it's actually real now.",
    body: "Say goodbye to endless spreadsheet tracking and manual ad tweaks. Lumina handles the heavy lifting so you can focus on building products people love.",
    ctr: "4.2% Predicted CTR (High Engagement)"
  }
};

function initCopywritingPlayground() {
  const toneSelect = document.getElementById('copyToneSelect');
  const genBtn = document.getElementById('genCopyBtn');
  const resHeadline = document.getElementById('resHeadline');
  const resBody = document.getElementById('resBody');
  const resCtr = document.getElementById('resCtr');
  const copyBtn = document.getElementById('copyToClipboardBtn');

  if (!genBtn) return;

  genBtn.addEventListener('click', () => {
    const tone = toneSelect ? toneSelect.value : 'persuasive';
    const variant = COPY_VARIATIONS[tone] || COPY_VARIATIONS.persuasive;

    genBtn.disabled = true;
    genBtn.textContent = 'Generating Copy...';

    setTimeout(() => {
      if (resHeadline) resHeadline.textContent = variant.headline;
      if (resBody) resBody.textContent = variant.body;
      if (resCtr) resCtr.textContent = variant.ctr;

      genBtn.disabled = false;
      genBtn.textContent = '✨ Generate High-Converting Copy';
    }, 600);
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = `${resHeadline ? resHeadline.textContent : ''}\n\n${resBody ? resBody.textContent : ''}`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => copyBtn.textContent = originalText, 2000);
      });
    });
  }
}

/* --------------------------------------------------------------------------
   4. INTERACTIVE LIVE ROI & REVENUE CALCULATOR
   -------------------------------------------------------------------------- */
function initRoiCalculator() {
  const spendSlider = document.getElementById('calcSpend');
  const convSlider = document.getElementById('calcConv');
  const teamSlider = document.getElementById('calcTeam');

  const spendVal = document.getElementById('valSpend');
  const convVal = document.getElementById('valConv');
  const teamVal = document.getElementById('valTeam');

  const outAddRev = document.getElementById('outAddRev');
  const outSavedHours = document.getElementById('outSavedHours');
  const outRoasMultiplier = document.getElementById('outRoasMultiplier');

  if (!spendSlider) return;

  function updateCalculator() {
    const spend = parseFloat(spendSlider.value);
    const conv = parseFloat(convSlider.value);
    const team = parseInt(teamSlider.value);

    // Update Slider Displays
    if (spendVal) spendVal.textContent = `$${spend.toLocaleString()}/mo`;
    if (convVal) convVal.textContent = `${conv}%`;
    if (teamVal) teamVal.textContent = `${team} Marketer${team > 1 ? 's' : ''}`;

    // Formulas for projection
    // Lumina boosts baseline conversion by ~3.4x average and optimizes ad spend efficiency by 40%
    const monthlyRevBoost = Math.round(spend * 3.4 * (1 + conv / 100));
    const annualRevBoost = monthlyRevBoost * 12;
    const hoursSavedPerWeek = team * 14; // 14 hours saved per marketer per week
    const roasMultiplier = (3.2 + (conv * 0.25)).toFixed(1);

    if (outAddRev) outAddRev.textContent = `+$${annualRevBoost.toLocaleString()}/yr`;
    if (outSavedHours) outSavedHours.textContent = `${hoursSavedPerWeek} hrs/wk`;
    if (outRoasMultiplier) outRoasMultiplier.textContent = `${roasMultiplier}x`;
  }

  [spendSlider, convSlider, teamSlider].forEach(slider => {
    if (slider) slider.addEventListener('input', updateCalculator);
  });

  updateCalculator();
}

/* --------------------------------------------------------------------------
   5. TESTIMONIALS & CASE STUDIES FILTER
   -------------------------------------------------------------------------- */
function initTestimonialsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.testimonial-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. PRICING BILLING SWITCH & CURRENCY
   -------------------------------------------------------------------------- */
function initPricingToggle() {
  const toggle = document.getElementById('pricingToggle');
  const priceStarter = document.getElementById('priceStarter');
  const priceGrowth = document.getElementById('priceGrowth');
  const periodTexts = document.querySelectorAll('.price-period');

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    const isAnnual = toggle.classList.contains('active');

    if (priceStarter && priceGrowth) {
      if (isAnnual) {
        priceStarter.textContent = '$39';
        priceGrowth.textContent = '$119';
        periodTexts.forEach(p => p.textContent = '/ month (billed annually)');
        showToast('🎉 20% Annual Discount Applied!');
      } else {
        priceStarter.textContent = '$49';
        priceGrowth.textContent = '$149';
        periodTexts.forEach(p => p.textContent = '/ month');
      }
    }
  });
}

/* --------------------------------------------------------------------------
   7. INTERACTIVE FAQ ACCORDION WITH SEARCH
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  const searchInput = document.getElementById('faqSearch');

  items.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(term)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
}

/* --------------------------------------------------------------------------
   8. MULTI-STEP DEMO BOOKING MODAL
   -------------------------------------------------------------------------- */
function initDemoModal() {
  const modalOverlay = document.getElementById('demoModal');
  const openBtns = document.querySelectorAll('.open-demo-modal');
  const closeBtn = document.getElementById('closeModalBtn');
  const step1 = document.getElementById('modalStep1');
  const step2 = document.getElementById('modalStep2');
  const nextBtn = document.getElementById('modalNextBtn');
  const submitBtn = document.getElementById('modalSubmitBtn');

  if (!modalOverlay) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });

  if (nextBtn && step1 && step2) {
    nextBtn.addEventListener('click', () => {
      const emailInput = document.getElementById('modalEmail');
      if (emailInput && !emailInput.value.trim()) {
        alert('Please enter your work email address to proceed.');
        return;
      }
      step1.style.display = 'none';
      step2.style.display = 'block';
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Booking Demo...';

      setTimeout(() => {
        alert('🎉 Success! Your VIP Lumina Demo & Free Growth Audit has been scheduled. Check your email inbox for calendar invite details.');
        modalOverlay.classList.remove('active');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Confirm Demo Booking';
        if (step1 && step2) {
          step1.style.display = 'block';
          step2.style.display = 'none';
        }
      }, 800);
    });
  }
}

/* --------------------------------------------------------------------------
   9. SOCIAL PROOF TOAST ENGINE
   -------------------------------------------------------------------------- */
const SOCIAL_PROOF_MESSAGES = [
  '⚡ TechFlow scaled ROAS by 4.2x using Lumina AI',
  '🔥 Apex Media just generated 12,000 ad variants in 2 minutes',
  '⭐ Sarah K. from SaaSify booked a VIP Lumina Demo',
  '🚀 CloudScale decreased CPA from $38 to $9.20 with Lumina',
  '✨ NexaCorp switched from manual ads to Lumina Autonomous campaigns'
];

function initSocialProofToasts() {
  let index = 0;
  setInterval(() => {
    showToast(SOCIAL_PROOF_MESSAGES[index]);
    index = (index + 1) % SOCIAL_PROOF_MESSAGES.length;
  }, 16000);
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

/* --------------------------------------------------------------------------
   10. LEAD FORM HANDLERS
   -------------------------------------------------------------------------- */
function initLeadForms() {
  const ctaForm = document.getElementById('ctaForm');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = ctaForm.querySelector('input');
      if (input && input.value.trim()) {
        showToast(`🎉 Welcome aboard! Free trial instructions sent to ${input.value}`);
        input.value = '';
      }
    });
  }
}
