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
        },{id: "news-1st-place-at-shanghai-ai-lab-dimtaic-2023",
          title: '1st Place at Shanghai AI Lab DIMTAIC 2023.',
          description: "",
          section: "News",},{id: "news-honored-to-attend-the-2023-health-china-sinan-summit-as-an-invited-participant",
          title: 'Honored to attend the 2023 Health China Sinan Summit as an invited participant....',
          description: "",
          section: "News",},{id: "news-awarded-national-level-status-in-china-college-students-innovation-and-entrepreneurship-program",
          title: 'Awarded National-Level status in China College Students Innovation and Entrepreneurship Program.',
          description: "",
          section: "News",},{id: "news-software-copyright-officially-registered-with-the-national-copyright-administration-of-china-ncac",
          title: 'Software Copyright officially registered with the National Copyright Administration of China (NCAC).',
          description: "",
          section: "News",},{id: "news-national-6th-place-in-the-china-college-student-computer-design-competition-4c-1st-prize-in-the-shanghai-collegiate-application-technology-competition",
          title: 'National 6th Place in the China College Student Computer Design Competition (4C); 1st...',
          description: "",
          section: "News",},{id: "projects-disentangled-alpha-representation",
          title: 'Disentangled Alpha Representation',
          description: "Multi-branch Encoders framework for diverse alpha clusters.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MFA.html";
            },},{id: "projects-multimodal-detection",
          title: 'Multimodal Detection',
          description: "A collaborative project with CMU on multimodal deepfake detection and biometric authentication.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MM.html";
            },},{id: "projects-vpe-segmentation",
          title: 'VPE Segmentation',
          description: "1st Place @ Shanghai AI Lab DIMTAIC 2023 Segmentation CompetitionInvited Participant at the 2023 Health China Sinan Summit.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/VPE.html";
            },},{id: "projects-cervical-cell-detection",
          title: 'Cervical Cell Detection',
          description: "National-Level project in the Undergraduate Innovation and Entrepreneurship Program.Domain-adaptive cervical cell detection &amp; medical RAG.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/detection.html";
            },},{id: "projects-edu-platform",
          title: 'Edu Platform',
          description: "National Second Prize, Chinese Collegiate Computing Competition (4C); AI-powered educational system with Text2SQL &amp; RAG.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/edu.html";
            },},{id: "projects-ai4-commercial-aerospace",
          title: 'AI4 Commercial Aerospace',
          description: "Research on satellite AI application, including large Visual-Language Model and various Computer Vision tasks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/satellite.html";
            },},{id: "projects-manifold-stepping-alpha",
          title: 'Manifold Stepping Alpha',
          description: "Research on cross-asset dependency and  the score-based gradient field of market latent space via Diffusion.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tsld.html";
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
