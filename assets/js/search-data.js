// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-honored-to-win-1st-place-in-model-metrics-at-the-digital-medical-technology-and-application-innovation-competition-dimtaic-2023-hosted-by-shanghai-ai-lab",
          title: 'Honored to win 1st Place in Model Metrics at the Digital Medical Technology...',
          description: "",
          section: "News",},{id: "news-honored-to-attend-the-2023-health-china-sinan-summit-as-an-invited-participant",
          title: 'Honored to attend the 2023 Health China Sinan Summit as an invited participant....',
          description: "",
          section: "News",},{id: "news-won-first-prize-in-the-shanghai-collegiate-application-technology-competition-enterprise-cooperation-track",
          title: 'Won First Prize in the Shanghai Collegiate Application Technology Competition (Enterprise Cooperation Track)....',
          description: "",
          section: "News",},{id: "news-the-automatic-annotation-system-for-cervical-liquid-based-pathology-images-project-i-led-was-awarded-national-level-status-in-china-college-students-innovation-and-entrepreneurship-competition",
          title: 'The “Automatic Annotation System for Cervical Liquid-based Pathology Images” project I led was...',
          description: "",
          section: "News",},{id: "news-received-national-6th-place-in-the-china-college-student-computer-design-competition-4c",
          title: 'Received National 6th Place in the China College Student Computer Design Competition (4C)...',
          description: "",
          section: "News",},{id: "projects-mf-agents",
          title: 'MF Agents',
          description: "A novel multi-agent framework for quantitative trading.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MFA.html";
            },},{id: "projects-multimodal-detection",
          title: 'Multimodal Detection',
          description: "A collaborative project with CMU on multimodal deepfake detection and biometric authentication",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MM.html";
            },},{id: "projects-vpe-seg",
          title: 'VPE Seg',
          description: "First-place solution in a national AI medical competition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/VPE.html";
            },},{id: "projects-cell-detection",
          title: 'Cell Detection',
          description: "Domain-adaptive and deformable convolution-based cervical cell detection with medical LLM fine-tuning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/detection.html";
            },},{id: "projects-edu-platform",
          title: 'Edu Platform',
          description: "AI-powered educational system with Text2SQL &amp; RAG &amp; Chatbot",
          section: "Projects",handler: () => {
              window.location.href = "/projects/edu.html";
            },},{id: "projects-satellite",
          title: 'Satellite',
          description: "Research on satellite AI application",
          section: "Projects",handler: () => {
              window.location.href = "/projects/satellite.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%65%6E%67.%63%68%65%6E%32%35@%69%6D%70%65%72%69%61%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ChefsSalad", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/cheng-chen-45bb72385", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
