const body = document.body;
const languageToggle = document.getElementById("language-toggle");
const themeToggle = document.getElementById("theme-toggle");
const projectsGrid = document.getElementById("projects-grid");
const projectModal = document.getElementById("project-modal");
const modalCloseButtons = projectModal?.querySelectorAll("[data-close-modal]") || [];
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const bootScreen = document.querySelector(".boot-screen");
const rail = document.getElementById("section-rail");
const sideNav = document.querySelector(".side-nav");
const navToggle = document.querySelector("[data-nav-toggle]");
const translations = {
    es: {
        "theme.dark": "Oscuro",
        "theme.light": "Claro",
        "nav.home": "Inicio",
        "nav.about": "Sobre Mí",
        "nav.experience": "Experiencia",
        "nav.skills": "Soft Skills",
        "nav.languages": "Idiomas",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",
        "home.title": "Desarrollador Full Stack",
        "home.description":
            "Full Stack graduado en DAW. Especializado en experiencias digitales modernas y funcionales.",
        "home.cta": "Ver proyectos",
        "home.ctaAlt": "Contactar",
        "home.frontend": "Frontend",
        "home.backend": "Backend",
        "home.databases": "Bases de Datos",
        "home.fullstack": "Full Stack",
        "home.frontend.desc": "HTML5 · CSS3 · React · Figma",
        "home.backend.desc": "Java · JavaScript · Node.js · MongoDB",
        "home.databases.desc": "MongoDB · PostgreSQL",
        "home.fullstack.desc": "React · Node.js · Java · Docker",
        "about.title": "Víctor Manuel Ridao Chaves",
        "about.subtitle": "Sobre Mí",
        "about.p1":
            "Desarrollador Full Stack graduado en Desarrollo de Aplicaciones Web (DAW). Especializado en crear experiencias digitales modernas y funcionales.",            
        "about.p2":
            "Dominio completo de tecnologías frontend (HTML5, CSS3, React, TypeScript) y backend (Java, JavaScript y Node.js, MongoDB). Enfocado en código limpio, arquitecturas escalables e interfaces intuitivas.",
        "about.p3":
            "Experiencia desarrollando proyectos de e-commerce, APIs RESTful, dashboards de análisis y sistemas de gestión empresarial.",
        "about.stack": "Stack Tecnológico",
        "experience.title": "Experiencia",
        "experience.subtitle": "Trayectoria profesional y formativa",
        "experience.job1.title": "Prácticas DAW",
        "experience.job1.company": "Instituto Tecnológico Superior ADA",
        "experience.job1.period": "2024 - 2026",
        "experience.job1.desc":
            "Desarrollo de proyectos web durante el ciclo formativo. Trabajo en equipo y metodologías ágiles.",
        "experience.job2.title": "Desarrollador Frontend",
        "experience.job2.company": "Startup Digital",
        "experience.job2.period": "2024 - Actualidad",
        "experience.job2.desc":
            "Desarrollo de interfaces modernas y accesibles con foco en diseño y prototipado.",
        "experience.job3.title": "Desarrollador Backend",
        "experience.job3.company": "Agencia Web",
        "experience.job3.period": "2024 - Actualidad",
        "experience.job3.desc":
            "Desarrollo de servicios y APIs para aplicaciones web y gestión de datos.",
        "skills.title": "Soft Skills",
        "skills.subtitle": "Habilidades interpersonales y de gestión",
        "skills.teamwork": "Trabajo en Equipo",
        "skills.problemSolving": "Resolución de Problemas",
        "skills.communication": "Comunicación Efectiva",
        "skills.adaptability": "Adaptabilidad",
        "skills.criticalThinking": "Pensamiento Crítico",
        "skills.timeManagement": "Gestión del Tiempo",
        "skills.creativity": "Creatividad",
        "skills.leadership": "Liderazgo",
        "languages.title": "Idiomas",
        "languages.subtitle": "Competencias lingüísticas",
        "languages.spanish": "Español",
        "languages.english": "Inglés",
        "languages.french": "Francés",
        "languages.native": "Nativo",
        "languages.advanced": "Avanzado",
        "languages.basic": "Básico",
        "projects.title": "Proyectos Destacados",
        "projects.subtitle": "Selección de trabajos realizados",
        "projects.viewProject": "Ver proyecto",
        "projects.viewCode": "Ver código",
        "projects.viewDetails": "Ver detalles",
        "contact.title": "Contacto",
        "contact.subtitle": "Tienes un proyecto en mente? Hablemos",
        "contact.name": "Nombre",
        "contact.email": "Email",
        "contact.message": "Mensaje",
        "contact.send": "Enviar Mensaje",
        "form.required": "Requerido",
        "form.sent": "Mensaje enviado. Gracias por tu contacto.",
        "form.error": "No se pudo enviar el mensaje. Intenta de nuevo.",
    },
    en: {
        "theme.dark": "Dark",
        "theme.light": "Light",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.skills": "Soft Skills",
        "nav.languages": "Languages",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "home.title": "Full Stack Developer",
        "home.description":
            "Full Stack DAW graduate. Focused on modern, functional digital experiences.",
        "home.cta": "View projects",
        "home.ctaAlt": "Get in touch",
        "home.frontend": "Frontend",
        "home.backend": "Backend",
        "home.databases": "Databases",
        "home.fullstack": "Full Stack",
        "home.frontend.desc": "HTML5 · CSS3 · React · Figma",
        "home.backend.desc": "Java · JavaScript · Node.js · MongoDB",
        "home.databases.desc": "MongoDB · PostgreSQL",
        "home.fullstack.desc": "React · Node.js · Java · Docker",
        "about.title": "Víctor Manuel Ridao Chaves",
        "about.subtitle": "About Me",
        "about.p1":
            "Full Stack Developer graduated in Web Application Development (DAW). Specialized in creating modern and functional digital experiences.",
        "about.p2":
            "Mastery of frontend technologies (React, Vue, TypeScript) and backend (Node.js, Express, databases). Focused on clean code, scalable architectures, and intuitive interfaces.",
        "about.p3":
            "Experience delivering e-commerce projects, RESTful APIs, analytics dashboards, and business management systems.",
        "about.stack": "Tech Stack",
        "experience.title": "Experience",
        "experience.subtitle": "Professional and educational journey",
        "experience.job1.title": "Full Stack Developer",
        "experience.job1.company": "Tech Company",
        "experience.job1.period": "2024 - 2026",
        "experience.job1.desc":
            "Web application development with React, Node.js, and PostgreSQL. Implementation of RESTful APIs and scalable architectures.",
        "experience.job2.title": "Frontend Developer",
        "experience.job2.company": "Digital Startup",
        "experience.job2.period": "2024 - Present",
        "experience.job2.desc":
            "Built modern, accessible interfaces with a focus on design and prototyping.",
        "experience.job3.title": "Backend Developer",
        "experience.job3.company": "Web Agency",
        "experience.job3.period": "2024 - Present",
        "experience.job3.desc":
            "Built services and APIs for web applications and data management.",
        "skills.title": "Soft Skills",
        "skills.subtitle": "Interpersonal and management skills",
        "skills.teamwork": "Teamwork",
        "skills.problemSolving": "Problem Solving",
        "skills.communication": "Effective Communication",
        "skills.adaptability": "Adaptability",
        "skills.criticalThinking": "Critical Thinking",
        "skills.timeManagement": "Time Management",
        "skills.creativity": "Creativity",
        "skills.leadership": "Leadership",
        "languages.title": "Languages",
        "languages.subtitle": "Language skills",
        "languages.spanish": "Spanish",
        "languages.english": "English",
        "languages.french": "French",
        "languages.native": "Native",
        "languages.advanced": "Advanced",
        "languages.basic": "Basic",
        "projects.title": "Featured Projects",
        "projects.subtitle": "Selection of completed work",
        "projects.viewProject": "View project",
        "projects.viewCode": "View code",
        "projects.viewDetails": "View details",
        "contact.title": "Contact",
        "contact.subtitle": "Have a project in mind? Let's talk",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.message": "Message",
        "contact.send": "Send Message",
        "form.required": "Required",
        "form.sent": "Message sent. Thanks for reaching out.",
        "form.error": "Message could not be sent. Try again.",
    },
};

let currentLanguage = localStorage.getItem("language") || "es";
let currentTheme = localStorage.getItem("theme") || "dark";
let projectCache = [];
const localProjects = [
    {
        id: 1,
        title: "Videojuego MoonScorch",
        description:
            "Proyecto de videojuego por turnos creado exclusivamente con Java y usando Eclipse como plataforma de desarrollo.",
        tags: ["Java", "Eclipse"],
        imageUrl: null,
        link: "https://github.com/victormanuel-98/MOONSCORCH2",
        isFeatured: false,
    },
    {
        id: 2,
        title: "Proyecto de Gestor de Notas",
        description:
            "Proyecto de implementación de un gestor de notas con funcionalidades de gestión de ficheros y una API REST documentada mediante OpenAPI (Swagger).",
        tags: ["Node.js", "JavaScript", "Postman"],
        imageUrl: null,
        link: "https://github.com/victormanuel-98/VMRC-DWES/tree/main/t1/ej23-api-documentation/ejercicios/trabajoextra",
        isFeatured: false,
    },
    {
        id: 3,
        title: "App web 'Bioshock'",
        description:
            "Una aplicación web que permite explorar, reproducir y guardar audiodiarios de los videojuegos de la saga Bioshock.",
        tags: ["React", "Vite", "Node.js", "JavaScript", "Mongoose"],
        imageUrl: null,
        link: "https://github.com/victormanuel-98/2-DAW/tree/main/despliegue/t2/tareaDespliegue",
        isFeatured: false,
    },
    {
        id: 4,
        title: "App web con MAUI",
        description:
            "Aplicación .NET MAUI (net9.0) que consume la API pública de SWAPI y muestra personajes, naves y planetas, con un historial local de búsquedas.",
        tags: ["Node.js", "Docker", "JavaScript", "Azure"],
        imageUrl: null,
        link: "https://github.com/victormanuel-98/2-DAW/tree/main/despliegue/t1/MauiAppDAW",
        isFeatured: false,
    },
    {
        id: 5,
        title: "Web RetroBox",
        description: "Web creada como parte de poryecto final para Lenguaje de Marcas.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        imageUrl: null,
        link: "https://github.com/victormanuel-98/1-DAW/tree/main/lenguajemarcas/t3/RETROBOX",
        isFeatured: false,
    },
    {
        id: 6,
        title: "Proyecto FitFood",
        description: "Aplicación web fullstack para crear, gestionar y descubrir recetas saludables.",
        tags: ["Node.js", "MongoDB", "Cloudinary", "CORS", "Bcrypt"],
        imageUrl: null,
        link: "https://github.com/victormanuel-98/VMRC-PI-BACK/tree/main/t2/RidaoChavesVictorManuel-PI-FRONT-SPRINT9",
        isFeatured: false,
    },
];

function applyTranslations() {
    const dict = translations[currentLanguage] || translations.es;
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (!key || !dict[key]) return;
        el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (!key || !dict[key]) return;
        el.setAttribute("placeholder", dict[key]);
    });
    if (languageToggle) {
        languageToggle.querySelector(".mono").textContent = currentLanguage.toUpperCase();
    }
    if (themeToggle) {
        const label = themeToggle.querySelector("[data-i18n='theme.label']");
        if (label) {
            const key = currentTheme === "dark" ? "theme.dark" : "theme.light";
            label.textContent = dict[key] || label.textContent;
        }
    }

    if (projectCache.length) {
        renderProjects(projectCache);
    }
}

function applyTheme() {
    body.setAttribute("data-theme", currentTheme);
    if (themeToggle) {
        const label = themeToggle.querySelector("[data-i18n='theme.label']");
        if (label) {
            const key = currentTheme === "dark" ? "theme.dark" : "theme.light";
            label.textContent = (translations[currentLanguage] || translations.es)[key] || label.textContent;
        }
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    localStorage.setItem("language", currentLanguage);
    applyTranslations();
}

function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", currentTheme);
    applyTheme();
}

function initNavigation() {
    if (!rail) return;

    if (sideNav && navToggle) {
        navToggle.addEventListener("click", () => {
            const isOpen = sideNav.classList.toggle("is-open");
            navToggle.classList.toggle("is-open", isOpen);
            navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
    }

    const flowOrder = ["home", "about", "experience", "skills", "languages", "projects", "contact"];
    const originalSections = Array.from(rail.querySelectorAll("[data-section]"));
    const baseIds = flowOrder.filter((id) => originalSections.some((section) => section.id === id));
    const baseCount = baseIds.length;

    if (!rail.dataset.cloned) {
        originalSections.forEach((section) => {
            section.dataset.baseIndex = String(baseIds.indexOf(section.id));
        });

        const beforeFragment = document.createDocumentFragment();
        const afterFragment = document.createDocumentFragment();

        originalSections.forEach((section) => {
            const cloneBefore = section.cloneNode(true);
            const cloneAfter = section.cloneNode(true);
            cloneBefore.dataset.clone = "true";
            cloneAfter.dataset.clone = "true";
            cloneBefore.dataset.baseIndex = section.dataset.baseIndex;
            cloneAfter.dataset.baseIndex = section.dataset.baseIndex;
            beforeFragment.appendChild(cloneBefore);
            afterFragment.appendChild(cloneAfter);
        });

        rail.prepend(beforeFragment);
        rail.append(afterFragment);
        rail.dataset.cloned = "true";
    }

    const sections = Array.from(rail.querySelectorAll("[data-section]"));
    const buttons = document.querySelectorAll("[data-target]");

    let viewportWidth = window.innerWidth;
    let loopWidth = baseCount * viewportWidth;
    let targetX = -loopWidth;
    let currentX = -loopWidth;
    let currentIndex = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartOffset = 0;
    let lastWheelTime = 0;
    const wheelCooldown = 260;
    const dragThresholdRatio = 0.18;

    const normalizeOffset = () => {
        const lower = -2 * loopWidth;
        const upper = -loopWidth;
        if (currentX < lower + viewportWidth * 0.5) {
            currentX += loopWidth;
            targetX += loopWidth;
        }
        if (currentX > upper + viewportWidth * 0.5) {
            currentX -= loopWidth;
            targetX -= loopWidth;
        }
    };

    const resolveTarget = (index, direction) => {
        const baseTarget = -index * viewportWidth;
        const delta = ((baseTarget - currentX + loopWidth / 2) % loopWidth) - loopWidth / 2;
        let target = currentX + delta;

        if (direction > 0 && target > currentX) {
            target -= loopWidth;
        }
        if (direction < 0 && target < currentX) {
            target += loopWidth;
        }

        return target;
    };

    const syncActive = () => {
        const activeId = baseIds[currentIndex] || baseIds[0];
        document.querySelectorAll(".side-nav__item").forEach((item) => {
            item.classList.toggle("is-active", item.getAttribute("data-target") === activeId);
        });

        sections.forEach((section, i) => {
            const offset = (i * viewportWidth + currentX) / viewportWidth;
            const tilt = Math.max(-32, Math.min(32, offset * -24));
            const scale = 1 - Math.min(Math.abs(offset) * 0.18, 0.45);
            const depth = Math.max(0, 160 - Math.abs(offset) * 240);
            const blur = Math.min(Math.abs(offset) * 2.4, 5.4);
            const fade = 1 - Math.min(Math.abs(offset) * 0.32, 0.7);
            section.style.setProperty("--tilt", `${tilt}deg`);
            section.style.setProperty("--scale", scale.toFixed(3));
            section.style.setProperty("--depth", `${depth}px`);
            section.style.setProperty("--blur", `${blur}px`);
            section.style.setProperty("--fade", fade.toFixed(3));
        });
    };

    const animate = () => {
        currentX += (targetX - currentX) * 0.12;
        if (Math.abs(targetX - currentX) < 0.5) {
            currentX = targetX;
        }
        normalizeOffset();
        rail.style.transform = `translateX(${currentX}px)`;
        syncActive();
        requestAnimationFrame(animate);
    };

    const navigateTo = (index, direction = 0) => {
        currentIndex = (index + baseCount) % baseCount;
        targetX = resolveTarget(currentIndex, direction);
    };

    const navigateStep = (direction) => {
        if (direction === 0) return;
        const nextIndex = (currentIndex + direction + baseCount) % baseCount;
        navigateTo(nextIndex, direction);
    };

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");
            const index = baseIds.indexOf(target || "");
            if (index >= 0) {
                navigateTo(index, 0);
            }
        });
    });

    document.querySelectorAll("a[href^='#']").forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href")?.slice(1) || "";
            const index = baseIds.indexOf(targetId);
            if (index >= 0) {
                event.preventDefault();
                navigateTo(index, 0);
            }
        });
    });

    const onWheel = (event) => {
        event.preventDefault();
        const now = Date.now();
        if (now - lastWheelTime < wheelCooldown) return;
        lastWheelTime = now;
        const delta = event.deltaY || event.deltaX;
        navigateStep(delta > 0 ? 1 : -1);
    };

    rail.addEventListener("wheel", onWheel, { passive: false });

    rail.addEventListener("pointerdown", (event) => {
        if (event.target.closest("a, button, input, textarea, select, .project-card")) {
            return;
        }
        isDragging = true;
        dragStartX = event.clientX;
        dragStartOffset = targetX;
        rail.setPointerCapture(event.pointerId);
    });

    rail.addEventListener("pointermove", (event) => {
        if (!isDragging) return;
        const delta = event.clientX - dragStartX;
        targetX = dragStartOffset + delta;
    });

    rail.addEventListener("pointerup", () => {
        if (!isDragging) return;
        isDragging = false;
        const delta = targetX - dragStartOffset;
        const threshold = viewportWidth * dragThresholdRatio;
        if (Math.abs(delta) >= threshold) {
            navigateStep(delta < 0 ? 1 : -1);
        } else {
            navigateTo(currentIndex, 0);
        }
    });

    window.addEventListener("resize", () => {
        viewportWidth = window.innerWidth;
        loopWidth = baseCount * viewportWidth;
        targetX = resolveTarget(currentIndex, 0);
        currentX = targetX;
    });

    animate();
}

function initBootScreen() {
    if (!bootScreen) return;

    const hideBoot = () => {
        bootScreen.classList.add("is-hidden");
        body.classList.remove("boot-locked");
    };

    body.classList.add("boot-locked");
    const timer = window.setTimeout(hideBoot, 5000);

    const clickHandler = () => {
        window.clearTimeout(timer);
        hideBoot();
    };

    bootScreen.addEventListener("click", clickHandler, { once: true });
    window.addEventListener(
        "keydown",
        () => {
            window.clearTimeout(timer);
            hideBoot();
        },
        { once: true }
    );
}

function initReveal() {
    const revealTargets = document.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        { threshold: 0.2 }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
}

function normalizeTags(project) {
    if (Array.isArray(project.tags)) return project.tags;
    if (typeof project.technologies === "string") {
        return project.technologies.split(",").map((item) => item.trim());
    }
    return [];
}

function renderProjects(projects) {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = "";

    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";
        const projectLink = typeof project.link === "string" ? project.link.trim() : "";
        const description = project.description ? project.description.slice(0, 120) : "";

        card.innerHTML = `
      <p class="eyebrow">${translations[currentLanguage]["projects.viewDetails"]}</p>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${description}</p>
            <div class="project-meta">
                <div class="project-tags"></div>
            </div>
    `;
        const tags = normalizeTags(project);
        const tagsEl = card.querySelector(".project-tags");
        tags.slice(0, 4).forEach((tag) => {
            const span = document.createElement("span");
            span.className = "pill";
            span.textContent = tag;
            tagsEl.appendChild(span);
        });
        card.addEventListener("click", () => {
            if (projectLink) {
                window.open(projectLink, "_blank", "noopener");
                return;
            }
            openProjectModal(project);
        });
        projectsGrid.appendChild(card);
    });
}

function openProjectModal(project) {
    if (!projectModal) return;
    const title = projectModal.querySelector("[data-modal='title']");
    const subtitle = projectModal.querySelector("[data-modal='subtitle']");
    const description = projectModal.querySelector("[data-modal='description']");
    const tagsContainer = projectModal.querySelector("[data-modal='tags']");
    const link = projectModal.querySelector("[data-modal='link']");
    const code = projectModal.querySelector("[data-modal='code']");

    if (title) title.textContent = project.title || "Project";
    if (subtitle) subtitle.textContent = translations[currentLanguage]["projects.viewDetails"];
    if (description) description.textContent = project.description || "";
    if (tagsContainer) {
        tagsContainer.innerHTML = "";
        normalizeTags(project).forEach((tag) => {
            const span = document.createElement("span");
            span.className = "pill";
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });
    }

    const linkValue = project.link || "#";
    if (link) link.setAttribute("href", linkValue);
    if (code) code.setAttribute("href", project.link || "https://github.com");

    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");
}

function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove("is-open");
    projectModal.setAttribute("aria-hidden", "true");
}

function initModal() {
    modalCloseButtons.forEach((button) => button.addEventListener("click", closeProjectModal));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeProjectModal();
    });
}

function loadProjects() {
    projectCache = localProjects;
    renderProjects(projectCache);
}

function setFieldError(fieldName, message) {
    const field = form?.querySelector(`[data-error='${fieldName}']`);
    if (field) field.textContent = message || "";
}

async function handleFormSubmit(event) {
    event.preventDefault();
    if (!form) return;

    const formData = new FormData(form);
    const payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        content: String(formData.get("content") || "").trim(),
    };

    let hasError = false;
    ["name", "email", "content"].forEach((field) => setFieldError(field, ""));

    const requiredMessage = (translations[currentLanguage] || translations.es)["form.required"] || "Required";

    if (!payload.name) {
        setFieldError("name", requiredMessage);
        hasError = true;
    }
    if (!payload.email) {
        setFieldError("email", requiredMessage);
        hasError = true;
    }
    if (!payload.content) {
        setFieldError("content", requiredMessage);
        hasError = true;
    }

    if (hasError) return;

    formStatus.textContent = translations[currentLanguage]["form.sent"];
    form.reset();
}

function initForm() {
    if (!form) return;
    form.addEventListener("submit", handleFormSubmit);
}

function initBackground() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;
    let lastFrame = performance.now();

    const speed = 0.0004;
    const waveCount = 4;
    const waveSpacing = 58;
    const baseAmp = 64;
    const flowOffset = 180;
    const particles = [];

    const getPalette = () => {
        if (body.getAttribute("data-theme") === "dark") {
            return {
                bgTop: "#000000",
                bgBottom: "#000000",
                line: "rgba(170, 255, 215, 0.55)",
                glow: "rgba(150, 255, 220, 0.75)",
                haze: "rgba(120, 200, 170, 0.03)",
                spark: "rgba(170, 255, 220, 0.6)",
            };
        }
        return {
            bgTop: "#e6f3ed",
            bgBottom: "#cbded2",
            line: "rgba(78, 160, 130, 0.3)",
            glow: "rgba(78, 160, 130, 0.24)",
            haze: "rgba(78, 160, 130, 0.07)",
            spark: "rgba(78, 160, 130, 0.32)",
        };
    };

    const resize = () => {
        const dpr = window.devicePixelRatio || 1;
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seedParticles = () => {
        particles.length = 0;
        const count = Math.floor(width * height * 0.00014);
        for (let i = 0; i < count; i += 1) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2.0 + 0.6,
                speed: Math.random() * 0.08 + 0.03,
                alpha: Math.random() * 0.45 + 0.2,
            });
        }
    };

    const drawWaves = (palette) => {
        ctx.clearRect(0, 0, width, height);

        const background = ctx.createLinearGradient(0, 0, 0, height);
        background.addColorStop(0, palette.bgTop);
        background.addColorStop(1, palette.bgBottom);
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, width, height);

        const centerY = height * 0.5;
        for (let i = 0; i < waveCount; i += 1) {
            const offset = (i - (waveCount - 1) / 2) * waveSpacing;
            const phase = time * 0.95 + i * 0.8;
            const amp = baseAmp - i * 8;
            const glowAmp = amp * 0.45;
            const thickness = 2 - i * 1.2;

            const topPath = [];
            const bottomPath = [];

            for (let x = -flowOffset; x <= width + flowOffset; x += 16) {
                const wave = Math.sin(x * 0.0048 + phase) + Math.cos(x * 0.0022 - phase * 1.02);
                const lift = Math.sin((x + time * 880) * 0.0012) * glowAmp;
                const y = centerY + offset + wave * amp + lift;
                topPath.push({ x, y: y - thickness });
                bottomPath.push({ x, y: y + thickness });
            }

            ctx.beginPath();
            topPath.forEach((p, index) => {
                if (index === 0) {
                    ctx.moveTo(p.x, p.y);
                } else {
                    ctx.lineTo(p.x, p.y);
                }
            });
            for (let j = bottomPath.length - 1; j >= 0; j -= 1) {
                const p = bottomPath[j];
                ctx.lineTo(p.x, p.y);
            }
            ctx.closePath();

            ctx.fillStyle = palette.line;
            ctx.shadowColor = palette.glow;
            ctx.shadowBlur = 42;
            ctx.fill();

            ctx.strokeStyle = "rgba(210, 255, 235, 0.32)";
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        ctx.shadowBlur = 0;
        ctx.fillStyle = palette.haze;
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = palette.spark;
        particles.forEach((p) => {
            p.x += p.speed;
            if (p.x > width + 10) p.x = -10;
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
    };

    const animate = (now) => {
        const delta = Math.min(48, now - lastFrame);
        lastFrame = now;
        time += delta * speed;
        drawWaves(getPalette());
        requestAnimationFrame(animate);
    };

    resize();
    seedParticles();
    requestAnimationFrame(animate);

    window.addEventListener("resize", () => {
        resize();
        seedParticles();
    });
}

if (languageToggle) languageToggle.addEventListener("click", toggleLanguage);
if (themeToggle) themeToggle.addEventListener("click", toggleTheme);

applyTranslations();
applyTheme();
initBootScreen();
initNavigation();
initReveal();
initModal();
initForm();
initBackground();
loadProjects();
