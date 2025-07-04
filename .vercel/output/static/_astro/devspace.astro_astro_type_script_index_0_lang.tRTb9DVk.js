class c{observer;constructor(){this.observer=new IntersectionObserver(this.handleIntersection.bind(this),{threshold:.1,rootMargin:"0px 0px -50px 0px"}),this.init()}handleIntersection(e){e.forEach(o=>{const n=o.target;o.isIntersecting&&n.classList.add("animate-in")})}init(){document.querySelectorAll(".tool-card, .workshop-card, .pricing-card, .section-header").forEach(o=>{o.classList.add("animate-on-scroll"),this.observer.observe(o)})}}class l{tools;activeCategory="all";constructor(){this.tools=document.querySelectorAll(".tool-card"),this.init()}init(){this.createFilterButtons()}createFilterButtons(){const e=document.querySelector(".tools-section .section-header");if(!e)return;const o=document.createElement("div");o.className="filter-container",o.style.cssText=`
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 24px;
        flex-wrap: wrap;
      `;const n=["all","frontend","backend","mobile","devops","design"],t={all:"Todas",frontend:"Frontend",backend:"Backend",mobile:"Mobile",devops:"DevOps",design:"Diseño"};n.forEach(a=>{const s=document.createElement("button");s.textContent=t[a],s.className=`filter-btn ${a==="all"?"active":""}`,s.style.cssText=`
          background: ${a==="all"?"var(--devspace-primary)":"var(--cuarahi-glass)"};
          color: ${a==="all"?"#1a1a2e":"white"};
          border: 1px solid ${a==="all"?"var(--devspace-primary)":"var(--cuarahi-glass-border)"};
          border-radius: 25px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: ${a==="all"?"600":"500"};
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        `,s.addEventListener("click",()=>this.filterTools(a)),s.addEventListener("mouseenter",()=>{s.classList.contains("active")||(s.style.background="var(--cuarahi-glass-hover)")}),s.addEventListener("mouseleave",()=>{s.classList.contains("active")||(s.style.background="var(--cuarahi-glass)")}),o.appendChild(s)}),e.appendChild(o)}filterTools(e){this.activeCategory=e,document.querySelectorAll(".filter-btn").forEach(o=>{const n=o,t=n.textContent===this.getCategoryLabel(e);n.classList.toggle("active",t),n.style.background=t?"var(--devspace-primary)":"var(--cuarahi-glass)",n.style.borderColor=t?"var(--devspace-primary)":"var(--cuarahi-glass-border)",n.style.color=t?"#1a1a2e":"white",n.style.fontWeight=t?"600":"500"}),this.tools.forEach(o=>{const n=o,t=n.dataset.category,a=e==="all"||t===e;n.style.transform=a?"scale(1)":"scale(0.8)",n.style.opacity=a?"1":"0.3",n.style.pointerEvents=a?"auto":"none"})}getCategoryLabel(e){return{all:"Todas",frontend:"Frontend",backend:"Backend",mobile:"Mobile",devops:"DevOps",design:"Diseño"}[e]}}class d{async handle(e){console.log("DevSpace registration:",Object.fromEntries(e)),this.showSuccessMessage()}showSuccessMessage(){const e=document.createElement("div");e.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--devspace-warm-gradient);
        color: #1a1a2e;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 30px var(--devspace-glow);
        z-index: 1000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
      `,e.textContent="¡Bienvenido a la comunidad DevSpace! 🎉",document.body.appendChild(e),setTimeout(()=>{e.remove()},4e3)}}document.addEventListener("DOMContentLoaded",()=>{new c,new l;const r=new d;document.querySelectorAll(".cta-primary, .workshop-cta, .join-btn").forEach(t=>{t.addEventListener("click",async a=>{a.preventDefault();const s=new FormData;s.append("action","join_community"),s.append("space","devspace"),await r.handle(s)})}),document.addEventListener("keydown",t=>{t.key==="Tab"&&document.body.classList.add("keyboard-navigation")}),document.addEventListener("mousedown",()=>{document.body.classList.remove("keyboard-navigation")});const e=document.querySelectorAll(".stat-item"),o=new IntersectionObserver(t=>{t.forEach((a,s)=>{a.isIntersecting&&setTimeout(()=>{a.target.classList.add("animate-in")},s*150)})},{threshold:.1});e.forEach(t=>{t.classList.add("animate-on-scroll"),o.observe(t)}),document.querySelectorAll(".member-card").forEach((t,a)=>{t.style.animationDelay=`${a*100}ms`,t.classList.add("member-reveal")})});const i=document.createElement("style");i.textContent=`
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes memberReveal {
      from {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    .member-reveal {
      animation: memberReveal 0.6s ease forwards;
      opacity: 0;
    }
    
    .keyboard-navigation button:focus,
    .keyboard-navigation .tool-card:focus,
    .keyboard-navigation .workshop-card:focus,
    .keyboard-navigation .benefit-card:focus,
    .keyboard-navigation .member-card:focus {
      outline: 2px solid var(--devspace-primary);
      outline-offset: 2px;
    }
    
    /* Responsive adjustments for community sections */
    @media (max-width: 768px) {
      .benefits-grid {
        grid-template-columns: 1fr;
      }
      
      .community-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
      
      .members-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
      
      .join-community-cta {
        padding: 32px 20px;
      }
      
      .join-title {
        font-size: 24px;
      }
      
      .stat-number {
        font-size: 28px;
      }
    }
    
    @media (max-width: 480px) {
      .community-stats {
        grid-template-columns: 1fr;
      }
      
      .members-grid {
        grid-template-columns: 1fr;
      }
      
      .benefit-card {
        min-height: 180px;
      }
      
      .member-card {
        padding: 24px 16px;
      }
      
      .member-avatar {
        font-size: 36px;
      }
    }
  `;document.head.appendChild(i);
