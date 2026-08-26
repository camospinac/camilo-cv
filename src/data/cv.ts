const cvData = {
  es: {
    profile: {
      name: "Camilo Antonio Ospina Cruz",
      username: "camospinac",
      location: "Bogotá D.C, Colombia",
      role: "Software Developer",
      summary: "Soy desarrollador con más de 4 años de experiencia en software empresarial, enfocado actualmente a estructurar bien antes de construir. Tambien me obsesiona el performance. Hace poco lideré una API para reportes en Go que redujo el tiempo de consultas de 10+ minutos a menos de 10 segundos, procesando streams de más de 500k registros. También me apasiona la automatización, he desarrollado herramientas internas que eliminaron tareas manuales repetitivas que mejoraron la calidad documental de mi equipo. Trabajo principalmente con Python, SQL, Go y Java, además de plataformas low-code como GeneXus para software legacy.",
      ascii: `
   ____                _ _       
  / ___|__ _ _ __ ___ (_) | ___  
 | |   / _\` | '_ \` _ \\| | |/ _ \\ 
 | |__| (_| | | | | | | | | (_) |
  \\____\\__,_|_| |_| |_|_|_|\\___/ 
      `
    },
    experience: [
      {
        role: "Software Developer",
        company: "Link2Know — Software & Consultoría",
        location: "Remoto",
        duration: "Mayo 2022 — Actualidad",
        description: [
          "Lideré el diseño y construcción de una API para generación de dashboards empresariales, procesando grandes volúmenes de datos y entregando insights de valor a clientes.",
          "Diseñé y desarrollé una API de reportes en Go usando streams de datos, reduciendo el tiempo de consultas de más de 10 minutos a menos de 10 segundos, procesando más de 500k registros sin fallos por consumo de memoria.",
          "Optimicé consultas SQL/PostgreSQL mediante mejora de índices y reestructuración de queries, reduciendo tiempos de ejecución de 5+ minutos a segundos.",
          "Lideré el desarrollo completo (diseño, construcción y liberación) del módulo de auditoría del aplicativo principal de la empresa."
        ]
      }
    ],
    projects: [
      {
        name: "Invitación Web Boda",
        description: "Sitio web interactivo y de diseño responsivo para invitación de boda. Cuenta con animaciones avanzadas con GSAP, CSS personalizado, generación de eventos para calendario, módulo de confirmación de asistencia (RSVP) e integración con Supabase.",
        tech: ["JavaScript", "GSAP", "CSS3", "HTML5", "Supabase"],
        github: "https://github.com/camospinac/robertlauraboda",
        deploy: "https://robertylaura.com/"
      },
      {
        name: "reCAPTCHA Solver",
        description: "Script de automatización para omitir reCAPTCHA v2 mediante análisis de voz. Intercepta la prueba de audio, procesa el archivo de sonido con PyDub y transcribe el contenido usando SpeechRecognition para completar la verificación de forma autónoma.",
        tech: ["Python", "Selenium", "Requests", "PyDub", "SpeechRecognition"],
        github: "https://github.com/camospinac/bypasseador",
        deploy: "https://medium.com/@camospinac/c%C3%B3mo-resolver-un-recaptcha-con-python-y-selenium-e1f86f014910"
      },
      {
        name: "US Visa Appointment Rescheduler",
        description: "Bot de automatización diseñado para monitorear y reagendar citas de visa de forma autónoma. Examina continuamente la disponibilidad del calendario oficial, gestiona las sesiones de usuario y envía notificaciones por correo electrónico.",
        tech: ["Python", "Selenium", "SMTP", "Batch"],
        github: "https://github.com/camospinac/reschedulervisa",
        deploy: "https://medium.com/@camospinac/automatizaci%C3%B3n-para-el-reagendamiento-de-solicitud-de-citas-de-visa-8dd598730226"
      },
      {
        name: "Pentaho PDI + Python Integration",
        description: "Guía técnica y caso de estudio sobre cómo extender los flujos ETL de Pentaho Data Integration ejecutando lógica de Python. Detalla la configuración paso a paso para automatización y transformación avanzada de datos.",
        tech: ["Pentaho PDI", "Python", "ETL"],
        article: "https://medium.com/@camospinac/integrando-pentaho-data-integration-con-python-e55b4529f67f"
      },
      {
        name: "Meta WhatsApp API + Laravel Integration",
        description: "Guía técnica sobre la integración de la API oficial de WhatsApp Cloud con Laravel para el envío de mensajes transaccionales. Basada en la solución de un proyecto real en producción.",
        tech: ["Laravel", "PHP", "Meta API", "WhatsApp Cloud API", "REST API"],
        article: "https://medium.com/@camospinac/envio-de-mensaje-de-whatsapps-con-laravel-y-la-api-oficial-de-meta-59652ea423b8"
      },
    ],
    stack: {
      languages: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Go"],
      backend: ["Node.js", "Spring Boot", "Apache Tomcat"],
      frontend: ["HTML", "CSS", "Vue.js", "GSAP"],
      databases: ["PostgreSQL", "SQL Server", "Oracle", "Supabase"],
      tools: ["Git", "Postman", "Linux", "Pandas", "Playwright", "GeneXus", "n8n"],
    },
    education: [
      {
        institution: "Corporación Universitaria Iberoamericana",
        degree: "Ingeniería de Software (Modalidad Virtual)",
        status: "En curso"
      }
    ],
    contact: {
      email: "camospinac@outlook.com",
      github: "https://github.com/camospinac",
      linkedin: "https://www.linkedin.com/in/camospinac/"
    },
    ui: {
      welcome: "Bienvenido a Camilo Workspace.",
      typeHelp: "Escribe help para ver los comandos disponibles.",
      notFound: "zsh: command not found:",
      internalError: "Error interno al ejecutar el comando.",
      helpTitle: "Comandos disponibles:",
      helpTip: "Tip: También puedes hacer clic en los botones inferiores para ejecutar comandos rápidamente.",
      osLabel: "OS:",
      hostLabel: "Host:",
      roleLabel: "Role:",
      expLabel: "Experience:",
      locLabel: "Location:",
      descLabel: "Description",
      stackLabel: "Stack",
      linksLabel: "Links",
      degreeLabel: "Degree:",
      statusLabel: "Status:",
      commLink: "Communications Link",
      downloadBtn: "wget Camilo_Ospina_CV.pdf",
      cmdDescriptions: {
        about: "Quién soy, en resumen.",
        experience: "Mi paso por el mundo laboral.",
        education: "Lo que estudié.",
        projects: "Proyectos que he armado.",
        stack: "Lo que uso para programar.",
        contact: "Hablemos — o baja mi CV.",
        help: "Lista de comandos."
      }
    }
  },
  en: {
    profile: {
      name: "Camilo Antonio Ospina Cruz",
      username: "camospinac",
      location: "Bogotá D.C, Colombia",
      role: "Software Developer",
      summary: "I’m a software developer with +4 years of enterprise software experience, currently focused on proper structuring before building. I’m obsessed with performance, recently, I led a reporting API in Go that slashed query times from 10+ minutes to under 10 seconds while processing streams of 500k+ records. I’m also passionate about automation, having built internal tools that eliminated repetitive manual work and improved my team's documentation quality. My core stack includes Python, SQL, Go, and Java, alongside low-code platforms like GeneXus for legacy software systems.",
      ascii: `
   ____                _ _       
  / ___|__ _ _ __ ___ (_) | ___  
 | |   / _\` | '_ \` _ \\| | |/ _ \\ 
 | |__| (_| | | | | | | | | (_) |
  \\____\\__,_|_| |_| |_|_|_|\\___/ 
      `
    },
    experience: [
      {
        role: "Software Developer",
        company: "Link2Know — Software & Consultoría",
        location: "Remote",
        duration: "May 2022 — Now",
        description: [
          "Led the design and development of an API for enterprise dashboards, processing large data volumes to deliver high-value insights to clients.",
          "Designed and engineered a Go-based reporting API using data streams, slashing query times from 10+ minutes to under 10 seconds while processing 500k+ records without memory failures.",
          "Optimized SQL/PostgreSQL performance through index tuning and query restructuring, reducing execution times from 5+ minutes to seconds.",
          "Led the full software lifecycle (design, build, and release) of the audit module for the company's core application."
        ]
      }
    ],
    projects: [
      {
        name: "Web Wedding Invitation",
        description: "Interactive and fully responsive wedding invitation website. Features smooth animations powered by GSAP, custom CSS styling, calendar event generation, RSVP attendance confirmation, and Supabase integration.",
        tech: ["JavaScript", "GSAP", "CSS3", "HTML5", "Supabase"],
        github: "https://github.com/camospinac/robertlauraboda",
        deploy: "https://robertylaura.com/"
      },
      {
        name: "reCAPTCHA Solver",
        description: "Automated web solution built to bypass Google reCAPTCHA v2 challenges via voice recognition. It intercepts audio payloads, converts audio streams with PyDub, and transcribes spoken text using SpeechRecognition for autonomous verification.",
        tech: ["Python", "Selenium", "Requests", "PyDub", "SpeechRecognition"],
        github: "https://github.com/camospinac/bypasseador",
        deploy: "https://medium.com/@camospinac/how-to-solve-a-recaptcha-with-python-and-selenium-44a2e18839f0"
      },
      {
        name: "US Visa Appointment Rescheduler",
        description: "Automated bot designed to continuously monitor and reschedule US visa appointments. Features real-time calendar tracking, session persistence, and instant email notifications.",
        tech: ["Python", "Selenium", "SMTP", "Batch"],
        github: "https://github.com/camospinac/reschedulervisa",
        deploy: "https://medium.com/@camospinac/automation-for-eescheduling-visa-appointment-requests-f54b1b9c2de9"
      },
      {
        name: "Pentaho PDI + Python Integration",
        description: "Technical guide and case study on extending Pentaho Data Integration (PDI) ETL workflows by executing custom Python logic. Covers step-by-step setup for advanced data transformation and workflow automation.",
        tech: ["Pentaho PDI", "Python", "ETL"],
        deploy: "https://medium.com/@camospinac/integrating-pentaho-data-integration-with-python-95c453aa7540"
      },
      {
        name: "Meta WhatsApp API + Laravel Integration",
        description: "Technical guide detailing the integration of Meta's official WhatsApp Cloud API with Laravel for transactional messaging. Developed from a production-grade client implementation.",
        tech: ["Laravel", "PHP", "Meta API", "WhatsApp Cloud API", "REST API"],
        article: "https://medium.com/@camospinac/envio-de-mensaje-de-whatsapps-con-laravel-y-la-api-oficial-de-meta-59652ea423b8"
      },
    ],
    stack: {
      languages: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Go"],
      backend: ["Node.js", "Spring Boot", "Apache Tomcat"],
      frontend: ["HTML", "CSS", "Vue.js", "GSAP"],
      databases: ["PostgreSQL", "SQL Server", "Oracle", "Supabase"],
      tools: ["Git", "Postman", "Linux", "Pandas", "Playwright", "GeneXus", "n8n"],
    },
    education: [
      {
        institution: "Corporación Universitaria Iberoamericana",
        degree: "Software Engineering (Virtual Program)",
        status: "In progress"
      }
    ],
    contact: {
      email: "camospinac@outlook.com",
      github: "https://github.com/camospinac",
      linkedin: "https://www.linkedin.com/in/camospinac/"
    },
    ui: {
      welcome: "Welcome to Camilo Workspace.",
      typeHelp: "Type help to see available commands.",
      notFound: "zsh: command not found:",
      internalError: "Internal error executing command.",
      helpTitle: "Available commands:",
      helpTip: "Tip: You can also click the buttons below to run commands quickly.",
      osLabel: "OS:",
      hostLabel: "Host:",
      roleLabel: "Role:",
      expLabel: "Experience:",
      locLabel: "Location:",
      descLabel: "Description",
      stackLabel: "Stack",
      linksLabel: "Links",
      degreeLabel: "Degree:",
      statusLabel: "Status:",
      commLink: "Communications Link",
      downloadBtn: "wget Camilo_Ospina_CV.pdf",
      cmdDescriptions: {
        about: "Who I am, in short.",
        experience: "My time in the working world.",
        education: "What I studied.",
        projects: "Stuff I've built.",
        stack: "What I use to code.",
        contact: "Let's talk — or grab my resume.",
        help: "List of commands."
      }
    }
  }
};

let currentLang: 'es' | 'en' = 'es';
if (typeof window !== 'undefined') {
  currentLang = (localStorage.getItem('devos_lang') as 'es' | 'en') || 'es';
}

export const setLang = (lang: 'es' | 'en') => {
  currentLang = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('devos_lang', lang);
  }
};

export const getLang = () => currentLang;
export const getCv = () => cvData[currentLang];