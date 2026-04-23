// --- 1. 双语切换系统 ---
let currentLang = 'en';
const elementsWithI18n = document.querySelectorAll('[data-i18n]');

const translations = {
    en: {
        top_promo: "Special Offer: Comprehensive life plans customized for your needs in Malaysia.",
        nav_home: "Home", nav_expertise: "Expertise", nav_contact: "Contact", nav_btn: "Get Free Quote",
        hero_title: "Securing Your Future, Family, and Peace of Mind",
        hero_subtitle: "We provide comprehensive, tailored insurance solutions to protect your health, assets, and loved ones in Malaysia.",
        btn_whatsapp: "Consult Now", btn_explore: "Explore Plans",
        service_title: "Company Expertise",
        srv_health_title: "Comprehensive Health Care",
        srv_health_desc: "Covering medical expenses, hospital stays, surgical treatments, and critical illness. Ensure your health is always prioritized without financial burden.",
        srv_life_title: "Life & Family Planning",
        srv_life_desc: "Provide a financial safety net for your family against life's unexpected events. We help you create robust plans to protect your loved ones' future.",
        srv_wealth_title: "Wealth Accumulation & Legacy",
        srv_wealth_desc: "Leverage strategic savings, investment-linked plans, and legacy transfer strategies. Grow and protect your wealth across generations in Malaysia.",
        trust_title: "Trusted by Loving Families Everyday",
        trust_desc: "Data-driven insights, professional objectivity, and a commitment to transparency form the core of my personalized advising in Puchong and surrounding Selangor.",
        
        quote_title: "Get a quote in just a few clicks!",
        label_fullname: "Full Name",
        label_gender: "Select your gender",
        opt_female: "Female", opt_male: "Male",
        label_dob: "Date of birth",
        label_smoker: "Are you a smoker?",
        opt_no: "No", opt_yes: "Yes",
        label_employed: "Are you employed?",
        label_income: "Annual income",
        opt_select_income: "Select an annual income",
        btn_get_quote: "GET MY QUOTE",
        
        footer_desc: "Objective, professional, and personalized insurance advice you can trust. Let's secure your future together in Malaysia.",
        footer_copyright: "© 2026 Dhayon. All Rights Reserved."
    },
    zh: {
        top_promo: "限时优惠：为您在马来西亚量身定制的全面人寿与保障计划。",
        nav_home: "首页", nav_expertise: "核心服务", nav_contact: "联系我们", nav_btn: "获取免费规划",
        hero_title: "您的未来，您的家庭，您的安心",
        hero_subtitle: "我们提供全面的、量身定制的保险方案，保障您在马来西亚的健康、资产及挚爱之人。",
        btn_whatsapp: "免费咨询", btn_explore: "浏览计划",
        service_title: "核心业务领域",
        srv_health_title: "全面医疗保障",
        srv_health_desc: "涵盖医疗费用、住院及重大疾病，确保您在需要时获得最优质的治疗与照顾，免除财务后顾之忧。",
        srv_life_title: "人寿与家庭规划",
        srv_life_desc: "为您的家庭提供坚实的财务后盾。我们协助您制定稳健的计划，守护您挚爱家人的未来。",
        srv_wealth_title: "退休与财富传承",
        srv_wealth_desc: "利用稳健储蓄、投资连结计划与财富传承策略。在马来西亚规划您的理想退休生活并确保爱与责任延续。",
        trust_title: "值得每一位家人每日信赖",
        trust_desc: "基于数据分析的洞见、专业的客观态度，以及对透明度的承诺，构成了我在 Puchong 和 Selangor 的个性化咨询服务。",
        
        quote_title: "简单几步，获取您的专属报价！",
        label_fullname: "您的全名",
        label_gender: "您的性别",
        opt_female: "女性", opt_male: "男性",
        label_dob: "出生日期",
        label_smoker: "您是否吸烟？",
        opt_no: "否", opt_yes: "是",
        label_employed: "您目前有全职工作吗？",
        label_income: "个人年收入",
        opt_select_income: "请选择年收入范围",
        btn_get_quote: "立即获取报价",

        footer_desc: "值得信赖的客观、专业且个性化的咨询。让我们一起保障您在马来西亚的未来。",
        footer_copyright: "© 2026 Dhayon. 保留所有权利。"
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    
    const langBtns = document.querySelectorAll('.lang-toggle');
    langBtns.forEach(btn => {
        btn.innerText = currentLang === 'en' ? '中 / EN' : 'EN / 中';
    });

    elementsWithI18n.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => { revealOnScroll.observe(el); });

    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.03)';
        }
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            });
        });
    }

    const whatsappForm = document.getElementById('whatsappForm');
    
    if(whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const fullName = document.getElementById('fullName').value; 
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const dob = document.getElementById('dob').value;
            const smoker = document.querySelector('input[name="smoker"]:checked').value;
            const employed = document.querySelector('input[name="employed"]:checked').value;
            const income = document.getElementById('income').value;

            let whatsappMessage = "";

            if (currentLang === 'zh') {
                const genderZh = gender === 'Female' ? '女性' : '男性';
                const smokerZh = smoker === 'Yes' ? '是' : '否';
                const employedZh = employed === 'Yes' ? '是' : '否';

                whatsappMessage += `你好，我是通过 dhayon.com 来的。我想获取专属的保险规划评估，这是我的基本资料：\n\n`;
                whatsappMessage += `*姓名:* ${fullName}\n`;
                whatsappMessage += `*性别:* ${genderZh}\n`;
                whatsappMessage += `*出生日期:* ${dob}\n`;
                whatsappMessage += `*是否吸烟:* ${smokerZh}\n`;
                whatsappMessage += `*是否就业:* ${employedZh}\n`;
                whatsappMessage += `*年收入:* ${income}\n\n`;
                whatsappMessage += `期待您的专业建议，谢谢！`;
            } else {
                whatsappMessage += `Hi, I am reaching out from dhayon.com. I would like to get a personalized insurance quote. Here are my details:\n\n`;
                whatsappMessage += `*Name:* ${fullName}\n`;
                whatsappMessage += `*Gender:* ${gender}\n`;
                whatsappMessage += `*Date of Birth:* ${dob}\n`;
                whatsappMessage += `*Smoker:* ${smoker}\n`;
                whatsappMessage += `*Employed:* ${employed}\n`;
                whatsappMessage += `*Annual Income:* ${income}\n\n`;
                whatsappMessage += `Looking forward to your professional advice. Thank you!`;
            }

            // 【重要：记得在这里换成你的真实号码，例如 60123456789】
            const phoneNumber = "60162389836"; 
            
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});